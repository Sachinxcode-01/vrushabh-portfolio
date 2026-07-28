'use client';

import React from 'react';
import { Loader2 } from 'lucide-react';
import { MagneticButton } from '@/components/animations/MagneticButton';

interface AnimatedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'glass' | 'link' | 'icon' | 'social';
  loading?: boolean;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  magnetic?: boolean;
}

export function AnimatedButton({
  variant = 'primary',
  loading = false,
  icon,
  children,
  magnetic = true,
  className = '',
  disabled,
  ...props
}: AnimatedButtonProps) {
  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return 'bg-gradient-to-r from-cyan-500 via-violet-600 to-blue-500 text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105 border-transparent';
      case 'glass':
        return 'glass-button text-gray-200 border border-white/20 hover:border-cyan-400 hover:text-cyan-300';
      case 'link':
        return 'bg-transparent text-cyan-400 hover:text-cyan-300 underline-offset-4 hover:underline border-transparent p-0';
      case 'icon':
        return 'p-3 rounded-full glass-panel text-gray-300 hover:text-cyan-400 hover:border-cyan-500/50';
      case 'social':
        return 'p-3 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-cyan-400 hover:border-cyan-500/40';
      default:
        return '';
    }
  };

  const baseContent = (
    <button
      disabled={disabled || loading}
      className={`relative font-semibold text-xs rounded-xl px-5 py-3 flex items-center justify-center gap-2 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-cyan-400/50 ${getVariantStyles()} ${className}`}
      {...props}
    >
      {loading ? (
        <Loader2 className="w-4 h-4 animate-spin shrink-0 text-cyan-400" />
      ) : (
        icon && <span className="shrink-0">{icon}</span>
      )}
      {children && <span>{children}</span>}
    </button>
  );

  if (magnetic && variant !== 'link') {
    return <MagneticButton>{baseContent}</MagneticButton>;
  }

  return baseContent;
}
