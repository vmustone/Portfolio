import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Card from "./Card";
import ExpandedCard from "./ExpandedCard";

const cards = [
  { title: "About", image: "./src/Assets/Images/vmustone.jpg" },
  { title: "Projects", image: "./src/Assets/Images/fsboard.jpg" },
  { title: "Contact", image: "./src/Assets/Images/cripler.jpg" },
];

const CreateCards = () => {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);
  const [showTitle, setShowTitle] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowTitle(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  // Sulje kortti
  const handleClose = () => setExpandedCard(null);
  
  const handleOpen = (title: string) => {
    setExpandedCard(title);
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      {/* Näytetään kortit, jos ei ole avattua korttia */}
      {!expandedCard && (
        <div className="flex justify-center gap-6 p-8">
          {cards.map((card) => (
            <Card
              key={card.title}
              title={card.title}
              image={card.image}
              showTitle={showTitle}
              onClick={() => handleOpen(card.title)} // Avaa kortti
            />
          ))}
        </div>
      )}

      {/* Näytetään avattu kortti */}
      <AnimatePresence>
        {expandedCard && (
          <ExpandedCard
            title={expandedCard} // Käytetään expandedCard arvona
            image={cards.find((c) => c.title === expandedCard)!.image}
            onClose={handleClose} // Lisää sulkemistoiminto
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default CreateCards;
