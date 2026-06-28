import { Link } from 'react-router-dom';

export default function Services() {
  return (
    <main style={{ fontFamily: 'Arial, sans-serif', lineHeight: 1.6 }}>
      <header style={{ padding: '24px 32px', borderBottom: '1px solid #eee' }}>
        <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: 1100, margin: '0 auto' }}>
          <Link to="/" style={{ fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', textDecoration: 'none', color: '#111' }}>
            Akintomide Jumoke
          </Link>
          <div style={{ display: 'flex', gap: 20 }}>
            <Link to="/services">Services</Link>
            <a href="/#about">About</a>
            <a href="/#expect">What to Expect</a>
            <a href="/#contact">Contact</a>
          </div>
        </nav>
      </header>

      <section style={{ maxWidth: 900, margin: '0 auto', padding: '80px 24px 40px' }}>
        <h1>Services</h1>
        <p>I offer individualized care focused on chronic pain, function, and recovery.</p>
        <ul>
          <li>One-on-one physical therapy sessions</li>
          <li>Movement assessment and treatment planning</li>
          <li>Exercise guidance and education</li>
          <li>Support for managing chronic pain</li>
        </ul>
      </section>
    </main>
  );
}
