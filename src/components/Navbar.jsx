import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { navLinks, site } from '../data/site'
import logo from '../assets/Indravex_Logo_New_.png'
import './Navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      {/* Backdrop blur overlay when menu is open */}
      <div className={`navbar__backdrop ${menuOpen ? 'navbar__backdrop--open' : ''}`} onClick={() => setMenuOpen(false)} />
      
      <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''} ${menuOpen ? 'navbar--open' : ''}`}>
        <div className="container navbar__inner">
          <Link to="/" className="navbar__logo" aria-label={site.name}>
            <img src={logo} alt={site.name} className="navbar__logo-img" />
          </Link>

          <nav className="navbar__nav" aria-label="Main navigation">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === '/'}
                className={({ isActive }) => `navbar__link ${isActive ? 'navbar__link--active' : ''}`}
              >
                <span className="navbar__link-text">{link.label}</span>
                <span className="navbar__link-underline" />
              </NavLink>
            ))}
          </nav>

          {/* Desktop CTA - hidden on mobile/tablet */}
          <Link to="/contact" className="navbar__cta-desktop btn btn-primary">
            Get Started
          </Link>

          <button
            type="button"
            className={`navbar__toggle ${menuOpen ? 'navbar__toggle--open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        {/* Mobile menu with shutter animation */}
        <div className={`navbar__mobile ${menuOpen ? 'navbar__mobile--open' : ''}`}>
          <div className="navbar__mobile-inner">
            <nav className="navbar__mobile-nav">
              {navLinks.map((link, i) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === '/'}
                  className={({ isActive }) => `navbar__mobile-link ${isActive ? 'navbar__mobile-link--active' : ''}`}
                  style={{ animationDelay: `${i * 0.08}s` }}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </NavLink>
              ))}
              {/* Mobile CTA - only visible in mobile menu */}
              <Link to="/contact" className="btn btn-primary navbar__mobile-cta" onClick={() => setMenuOpen(false)}>
                Get Started
              </Link>
            </nav>
            {/* Removed the extra brand section with logo and tagline */}
          </div>
        </div>
      </header>
    </>
  )
}