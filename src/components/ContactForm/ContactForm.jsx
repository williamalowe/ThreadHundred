import styles from './ContactForm.module.css';

const ContactForm = () => {
  return (
    <form className={styles.contact_form} onSubmit={(e) => e.preventDefault()}>
      <input type="text" placeholder='Name'/>
      <input type="text" placeholder='Email'/>
      <input type="text" placeholder='Phone Number'/>
      <textarea placeholder='Message'></textarea>
    </form>
  )
}

export default ContactForm
