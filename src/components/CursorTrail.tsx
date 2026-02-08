import { useEffect, useRef, useState } from "react";

const CursorTrail = () => {
  const circlesRef = useRef<HTMLDivElement[]>([]);
  const coords = useRef({ x: 0, y: 0 });
  const prevCoords = useRef({ x: 0, y: 0 });
  const [isMoving, setIsMoving] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [velocity, setVelocity] = useState(0);
  const moveTimeoutRef = useRef<NodeJS.Timeout>();
  const velocityRef = useRef(0);

  useEffect(() => {
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
      
      velocityRef.current = Math.min(speed / 10, 3); // Cap at 3
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

    const animateCircles = () => {
      let x = coords.current.x;
      let y = coords.current.y;

      circles.forEach((circle, index) => {
        if (!circle) return;

        circle.style.left = x - 8 + "px";
        circle.style.top = y - 8 + "px";
        
        const scale = (circles.length - index) / circles.length;
        circle.style.transform = `scale(${scale})`;

        (circle as any).x = x;
        (circle as any).y = y;

        const nextCircle = circles[index + 1] || circles[0];
        x += (((nextCircle as any).x || 0) - x) * 0.25;
        y += (((nextCircle as any).y || 0) - y) * 0.25;
      });

      requestAnimationFrame(animateCircles);
    };

    animateCircles();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      if (moveTimeoutRef.current) {
        clearTimeout(moveTimeoutRef.current);
      }
    };
  }, []);

  // Calculate line length based on velocity and clicking
  const baseLineLength = 8;
  const maxLineLength = 120;
  const currentLineLength = isClicking 
    ? maxLineLength 
    : baseLineLength + (velocity * 20);

  return (
    <>
      {/* Main cursor - enhanced square design */}
      <div
        ref={(el) => {
          if (el) circlesRef.current[0] = el;
        }}
        className={`fixed w-4 h-4 pointer-events-none z-[9999] transition-all duration-100 ${
          isMoving ? 'opacity-100' : 'opacity-70'
        } ${isClicking ? 'scale-150' : 'scale-100'}`}
        style={{
          mixBlendMode: 'difference',
        }}
      >
        {/* Outer square border */}
        <div className={`absolute inset-0 border-2 border-stone-100 bg-transparent transition-all duration-200 ${
          isClicking ? 'rotate-45' : 'rotate-0'
        }`}></div>
        
        {/* Inner filled square */}
        <div className="absolute inset-1 bg-stone-100"></div>
        
        {/* Corner accents */}
        <div className={`absolute -top-1 -left-1 w-2 h-2 border-l-2 border-t-2 border-stone-100 transition-all duration-200 ${
          isClicking ? 'scale-150 -translate-x-1 -translate-y-1' : ''
        }`}></div>
        <div className={`absolute -top-1 -right-1 w-2 h-2 border-r-2 border-t-2 border-stone-100 transition-all duration-200 ${
          isClicking ? 'scale-150 translate-x-1 -translate-y-1' : ''
        }`}></div>
        <div className={`absolute -bottom-1 -left-1 w-2 h-2 border-l-2 border-b-2 border-stone-100 transition-all duration-200 ${
          isClicking ? 'scale-150 -translate-x-1 translate-y-1' : ''
        }`}></div>
        <div className={`absolute -bottom-1 -right-1 w-2 h-2 border-r-2 border-b-2 border-stone-100 transition-all duration-200 ${
          isClicking ? 'scale-150 translate-x-1 translate-y-1' : ''
        }`}></div>
      </div>

      {/* Trail elements - enhanced squares */}
      {Array.from({ length: 16 }).map((_, i) => (
        <div
          key={i + 1}
          ref={(el) => {
            if (el) circlesRef.current[i + 1] = el;
          }}
          className="fixed w-4 h-4 pointer-events-none z-[9998] transition-opacity duration-200"
          style={{
            opacity: isMoving ? (1 - (i + 1) / 17) * 0.7 : (1 - (i + 1) / 17) * 0.3,
            mixBlendMode: 'difference',
          }}
        >
          <div 
            className="absolute inset-0 border border-stone-100 bg-transparent transition-all duration-100"
            style={{
              borderWidth: i < 4 ? '2px' : '1px',
              transform: `rotate(${i * 3}deg)`,
            }}
          ></div>
        </div>
      ))}

      {/* Dynamic expanding crosshair lines */}
      <div
        className="fixed pointer-events-none z-[9997] transition-all duration-100"
        style={{
          left: `${coords.current.x}px`,
          top: `${coords.current.y}px`,
          transform: 'translate(-50%, -50%)',
          mixBlendMode: 'difference',
        }}
      >
        {/* Horizontal line - expands left and right */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[2px] bg-stone-100 transition-all duration-150"
          style={{
            width: `${currentLineLength}px`,
            boxShadow: isClicking ? '0 0 10px rgba(245, 245, 244, 0.8)' : 'none',
          }}
        >
          {/* End caps */}
          <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-2 h-[6px] bg-stone-100"></div>
          <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-2 h-[6px] bg-stone-100"></div>
        </div>
        
        {/* Vertical line - expands up and down */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[2px] bg-stone-100 transition-all duration-150"
          style={{
            height: `${currentLineLength}px`,
            boxShadow: isClicking ? '0 0 10px rgba(245, 245, 244, 0.8)' : 'none',
          }}
        >
          {/* End caps */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1 w-[6px] h-2 bg-stone-100"></div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1 w-[6px] h-2 bg-stone-100"></div>
        </div>
      </div>

      {/* Outer expanding ring based on velocity */}
      <div
        className={`fixed pointer-events-none z-[9996] transition-all duration-200 ${
          isMoving || isClicking ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          left: `${coords.current.x}px`,
          top: `${coords.current.y}px`,
          transform: 'translate(-50%, -50%)',
          width: `${40 + velocity * 15}px`,
          height: `${40 + velocity * 15}px`,
          mixBlendMode: 'difference',
        }}
      >
        <div className={`absolute inset-0 border border-stone-100 transition-all duration-200 ${
          isClicking ? 'rotate-45' : 'rotate-0'
        }`}></div>
      </div>

      {/* Corner brackets that move with velocity */}
      <div
        className={`fixed pointer-events-none z-[9995] transition-all duration-150 ${
          isMoving ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          left: `${coords.current.x}px`,
          top: `${coords.current.y}px`,
          transform: 'translate(-50%, -50%)',
          mixBlendMode: 'difference',
        }}
      >
        {/* Dynamic corner brackets */}
        <div 
          className="absolute text-stone-100 text-xs font-bold transition-all duration-150" 
          style={{ 
            fontFamily: "'Courier New', monospace",
            top: `${-20 - velocity * 5}px`,
            left: `${-20 - velocity * 5}px`,
          }}
        >╔</div>
        <div 
          className="absolute text-stone-100 text-xs font-bold transition-all duration-150" 
          style={{ 
            fontFamily: "'Courier New', monospace",
            top: `${-20 - velocity * 5}px`,
            right: `${-20 - velocity * 5}px`,
          }}
        >╗</div>
        <div 
          className="absolute text-stone-100 text-xs font-bold transition-all duration-150" 
          style={{ 
            fontFamily: "'Courier New', monospace",
            bottom: `${-20 - velocity * 5}px`,
            left: `${-20 - velocity * 5}px`,
          }}
        >╚</div>
        <div 
          className="absolute text-stone-100 text-xs font-bold transition-all duration-150" 
          style={{ 
            fontFamily: "'Courier New', monospace",
            bottom: `${-20 - velocity * 5}px`,
            right: `${-20 - velocity * 5}px`,
          }}
        >╝</div>
      </div>

      {/* Diagonal lines that appear on high velocity */}
      <div
        className={`fixed pointer-events-none z-[9994] transition-all duration-200 ${
          velocity > 1 ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          left: `${coords.current.x}px`,
          top: `${coords.current.y}px`,
          transform: 'translate(-50%, -50%)',
          mixBlendMode: 'difference',
        }}
      >
        {/* Diagonal line top-left to bottom-right */}
        <div 
          className="absolute w-[2px] bg-stone-100 transition-all duration-150"
          style={{
            height: `${velocity * 40}px`,
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%) rotate(45deg)',
          }}
        ></div>
        
        {/* Diagonal line top-right to bottom-left */}
        <div 
          className="absolute w-[2px] bg-stone-100 transition-all duration-150"
          style={{
            height: `${velocity * 40}px`,
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%) rotate(-45deg)',
          }}
        ></div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700;900&family=Inter:wght@300;400;500;600;700;800;900&display=swap');
        
        /* Hide default cursor on desktop */
        @media (pointer: fine) {
          * {
            cursor: none !important;
          }
          
          a, button, input, select, textarea {
            cursor: none !important;
          }
        }
        
        /* Show default cursor on touch devices */
        @media (pointer: coarse) {
          .fixed.pointer-events-none {
            display: none;
          }
        }
      `}</style>
    </>
  );
};

export default CursorTrail;