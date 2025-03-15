
import React from 'react';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

const ServiceCard = ({ icon, title, description, className }: ServiceCardProps) => {
  return (
    <div 
      className={cn(
        "service-card bg-white rounded-xl p-6 shadow-neuro border border-border/40",
        "transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg",
        className
      )}
    >
      <div className="flex flex-col items-center text-center">
        <div className="w-16 h-16 mb-5 rounded-full bg-primary/5 flex items-center justify-center text-primary">
          {icon}
        </div>
        <h3 className="text-lg font-semibold mb-3">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
