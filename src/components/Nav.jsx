import { NavLink } from "react-router"
import logo from '../assets/Beat it-logo.png';

function Nav() {
  return (
    <nav className='nav-container'>
      <div className='nav'>
        <img className='logo' src={logo} alt="Logo" />
        <NavLink to='/test'>Take Test</NavLink>
      </div>
    </nav>
  )
}

export default Nav;