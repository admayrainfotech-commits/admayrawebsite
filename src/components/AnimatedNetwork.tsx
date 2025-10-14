import React, { useEffect, useRef } from 'react';

interface Dot {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
}

interface AnimatedNetworkProps {
  className?: string;
}

const AnimatedNetwork: React.FC<AnimatedNetworkProps> = ({ className = '' }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dotsRef = useRef<Dot[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    const createDots = () => {
      const dots: Dot[] = [];
      const numDots = Math.floor((canvas.width * canvas.height) / 15000);
      
      for (let i = 0; i < numDots; i++) {
        dots.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          radius: Math.random() * 2 + 1,
        });
      }
      
      dotsRef.current = dots;
    };

    const drawDot = (dot: Dot) => {
      ctx.beginPath();
      ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(215, 38, 56, 0.6)';
      ctx.fill();
    };

    const drawLine = (x1: number, y1: number, x2: number, y2: number, opacity: number) => {
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.strokeStyle = `rgba(215, 38, 56, ${opacity})`;
      ctx.lineWidth = 0.5;
      ctx.stroke();
    };

    const getDistance = (x1: number, y1: number, x2: number, y2: number) => {
      return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw dots
      dotsRef.current.forEach((dot) => {
        // Update position
        dot.x += dot.vx;
        dot.y += dot.vy;

        // Bounce off edges
        if (dot.x <= 0 || dot.x >= canvas.width) dot.vx *= -1;
        if (dot.y <= 0 || dot.y >= canvas.height) dot.vy *= -1;

        // Keep dots within bounds
        dot.x = Math.max(0, Math.min(canvas.width, dot.x));
        dot.y = Math.max(0, Math.min(canvas.height, dot.y));

        drawDot(dot);
      });

      // Draw connections between dots
      const maxDistance = 120;
      for (let i = 0; i < dotsRef.current.length; i++) {
        for (let j = i + 1; j < dotsRef.current.length; j++) {
          const dot1 = dotsRef.current[i];
          const dot2 = dotsRef.current[j];
          const distance = getDistance(dot1.x, dot1.y, dot2.x, dot2.y);

          if (distance < maxDistance) {
            const opacity = (1 - distance / maxDistance) * 0.3;
            drawLine(dot1.x, dot1.y, dot2.x, dot2.y, opacity);
          }
        }
      }

      // Draw connections to mouse
      const mouseDistance = 150;
      dotsRef.current.forEach((dot) => {
        const distance = getDistance(dot.x, dot.y, mouseRef.current.x, mouseRef.current.y);
        if (distance < mouseDistance) {
          const opacity = (1 - distance / mouseDistance) * 0.4;
          drawLine(dot.x, dot.y, mouseRef.current.x, mouseRef.current.y, opacity);
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
    };

    const handleResize = () => {
      resizeCanvas();
      createDots();
    };

    // Initialize
    resizeCanvas();
    createDots();
    animate();

    // Event listeners
    window.addEventListener('resize', handleResize);
    canvas.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{ width: '100%', height: '100%' }}
    />
  );
};

export default AnimatedNetwork;