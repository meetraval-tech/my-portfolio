import { useEffect, useRef } from "react";
import "./Cursor.css";

export default function Cursor() {
  const mainRef = useRef(null);
  const trailRefs = useRef([]);

  useEffect(() => {
    // disable on mobile
    if (window.innerWidth < 768) return;

    const trails = trailRefs.current;

    let mouse = { x: 0, y: 0 };
    let positions = Array(trails.length).fill({ x: 0, y: 0 });

    const move = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener("mousemove", move);

    const animate = () => {
      // main cursor
      if (mainRef.current) {
        mainRef.current.style.transform = `translate(${mouse.x}px, ${mouse.y}px)`;
      }

      // trails
      positions = positions.map((pos, i) => {
        const target = i === 0 ? mouse : positions[i - 1];

        const newX = pos.x + (target.x - pos.x) * 0.25;
        const newY = pos.y + (target.y - pos.y) * 0.25;

        const el = trails[i];
        if (el) {
          el.style.transform = `translate(${newX}px, ${newY}px)`;
        }

        return { x: newX, y: newY };
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      <div ref={mainRef} className="cursor-main" />

      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          ref={(el) => (trailRefs.current[i] = el)}
          className="cursor-trail"
          style={{
            width: `${10 - i}px`,
            height: `${10 - i}px`,
            opacity: 1 - i * 0.15,
          }}
        />
      ))}
    </>
  );
}