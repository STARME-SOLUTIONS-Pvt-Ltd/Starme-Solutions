import { useEffect, useRef, useState } from "react";

const CursorTrail = () => {
  const circlesRef = useRef<HTMLDivElement[]>([]);
  const coords = useRef({ x: 0, y: 0 });
  const prevCoords = useRef({ x: 0, y: 0 });
  const [isMoving, setIsMoving] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isHoveringInteractive, setIsHoveringInteractive] = useState(false);
  const [velocity, setVelocity] = useState(0);
  const moveTimeoutRef = useRef<NodeJS.Timeout>();
  const velocityRef = useRef(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device is mobile/touch
    const checkMobile = () => {
      const mobile = window.matchMedia("(pointer: coarse)").matches || 
                     window.matchMedia("(max-width: 768px)").matches;
      setIsMobile(mobile);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);

    const circles = circlesRef.current;

    circles.forEach((circle) => {
      if (!circle) return;
      (circle as any).x = 0;
      (circle as any).y = 0;
    });

    const handleMouseMove = (e: MouseEvent) => {
      // Calculate velocity
      const dx = e.clientX - prevCoords.current.x;
      const dy = e.clientY - prevCoords.current.y;
      const speed = Math.sqrt(dx * dx + dy * dy);
      
      velocityRef.current = Math.min(speed / 8, 4);
      setVelocity(velocityRef.current);
      
      prevCoords.current.x = coords.current.x;
      prevCoords.current.y = coords.current.y;
      coords.current.x = e.clientX;
      coords.current.y = e.clientY;

      setIsMoving(true);
      
      if (moveTimeoutRef.current) {
        clearTimeout(moveTimeoutRef.current);
      }
      
      moveTimeoutRef.current = setTimeout(() => {
        setIsMoving(false);
        setVelocity(0);
      }, 150);

      // Check if hovering over interactive elements
      const target = e.target as HTMLElement;
      const isInteractive = 
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.closest('button') !== null ||
        target.closest('a') !== null ||
        target.classList.contains('cursor-pointer') ||
        window.getComputedStyle(target).cursor === 'pointer';
      
      setIsHoveringInteractive(isInteractive);
    };

    const handleMouseDown = () => {
      setIsClicking(true);
    };

    const handleMouseUp = () => {
      setIsClicking(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("resize", checkMobile);

    const animateCircles = () => {
      let x = coords.current.x;
      let y = coords.current.y;

      circles.forEach((circle, index) => {
        if (!circle) return;

        circle.style.left = x - 10 + "px";
        circle.style.top = y - 10 + "px";
        
        const scale = (circles.length - index) / circles.length;
        circle.style.transform = `scale(${scale})`;

        (circle as any).x = x;
        (circle as any).y = y;

        const nextCircle = circles[index + 1] || circles[0];
        x += (((nextCircle as any).x || 0) - x) * 0.3;
        y += (((nextCircle as any).y || 0) - y) * 0.3;
      });

      requestAnimationFrame(animateCircles);
    };

    animateCircles();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("resize", checkMobile);
      if (moveTimeoutRef.current) {
        clearTimeout(moveTimeoutRef.current);
      }
    };
  }, []);

  // Don't render on mobile devices
  if (isMobile) {
    return null;
  }

  // Calculate crosshair line length
  const baseLineLength = 10;
  const maxLineLength = 140;
  const currentLineLength = isClicking 
    ? maxLineLength 
    : isHoveringInteractive 
    ? 60
    : baseLineLength + (velocity * 25);

  return (
    <>
      {/* Main cursor - vintage square design with shadow */}
      <div
        ref={(el) => {
          if (el) circlesRef.current[0] = el;
        }}
        className={`fixed w-5 h-5 pointer-events-none z-[9999] transition-all duration-150 ${
          isMoving ? 'opacity-100' : 'opacity-80'
        } ${isClicking ? 'scale-125' : isHoveringInteractive ? 'scale-150' : 'scale-100'}`}
        style={{
          mixBlendMode: 'difference',
        }}
      >
        {/* Shadow/glow effect */}
        <div className={`absolute inset-0 blur-md ${
          isClicking ? 'bg-stone-100/60' : 'bg-stone-100/30'
        } transition-all duration-200`}></div>
        
        {/* Outer square border - stone theme */}
        <div className={`absolute inset-0 border-2 bg-transparent transition-all duration-200 ${
          isClicking ? 'rotate-45 border-stone-100' : isHoveringInteractive ? 'border-amber-900/80' : 'border-stone-100'
        }`} style={{
          borderStyle: isHoveringInteractive ? 'double' : 'solid',
        }}></div>
        
        {/* Inner filled square - vintage style */}
        <div className={`absolute inset-[3px] transition-all duration-200 ${
          isClicking ? 'bg-stone-100' : isHoveringInteractive ? 'bg-amber-900/60' : 'bg-stone-100/90'
        }`}></div>
        
        {/* Corner accent brackets - vintage tech style */}
        <div className={`absolute -top-[6px] -left-[6px] w-3 h-3 border-l-[3px] border-t-[3px] transition-all duration-200 ${
          isClicking ? 'scale-150 -translate-x-1 -translate-y-1 border-stone-100' : isHoveringInteractive ? 'border-amber-900/80' : 'border-stone-100'
        }`}></div>
        <div className={`absolute -top-[6px] -right-[6px] w-3 h-3 border-r-[3px] border-t-[3px] transition-all duration-200 ${
          isClicking ? 'scale-150 translate-x-1 -translate-y-1 border-stone-100' : isHoveringInteractive ? 'border-amber-900/80' : 'border-stone-100'
        }`}></div>
        <div className={`absolute -bottom-[6px] -left-[6px] w-3 h-3 border-l-[3px] border-b-[3px] transition-all duration-200 ${
          isClicking ? 'scale-150 -translate-x-1 translate-y-1 border-stone-100' : isHoveringInteractive ? 'border-amber-900/80' : 'border-stone-100'
        }`}></div>
        <div className={`absolute -bottom-[6px] -right-[6px] w-3 h-3 border-r-[3px] border-b-[3px] transition-all duration-200 ${
          isClicking ? 'scale-150 translate-x-1 translate-y-1 border-stone-100' : isHoveringInteractive ? 'border-amber-900/80' : 'border-stone-100'
        }`}></div>

        {/* Center dot indicator */}
        <div className={`absolute top-1/2 left-1/2 w-1 h-1 -translate-x-1/2 -translate-y-1/2 transition-all duration-200 ${
          isClicking ? 'bg-stone-800 scale-150' : isHoveringInteractive ? 'bg-amber-900' : 'bg-stone-800'
        }`}></div>
      </div>

      {/* Trail elements - vintage square particles */}
      {Array.from({ length: 14 }).map((_, i) => (
        <div
          key={i + 1}
          ref={(el) => {
            if (el) circlesRef.current[i + 1] = el;
          }}
          className="fixed w-5 h-5 pointer-events-none z-[9998] transition-opacity duration-300"
          style={{
            opacity: isMoving 
              ? (1 - (i + 1) / 15) * 0.6 
              : (1 - (i + 1) / 15) * 0.25,
            mixBlendMode: 'difference',
          }}
        >
          {/* Rotating bordered squares */}
          <div 
            className={`absolute inset-0 bg-transparent transition-all duration-150 ${
              isHoveringInteractive ? 'border-amber-900/60' : 'border-stone-100/80'
            }`}
            style={{
              borderWidth: i < 3 ? '2px' : i < 7 ? '1.5px' : '1px',
              transform: `rotate(${i * 4}deg)`,
            }}
          ></div>
          
          {/* Small center dots for depth */}
          {i % 3 === 0 && (
            <div className="absolute top-1/2 left-1/2 w-[2px] h-[2px] bg-stone-100 -translate-x-1/2 -translate-y-1/2"></div>
          )}
        </div>
      ))}

      {/* Dynamic crosshair lines - vintage technical style */}
      <div
        className="fixed pointer-events-none z-[9997] transition-all duration-150"
        style={{
          left: `${coords.current.x}px`,
          top: `${coords.current.y}px`,
          transform: 'translate(-50%, -50%)',
          mixBlendMode: 'difference',
        }}
      >
        {/* Horizontal line */}
        <div 
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-200 ${
            isHoveringInteractive ? 'bg-amber-900/80 h-[3px]' : 'bg-stone-100 h-[2px]'
          }`}
          style={{
            width: `${currentLineLength}px`,
            boxShadow: isClicking 
              ? '0 0 12px rgba(245, 245, 244, 0.9), 0 0 20px rgba(245, 245, 244, 0.5)' 
              : isHoveringInteractive 
              ? '0 0 8px rgba(120, 53, 15, 0.6)'
              : 'none',
          }}
        >
          {/* Technical end caps with notches */}
          <div className={`absolute -left-[2px] top-1/2 -translate-y-1/2 w-[4px] h-[8px] transition-colors duration-200 ${
            isHoveringInteractive ? 'bg-amber-900/80' : 'bg-stone-100'
          }`}>
            <div className={`absolute top-0 left-0 w-full h-[2px] ${
              isHoveringInteractive ? 'bg-amber-900' : 'bg-stone-800'
            }`}></div>
            <div className={`absolute bottom-0 left-0 w-full h-[2px] ${
              isHoveringInteractive ? 'bg-amber-900' : 'bg-stone-800'
            }`}></div>
          </div>
          <div className={`absolute -right-[2px] top-1/2 -translate-y-1/2 w-[4px] h-[8px] transition-colors duration-200 ${
            isHoveringInteractive ? 'bg-amber-900/80' : 'bg-stone-100'
          }`}>
            <div className={`absolute top-0 left-0 w-full h-[2px] ${
              isHoveringInteractive ? 'bg-amber-900' : 'bg-stone-800'
            }`}></div>
            <div className={`absolute bottom-0 left-0 w-full h-[2px] ${
              isHoveringInteractive ? 'bg-amber-900' : 'bg-stone-800'
            }`}></div>
          </div>
        </div>
        
        {/* Vertical line */}
        <div 
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-200 ${
            isHoveringInteractive ? 'bg-amber-900/80 w-[3px]' : 'bg-stone-100 w-[2px]'
          }`}
          style={{
            height: `${currentLineLength}px`,
            boxShadow: isClicking 
              ? '0 0 12px rgba(245, 245, 244, 0.9), 0 0 20px rgba(245, 245, 244, 0.5)' 
              : isHoveringInteractive 
              ? '0 0 8px rgba(120, 53, 15, 0.6)'
              : 'none',
          }}
        >
          {/* Technical end caps with notches */}
          <div className={`absolute -top-[2px] left-1/2 -translate-x-1/2 w-[8px] h-[4px] transition-colors duration-200 ${
            isHoveringInteractive ? 'bg-amber-900/80' : 'bg-stone-100'
          }`}>
            <div className={`absolute top-0 left-0 w-[2px] h-full ${
              isHoveringInteractive ? 'bg-amber-900' : 'bg-stone-800'
            }`}></div>
            <div className={`absolute top-0 right-0 w-[2px] h-full ${
              isHoveringInteractive ? 'bg-amber-900' : 'bg-stone-800'
            }`}></div>
          </div>
          <div className={`absolute -bottom-[2px] left-1/2 -translate-x-1/2 w-[8px] h-[4px] transition-colors duration-200 ${
            isHoveringInteractive ? 'bg-amber-900/80' : 'bg-stone-100'
          }`}>
            <div className={`absolute top-0 left-0 w-[2px] h-full ${
              isHoveringInteractive ? 'bg-amber-900' : 'bg-stone-800'
            }`}></div>
            <div className={`absolute top-0 right-0 w-[2px] h-full ${
              isHoveringInteractive ? 'bg-amber-900' : 'bg-stone-800'
            }`}></div>
          </div>
        </div>
      </div>

      {/* Outer square frame - vintage targeting system */}
      <div
        className={`fixed pointer-events-none z-[9996] transition-all duration-300 ${
          isMoving || isClicking || isHoveringInteractive ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          left: `${coords.current.x}px`,
          top: `${coords.current.y}px`,
          transform: 'translate(-50%, -50%)',
          width: isHoveringInteractive ? '80px' : `${50 + velocity * 18}px`,
          height: isHoveringInteractive ? '80px' : `${50 + velocity * 18}px`,
          mixBlendMode: 'difference',
        }}
      >
        <div className={`absolute inset-0 border-2 transition-all duration-300 ${
          isClicking ? 'rotate-45 border-stone-100' : isHoveringInteractive ? 'border-amber-900/70 border-double' : 'border-stone-100/70'
        }`}></div>
        
        {/* Corner markers - vintage technical style */}
        <div className={`absolute -top-1 -left-1 w-3 h-3 border-l-2 border-t-2 transition-colors duration-200 ${
          isHoveringInteractive ? 'border-amber-900/80' : 'border-stone-100'
        }`}></div>
        <div className={`absolute -top-1 -right-1 w-3 h-3 border-r-2 border-t-2 transition-colors duration-200 ${
          isHoveringInteractive ? 'border-amber-900/80' : 'border-stone-100'
        }`}></div>
        <div className={`absolute -bottom-1 -left-1 w-3 h-3 border-l-2 border-b-2 transition-colors duration-200 ${
          isHoveringInteractive ? 'border-amber-900/80' : 'border-stone-100'
        }`}></div>
        <div className={`absolute -bottom-1 -right-1 w-3 h-3 border-r-2 border-b-2 transition-colors duration-200 ${
          isHoveringInteractive ? 'border-amber-900/80' : 'border-stone-100'
        }`}></div>
      </div>

      {/* Vintage corner brackets - monospace technical style */}
      <div
        className={`fixed pointer-events-none z-[9995] transition-all duration-200 ${
          isMoving ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          left: `${coords.current.x}px`,
          top: `${coords.current.y}px`,
          transform: 'translate(-50%, -50%)',
          mixBlendMode: 'difference',
        }}
      >
        <div 
          className={`absolute text-xs font-bold transition-all duration-200 ${
            isHoveringInteractive ? 'text-amber-900/90' : 'text-stone-100/90'
          }`}
          style={{ 
            fontFamily: "'Courier New', monospace",
            top: `${-26 - velocity * 6}px`,
            left: `${-26 - velocity * 6}px`,
            textShadow: isHoveringInteractive ? '0 0 4px rgba(120, 53, 15, 0.5)' : 'none',
          }}
        >┌</div>
        <div 
          className={`absolute text-xs font-bold transition-all duration-200 ${
            isHoveringInteractive ? 'text-amber-900/90' : 'text-stone-100/90'
          }`}
          style={{ 
            fontFamily: "'Courier New', monospace",
            top: `${-26 - velocity * 6}px`,
            right: `${-26 - velocity * 6}px`,
            textShadow: isHoveringInteractive ? '0 0 4px rgba(120, 53, 15, 0.5)' : 'none',
          }}
        >┐</div>
        <div 
          className={`absolute text-xs font-bold transition-all duration-200 ${
            isHoveringInteractive ? 'text-amber-900/90' : 'text-stone-100/90'
          }`}
          style={{ 
            fontFamily: "'Courier New', monospace",
            bottom: `${-26 - velocity * 6}px`,
            left: `${-26 - velocity * 6}px`,
            textShadow: isHoveringInteractive ? '0 0 4px rgba(120, 53, 15, 0.5)' : 'none',
          }}
        >└</div>
        <div 
          className={`absolute text-xs font-bold transition-all duration-200 ${
            isHoveringInteractive ? 'text-amber-900/90' : 'text-stone-100/90'
          }`}
          style={{ 
            fontFamily: "'Courier New', monospace",
            bottom: `${-26 - velocity * 6}px`,
            right: `${-26 - velocity * 6}px`,
            textShadow: isHoveringInteractive ? '0 0 4px rgba(120, 53, 15, 0.5)' : 'none',
          }}
        >┘</div>
      </div>

      {/* Diagonal velocity lines - appear on fast movement */}
      <div
        className={`fixed pointer-events-none z-[9994] transition-all duration-250 ${
          velocity > 1.5 ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          left: `${coords.current.x}px`,
          top: `${coords.current.y}px`,
          transform: 'translate(-50%, -50%)',
          mixBlendMode: 'difference',
        }}
      >
        {/* X-shaped speed lines */}
        <div 
          className={`absolute bg-stone-100 transition-all duration-200`}
          style={{
            width: '2px',
            height: `${velocity * 45}px`,
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%) rotate(45deg)',
            boxShadow: '0 0 6px rgba(245, 245, 244, 0.4)',
          }}
        >
          {/* End markers */}
          <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-[6px] h-[2px] bg-stone-100"></div>
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-[6px] h-[2px] bg-stone-100"></div>
        </div>
        
        <div 
          className={`absolute bg-stone-100 transition-all duration-200`}
          style={{
            width: '2px',
            height: `${velocity * 45}px`,
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%) rotate(-45deg)',
            boxShadow: '0 0 6px rgba(245, 245, 244, 0.4)',
          }}
        >
          {/* End markers */}
          <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-[6px] h-[2px] bg-stone-100"></div>
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-[6px] h-[2px] bg-stone-100"></div>
        </div>
      </div>

      {/* Outer circular ring for high velocity - vintage radar style */}
      <div
        className={`fixed pointer-events-none z-[9993] transition-all duration-300 ${
          velocity > 2 ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          left: `${coords.current.x}px`,
          top: `${coords.current.y}px`,
          transform: 'translate(-50%, -50%)',
          width: `${70 + velocity * 20}px`,
          height: `${70 + velocity * 20}px`,
          mixBlendMode: 'difference',
        }}
      >
        <div className="absolute inset-0 border border-stone-100/50 rounded-full"></div>
        <div className="absolute inset-2 border border-stone-100/30 rounded-full"></div>
        
        {/* Radar scanning line */}
        <div 
          className="absolute top-1/2 left-1/2 w-1/2 h-[1px] bg-gradient-to-r from-stone-100 to-transparent origin-left"
          style={{
            transform: 'translate(-100%, -50%)',
            animation: 'radar-scan 2s linear infinite',
          }}
        ></div>
      </div>

      {/* Coordinates display - optional tech overlay */}
      <div
        className={`fixed pointer-events-none z-[9992] transition-all duration-200 ${
          isClicking ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          left: `${coords.current.x + 35}px`,
          top: `${coords.current.y - 35}px`,
          mixBlendMode: 'difference',
        }}
      >
        <div 
          className="text-[8px] font-mono text-stone-100 bg-stone-800/80 px-1.5 py-0.5 border border-stone-100/30 backdrop-blur-sm"
          style={{ fontFamily: "'Courier New', monospace" }}
        >
          [{Math.floor(coords.current.x)}, {Math.floor(coords.current.y)}]
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700;900&family=Inter:wght@300;400;500;600;700;800;900&display=swap');
        
        /* Hide default cursor on desktop only */
        @media (pointer: fine) and (min-width: 769px) {
          *, *::before, *::after {
            cursor: none !important;
          }
          
          a, button, input, select, textarea, [role="button"] {
            cursor: none !important;
          }
        }
        
        /* Show default cursor on mobile and tablets */
        @media (pointer: coarse), (max-width: 768px) {
          .fixed.pointer-events-none {
            display: none !important;
          }
        }

        @keyframes radar-scan {
          0% {
            transform: translate(-100%, -50%) rotate(0deg);
          }
          100% {
            transform: translate(-100%, -50%) rotate(360deg);
          }
        }
      `}</style>
    </>
  );
};

export default CursorTrail;