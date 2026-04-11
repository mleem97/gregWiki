import React, {useEffect, useRef} from 'react';

type ShapeGridProps = {
  className?: string;
  cellSize?: number;
  strokeWidth?: number;
  drift?: number;
};

function cssVar(name: string, fallback: string): string {
  if (globalThis.window === undefined) {
    return fallback;
  }
  const value = globalThis
    .getComputedStyle(document.documentElement)
    .getPropertyValue(name)
    .trim();
  return value.length > 0 ? value : fallback;
}

export default function ShapeGrid({
  className,
  cellSize = 64,
  strokeWidth = 1,
  drift = 0.16,
}: Readonly<ShapeGridProps>): JSX.Element {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return undefined;
    }

    const ctx = canvas.getContext('2d');
    if (!ctx) {
      return undefined;
    }

    const lineColor = cssVar('--color-outline-variant', '#0f514c');
    const accentA = cssVar('--color-primary', '#61f4d8');
    const accentB = cssVar('--color-secondary', '#1cede1');
    const accentC = cssVar('--color-tertiary', '#64d0ff');

    let rafId = 0;
    let width = 0;
    let height = 0;
    let cols = 0;
    let rows = 0;
    const dpr = Math.max(1, globalThis.window.devicePixelRatio || 1);

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = Math.max(1, Math.floor(rect.width));
      height = Math.max(1, Math.floor(rect.height));
      cols = Math.ceil(width / cellSize) + 1;
      rows = Math.ceil(height / cellSize) + 1;

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.lineWidth = strokeWidth;
    };

    resize();

    const resizeObserver = new ResizeObserver(() => resize());
    resizeObserver.observe(canvas);

    const draw = (timestamp: number) => {
      const time = timestamp * 0.001;
      ctx.clearRect(0, 0, width, height);

      const driftX = Math.sin(time * 0.25) * cellSize * drift;
      const driftY = Math.cos(time * 0.2) * cellSize * drift;

      ctx.strokeStyle = lineColor;
      ctx.globalAlpha = 0.22;

      for (let x = 0; x < cols; x += 1) {
        const xPos = x * cellSize + driftX;
        ctx.beginPath();
        ctx.moveTo(xPos, 0);
        ctx.lineTo(xPos, height);
        ctx.stroke();
      }

      for (let y = 0; y < rows; y += 1) {
        const yPos = y * cellSize + driftY;
        ctx.beginPath();
        ctx.moveTo(0, yPos);
        ctx.lineTo(width, yPos);
        ctx.stroke();
      }

      for (let y = 0; y < rows; y += 1) {
        for (let x = 0; x < cols; x += 1) {
          const xPos = x * cellSize + driftX;
          const yPos = y * cellSize + driftY;
          const pulse = (Math.sin(time * 1.8 + x * 0.7 + y * 0.5) + 1) * 0.5;
          const patternIndex = (x + y) % 3;
          let accentColor = accentC;
          if (patternIndex === 0) {
            accentColor = accentA;
          } else if (patternIndex === 1) {
            accentColor = accentB;
          }

          ctx.fillStyle = accentColor;
          ctx.globalAlpha = 0.08 + pulse * 0.22;
          ctx.fillRect(xPos - 1.2, yPos - 1.2, 2.4, 2.4);
        }
      }

      ctx.globalAlpha = 1;
      rafId = globalThis.requestAnimationFrame(draw);
    };

    rafId = globalThis.requestAnimationFrame(draw);

    return () => {
      globalThis.cancelAnimationFrame(rafId);
      resizeObserver.disconnect();
    };
  }, [cellSize, drift, strokeWidth]);

  return <canvas ref={canvasRef} className={className} />;
}
