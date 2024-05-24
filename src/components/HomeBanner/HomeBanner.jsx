import styles from './HomeBanner.module.css';

const HomeBanner = () => {
  return (
    <div className={styles.banner}>
      <div>Sustainably Printed <span>in Australia since 2011</span></div>
      <div>Easy 100 day returns <span>on all orders</span></div>
      <div>Ethically produced <span>and shipped from Melbourne</span></div>
    </div>
  )
}

export default HomeBanner
