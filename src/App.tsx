import { useState } from "react";
import { motion } from "motion/react";
import CreateCards from "./Components/CreateCards";

const App = () => {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);


  return (
    <motion.div
      initial={{ x: "-100vw" }}
      animate={{ x: 0 }}
      transition={{ type: "spring", stiffness: 50, duration: 1 }}
    >
      {!expandedCard && (
        <motion.h1
          className="mt-0 pt-16 text-4xl md:text-6xl text-center text-white mb-8 drop-shadow-lg font-sans"
          initial={{ opacity: 0, y: -50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
        >
          Welcome to my Portfolio
        </motion.h1>
      )}
      <CreateCards
        expandedCard={expandedCard}
        setExpandedCard={setExpandedCard}
      />
    </motion.div>
  );
};

export default App;