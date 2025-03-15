
import React, { useState } from 'react';
import CustomButton from './CustomButton';
import { Mail } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactForm = () => {
  const { toast } = useToast();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Walidacja formularza
    if (!name || !email || !message) {
      toast({
        title: "Błąd",
        description: "Proszę wypełnić wszystkie wymagane pola.",
        variant: "destructive",
      });
      return;
    }

    // Symulacja wysłania wiadomości
    setIsSubmitting(true);
    setTimeout(() => {
      console.log({ name, email, subject, message });
      toast({
        title: "Wiadomość wysłana!",
        description: "Dziękujemy za kontakt. Odpowiemy najszybciej jak to możliwe.",
      });
      
      // Reset formularza
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-neuro border border-border/40">
      <h3 className="text-xl font-bold mb-6 text-center">Skontaktuj się z nami</h3>
      
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Imię i nazwisko <span className="text-red-500">*</span>
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 rounded-lg border border-border focus:ring-2 focus:ring-primary/50 focus:outline-none transition"
              placeholder="Jan Kowalski"
              required
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Adres e-mail <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 rounded-lg border border-border focus:ring-2 focus:ring-primary/50 focus:outline-none transition"
              placeholder="jan.kowalski@example.com"
              required
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="subject" className="block text-sm font-medium mb-1">
            Temat
          </label>
          <input
            id="subject"
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="w-full p-3 rounded-lg border border-border focus:ring-2 focus:ring-primary/50 focus:outline-none transition"
            placeholder="Temat wiadomości"
          />
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-1">
            Wiadomość <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={6}
            className="w-full p-3 rounded-lg border border-border focus:ring-2 focus:ring-primary/50 focus:outline-none transition"
            placeholder="Treść wiadomości..."
            required
          />
        </div>
        
        <div className="pt-2">
          <CustomButton 
            type="submit" 
            fullWidth 
            size="lg" 
            disabled={isSubmitting}
            icon={<Mail size={18} />}
          >
            {isSubmitting ? 'Wysyłanie...' : 'Wyślij wiadomość'}
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
