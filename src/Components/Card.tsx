import { motion } from "framer-motion";

interface CardProps {
  title: string;
  image: string;
  onClick: () => void;
}

const Card = ({ title, image, onClick }: CardProps) => (
  <motion.div
    className="relative w-64 h-80 rounded-xl overflow-hidden shadow-lg cursor-pointer"
    whileHover={{ scale: 1.1 }}
    transition={{ duration: 0.3 }}
    onClick={onClick}
  >
    <motion.img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
      <h2 className="text-white text-2xl font-bold">{title}</h2>
    </div>
  </motion.div>
);

export default Card;
