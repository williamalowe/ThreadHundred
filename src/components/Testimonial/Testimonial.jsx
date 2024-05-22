import styles from './Testimonial.module.css';

const Testimonial = ({ name, header, comment }) => {
  return (
    <article className={styles.testimonial}>
      <div>{name}</div>
      <div>
        {header}
        <p>{comment}</p>
      </div>
    </article>
  )
}

export default Testimonial
