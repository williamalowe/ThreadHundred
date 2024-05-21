import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <NavLink to='/'>
        <motion.div 
          className='link'
          whileHover={{
            boxShadow: 0,
            x: 4,
            y: 4
          }}
          whileTap={{
            scale: 0.9
          }}
        >
          Home
        </motion.div>
      </NavLink>
      <NavLink to='/shop'>
        <motion.div 
          className='link'
          whileHover={{
            scale: 1.1,
            boxShadow: 0,
            x: 4,
            y: 4
          }}
          whileTap={{
            scale: 0.9
          }}
        >
          Shop
        </motion.div>
      </NavLink>
      <NavLink to='/cart'>
        <motion.div 
          className='link'
          whileHover={{
            boxShadow: 0,
            x: 4,
            y: 4
          }}
          whileTap={{
            scale: 0.9
          }}
        >
          Cart
        </motion.div>
      </NavLink>
      <NavLink to='/contact'>
      <motion.div 
      className='link'
      whileHover={{
        boxShadow: 0,
        x: 4,
        y: 4
      }}
      whileTap={{
        scale: 0.9
      }}
      >
        Contact
      </motion.div>
      </NavLink>
    </nav>
  )
}

export default Navbar
