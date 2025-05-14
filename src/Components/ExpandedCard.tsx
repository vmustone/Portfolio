import { motion } from "framer-motion";
import { useEffect } from "react";
import AboutMe from "./Aboutme";
import ContactForm from "./Contact";
import Projects from "./Projects";

interface ExpandedCardProps {
  title: string;
  image: string;
  onClose: () => void;
}

const ExpandedCard = ({ title, image, onClose }: ExpandedCardProps) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
  <motion.div
    className="fixed inset-0 flex items-center justify-center z-50 bg-black/50"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.15 } }}
  >
    <div className="relative flex flex-col items-center">
      <img
        src={image}
        alt={title}
        className="max-w-[70vw] max-h-[70vh] object-cover rounded-lg shadow-2xl"
      />
      <button
        onClick={onClose}
        className="absolute top-2 right-2 text-white text-2xl font-bold bg-black/50 rounded-full px-2.5 py-1 hover:bg-black/80 transition z-10"
      >
        ✕
      </button>
      {title === "Contact" && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="p-8 rounded-lg max-w-[90%] w-[90%] md:max-w-md md:w-full">
            <ContactForm />
          </div>
        </div>
      )}
      {title === "About Me" && (
        <div className="absolute inset-0 flex items-center justify-center">
          <AboutMe />
        </div>
      )}
      {title === "Projects" && (
        <div className="absolute inset-0 flex items-center justify-center">
          <Projects />
        </div>
      )}
    </div>
  </motion.div>
  );
};

export default ExpandedCard;
