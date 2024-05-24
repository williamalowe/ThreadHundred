import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
  return (
    <motion.nav 
      className='navbar'
    >
      <NavLink to='/'>
        <motion.div 
          className='link'
          initial={{
            opacity: 0,
            x: -100
          }}
          animate={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 0.5
            }
          }}
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
          initial={{
            opacity: 0,
            x: -200
          }}
          animate={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 0.5
            }
          }}
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
          initial={{
            opacity: 0,
            x: -300
          }}
          animate={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 0.5
            }
          }}
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
      initial={{
        opacity: 0,
        x: -400
      }}
      animate={{
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.5
        }
      }}
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
    </motion.nav>
  )
}

export default Navbar
