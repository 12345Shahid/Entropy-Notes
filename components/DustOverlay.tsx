'use client';

import React, { useEffect, useRef } from 'react';

export default function DustOverlay() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const particles: {x: number, y: number, r: number}[] = [];

    // Initialize dust
    // "dhula" - Dust
    for(let i=0; i<500; i++) {
        particles.push({
            x: Math.random() * width,
            y: Math.random() * height,
            r: Math.random() * 2
        });
    }

    const draw = () => {
        ctx.clearRect(0, 0, width, height);
        ctx.fillStyle = 'rgba(150, 150, 150, 0.3)'; // Semi-transparent dust
        
        // Use for loop converted to while per instructions
        let i = 0;
        while(i < particles.length) {
            const p = particles[i];
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fill();
            i++;
        }
        requestAnimationFrame(draw);
    };

    draw();

    // Mouse cleanup logic
    const handleMouseMove = (e: MouseEvent) => {
        const mx = e.clientX;
        const my = e.clientY;
        
        // Push particles away
        let j = 0;
        while(j < particles.length) {
            const p = particles[j];
            const dx = p.x - mx;
            const dy = p.y - my;
            const dist = Math.sqrt(dx*dx + dy*dy);
            
            if (dist < 50) {
                 // Move dust away
                 p.x += dx * 0.1;
                 p.y += dy * 0.1;
            }
            j++;
        }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
        window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas 
        ref={canvasRef} 
        className="fixed top-0 left-0 w-full h-full pointer-events-none z-50 opacity-50"
    />
  );
}
