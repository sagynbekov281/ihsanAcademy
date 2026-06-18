import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface Props {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export default function AnimSection({ children, className = '', delay = 0 }: Props) {
  const { ref, visible } = useScrollAnimation();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${className}`}
    >
      {children}
    </div>
  );
}
