import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='logo'>
        <img src="./logo.png" alt="tehundred logo" />
      </div>
      <div className='links'>
        <NavLink to={'/'}>
          <motion.div 
            className="link"
            initial={{
              rotate: 0
            }}
            whileHover={{
              rotate: -5
            }}
          >
            Home
          </motion.div>
        </NavLink>
        <NavLink to={'/shop'}>
        <motion.div 
            className="link"
            initial={{
              rotate: 0
            }}
            whileHover={{
              rotate: -5
            }}
          >
            Shop
          </motion.div>
        </NavLink>
        <NavLink to={'./about'}>
        <motion.div 
            className="link"
            initial={{
              rotate: 0
            }}
            whileHover={{
              rotate: -5
            }}
          >
            About
          </motion.div>
        </NavLink>
        <NavLink to={'./contact'}>
        <motion.div 
            className="link"
            initial={{
              rotate: 0
            }}
            whileHover={{
              rotate: -5
            }}
          >
            Contact
          </motion.div> 
        </NavLink>
      </div>
      <div className='cart'>
        <FontAwesomeIcon icon={faCartShopping} />
        <div>0</div>
      </div>
    </nav>
  )
}

export default Navbar
