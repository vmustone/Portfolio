import { useState } from "react";
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

  return (
    <div className="flex justify-center items-center min-h-screen">
      {!expandedCard && (
        <div className="flex justify-center gap-6 p-8">
          {cards.map((card) => (
            <Card key={card.title} title={card.title} image={card.image} onClick={() => setExpandedCard(card.title)} />
          ))}
        </div>
      )}

      <AnimatePresence>
        {expandedCard && (
          <ExpandedCard
            title={expandedCard}
            image={cards.find((c) => c.title === expandedCard)!.image}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default CreateCards;
