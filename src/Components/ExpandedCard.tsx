import { motion } from "framer-motion";
import AboutMe from "./Aboutme";
import ContactForm from "./Contact";

const ExpandedCard = ({ title, image } : {title: string, image: string,}) => (
  <motion.div
    className="fixed inset-0 flex items-center justify-center z-50"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0, transition: { duration: 0.15 } }}
  >
    <motion.img
      src={image}
      alt={title}
      className="max-w-[70%] max-h-[70%] object-cover rounded-lg shadow-2xl"
      initial={{ scale: 0.8 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0.8 }}
      transition={{ duration: 0.3 }}
      loading="lazy"
    />
    {title === "About" && <AboutMe />}
    {title === "Contact" && <ContactForm />}
  </motion.div>
);

export default ExpandedCard;
