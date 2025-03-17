import { motion } from "framer-motion";

interface CardProps {
  title: string;
  image: string;
  showTitle: boolean
  onClick: () => void;
}

const Card = ({ title, image, showTitle, onClick }: CardProps) => {

  return (
    <motion.div
      className="relative w-64 h-80 rounded-xl overflow-hidden shadow-lg cursor-pointer"
      whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
      onClick={onClick}
    >
      <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />

      <motion.div
        className="absolute inset-0 bg-black/40 flex items-center justify-center"
        initial={{ opacity: 1 }}
        animate={{ opacity: showTitle ? 1 : 0 }}
        whileHover={{ opacity: 1}}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-white text-2xl font-bold">{title}</h2>
      </motion.div>
    </motion.div>
  );
};

export default Card;
