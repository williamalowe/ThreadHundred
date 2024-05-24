import ContactForm from "../../components/ContactForm/ContactForm";
import styles from "./Contact.module.css";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.div
      className={styles.cart}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 1,
      }}
    >
      <div className={styles.content}>
        <div className={styles.banner}>Contact Us</div>
        <div className={styles.details}>
          <p>
            Here at the ThreadHundred family we take the emails we receive very
            seriously. If you need any assistance, would like to request a media
            kit, interview or just like to send comments we&apos;d love to hear
            from you. Our email is <span>mail@threadhundred.com</span>.
          </p>
          <p>
            If you&apos;d rather talk over the phone, we can be contacted Monday
            – Saturday between the hours of 10am-5pm via{" "}
            <span>0412 345 678</span>.
          </p>
          <p>
            If you are sending an email that requires the use of an attachment
            please send an email directly by clicking <span>here</span>.
            Otherwise, please fill out the form provided below:
          </p>
        </div>
        <ContactForm />
      </div>
    </motion.div>
  );
};

export default Contact;
