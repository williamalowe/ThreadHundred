import { faStar } from '@fortawesome/free-solid-svg-icons';
import styles from './Reviews.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Testimonial from '../Testimonial/Testimonial';

const Reviews = () => {
  return (
    <div className={styles.reviews}>
      <h3>Over 3000 Happy Customers</h3>
      <div className={styles.stars}>
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
      </div>
      <p>3000+ 5 star reviews</p>
      <Testimonial 
        name={'Ryan Adams'}
        header={'This sh*t is sick!'}
        comment={'I recently purchased a shirt that has quickly become my all-time favorite. Simply put, this shirt is the greatest shirt in the history of textiles. The fabric is incredibly soft and comfortable, making it perfect for any occasion.'}
      />
      <Testimonial 
        name={'Nikola Blumer'}
        header={'Comfy and fun as'}
        comment={'Super comfy, high quality shirt and print. Honestly so fun to wear about and have older relatives try and figure out how to read it :)'}
      />
      <Testimonial 
        name={'P.R.'}
        header={'*Chef`s kiss*'}
        comment={'Not only were these shirts great quality, the customer service team is amazing. Thank you so much. Will definitely be ordering again.'}
      />
      <Testimonial 
        name={'Nathan'}
        header={'Solid'}
        comment={'Awesome.... Does exactly what a t-shirt is meant to do.'}
      />
      <Testimonial 
        name={'Brianna Murphy'}
        header={'Comfortably Crying'}
        comment={'This hoodie is so soft and warm that I just want to cry. It`s like too soft to be real!'}
      />
    </div>
  )
}

export default Reviews
