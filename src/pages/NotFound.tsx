
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import CustomButton from "@/components/ui/CustomButton";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: Użytkownik próbował uzyskać dostęp do nieistniejącej ścieżki:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="page-transition min-h-screen pt-28 pb-20 flex items-center justify-center bg-gradient-to-b from-blue-50 to-transparent">
      <div className="text-center max-w-lg p-10 bg-white rounded-xl shadow-neuro border border-border/40">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6">
          <span className="text-primary text-4xl font-bold">404</span>
        </div>
        <h1 className="text-2xl font-bold mb-4">Strona nie została znaleziona</h1>
        <p className="text-muted-foreground mb-8">
          Przepraszamy, strona której szukasz nie istnieje lub została przeniesiona pod inny adres.
        </p>
        <CustomButton to="/" icon={<Home size={18} />}>
          Wróć do strony głównej
        </CustomButton>
      </div>
    </div>
  );
};

export default NotFound;
