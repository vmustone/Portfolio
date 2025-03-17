import { motion } from "framer-motion";
import { useEffect } from "react";
import AboutMe from "./Aboutme";
import ContactForm from "./Contact";

interface ExpandedCardProps {
  title: string;
  image: string;
  onClose: () => void;
}

const ExpandedCard = ({ title, image, onClose }: ExpandedCardProps) => {
  // Kuuntelee Escape-näppäimen painamista
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();  // Sulkee kortin, kun Escape-näppäintä painetaan
      }
    };

    // Lisää tapahtumakuuntelija
    document.addEventListener("keydown", handleKeyDown);

    // Poistaa tapahtumakuuntelijan komponentin poistumisen yhteydessä
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);  // Varmistaa, että efekti päivitetään, jos onClose muuttuu

  return (
      <motion.div
        className="fixed inset-0 flex items-center justify-center z-50 bg-black/50"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.15 } }}
      >
        {/* Kuva ja sulkurasti yhdessä */}
        <div className="relative">
          {/* Kuva */}
          <img
            src={image}
            alt={title}
            className="max-w-[70vw] max-h-[70vh] object-cover rounded-lg shadow-2xl"
          />

          {/* Sulkurasti (oikeassa yläkulmassa) */}
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-white text-3xl font-bold bg-black/50 rounded-full px-3 py-1 hover:bg-black/80 transition"
          >
            ✕
          </button>
        </div>

        {/* Dynaaminen sisältö */}
        {title === "About" && <AboutMe />}
        {title === "Contact" && <ContactForm />}
      </motion.div>
  );
};

export default ExpandedCard;
