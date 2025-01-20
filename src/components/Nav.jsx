import logo from '../assets/Beat it-logo.png';

function Nav() {
  return (
    <nav className='nav-container'>
      <div className='nav'>
        <img className='logo' src={logo} alt="Logo" />
        <p>Take Test</p>
      </div>
    </nav>
  )
}

export default Nav;