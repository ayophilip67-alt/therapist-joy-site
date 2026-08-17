import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

const faqItems = [
  {
    question: "Do I need a doctor's referral to book physiotherapy?",
    answer: "No. You can contact Healing at Home directly to book an assessment. However, some extended health insurance plans may require a physician's referral before they will reimburse physiotherapy expenses, so it's worth checking your individual plan.",
  },
  {
    question: 'What areas do you provide in-home physiotherapy in?',
    answer: 'Healing at Home provides mobile physiotherapy across Burlington and the Greater Hamilton area, including communities such as Ancaster, Dundas, Stoney Creek, Waterdown, and Binbrook. If you\'re unsure whether your home falls within the service area, feel free to get in touch.',
  },
  {
    question: 'How does booking an in-home appointment work?',
    answer: 'Because I travel between different communities to provide care, appointments are requested rather than booked instantly online. When you submit an appointment request, you can share the days and times that work best for you. I\'ll then coordinate my home visits in your area and get back to you with an appointment time that works for both of us.',
  },
  {
    question: 'How do I know whether I need a 60- or 90-minute initial assessment?',
    answer: 'The 60-minute assessment is generally a good fit for a more straightforward concern, such as a recent injury, a single area of pain, or post-surgical rehabilitation with clearly defined goals. The 90-minute assessment provides more time to explore complex or persistent pain, multiple concerns, or the broader factors affecting your recovery. It is also recommended for older adults who would benefit from a more comprehensive strength, mobility, balance, and fall-risk assessment.',
  },
  {
    question: 'Will my insurance cover in-home physiotherapy?',
    answer: 'Physiotherapy provided by a Registered Physiotherapist is often eligible for reimbursement through extended health benefits. Coverage varies between insurance plans, including how much is covered and whether a physician\'s referral is required. Healing at Home does not currently offer direct billing, but you will receive a receipt that you can submit to your insurance provider for reimbursement.',
  },
  {
    question: "What if I've already tried physiotherapy and I'm still in pain?",
    answer: 'That\'s okay. In fact, Healing at Home\'s approach may be particularly helpful if you\'ve been dealing with pain for a long time or feel like you\'ve tried different treatments without fully understanding why your symptoms persist. Rather than focusing only on the painful area, we can explore the bigger picture - including movement, strength, sleep, stress, daily routines, beliefs about pain, and other factors that may be influencing your experience. From there, we work together to identify strategies that make sense for you and help you become more confident managing your health independently.',
  },
  {
    question: 'What should I wear or prepare for my first appointment?',
    answer: 'Wear something comfortable that allows you to move freely and, where possible, allows access to the area we\'ll be assessing. It can also be helpful to have any relevant medical or surgical information available. You don\'t need any special equipment or a large exercise space - I\'ll bring what is needed for the session and work with the space you have. In fact, being in your own environment can help us find practical ways to make movement and exercise fit more naturally into your everyday life.',
  },
];

