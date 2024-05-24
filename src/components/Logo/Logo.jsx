import styles from './Logo.module.css';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to={'/'} className={styles.logo}>
      <img src="/logo.png" alt="" />
      <div>
        <div>Thread</div>
        <div>Hundred</div>
      </div>
    </Link>
  )
}

export default Logo
