import { Link } from 'react-router-dom'
import './style.scss'

const Navbar = () => {
  return (
    <div className='navbar'>
    <div className="container">
      <div className="logo">
        <Link to="/" className='link'>
          <img src="./images/logo.png" alt="" />
        </Link>
      </div>
      <div className="links">

      <Link to="/ouvrages" className='link'>Ouvrages</Link>
      <Link to="/revue" className='link'>Revue</Link>
      <Link to="/evenements" className='link'>Évènements</Link>
      <Link to="/a-propos" className='link'>À Propos</Link>
      <Link to="/contact" className='link button'>Contactez-nous</Link>

      </div>
    </div>
  </div>
  )
}

export default Navbar
