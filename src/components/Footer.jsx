import { Link } from 'react-router-dom'
import { site, footerServices } from '../data/site'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__glow" aria-hidden="true" />
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <Link to="/" className="footer__logo">
              <span className="footer__logo-icon">◈</span>
              {site.name}
            </Link>
            <p className="footer__tagline">{site.tagline}</p>
            <p className="footer__desc">{site.description}</p>
          </div>

          <div className="footer__col">
            <h4 className="footer__heading">Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/careers">Careers</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer__col">
            <h4 className="footer__heading">Our Services</h4>
            <ul>
              {footerServices.map((s) => (
                <li key={s.path}>
                  <Link to={s.path}>{s.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <h4 className="footer__heading">Contact Us</h4>
            <ul className="footer__contact">
              <li>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </li>
              <li>
                <a href={`tel:${site.phone}`}>{site.phone}</a>
              </li>
              <li>{site.address}</li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© {site.year} {site.name}. All rights reserved.</p>
          <div className="footer__legal">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
