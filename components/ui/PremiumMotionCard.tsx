'use client';

import { MotionCard } from '@/components/animations/MotionCard';
import { ReactNode } from 'react';

interface PremiumMotionCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  glowColor?: 'cyan' | 'violet' | 'blue';
}

export function PremiumMotionCard(props: PremiumMotionCardProps) {
  return <MotionCard {...props} />;
}
