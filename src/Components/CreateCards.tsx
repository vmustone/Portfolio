import { useState, useEffect } from "react";
import { AnimatePresence } from "motion/react";
import Card from "./Card";
import ExpandedCard from "./ExpandedCard";

const cards = [
  { title: "About Me", image: "./public/Assets/Images/vmustone.jpg", photoGrapher: "Photo by Diego James" },
  { title: "Projects", image: "./public/Assets/Images/fsboard.jpg", photoGrapher: "Photo by Ville Vappula" },
  { title: "Contact", image: "./public/Assets/Images/cripler.jpg", photoGrapher: "Photo by Mikko Kempas" },
];

const CreateCards = (
  { expandedCard, setExpandedCard }: {
    expandedCard: string | null;
    setExpandedCard: (title: string | null) => void;
  }
) => {
  const [showTitle, setShowTitle] = useState(true);

  useEffect(() => {
    if (window.innerWidth <= 768) {
      setShowTitle(true);
     } else {
    const timer = setTimeout(() => setShowTitle(false), 2500);
    return () => clearTimeout(timer);
  }
}, []);

  const handleClose = () => setExpandedCard(null);
  
  const handleOpen = (title: string) => {
    setExpandedCard(title);
  };

  return (
    <div className="flex justify-center">
      {!expandedCard && (
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6 p-8">
          {cards.map((card) => (
            <Card
              key={card.title}
              title={card.title}
              image={card.image}
              showTitle={showTitle}
              onClick={() => handleOpen(card.title)}
            />
          ))}
        </div>
      )}
  
      <AnimatePresence>
        {expandedCard && (
          <ExpandedCard
            card={cards.find((c) => c.title === expandedCard)!}
            onClose={handleClose}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default CreateCards;
