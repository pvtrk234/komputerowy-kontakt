
import React, { useState } from 'react';
import { Star } from 'lucide-react';
import CustomButton from './CustomButton';
import { useToast } from '@/hooks/use-toast';

const ReviewForm = () => {
  const { toast } = useToast();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Walidacja formularza
    if (!name || !email || !review || rating === 0) {
      toast({
        title: "Błąd",
        description: "Proszę wypełnić wszystkie pola i wybrać ocenę.",
        variant: "destructive",
      });
      return;
    }
    
    // Symulacja wysłania recenzji
    console.log({ name, email, review, rating });
    toast({
      title: "Dziękujemy!",
      description: "Twoja opinia została dodana pomyślnie.",
    });
    
    // Reset formularza
    setName('');
    setEmail('');
    setReview('');
    setRating(0);
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-neuro border border-border/40">
      <h3 className="text-xl font-bold mb-4 text-center">Dodaj swoją opinię</h3>
      
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1">
            Imię i nazwisko
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 rounded-lg border border-border focus:ring-2 focus:ring-primary/50 focus:outline-none transition"
            placeholder="Jan Kowalski"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Adres e-mail
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 rounded-lg border border-border focus:ring-2 focus:ring-primary/50 focus:outline-none transition"
            placeholder="jan.kowalski@example.com"
          />
        </div>
        
        <div>
          <label htmlFor="review" className="block text-sm font-medium mb-1">
            Twoja opinia
          </label>
          <textarea
            id="review"
            value={review}
            onChange={(e) => setReview(e.target.value)}
            rows={4}
            className="w-full p-3 rounded-lg border border-border focus:ring-2 focus:ring-primary/50 focus:outline-none transition"
            placeholder="Podziel się swoją opinią o naszych usługach..."
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-2">Ocena</label>
          <div className="flex space-x-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => setRating(star)}
                onMouseEnter={() => setHoverRating(star)}
                onMouseLeave={() => setHoverRating(0)}
                className="p-1 focus:outline-none"
              >
                <Star
                  size={24}
                  className={`
                    transition-colors
                    ${
                      star <= (hoverRating || rating)
                        ? 'text-yellow-400 fill-yellow-400'
                        : 'text-gray-300'
                    }
                  `}
                />
              </button>
            ))}
          </div>
        </div>
        
        <div className="pt-3">
          <CustomButton type="submit" fullWidth size="lg">
            Wyślij opinię
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default ReviewForm;
