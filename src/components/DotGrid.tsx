'use client';

import React, {useRef, useEffect, useCallback, useMemo} from 'react';
import {gsap} from 'gsap';
import {InertiaPlugin} from 'gsap/InertiaPlugin';

gsap.registerPlugin(InertiaPlugin);

function throttle<TArgs extends unknown[]>(func: (...args: TArgs) => void, limit: number) {
  let lastCall = 0;
  return (...args: TArgs) => {
    const now = performance.now();
    if (now - lastCall >= limit) {
      lastCall = now;
      func(...args);
    }
  };
}

interface Dot {
  cx: number;
  cy: number;
  xOffset: number;
  yOffset: number;
  _inertiaApplied: boolean;
}

export interface DotGridProps {
  dotSize?: number;
  gap?: number;
  baseColor?: string;
  activeColor?: string;
  proximity?: number;
  speedTrigger?: number;
  shockRadius?: number;
  shockStrength?: number;
  maxSpeed?: number;
  resistance?: number;
  returnDuration?: number;
  className?: string;
  style?: React.CSSProperties;
}

function hexToRgb(hex: string) {
  const matcher = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
  const match = matcher.exec(hex);
  if (!match) {
    return {r: 0, g: 0, b: 0};
  }
  return {
    r: Number.parseInt(match[1], 16),
    g: Number.parseInt(match[2], 16),
    b: Number.parseInt(match[3], 16),
  };
}

