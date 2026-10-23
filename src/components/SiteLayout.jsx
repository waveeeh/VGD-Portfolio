
import { useState } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

export default function SiteLayout() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <header className="site-header">
        <div className="header-inner">
          <Link to="/" className="brand" onClick={closeMenu}>
            | Genesis Studio
          </Link>

          <button
            className="menu-toggle"
            aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>

          <nav
            className={`main-nav ${menuOpen ? 'is-open' : ''}`}
            aria-label="Main navigation"
          >
            <NavLink to="/" end onClick={closeMenu}>Home</NavLink>
            <NavLink to="/about" onClick={closeMenu}>About</NavLink>
            <NavLink to="/projects" onClick={closeMenu}>Projects</NavLink>
          </nav>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-person">
            <p>Genesis Studio</p>
            <p>Visual Graphic Design Portfolio</p>
          </div>

          <nav className="footer-nav" aria-label="Footer navigation">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
          </nav>

          <p className="copyright">© 2026 Genesis Studio</p>
        </div>
      </footer>
    </>
  )
}
