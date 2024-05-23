import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './CheckoutForm.module.css';
import { faLessThan } from '@fortawesome/free-solid-svg-icons';

const CheckoutForm = () => {
  return (
    <form onSubmit={(e) => e.preventDefault()} className={styles.form}>
      <div className={styles.contact}>
        <div>
          <h3>Contact Information</h3>
          <p>Already have an account? <span>Log in.</span></p>
        </div>
        <input type="email" placeholder='Email'/>
        <div className={styles.checkbox}>
          <input type="checkbox" name="" id="" />
          <label htmlFor="">Keep me up to date on news and exlusive offers.</label>
        </div>
      </div>
      <div className={styles.shipping}>
        <h3>Shipping Address</h3>
        <div>
          <input type="text" placeholder='First Name'/>
          <input type="text" placeholder='Last Name'/>
        </div>
        <input type="text" placeholder='Company (Optional)'/>
        <input type="text" placeholder='Address'/>
        <input type="text" placeholder='Apartment, Suite, etc. (Optional)'/>
        <input type="text" placeholder='City'/>
        <div>
          <input type="text" placeholder='Country'/>
          <input type="text" placeholder='Postal Code'/>
        </div>
        <input type="text" placeholder='Phone (Optional)'/>
      </div>
      <div className={styles.buttons}>
        <button>
          <FontAwesomeIcon icon={faLessThan} />
          Return to shop
        </button>
        <button disabled>Continue to shipping options</button>
      </div>
    </form>
  )
}

export default CheckoutForm
