import { Link } from 'react-router-dom';

const serviceCards = [
  {
    title: 'In-home Physiotherapy',
    text: 'Treatment in a familiar environment where your everyday movement patterns and routines can be addressed directly.',
  },
  {
    title: 'Personalised Rehabilitation',
    text: 'Plans are shaped around your history, goals and pace so care feels practical, manageable and meaningful.',
  },
  {
    title: 'Pain Education & Self-management',
    text: 'Learn how your body responds to pain and build confidence with strategies you can use between sessions.',
  },
  {
    title: 'Hands-on Care & Exercise',
    text: 'A blend of movement guidance, manual therapy, and graded exercise to help you move more comfortably and confidently.',
  },
];

export default function Services() {
  return (
    <main style={{ fontFamily: '"Jost", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif', lineHeight: 1.6, color: '#1f2937', background: '#fff' }}>
      <header style={{ position: 'sticky', top: 0, zIndex: 30, background: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(8px)', borderBottom: '1px solid #ece7dc' }}>
        <nav style={{ maxWidth: 1200, margin: '0 auto', padding: '20px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none', color: '#111827' }}>
            <img src="/assets/logo.svg" alt="Logo" style={{ height: 42, width: 42 }} />
            <span style={{ fontSize: '0.95rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase' }}>Healing at Home</span>
          </Link>
          <div style={{ display: 'flex', gap: 20, alignItems: 'center', fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.2em', fontWeight: 500, flexWrap: 'wrap' }}>
            <Link to="/" style={{ color: '#111827', textDecoration: 'none' }}>Home</Link>
            <a href="/#about" style={{ color: '#111827', textDecoration: 'none' }}>About</a>
            <a href="/#expect" style={{ color: '#111827', textDecoration: 'none' }}>What to Expect</a>
            <a href="/#contact" style={{ color: '#111827', textDecoration: 'none' }}>Contact</a>
          </div>
        </nav>
      </header>

      <section style={{ padding: '72px 24px 48px', background: '#f9f7f2' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '2rem', alignItems: 'center' }}>
          <div>
            <p style={{ textTransform: 'uppercase', letterSpacing: '0.25em', fontSize: '0.8rem', color: '#6b7280', marginBottom: 12 }}>Services</p>
            <h1 style={{ fontSize: 'clamp(2.2rem, 3.3vw, 3rem)', margin: '0 0 1rem', lineHeight: 1.15, color: '#111827' }}>Care that supports you where life happens.</h1>
            <p style={{ color: '#4b5563', maxWidth: 700, marginBottom: '1rem' }}>
              Whether you're living with persistent pain, post-surgical recovery, or simply finding everyday movement more difficult than it used to be, I provide one-on-one mobile physiotherapy in the comfort of your home.
            </p>
            <p style={{ color: '#4b5563', maxWidth: 700 }}>
              Every treatment is tailored to your goals and combines hands-on care, movement, education, and practical strategies that help you feel more confident between sessions.
            </p>
          </div>
          <div>
            <img src="/assets/services.jpeg" alt="Physiotherapy treatment" style={{ width: '100%', height: '430px', objectFit: 'cover', display: 'block' }} />
          </div>
        </div>
      </section>

      <section style={{ padding: '64px 24px 92px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.4rem' }}>
          {serviceCards.map((card) => (
            <div key={card.title} style={{ border: '1px solid #ece7dc', padding: '1.4rem', background: '#fff' }}>
              <h2 style={{ fontSize: '1.2rem', margin: '0 0 0.75rem', color: '#111827' }}>{card.title}</h2>
              <p style={{ color: '#4b5563', margin: 0, lineHeight: 1.7 }}>{card.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="expect" style={{ padding: '0 24px 64px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', background: '#f9f7f2', padding: '2.5rem', border: '1px solid #ece7dc' }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <p style={{ textTransform: 'uppercase', letterSpacing: '0.25em', fontSize: '0.8rem', color: '#6b7280', marginBottom: 12 }}>What to Expect</p>
            <h2 style={{ fontSize: '2rem', margin: 0, lineHeight: 1.15, color: '#111827' }}>What to Expect at Your First Visit</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: '1.5rem' }}>
            {[
              {
                number: '01',
                title: 'Share Your Story & History',
                description: 'We begin by exploring your pain experience in detail, including how it started, how it affects your daily life, and what you’ve tried so far. We also focus on what matters most to you—what you want to return to, improve, or feel confident doing again.',
              },
              {
                number: '02',
                title: 'Movement and Functional Assessment',
                description: 'Next, we assess how your body is moving and responding to load and activity. This may include observation of everyday movements, joint and soft tissue assessment, and testing strength, mobility, and control where appropriate.',
              },
              {
                number: '03',
                title: 'Creating your treatment plan',
                description: 'I’ll provide education to help you better understand what may be contributing to your symptoms, and we’ll work together to outline a treatment plan that aligns with your specific goals.',
              },
            ].map((step) => (
              <div key={step.number} style={{ textAlign: 'center' }}>
                <span style={{ display: 'block', fontSize: '2.2rem', fontWeight: 300, color: '#9ca3af', marginBottom: '0.75rem' }}>{step.number}</span>
                <h3 style={{ fontSize: '1.2rem', margin: '0 0 0.75rem', color: '#111827' }}>{step.title}</h3>
                <p style={{ color: '#4b5563', lineHeight: 1.7 }}>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" style={{ padding: '0 24px 96px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', borderTop: '1px solid #ece7dc', paddingTop: '2.5rem' }}>
          <div style={{ maxWidth: 700 }}>
            <h2 style={{ fontSize: '1.8rem', margin: '0 0 0.75rem', color: '#111827' }}>Ready to book a session?</h2>
            <p style={{ color: '#4b5563', marginBottom: '1.2rem', lineHeight: 1.7 }}>
              Reach out at +1 (289)-902-4044 or info@ajpt.ca and I’ll be happy to help. If you want, I can also share updates and wellness resources with you.
            </p>
            <a href="https://forms.gle/nezJvAoj23BmfqnZ8" style={{ display: 'inline-block', border: '1px solid #111827', padding: '12px 22px', color: '#111827', textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.2em', fontSize: '0.8rem' }}>
              Book a Session
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
