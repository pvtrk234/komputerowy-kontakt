
import React, { useState } from 'react';
import ReviewCard from '@/components/ui/ReviewCard';
import ReviewForm from '@/components/ui/ReviewForm';

const Reviews = () => {
  // Przykładowe dane opinii
  const initialReviews = [
    {
      id: 1,
      name: "Anna Kowalska",
      date: "12.08.2023",
      rating: 5,
      content: "Świetna obsługa i ekspresowa naprawa laptopa. Mój komputer działał wolno, po wizycie w serwisie działa jak nowy. Polecam wszystkim!"
    },
    {
      id: 2,
      name: "Piotr Nowak",
      date: "05.07.2023",
      rating: 4.5,
      content: "Profesjonalna obsługa, szybka naprawa drukarki. Ceny adekwatne do jakości usług. Zdecydowanie polecam ten serwis."
    },
    {
      id: 3,
      name: "Marek Wiśniewski",
      date: "23.06.2023",
      rating: 5,
      content: "Fachowa pomoc i doradztwo przy wyborze nowego komputera. Pan bardzo cierpliwie wytłumaczył wszystkie zawiłości techniczne. Super obsługa!"
    },
    {
      id: 4,
      name: "Katarzyna Lewandowska",
      date: "18.05.2023",
      rating: 4,
      content: "Korzystam z usług tego serwisu regularnie dla mojej firmy. Zawsze mogę liczyć na szybką i skuteczną pomoc. Rekomenduję."
    },
    {
      id: 5,
      name: "Tomasz Kamiński",
      date: "07.04.2023",
      rating: 5,
      content: "Miałem poważny problem z komputerem, utrata danych groziła. Dzięki fachowej pomocy udało się odzyskać wszystkie ważne pliki. Dziękuję!"
    },
    {
      id: 6,
      name: "Marta Zielińska",
      date: "12.03.2023",
      rating: 4.5,
      content: "Szybka naprawa kasy fiskalnej. Serwis godny polecenia, obsługa miła i profesjonalna."
    }
  ];

  const [reviews] = useState(initialReviews);

  // Obliczanie średniej oceny
  const averageRating = reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;
  
  return (
    <div className="page-transition min-h-screen pt-28 pb-20">
      {/* Nagłówek sekcji */}
      <section className="container mx-auto px-6 mb-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-6">Opinie naszych klientów</h1>
          <p className="text-muted-foreground mb-8">
            Poznaj opinie naszych zadowolonych klientów. Jeżeli korzystałeś z naszych usług, 
            zachęcamy do podzielenia się swoją opinią.
          </p>
          
          <div className="bg-white rounded-xl shadow-neuro border border-border/40 p-6 mb-10">
            <div className="flex flex-col items-center">
              <div className="text-5xl font-bold text-primary mb-2">
                {averageRating.toFixed(1)}
              </div>
              <div className="flex mb-2">
                {Array.from({ length: 5 }).map((_, index) => (
                  <svg
                    key={index}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill={index < Math.floor(averageRating) ? "#FBBF24" : "none"}
                    stroke={index < Math.floor(averageRating) ? "#FBBF24" : "#D1D5DB"}
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    />
                  </svg>
                ))}
              </div>
              <div className="text-muted-foreground">
                Na podstawie {reviews.length} opinii
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sekcja z opiniami */}
      <section className="container mx-auto px-6 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <ReviewCard
              key={review.id}
              name={review.name}
              date={review.date}
              rating={review.rating}
              content={review.content}
            />
          ))}
        </div>
      </section>

      {/* Sekcja dodawania opinii */}
      <section className="container mx-auto px-6 py-10 bg-secondary rounded-xl mb-16">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold mb-3">Dodaj swoją opinię</h2>
            <p className="text-muted-foreground">
              Twoja opinia jest dla nas bardzo ważna. Podziel się swoimi doświadczeniami 
              i pomóż nam stale podnosić jakość naszych usług.
            </p>
          </div>
          
          <ReviewForm />
        </div>
      </section>
    </div>
  );
};

export default Reviews;
