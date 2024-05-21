import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <NavLink to='/'>
        <div className='link'>Home</div>
      </NavLink>
      <NavLink to='/shop'>
        <div className='link'>Shop</div>
      </NavLink>
      <NavLink to='/cart'>
        <div className='link'>Cart</div>
      </NavLink>
      <NavLink to='/contact'>
      <div className='link'>Contact</div>
      </NavLink>
    </nav>
  )
}

export default Navbar
