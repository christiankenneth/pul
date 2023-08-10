import { Link } from 'react-router-dom'
import './style.scss'

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="left">
          <img src="./images/circular-logo.png" alt="" />
          <div className="brand">Presses Universitaires de Lubumbashi</div>
        </div>
        <div className="right">
          <div className='list'>
            <h3>Menu</h3>
              <Link to="/ouvrages" className='link'>Ouvrages</Link>
              <Link to="/revue" className='link'>Revue</Link>
              <Link to="/evenements" className='link'>Évènements</Link>
              <Link to="/a-propos" className='link'>À Propos</Link>
              <Link to="/contact" className='link button'>Contactez-nous</Link>
          </div>
          <div className='list'>
            <h3>Liens importants</h3>
              <Link to="/" className='link'>Catalogue</Link>
              <Link to="/" className='link'>Catégories</Link>
              <Link to="/" className='link'>Unilu</Link>
              <Link to="/" className='link'>Politiques de confidentialité</Link>
              <Link to="/" className='link button'>Termes et conditions</Link>
          </div>
          <div className='list'>
            <h3>Newsletter</h3>
            <div>S'abonner à la newsletter</div>
            <input type="text" placeholder="Entrer adresse e-mail" />
            <button>S'abonner</button>
          </div>
        </div>
      </div>
      <hr />
      <div className="container">
        <h5>© Presses Universitaires de Lubumbashi - 2023</h5>
        <h5>Par CKK, Algomines.</h5>
      </div>
    </div>
  )
}

export default Footer
