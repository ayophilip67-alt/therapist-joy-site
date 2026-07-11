import { useState } from 'react';
import { Link } from 'react-router-dom';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'What to Expect', href: '#expect' },
  { label: 'Contact', href: '#contact' },
];

export default function Header({ currentPage = 'home' }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const pagePrefix = currentPage === 'home' ? '' : '/';

  const handleLinkClick = () => setDrawerOpen(false);

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
              <a key={item.label} href={`${pagePrefix}${item.href}`}>
                {item.label}
              </a>
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
                <a key={item.label} href={`${pagePrefix}${item.href}`} onClick={handleLinkClick}>
                  {item.label}
                </a>
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
