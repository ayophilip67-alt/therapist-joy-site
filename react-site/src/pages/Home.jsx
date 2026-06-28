import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <main style={{ fontFamily: 'Arial, sans-serif', lineHeight: 1.6 }}>
      <header style={{ padding: '24px 32px', borderBottom: '1px solid #eee' }}>
        <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: 1100, margin: '0 auto' }}>
          <a href="/" style={{ fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', textDecoration: 'none', color: '#111' }}>
            Akintomide Jumoke
          </a>
          <div style={{ display: 'flex', gap: 20 }}>
            <Link to="/services">Services</Link>
            <a href="/#about">About</a>
            <a href="/#expect">What to Expect</a>
            <a href="/#contact">Contact</a>
          </div>
        </nav>
      </header>

      <section style={{ maxWidth: 900, margin: '0 auto', padding: '80px 24px 40px' }}>
        <h1>Chronic Pain Physical Therapy</h1>
        <p>Compassionate, evidence-based care for movement, recovery, and long-term function.</p>
        <Link to="/services" style={{ display: 'inline-block', marginTop: 16, padding: '12px 20px', background: '#111', color: '#fff', textDecoration: 'none' }}>
          Learn More
        </Link>
      </section>
    </main>
  );
}
