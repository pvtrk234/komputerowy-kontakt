
import React from 'react';
import { Star, StarHalf } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ReviewCardProps {
  name: string;
  date: string;
  rating: number;
  content: string;
  className?: string;
}

const ReviewCard = ({ name, date, rating, content, className }: ReviewCardProps) => {
  // Generowanie gwiazdek na podstawie oceny
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    // Pełne gwiazdki
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star key={`full-${i}`} className="fill-yellow-400 text-yellow-400" size={18} />
      );
    }

    // Pół gwiazdki
    if (hasHalfStar) {
      stars.push(
        <StarHalf key="half" className="fill-yellow-400 text-yellow-400" size={18} />
      );
    }

    // Puste gwiazdki
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <Star key={`empty-${i}`} className="text-gray-300" size={18} />
      );
    }

    return stars;
  };

  return (
    <div className={cn(
      "bg-white p-6 rounded-xl shadow-neuro border border-border/40",
      "transition-all duration-300 hover:shadow-lg",
      className
    )}>
      <div className="flex justify-between items-start mb-3">
        <div>
          <h4 className="font-semibold">{name}</h4>
          <p className="text-sm text-muted-foreground">{date}</p>
        </div>
        <div className="flex">{renderStars()}</div>
      </div>
      
      <p className="text-gray-600">{content}</p>
    </div>
  );
};

export default ReviewCard;