function FAQ() {
  const [faqOpen, setFaqOpen] = useState(false);
  const [openQuestions, setOpenQuestions] = useState({});

  const toggleQuestion = (index) => {
    setOpenQuestions((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div style={{ marginTop: '3rem', paddingTop: '3rem', borderTop: '1px solid #ece7dc' }}>
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <p style={{ textTransform: 'uppercase', letterSpacing: '0.25em', fontSize: '0.8rem', color: '#6b7280', marginBottom: 12 }}>Support</p>
        <h2 style={{ fontSize: '2rem', margin: 0, lineHeight: 1.15, color: '#111827', marginBottom: '1rem' }}>Frequently Asked Questions</h2>
      </div>

      <button
        type="button"
        onClick={() => setFaqOpen(!faqOpen)}
        style={{
          display: 'block',
          margin: '0 auto 2rem',
          padding: '12px 24px',
          background: '#111827',
          color: '#fff',
          border: 'none',
          borderRadius: 6,
          cursor: 'pointer',
          textTransform: 'uppercase',
          letterSpacing: '0.2em',
          fontSize: '0.8rem',
          fontWeight: 500,
        }}
      >
        {faqOpen ? 'Hide Questions' : 'Show Questions'}
      </button>

      {faqOpen && (
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ display: 'grid', gap: '1rem' }}>
            {faqItems.map((item, index) => (
              <div
                key={index}
                style={{
                  border: '1px solid #ece7dc',
                  borderRadius: 8,
                  overflow: 'hidden',
                  background: '#fff',
                }}
              >
                <button
                  type="button"
                  onClick={() => toggleQuestion(index)}
                  style={{
                    width: '100%',
                    padding: '1.2rem 1.5rem',
                    background: '#f9f7f2',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    fontSize: '1rem',
                    fontWeight: 500,
                    color: '#111827',
                    transition: 'background-color 0.2s ease',
                    fontFamily: '"Jost", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  }}
                  onMouseEnter={(e) => (e.target.style.background = '#ede9df')}
                  onMouseLeave={(e) => (e.target.style.background = '#f9f7f2')}
                >
                  <span>{item.question}</span>
                  <span
                    style={{
                      marginLeft: '1rem',
                      flexShrink: 0,
                      fontSize: '1.2rem',
                      transform: openQuestions[index] ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.2s ease',
                    }}
                  >
                    ▼
                  </span>
                </button>

                {openQuestions[index] && (
                  <div style={{ padding: '1.5rem', borderTop: '1px solid #ece7dc', color: '#4b5563', lineHeight: 1.7 }}>
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function Services() {
  return (
    <main style={{ fontFamily: '"Jost", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif', lineHeight: 1.6, color: '#1f2937', background: '#fff' }}>
      <Header currentPage="services" />

      <section style={{ padding: '110px 24px 48px', background: '#f9f7f2' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', alignItems: 'center' }}>
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
            <img src="/assets/services.jpeg" alt="Physiotherapy treatment" style={{ width: '100%', height: 'auto', maxHeight: '430px', objectFit: 'cover', display: 'block' }} />
          </div>
        </div>
      </section>

      <section id="expect" style={{ padding: '0 0 64px' }}>
        <div style={{ width: '100%', background: '#f9f7f2', padding: '2.5rem 24px', borderTop: '1px solid #ece7dc', borderBottom: '1px solid #ece7dc' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <p style={{ textTransform: 'uppercase', letterSpacing: '0.25em', fontSize: '0.8rem', color: '#6b7280', marginBottom: 12 }}>Services</p>
              <h2 style={{ fontSize: '2rem', margin: 0, lineHeight: 1.15, color: '#111827' }}>How I can support you</h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
              <div style={{ background: '#fff', border: '1px solid #ece7dc', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem', boxShadow: '0 10px 30px rgba(17,24,39,0.04)' }}>
                <div style={{ width: 48, height: 48, borderRadius: '999px', background: '#f9f7f2', border: '1px solid #ece7dc', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#111827" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M12 4c2.2 0 4 1.8 4 4s-1.8 4-4 4-4-1.8-4-4 1.8-4 4-4Z" />
                    <path d="M5 18c0-3.3 3.1-6 7-6s7 2.7 7 6" />
                  </svg>
                </div>
                <div>
                  <h3 style={{ fontSize: '1.2rem', margin: '0 0 0.6rem', color: '#111827' }}>How can I help?</h3>
                  <p style={{ color: '#4b5563', margin: 0, lineHeight: 1.7 }}>
                    Every person’s experience with pain is unique, so treatment is always tailored to you. Depending on your goals and what feels most helpful, your care may include a combination of:
                  </p>
                </div>
                <ul style={{ margin: 0, paddingLeft: '1rem', color: '#4b5563', display: 'grid', gap: '0.45rem' }}>
                  <li>Movement and exercise therapy</li>
                  <li>Manual therapy techniques</li>
                  <li>Pain Education</li>
                  <li>Dry needling and acupuncture</li>
                  <li>Graded exposure to movement or activities</li>
                  <li>Pain Reprocessing Therapy</li>
                  <li>Lifestyle and habit support</li>
                  <li>Self-management strategies</li>
                </ul>
              </div>

              <div style={{ background: '#fff', border: '1px solid #ece7dc', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem', boxShadow: '0 10px 30px rgba(17,24,39,0.04)' }}>
                <div style={{ width: 48, height: 48, borderRadius: '999px', background: '#f9f7f2', border: '1px solid #ece7dc', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#111827" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M3 10.5 12 4l9 6.5v8A1.5 1.5 0 0 1 18.5 20h-13A1.5 1.5 0 0 1 4 18.5v-8Z" />
                    <path d="M9 20v-5h6v5" />
                    <path d="M10.5 10.5h3" />
                  </svg>
                </div>
                <div>
                  <h3 style={{ fontSize: '1.2rem', margin: '0 0 0.6rem', color: '#111827' }}>Why choose in-home physiotherapy?</h3>
                  <p style={{ color: '#4b5563', margin: 0, lineHeight: 1.7 }}>
                    Because your home is where life happens. Treating you in your own environment allows me to see how you move through your daily routines and identify challenges that aren’t visible in a clinic. That means treatment can focus on:
                  </p>
                </div>
                <ul style={{ margin: 0, paddingLeft: '1rem', color: '#4b5563', display: 'grid', gap: '0.45rem' }}>
                  <li>Getting up from your favourite chair</li>
                  <li>Navigating stairs safely</li>
                  <li>Walking outdoors with confidence</li>
                  <li>Returning to gardening</li>
                  <li>Playing with grandchildren</li>
                  <li>Managing everyday activities that matter to you</li>
                </ul>
              </div>

              <div style={{ background: '#fff', border: '1px solid #ece7dc', padding: '1.5rem', display: 'none', flexDirection: 'column', gap: '1rem', boxShadow: '0 10px 30px rgba(17,24,39,0.04)' }}>
                <div style={{ width: 48, height: 48, borderRadius: '999px', background: '#f9f7f2', border: '1px solid #ece7dc', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#111827" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M4 7h16" />
                    <path d="M7 7v10a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V7" />
                    <path d="M9 4h6" />
                    <path d="M10 11h4" />
                    <path d="M10 14h4" />
                  </svg>
                </div>
                <div>
                  <h3 style={{ fontSize: '1.2rem', margin: '0 0 0.6rem', color: '#111827' }}>How much do my services cost?</h3>
                </div>
                <div style={{ display: 'grid', gap: '0.8rem' }}>
                  <div style={{ borderBottom: '1px solid #ece7dc', paddingBottom: '0.7rem' }}>
                    <p style={{ margin: '0 0 0.2rem', fontWeight: 600, color: '#111827' }}>First visit (60 minutes) — $150</p>
                    <p style={{ margin: 0, color: '#4b5563', lineHeight: 1.6 }}>A comprehensive assessment to understand your pain, goals and create a personalized plan.</p>
                  </div>
                  <div style={{ borderBottom: '1px solid #ece7dc', paddingBottom: '0.7rem' }}>
                    <p style={{ margin: '0 0 0.2rem', fontWeight: 600, color: '#111827' }}>Follow-Up Session (45 minutes) — $120</p>
                    <p style={{ margin: 0, color: '#4b5563', lineHeight: 1.6 }}>Ongoing treatment focused on building progress and supporting your goals.</p>
                  </div>
                  <div>
                    <p style={{ margin: '0 0 0.2rem', fontWeight: 600, color: '#111827' }}>Follow-Up Session with Acupuncture (45 minutes) — $135</p>
                    <p style={{ margin: 0, color: '#4b5563', lineHeight: 1.6 }}>Includes all aspects of a follow-up session, with the option of acupuncture/dry needling as part of your care.</p>
                  </div>
                </div>
                <p style={{ margin: 0, color: '#4b5563', lineHeight: 1.7 }}>
                  Please note: Services are privately paid. Direct billing is not available at this time, but you will receive a receipt that you can submit to your insurance provider for reimbursement.
                </p>
              </div>

              <div style={{ background: '#fff', border: '1px solid #ece7dc', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem', boxShadow: '0 10px 30px rgba(17,24,39,0.04)' }}>
                <div style={{ width: 48, height: 48, borderRadius: '999px', background: '#f9f7f2', border: '1px solid #ece7dc', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#111827" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M12 2v20M2 12h20" />
                    <circle cx="12" cy="12" r="10" />
                  </svg>
                </div>
                <div>
                  <h3 style={{ fontSize: '1.2rem', margin: '0 0 0.6rem', color: '#111827' }}>What conditions can I help with?</h3>
                  <p style={{ color: '#4b5563', margin: 0, lineHeight: 1.7 }}>
                    I work with individuals experiencing a wide range of musculoskeletal conditions and pain-related challenges. Whether you're managing a chronic condition, recovering from an injury, or experiencing new pain patterns, I can help create a tailored treatment approach.
                  </p>
                </div>
                <ul style={{ margin: 0, paddingLeft: '1rem', color: '#4b5563', display: 'grid', gap: '0.45rem' }}>
                  <li>Chronic & Persistent Pain</li>
                  <li>Hip & Knee Pain</li>
                  <li>Back & Neck Pain</li>
                  <li>Post-surgical Rehabilitation</li>
                  <li>Pain related to arthritis</li>
                  <li>Shoulder Pain</li>
                  <li>Fibromyalgia</li>
                  <li>Balance & Mobility difficulties</li>
                  <li>Strains & Sprains</li>
                  <li>Sciatica & Nerve related pain</li>
                  <li>Reduced Strength & Deconditioning</li>
                </ul>
              </div>
            </div>

            <div style={{ marginTop: '3rem', paddingTop: '3rem', borderTop: '1px solid #ece7dc' }}>
              <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <p style={{ textTransform: 'uppercase', letterSpacing: '0.25em', fontSize: '0.8rem', color: '#6b7280', marginBottom: 12 }}>Investment</p>
                <h2 style={{ fontSize: '2rem', margin: 0, lineHeight: 1.15, color: '#111827', marginBottom: '1rem' }}>Pricing</h2>
              </div>
              
              <p style={{ color: '#4b5563', maxWidth: 700, lineHeight: 1.7, marginBottom: '1.5rem' }}>
                Your entire life contributes to how your body feels. That's why every visit starts with understanding you as a whole person — not just the joint, the muscle, or the diagnosis — before we build a plan together.
              </p>
              
              <p style={{ color: '#4b5563', maxWidth: 700, lineHeight: 1.7, marginBottom: '2.5rem' }}>
                Below is an outline of session options. If you're not sure what fits, reach out and we'll figure it out together.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
                <div style={{ background: '#f9f7f2', border: '1px solid #ece7dc', padding: '2rem', borderRadius: 12 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                    <div style={{ width: 48, height: 48, borderRadius: '999px', background: '#fff', border: '1px solid #ece7dc', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#111827" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M9 11l3 3L22 4" />
                        <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 style={{ fontSize: '1.3rem', margin: 0, color: '#111827' }}>Initial Assessments</h3>
                  </div>

                  <div style={{ display: 'grid', gap: '1.5rem' }}>
                    <div style={{ borderBottom: '1px solid #e5e7eb', paddingBottom: '1rem' }}>
                      <p style={{ margin: '0 0 0.5rem', fontWeight: 600, color: '#111827', fontSize: '1.1rem' }}>90-Minute Assessment — $220</p>
                      <p style={{ margin: 0, color: '#6b7280', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '0.75rem' }}>
                        This is the right starting point if:
                      </p>
                      <ul style={{ margin: 0, paddingLeft: '1.2rem', color: '#6b7280', display: 'grid', gap: '0.3rem', fontSize: '0.9rem' }}>
                        <li>You've been living with persistent or long-standing pain, especially if it's shifted, spread, or been hard to pin down over time</li>
                        <li>You've tried other treatment before and it hasn't fully helped</li>
                        <li>You're an older adult looking to build strength and independence at home, including a full-body assessment and balance/fall-risk evaluation</li>
                        <li>Life stress, sleep, or mood feel connected to how your body is doing</li>
                      </ul>
                      <p style={{ margin: '0.75rem 0 0', color: '#6b7280', fontSize: '0.9rem', lineHeight: 1.6 }}>
                        We'll spend this time properly — going through your history in detail, assessing movement and function, and building a plan that actually fits your life.
                      </p>
                    </div>

                    <div>
                      <p style={{ margin: '0 0 0.5rem', fontWeight: 600, color: '#111827', fontSize: '1.1rem' }}>60-Minute Assessment — $180</p>
                      <p style={{ margin: 0, color: '#6b7280', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '0.75rem' }}>
                        This is the right starting point if:
                      </p>
                      <ul style={{ margin: 0, paddingLeft: '1.2rem', color: '#6b7280', display: 'grid', gap: '0.3rem', fontSize: '0.9rem' }}>
                        <li>You have a clear, single-region issue (a strain, a sprain, a recent flare-up)</li>
                        <li>You're coming in post-surgery with a defined surgical plan already in place</li>
                        <li>Your goals are fairly specific and contained</li>
                      </ul>
                      <p style={{ margin: '0.75rem 0 0', color: '#6b7280', fontSize: '0.9rem', lineHeight: 1.6 }}>
                        If it turns out you need more time to do this properly, we'll talk about it together — no pressure, no surprises.
                      </p>
                    </div>
                  </div>
                </div>

                <div style={{ background: '#f9f7f2', border: '1px solid #ece7dc', padding: '2rem', borderRadius: 12 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                    <div style={{ width: 48, height: 48, borderRadius: '999px', background: '#fff', border: '1px solid #ece7dc', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#111827" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2" />
                      </svg>
                    </div>
                    <h3 style={{ fontSize: '1.3rem', margin: 0, color: '#111827' }}>Follow-Up Sessions</h3>
                  </div>

                  <p style={{ margin: '0 0 1.5rem', color: '#6b7280', lineHeight: 1.7, fontSize: '0.95rem' }}>
                    Follow-up sessions build on your assessment and typically include hands-on treatment, movement and exercise coaching, pain education, acupuncture if needed, and practical strategies for the parts of daily life you're working to get back.
                  </p>

                  <div style={{ display: 'grid', gap: '1.5rem' }}>
                    <div style={{ borderBottom: '1px solid #e5e7eb', paddingBottom: '1rem' }}>
                      <p style={{ margin: '0 0 0.3rem', fontWeight: 600, color: '#111827', fontSize: '1.1rem' }}>60-Minute Follow-Up — $170</p>
                      <p style={{ margin: 0, color: '#6b7280', fontSize: '0.9rem' }}>Full session building on your assessment</p>
                    </div>

                    <div>
                      <p style={{ margin: '0 0 0.3rem', fontWeight: 600, color: '#111827', fontSize: '1.1rem' }}>45-Minute Follow-Up — $140</p>
                      <p style={{ margin: 0, color: '#6b7280', fontSize: '0.9rem' }}>Focused session once progress is underway</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ marginTop: '2.5rem', paddingTop: '2rem', borderTop: '1px solid #ece7dc' }}>
              <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                <p style={{ textTransform: 'uppercase', letterSpacing: '0.25em', fontSize: '0.8rem', color: '#6b7280', marginBottom: 8 }}>What to Expect</p>
                <h3 style={{ fontSize: '1.6rem', margin: 0, lineHeight: 1.2, color: '#111827' }}>What to Expect at Your First Visit</h3>
              </div>
              <div style={{ position: 'relative', overflow: 'hidden', borderRadius: 24, border: '1px solid #ece7dc', minHeight: 420, background: '#111827' }}>
                <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(180deg, rgba(17,24,39,0.78) 0%, rgba(17,24,39,0.64) 35%, rgba(17,24,39,0.85) 100%), url(/assets/expect-session-DkQk4Cij.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', filter: 'brightness(0.7)', zIndex: 0 }} />
                <div style={{ position: 'relative', zIndex: 1, maxWidth: 1200, margin: '0 auto', padding: '4rem 2rem' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
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
                      <div key={step.number} style={{ padding: '1.6rem', borderRadius: 20, background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.14)', color: '#f8fafc', minHeight: 260, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                        <span style={{ fontSize: '2.4rem', fontWeight: 600, color: '#f8fafc', opacity: 0.9 }}>{step.number}</span>
                        <div>
                          <h4 style={{ fontSize: '1.1rem', margin: '0 0 0.75rem', color: '#fff' }}>{step.title}</h4>
                          <p style={{ margin: 0, color: '#e5e7eb', lineHeight: 1.75 }}>{step.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <FAQ />
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
