import styles from './HomeBanner.module.css';

const HomeBanner = () => {
  return (
    <div className={styles.banner}>
      <div><span>Sustainably Printed</span> in Australia since 2011</div>
      <div><span>Easy 100 day returns</span> on all orders</div>
      <div><span>Ethically produced</span> and shipped from Melbourne</div>
    </div>
  )
}

export default HomeBanner
