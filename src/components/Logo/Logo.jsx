import styles from './Logo.module.css';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to={'/'} className={styles.logo}>
      <img src="/logo.png" alt="" />
      <h3>Thread<span>Hundred</span></h3>
    </Link>
  )
}

export default Logo
