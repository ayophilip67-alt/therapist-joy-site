import { Link } from 'react-router-dom';
import Header from '../components/Header';

export default function About() {
  return (
    <main style={{ fontFamily: '"Jost", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif', lineHeight: 1.6, color: '#1f2937', background: '#fff' }}>
      <Header currentPage="about" />

      {/* Hero Section */}
      <section style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '110px 20px 70px', background: '#f9f7f2' }}>
        <div style={{ maxWidth: 960, width: '100%', textAlign: 'center' }}>
          <p style={{ textTransform: 'uppercase', letterSpacing: '0.3em', fontSize: '0.85rem', marginBottom: 16, color: '#6b7280' }}>About</p>
          <h1 style={{ fontSize: 'clamp(2.4rem, 4vw, 4.6rem)', lineHeight: 1.1, margin: '0 0 18px', fontWeight: 400, fontFamily: 'Halimun, Jost, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif', color: '#111827' }}>
            Akintomide Jumoke
          </h1>
          <p style={{ fontSize: '1rem', letterSpacing: '0.3em', textTransform: 'uppercase', opacity: 0.8, color: '#6b7280' }}>
            Registered Physiotherapist
          </p>
        </div>
      </section>

      {/* Section 1: Image (Left) - Text (Right) */}
      <section style={{ padding: '80px 24px', background: '#fff' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
          <div>
            <img src="/assets/ajpicture.jpg" alt="Akintomide Jumoke" style={{ width: '100%', height: 'auto', objectFit: 'cover', display: 'block', borderRadius: '4px' }} />
          </div>
          <div>
            <p style={{ color: '#4b5563', lineHeight: 1.8, fontSize: '0.95rem' }}>
              I'm AJ, a Registered Physiotherapist and the founder of Healing at Home. I have over six years of clinical experience as a physiotherapist, working with people across a range of musculoskeletal, pain, mobility, and rehabilitation needs. My background also includes a Master's degree in Rehabilitation Sciences from Western University, where my research focused on interprofessional education and the value of different healthcare professionals working together to support better care. That experience helped shape one of the principles I continue to bring into my practice today: good care is collaborative. I value working alongside my clients, their families when appropriate, and other healthcare professionals involved in their care, recognizing that each person brings an important piece of the bigger picture.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Text (Left) - Image (Right) */}
      <section style={{ padding: '80px 24px', background: '#f9f7f2' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
          <div>
            <p style={{ color: '#4b5563', lineHeight: 1.8, fontSize: '0.95rem' }}>
              Over the years, I've continued to expand my clinical training through approaches including acupuncture, dry needling, manual therapy, movement and exercise rehabilitation, and persistent pain management. My approach to physiotherapy has evolved beyond simply asking, "Where does it hurt?" I believe your entire life can contribute to how your body feels. Pain and recovery can be influenced by movement and physical health, but also by stress, sleep, past experiences, beliefs, routines, and the environment around you. That's why I take a whole-person and trauma-informed approach to care. I recognize that our experiences can shape how we feel, move, and respond to treatment. I aim to create a space where you feel heard, respected, and involved in decisions about your care, and where treatment progresses at a pace that feels safe and manageable for you. My goal isn't for you to depend on physiotherapy indefinitely. It's to help you better understand your body, rebuild confidence in what it can do, and develop the tools to take an active role in your own recovery.
            </p>
          </div>
          <div>
            <img src="/assets/Chalkboard.jpeg" alt="Chalkboard art" style={{ width: '100%', height: 'auto', objectFit: 'cover', display: 'block', borderRadius: '4px' }} />
          </div>
        </div>
      </section>

      {/* Section 3: Image (Left) - Text (Right) */}
      <section style={{ padding: '80px 24px', background: '#fff' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
          <div>
            <img src="/assets/MountainSunrise.jpeg" alt="Mountain sunrise" style={{ width: '100%', height: 'auto', objectFit: 'cover', display: 'block', borderRadius: '4px' }} />
          </div>
          <div>
            <p style={{ color: '#4b5563', lineHeight: 1.8, fontSize: '0.95rem' }}>
              My interest in persistent pain is also personal. My own experience with ongoing pain challenged me to look beyond muscles, joints, and tissues alone. Knowing what I do about how the body heals, I became curious about why pain can sometimes continue even when the expected timeline for tissue healing has passed, and what else might be influencing how the body feels. That curiosity led me deeper into the research around persistent pain and the many factors that can shape our experience of it—from stress and sleep to emotions, beliefs, movement, environment, and life experiences. It's also taught me that living well with persistent pain can be an ongoing process of learning: paying attention, trying different strategies, exploring different parts of your life, and discovering what helps you. That's a journey I continue to learn from myself, and it has deeply shaped the way I support others - less about searching for one thing to "fix," and more about helping each person understand their own pain and find the tools that help them move forward.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: Text (Left) - Image (Right) */}
      <section style={{ padding: '80px 24px', background: '#f9f7f2' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
          <div>
            <p style={{ color: '#4b5563', lineHeight: 1.8, fontSize: '0.95rem' }}>
              Outside of physio, I love exploring new places and trying new food. I enjoy staying active and getting outdoors for a hike, but I'm equally happy being a couch potato while watching a good show. I also enjoy attending wellness events and exploring different ways to approach health and well-being. Most importantly, I value spending time with my community. For me, these are the things that make life feel full, and they're also a reminder of why movement and health matter in the first place: not simply to function better, but to keep doing and enjoying the things that make life meaningful.
            </p>
          </div>
          <div>
            <img src="/assets/Yoga.JPEG" alt="Yoga practice" style={{ width: '100%', height: 'auto', objectFit: 'cover', display: 'block', borderRadius: '4px' }} />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: '96px 24px 120px', background: '#111827', color: '#f9fafb' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
          <p style={{ textTransform: 'uppercase', letterSpacing: '0.3em', fontSize: '0.8rem', color: 'rgba(249,250,251,0.6)', marginBottom: 16 }}>Ready to get started?</p>
          <h2 style={{ fontSize: '2.3rem', margin: '0 0 1rem', lineHeight: 1.15 }}>Let's Work Together</h2>
          <p style={{ color: 'rgba(249,250,251,0.75)', marginBottom: '2rem', lineHeight: 1.8 }}>
            Ready to take the next step toward feeling better? Get in touch to book a session or ask any questions.
          </p>
          <a href="https://forms.gle/nezJvAoj23BmfqnZ8" style={{ display: 'inline-block', border: '1px solid #f9fafb', padding: '14px 24px', color: '#f9fafb', textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.2em', fontSize: '0.8rem' }}>
            Book a Session
          </a>
        </div>
      </section>

      <footer style={{ padding: '24px', background: '#f9f7f2', borderTop: '1px solid #ece7dc' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <div>
            <p style={{ fontSize: '1.05rem', margin: 0, color: '#111827' }}>Akintomide Jumoke</p>
            <p style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: '#6b7280' }}>Chronic Pain Physical Therapist</p>
          </div>
          <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap' }}>
            <a href="/#/services" style={{ color: '#6b7280', textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.75rem' }}>Services</a>
            <a href="/#/about" style={{ color: '#6b7280', textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.75rem' }}>About</a>
            <Link to="/" style={{ color: '#6b7280', textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.75rem' }}>Home</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