const DotGrid: React.FC<Readonly<DotGridProps>> = ({
  dotSize = 16,
  gap = 32,
  baseColor = '#61f4d8',
  activeColor = '#64d0ff',
  proximity = 150,
  speedTrigger = 100,
  shockRadius = 250,
  shockStrength = 5,
  maxSpeed = 5000,
  resistance = 750,
  returnDuration = 1.5,
  className = '',
  style,
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dotsRef = useRef<Dot[]>([]);
  const pointerRef = useRef({
    x: 0,
    y: 0,
    vx: 0,
    vy: 0,
    speed: 0,
    lastTime: 0,
    lastX: 0,
    lastY: 0,
  });

  const baseRgb = useMemo(() => hexToRgb(baseColor), [baseColor]);
  const activeRgb = useMemo(() => hexToRgb(activeColor), [activeColor]);

  const circlePath = useMemo(() => {
    if (!globalThis.window?.Path2D) {
      return null;
    }

    const path = new Path2D();
    path.arc(0, 0, dotSize / 2, 0, Math.PI * 2);
    return path;
  }, [dotSize]);

  const buildGrid = useCallback(() => {
    const wrap = wrapperRef.current;
    const canvas = canvasRef.current;
    if (!wrap || !canvas) {
      return;
    }

    const {width, height} = wrap.getBoundingClientRect();
    const dpr = globalThis.window.devicePixelRatio || 1;

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    }

    const cols = Math.floor((width + gap) / (dotSize + gap));
    const rows = Math.floor((height + gap) / (dotSize + gap));
    const cell = dotSize + gap;

    const gridWidth = cell * cols - gap;
    const gridHeight = cell * rows - gap;

    const startX = (width - gridWidth) / 2 + dotSize / 2;
    const startY = (height - gridHeight) / 2 + dotSize / 2;

    const dots: Dot[] = [];
    for (let y = 0; y < rows; y += 1) {
      for (let x = 0; x < cols; x += 1) {
        const cx = startX + x * cell;
        const cy = startY + y * cell;
        dots.push({cx, cy, xOffset: 0, yOffset: 0, _inertiaApplied: false});
      }
    }
    dotsRef.current = dots;
  }, [dotSize, gap]);

  useEffect(() => {
    if (!circlePath) {
      return undefined;
    }

    let rafId = 0;
    const proximitySquared = proximity * proximity;

    const draw = () => {
      const canvas = canvasRef.current;
      if (!canvas) {
        return;
      }
      const ctx = canvas.getContext('2d');
      if (!ctx) {
        return;
      }

      const displayWidth = Number.parseFloat(canvas.style.width || '0');
      const displayHeight = Number.parseFloat(canvas.style.height || '0');
      ctx.clearRect(0, 0, displayWidth, displayHeight);

      const {x: px, y: py} = pointerRef.current;

      for (const dot of dotsRef.current) {
        const ox = dot.cx + dot.xOffset;
        const oy = dot.cy + dot.yOffset;
        const dx = dot.cx - px;
        const dy = dot.cy - py;
        const distanceSquared = dx * dx + dy * dy;

        let fill = baseColor;
        if (distanceSquared <= proximitySquared) {
          const distance = Math.sqrt(distanceSquared);
          const t = 1 - distance / proximity;
          const r = Math.round(baseRgb.r + (activeRgb.r - baseRgb.r) * t);
          const g = Math.round(baseRgb.g + (activeRgb.g - baseRgb.g) * t);
          const b = Math.round(baseRgb.b + (activeRgb.b - baseRgb.b) * t);
          fill = `rgb(${r},${g},${b})`;
        }

        ctx.save();
        ctx.translate(ox, oy);
        ctx.fillStyle = fill;
        ctx.fill(circlePath);
        ctx.restore();
      }

      rafId = globalThis.requestAnimationFrame(draw);
    };

    draw();
    return () => globalThis.cancelAnimationFrame(rafId);
  }, [proximity, baseColor, activeRgb, baseRgb, circlePath]);

  useEffect(() => {
    buildGrid();

    let resizeObserver: ResizeObserver | null = null;
    if ('ResizeObserver' in globalThis.window) {
      resizeObserver = new ResizeObserver(buildGrid);
      if (wrapperRef.current) {
        resizeObserver.observe(wrapperRef.current);
      }
    } else {
      globalThis.window.addEventListener('resize', buildGrid);
    }

    return () => {
      if (resizeObserver) {
        resizeObserver.disconnect();
      } else {
        globalThis.window.removeEventListener('resize', buildGrid);
      }
    };
  }, [buildGrid]);

  useEffect(() => {
    const onMove = (event: MouseEvent) => {
      const now = performance.now();
      const pointer = pointerRef.current;
      const dt = pointer.lastTime ? now - pointer.lastTime : 16;
      const dx = event.clientX - pointer.lastX;
      const dy = event.clientY - pointer.lastY;
      let vx = (dx / dt) * 1000;
      let vy = (dy / dt) * 1000;
      let speed = Math.hypot(vx, vy);

      if (speed > maxSpeed) {
        const scale = maxSpeed / speed;
        vx *= scale;
        vy *= scale;
        speed = maxSpeed;
      }

      pointer.lastTime = now;
      pointer.lastX = event.clientX;
      pointer.lastY = event.clientY;
      pointer.vx = vx;
      pointer.vy = vy;
      pointer.speed = speed;

      const canvas = canvasRef.current;
      if (!canvas) {
        return;
      }
      const rect = canvas.getBoundingClientRect();
      pointer.x = event.clientX - rect.left;
      pointer.y = event.clientY - rect.top;

      for (const dot of dotsRef.current) {
        const distance = Math.hypot(dot.cx - pointer.x, dot.cy - pointer.y);
        if (speed > speedTrigger && distance < proximity && !dot._inertiaApplied) {
          dot._inertiaApplied = true;
          gsap.killTweensOf(dot);
          const pushX = dot.cx - pointer.x + vx * 0.005;
          const pushY = dot.cy - pointer.y + vy * 0.005;
          gsap.to(dot, {
            inertia: {xOffset: pushX, yOffset: pushY, resistance},
            onComplete: () => {
              gsap.to(dot, {
                xOffset: 0,
                yOffset: 0,
                duration: returnDuration,
                ease: 'elastic.out(1,0.75)',
              });
              dot._inertiaApplied = false;
            },
          });
        }
      }
    };

    const onClick = (event: MouseEvent) => {
      const canvas = canvasRef.current;
      if (!canvas) {
        return;
      }
      const rect = canvas.getBoundingClientRect();
      const cx = event.clientX - rect.left;
      const cy = event.clientY - rect.top;

      for (const dot of dotsRef.current) {
        const distance = Math.hypot(dot.cx - cx, dot.cy - cy);
        if (distance < shockRadius && !dot._inertiaApplied) {
          dot._inertiaApplied = true;
          gsap.killTweensOf(dot);
          const falloff = Math.max(0, 1 - distance / shockRadius);
          const pushX = (dot.cx - cx) * shockStrength * falloff;
          const pushY = (dot.cy - cy) * shockStrength * falloff;
          gsap.to(dot, {
            inertia: {xOffset: pushX, yOffset: pushY, resistance},
            onComplete: () => {
              gsap.to(dot, {
                xOffset: 0,
                yOffset: 0,
                duration: returnDuration,
                ease: 'elastic.out(1,0.75)',
              });
              dot._inertiaApplied = false;
            },
          });
        }
      }
    };

    const throttledMove = throttle(onMove, 50);
    globalThis.window.addEventListener('mousemove', throttledMove, {passive: true});
    globalThis.window.addEventListener('click', onClick);

    return () => {
      globalThis.window.removeEventListener('mousemove', throttledMove);
      globalThis.window.removeEventListener('click', onClick);
    };
  }, [maxSpeed, speedTrigger, proximity, resistance, returnDuration, shockRadius, shockStrength]);

  return (
    <section className={`relative flex h-full w-full items-center justify-center ${className}`} style={style}>
      <div ref={wrapperRef} className="relative h-full w-full">
        <canvas ref={canvasRef} className="pointer-events-none absolute inset-0 h-full w-full" />
      </div>
    </section>
  );
};

export default DotGrid;
