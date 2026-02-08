import { useEffect, useRef, useState } from "react";

const CursorTrail = () => {
  const circlesRef = useRef<HTMLDivElement[]>([]);
  const coords = useRef({ x: 0, y: 0 });
  const [isMoving, setIsMoving] = useState(false);
  const moveTimeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const circles = circlesRef.current;

    circles.forEach((circle) => {
      if (!circle) return;
      (circle as any).x = 0;
      (circle as any).y = 0;
    });

    const handleMouseMove = (e: MouseEvent) => {
      coords.current.x = e.clientX;
      coords.current.y = e.clientY;

      // Trigger moving state
      setIsMoving(true);
      
      // Clear existing timeout
      if (moveTimeoutRef.current) {
        clearTimeout(moveTimeoutRef.current);
      }
      
      // Set timeout to remove moving state
      moveTimeoutRef.current = setTimeout(() => {
        setIsMoving(false);
      }, 150);
    };

    window.addEventListener("mousemove", handleMouseMove);

    const animateCircles = () => {
      let x = coords.current.x;
      let y = coords.current.y;

      circles.forEach((circle, index) => {
        if (!circle) return;

        circle.style.left = x - 8 + "px";
        circle.style.top = y - 8 + "px";
        
        // Scale based on position in trail
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
      if (moveTimeoutRef.current) {
        clearTimeout(moveTimeoutRef.current);
      }
    };
  }, []);

  return (
    <>
      {/* Main cursor - square brutalist design */}
      <div
        ref={(el) => {
          if (el) circlesRef.current[0] = el;
        }}
        className={`fixed w-4 h-4 pointer-events-none z-[9999] transition-all duration-100 ${
          isMoving ? 'opacity-100' : 'opacity-70'
        }`}
        style={{
          mixBlendMode: 'difference',
        }}
      >
        {/* Outer square border */}
        <div className="absolute inset-0 border-2 border-stone-100 bg-transparent"></div>
        
        {/* Inner filled square */}
        <div className="absolute inset-1 bg-stone-100"></div>
        
        {/* Corner accents */}
        <div className="absolute -top-1 -left-1 w-2 h-2 border-l-2 border-t-2 border-stone-100"></div>
        <div className="absolute -top-1 -right-1 w-2 h-2 border-r-2 border-t-2 border-stone-100"></div>
        <div className="absolute -bottom-1 -left-1 w-2 h-2 border-l-2 border-b-2 border-stone-100"></div>
        <div className="absolute -bottom-1 -right-1 w-2 h-2 border-r-2 border-b-2 border-stone-100"></div>
      </div>

      {/* Trail elements - minimalist squares */}
      {Array.from({ length: 12 }).map((_, i) => (
        <div
          key={i + 1}
          ref={(el) => {
            if (el) circlesRef.current[i + 1] = el;
          }}
          className="fixed w-4 h-4 pointer-events-none z-[9998] transition-opacity duration-200"
          style={{
            opacity: isMoving ? (1 - (i + 1) / 13) * 0.6 : (1 - (i + 1) / 13) * 0.3,
            mixBlendMode: 'difference',
          }}
        >
          {/* Square border only for trail */}
          <div 
            className="absolute inset-0 border border-stone-100 bg-transparent"
            style={{
              borderWidth: i < 4 ? '2px' : '1px',
            }}
          ></div>
        </div>
      ))}

      {/* Crosshair cursor overlay */}
      <div
        className={`fixed pointer-events-none z-[9997] transition-all duration-150 ${
          isMoving ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
        }`}
        style={{
          left: `${coords.current.x}px`,
          top: `${coords.current.y}px`,
          transform: 'translate(-50%, -50%)',
          mixBlendMode: 'difference',
        }}
      >
        {/* Horizontal line */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-[2px] bg-stone-100"></div>
        {/* Vertical line */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[2px] h-8 bg-stone-100"></div>
        
        {/* Corner brackets */}
        <div className="absolute -top-6 -left-6 text-stone-100 text-xs font-bold" style={{ fontFamily: "'Courier New', monospace" }}>+</div>
        <div className="absolute -top-6 -right-6 text-stone-100 text-xs font-bold" style={{ fontFamily: "'Courier New', monospace" }}>+</div>
        <div className="absolute -bottom-6 -left-6 text-stone-100 text-xs font-bold" style={{ fontFamily: "'Courier New', monospace" }}>+</div>
        <div className="absolute -bottom-6 -right-6 text-stone-100 text-xs font-bold" style={{ fontFamily: "'Courier New', monospace" }}>+</div>
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