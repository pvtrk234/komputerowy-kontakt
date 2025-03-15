
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface CustomButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  fullWidth?: boolean;
  href?: string;
  to?: string;
  className?: string;
}

const CustomButton = ({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  fullWidth = false,
  href,
  to,
  className,
  ...props
}: CustomButtonProps) => {
  // Bazowe style
  const baseClasses = cn(
    'relative inline-flex items-center justify-center transition-all duration-300 overflow-hidden rounded-lg font-medium focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2',
    fullWidth && 'w-full',
    
    // Wielkość
    {
      'text-sm px-3 py-1.5': size === 'sm',
      'text-base px-5 py-2.5': size === 'md',
      'text-lg px-7 py-3': size === 'lg',
    },
    
    // Warianty
    {
      'bg-primary text-white hover:bg-primary/90 active:bg-primary/80 shadow-md hover:shadow-lg': variant === 'primary',
      'bg-secondary text-foreground hover:bg-secondary/80 active:bg-secondary/60': variant === 'secondary',
      'bg-transparent border border-primary text-primary hover:bg-primary/10 active:bg-primary/20': variant === 'outline',
      'bg-transparent text-foreground hover:bg-secondary active:bg-secondary/80': variant === 'ghost',
    },
    
    // Dodatkowe klasy
    className
  );

  // Elementy wewnętrzne
  const content = (
    <>
      {icon && <span className="mr-2">{icon}</span>}
      {children}
      <span className="absolute inset-0 rounded-lg hover:bg-white/5 active:bg-black/5 transition-colors"></span>
    </>
  );

  // Renderowanie odpowiedniego elementu
  if (href) {
    return (
      <a href={href} className={baseClasses} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  if (to) {
    return (
      <Link to={to} className={baseClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button className={baseClasses} {...props}>
      {content}
    </button>
  );
};

export default CustomButton;
