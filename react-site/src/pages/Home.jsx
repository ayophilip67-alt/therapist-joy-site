import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Header from '../components/Header';

const navItems = [
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'What to Expect', href: '#expect' },
  { label: 'Contact', href: '#contact' },
];

const servicesList = [
  'Chronic & Persistent Pain',
  'Hip & Knee Pain',
  'Back & Neck Pain',
  'Post-surgical Rehabilitation',
  'Pain related to arthritis',
  'Shoulder Pain',
];

export default function Home() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');
  const [captchaToken, setCaptchaToken] = useState('');
  const location = useLocation();

  useEffect(() => {
    // Handle scrolling to section if navigated from another page
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location.state?.scrollTo]);

  useEffect(() => {
    window.onCaptchaSuccess = (token) => {
      setCaptchaToken(token);
    };

    window.onCaptchaError = () => {
      setStatus('Captcha failed. Please try again.');
      setCaptchaToken('');
    };

    window.onCaptchaExpired = () => {
      setCaptchaToken('');
    };

    return () => {
      delete window.onCaptchaSuccess;
      delete window.onCaptchaError;
      delete window.onCaptchaExpired;
    };
  }, []);

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('Submitting...');

    if (!captchaToken) {
      setStatus('Please complete the captcha to continue.');
      return;
    }

    const form = event.currentTarget;
    const data = new FormData(form);
    data.append('access_key', '5f8faeb3-dfba-4b6a-9645-c4d0340b1822');
    data.append('h-captcha-response', captchaToken);
    data.append('subject', 'New newsletter subscription');
    data.append('message', `New newsletter subscription from ${email}`);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: data,
      });

      const result = await response.json();

      if (result.success) {
        setStatus('Thank you for subscribing.');
        setEmail('');
        form.reset();
      } else {
        setStatus(result.message || 'Sorry, something went wrong. Please try again.');
      }
    } catch (error) {
      setStatus('Sorry, something went wrong. Please try again.');
    }
  };

  return (
    <main style={{ fontFamily: '"Jost", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif', lineHeight: 1.6, color: '#1b1b1b', background: '#fff6fb' }}>
      <Header currentPage="home" />

      <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '110px 20px 70px', backgroundImage: 'url(/assets/homeimage.PNG)', backgroundSize: 'cover', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', color: '#fff' }} />

      <div style={{ background: '#1a1a1a', color: '#fff6fb', padding: '0.85rem 1rem', overflow: 'hidden', whiteSpace: 'nowrap' }}>
        <div style={{ display: 'inline-block', paddingLeft: '100%', animation: 'marquee 18s linear infinite' }}>
          YOUR CHRONIC PAIN PHYSIOTHERAPIST • EVIDENCE-BASED CARE • TRAUMA-INFORMED CARE • MOVE BETTER, LIVE BETTER • YOUR CHRONIC PAIN PHYSIOTHERAPIST • EVIDENCE-BASED CARE • TRAUMA-INFORMED CARE • MOVE BETTER, LIVE BETTER
        </div>
      </div>

      <section id="services" style={{ padding: '80px 24px', background: '#fff6fb' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
          <div style={{ order: 2, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <p style={{ textTransform: 'uppercase', letterSpacing: '0.25em', fontSize: '0.8rem', color: '#601212', marginBottom: 4 }}>Services</p>
            <h2 style={{ fontSize: '2.2rem', margin: 0, lineHeight: 1.15, color: '#1a1a1a' }}>Care That Comes To You</h2>
            <h3 style={{ fontSize: '1.15rem', margin: 0, fontStyle: 'italic', color: '#cda275' }}>Your Session. Your Goals. Your Pace.</h3>
            <p style={{ color: '#1a1a1a', maxWidth: 560 }}>
              Currently offering in-home physiotherapy services across Ancaster, Dundas, and Hamilton. This allows treatment to take place in a familiar, real-world environment where movement and daily activities actually happen.
            </p>
            <p style={{ color: '#1a1a1a', maxWidth: 560 }}>
              If you live outside these service areas, you’re still welcome to reach out. Depending on your location and availability, Healing at Home may be able to provide in-home care in your area.
            </p>
            <p style={{ color: '#601212', maxWidth: 560, fontWeight: 600 }}>
              What conditions do we treat?
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '0.75rem' }}>
              {servicesList.map((service) => (
                <li key={service} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#1a1a1a', fontSize: '0.95rem' }}>
                  <span style={{ width: '0.45rem', height: '0.45rem', borderRadius: '999px', background: '#cda275', flexShrink: 0 }} />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
            <Link to="/services" style={{ display: 'inline-block', border: '1px solid #601212', background: '#601212', padding: '12px 20px', color: '#fff', textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.2em', fontSize: '0.8rem', width: 'fit-content', marginTop: '0.5rem', boxShadow: '0 10px 20px rgba(96,18,18,0.12)' }}>
              Learn More
            </Link>
          </div>
          <div style={{ order: 1 }}>
            <img src="/assets/services.jpeg" alt="Physiotherapy treatment" style={{ width: '100%', height: 'auto', maxHeight: '500px', objectFit: 'cover', display: 'block' }} />
          </div>
        </div>
      </section>

      <section id="about" style={{ padding: '80px 24px', background: '#fffefc' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
          <div>
            <img src="/assets/ajpicture.jpg" alt="Akintomide Jumoke, Physiotherapist" style={{ width: '100%', height: 'auto', maxHeight: '560px', objectFit: 'cover', display: 'block' }} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <p style={{ textTransform: 'uppercase', letterSpacing: '0.25em', fontSize: '0.8rem', color: '#601212', marginBottom: 4 }}>About</p>
            <h2 style={{ fontSize: '2.2rem', margin: 0, lineHeight: 1.15, color: '#1a1a1a' }}>Akintomide Jumoke, Registered Physiotherapist</h2>
            <p style={{ color: '#1a1a1a' }}>
              I’m AJ, a licensed physiotherapist focusing on chronic and complex pain management. My approach is based on understanding that pain is shaped by a mix of physical, psychological, and social factors, not just the body alone.
            </p>
            <p style={{ color: '#1a1a1a' }}>
              This is why I take the time to understand your unique pain experience and create a personalised approach that feels safe, manageable, and meaningful to you. I take a whole-person approach, integrating ACT-informed strategies and trauma-informed care to support you in moving forward with confidence.
            </p>
            <Link to="/about" style={{ display: 'inline-block', border: '1px solid #601212', background: '#601212', padding: '12px 20px', color: '#fff', textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.2em', fontSize: '0.8rem', width: 'fit-content', marginTop: '0.5rem', boxShadow: '0 10px 20px rgba(96,18,18,0.12)' }}>
              More on me
            </Link>
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 24px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', alignItems: 'center' }}>
          <div style={{ textAlign: 'left' }}>
            <p style={{ textTransform: 'uppercase', letterSpacing: '0.25em', fontSize: '0.8rem', color: '#6b7280', marginBottom: 12 }}>Stay in touch</p>
            <h2 style={{ fontSize: '2rem', margin: '0 0 0.75rem', color: '#111827' }}>Receive updates and wellness resources</h2>
            <p style={{ color: '#4b5563', marginBottom: '1.2rem', lineHeight: 1.7 }}>
              If you’d like to hear about upcoming resources, helpful tools, and meaningful updates, leave your details below and I’ll keep you in the loop.
            </p>
          </div>

          <form onSubmit={handleSubmit} style={{ background: '#f9f7f2', border: '1px solid #ece7dc', padding: '1.5rem', display: 'grid', gap: '1rem' }}>
            <div>
              <label htmlFor="home-email" style={{ display: 'block', marginBottom: '0.35rem', color: '#111827', fontSize: '0.95rem' }}>Email</label>
              <input id="home-email" name="email" type="email" required value={email} onChange={handleChange} style={{ width: '100%', border: '1px solid #d1d5db', padding: '0.8rem 0.9rem', fontSize: '1rem', background: '#fff' }} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <button type="submit" style={{ border: 'none', background: '#111827', color: '#fff', padding: '0.85rem 1.2rem', textTransform: 'uppercase', letterSpacing: '0.2em', fontSize: '0.8rem', cursor: 'pointer' }}>
                Subscribe
              </button>
              <small style={{ color: '#6b7280' }}>By submitting, you agree to be contacted by email.</small>
            </div>
            <div className="h-captcha" data-sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2" data-captcha="true" data-callback="onCaptchaSuccess" data-expired-callback="onCaptchaExpired" data-error-callback="onCaptchaError"></div>
            <div style={{ minHeight: '1.25rem', color: '#111827', fontSize: '0.95rem' }}>{status}</div>
          </form>
        </div>
      </section>

      <section id="contact" style={{ padding: '96px 24px 120px', background: '#1a1a1a', color: '#fff6fb' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
          <p style={{ textTransform: 'uppercase', letterSpacing: '0.3em', fontSize: '0.8rem', color: 'rgba(249,250,251,0.6)', marginBottom: 16 }}>Ready to get started? Reach out today!</p>
          <h2 style={{ fontSize: '2.3rem', margin: '0 0 1rem', lineHeight: 1.15 }}>Experienced Therapist. Comfortable Space.</h2>
          <p style={{ color: 'rgba(249,250,251,0.75)', marginBottom: '2rem', lineHeight: 1.8 }}>
            Living with persistent pain can be frustrating, especially when you’ve tried different things and are still feeling stuck. If you’re looking for a space where your experience is heard and we move at a pace that feels right for you, you’re welcome to get in touch at +1 (289)-902-4044 or info@ajpt.ca. My availability: Monday | Thursday | Saturday.
          </p>
          <a href="https://healingathome.embodiaapp.com/patient_portal" style={{ display: 'inline-block', border: '1px solid #cda275', background: '#601212', padding: '14px 24px', color: '#fff', textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.2em', fontSize: '0.8rem', boxShadow: '0 12px 24px rgba(96,18,18,0.26)' }}>
            Book a Session
          </a>
        </div>
      </section>

      <footer style={{ padding: '24px', background: '#fff6fb', borderTop: '1px solid rgba(96,18,18,0.15)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <div>
            <p style={{ fontSize: '1.05rem', margin: 0, color: '#111827' }}>Akintomide Jumoke</p>
            <p style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: '#6b7280' }}>Chronic Pain Physical Therapist</p>
          </div>
          <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap' }}>
            <a href="#services" style={{ color: '#6b7280', textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.75rem' }}>Services</a>
            <a href="#about" style={{ color: '#6b7280', textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.75rem' }}>About</a>
            <a href="#contact" style={{ color: '#6b7280', textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.75rem' }}>Contact</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
