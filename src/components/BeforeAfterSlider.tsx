'use client';

import { useRef, useState, useCallback, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { GripVertical } from 'lucide-react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  alt?: string;
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = 'Before',
  afterLabel = 'After',
  alt = 'Before and after comparison',
}: BeforeAfterSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const [dragging, setDragging] = useState(false);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setPosition((x / rect.width) * 100);
  }, []);

  const onMouseDown = () => setDragging(true);
  const onMouseUp = useCallback(() => setDragging(false), []);
  const onMouseMove = useCallback(
    (e: MouseEvent) => { if (dragging) updatePosition(e.clientX); },
    [dragging, updatePosition]
  );
  const onTouchMove = useCallback(
    (e: TouchEvent) => { updatePosition(e.touches[0].clientX); },
    [updatePosition]
  );

  useEffect(() => {
    if (dragging) {
      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('mouseup', onMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, [dragging, onMouseMove, onMouseUp]);

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[4/3] rounded-xl overflow-hidden cursor-col-resize select-none"
      onTouchMove={(e) => onTouchMove(e.nativeEvent)}
    >
      {/* After image (full) */}
      <Image src={afterImage} alt={`${alt} - after`} fill className="object-cover" sizes="100vw" />

      {/* Before image (clipped) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <Image src={beforeImage} alt={`${alt} - before`} fill className="object-cover" sizes="100vw" />
      </div>

      {/* Divider line */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-white/80"
        style={{ left: `${position}%` }}
      />

      {/* Handle */}
      <div
        className="before-after-handle absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full flex items-center justify-center cursor-ew-resize z-10"
        style={{ left: `${position}%` }}
        onMouseDown={onMouseDown}
        onTouchStart={() => setDragging(true)}
        onTouchEnd={() => setDragging(false)}
      >
        <GripVertical size={18} className="text-charcoal-950" />
      </div>

      {/* Labels */}
      <span className="absolute top-4 left-4 text-xs font-semibold tracking-wider uppercase text-white bg-black/50 backdrop-blur-sm px-3 py-1.5 rounded-full">
        {beforeLabel}
      </span>
      <span className="absolute top-4 right-4 text-xs font-semibold tracking-wider uppercase text-white bg-gold-500/80 backdrop-blur-sm px-3 py-1.5 rounded-full">
        {afterLabel}
      </span>
    </div>
  );
}
