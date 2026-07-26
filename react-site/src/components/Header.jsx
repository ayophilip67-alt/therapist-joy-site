import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { label: 'About', href: '#about', isAnchor: true },
  { label: 'Services', href: '/services', isAnchor: false },
  { label: 'Contact', href: '#contact', isAnchor: true },
];

export default function Header({ currentPage = 'home' }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation();

  const handleLinkClick = () => setDrawerOpen(false);

  const handleNavClick = (item) => {
    if (item.isAnchor) {
      // If on services page and clicking an anchor, go home first
      if (currentPage === 'services') {
        window.location.href = `/#/${item.href}`;
      } else {
        // On home page, just let the anchor navigation work
        window.location.href = item.href;
      }
    }
    handleLinkClick();
  };

  return (
    <>
      <header className="site-header">
        <div className="header-inner">
          <Link to="/" className="header-brand" onClick={handleLinkClick}>
            <img src="/assets/logo.svg" alt="Logo" />
            <span>Healing at Home</span>
          </Link>

          <div className="desktop-nav">
            {navItems.map((item) => (
              item.isAnchor ? (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => handleNavClick(item)}
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.label}
                  to={item.href}
                  onClick={handleLinkClick}
                >
                  {item.label}
                </Link>
              )
            ))}
            <a className="header-cta" href="https://forms.gle/nezJvAoj23BmfqnZ8">
              Book Now
            </a>
          </div>

          <button
            type="button"
            className="mobile-nav-toggle"
            aria-label="Open navigation"
            onClick={() => setDrawerOpen(true)}
          >
            <span style={{ display: 'inline-block', width: 22, height: 2, background: '#111827', marginBottom: 5 }} />
            <span style={{ display: 'inline-block', width: 22, height: 2, background: '#111827', marginBottom: 5 }} />
            <span style={{ display: 'inline-block', width: 22, height: 2, background: '#111827' }} />
          </button>
        </div>
      </header>

      {drawerOpen && (
        <div className="drawer-backdrop" onClick={() => setDrawerOpen(false)}>
          <div className="drawer-panel" onClick={(event) => event.stopPropagation()}>
            <button type="button" className="drawer-close" onClick={() => setDrawerOpen(false)}>
              Close
            </button>
            <nav className="drawer-nav">
              <Link to="/" onClick={handleLinkClick}>
                Home
              </Link>
              {navItems.map((item) => (
                item.isAnchor ? (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => handleNavClick(item)}
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    key={item.label}
                    to={item.href}
                    onClick={handleLinkClick}
                  >
                    {item.label}
                  </Link>
                )
              ))}
            </nav>
            <a className="drawer-book" href="https://forms.gle/nezJvAoj23BmfqnZ8" onClick={handleLinkClick}>
              Book Now
            </a>
          </div>
        </div>
      )}
    </>
  );
}
