import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='logo'>
        <img src="./logo.png" alt="tehundred logo" />
      </div>
      <div className='links'>
        <NavLink to={'./'}>
          <div className="link">
            Home
          </div>
        </NavLink>
        <NavLink to={'./shop'}>
          <div className="link">
            Shop
          </div>
        </NavLink>
        <NavLink to={'./about'}>
          <div className="link">
            About
          </div>
        </NavLink>
        <NavLink to={'./contact'}>
          <div className="link">
            Contact
          </div>  
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
