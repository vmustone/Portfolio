import { motion } from "motion/react";
import { useEffect } from "react";
import AboutMe from "./Aboutme";
import ContactForm from "./Contact";
import Projects from "./Projects";


const ExpandedCard = ({
  card: {title, image, photoGrapher },
  onClose
}: {
  card: { title: string; image: string; photoGrapher: string };
  onClose: () => void;
}) => {
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
    className="fixed inset-0 flex items-center justify-center z-50 bg-black/50 overflow-hidden"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.15 } }}
  >
    <button
    onClick={onClose}
    className="absolute top-2 right-2 text-white text-2xl font-bold bg-gray-700/70 rounded-full px-2.5 py-1 hover:bg-black/80 transition z-10 outline-none border-none"
  >
    ✕
  </button>
    <div className="relative flex flex-col items-center">
      {title === "About Me" && (
        <div className="relative rounded-lg overflow-hidden">
          <img
            src={image}
            alt={title}
            className="max-w-[80vw] max-h-[80vh] object-cover rounded-lg shadow-2xl"
          />
          <div className="absolute inset-0 bg-black/60 p-4 overflow-y-auto">
            <div className="min-h-full flex flex-col justify-center">
              <div className="w-full max-w-2xl mx-auto py-8">
                <AboutMe />
              </div>
            </div>
          </div>
        </div>
      )}
      {title === "Projects" && (
        <div className="relative rounded-lg overflow-hidden">
          <img
            src={image}
            alt={title}
            className="max-w-[80vw] max-h-[80vh] object-cover rounded-lg shadow-2xl"
          />
          <div className="absolute inset-0 overflow-y-auto p-4">
            <div className="flex min-h-full">
              <Projects />
            </div>
          </div>
        </div>
      )}
            {title === "Contact" && (
        <div className="relative rounded-lg overflow-hidden">
          <img
            src={image}
            alt={title}
            className="max-w-[80vw] max-h-[80vh] object-cover rounded-lg shadow-2xl"
          />
          <div className="absolute inset-0 p-4 overflow-y-auto">
            <div className="flex items-center justify-center min-h-full">
              <div className="w-full max-w-md">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
    
    {/* Watermark at bottom of screen */}
    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm opacity-60 px-4 py-2">
      {photoGrapher}
    </div>
  </motion.div>
  );
};

export default ExpandedCard;
