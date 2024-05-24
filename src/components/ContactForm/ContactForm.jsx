import styles from "./ContactForm.module.css";
import { motion } from "framer-motion";

const ContactForm = () => {
  return (
    <form className={styles.contact_form} onSubmit={(e) => e.preventDefault()}>
      <input type="text" placeholder="Name" />
      <input type="text" placeholder="Email" />
      <input type="text" placeholder="Phone Number" />
      <textarea placeholder="Message"></textarea>
      <motion.button
        whileHover={{
          scale: 1.1,
          boxShadow: 0,
          x: 4,
          y: 4,
        }}
        whileTap={{
          scale: 0.9,
        }}
      >
        Send
      </motion.button>
    </form>
  );
};

export default ContactForm;
