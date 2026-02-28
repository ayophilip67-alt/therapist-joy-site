import expectImage from "@/assets/expect-session.jpg";

const steps = [
  {
    number: "01",
    title: "Share Your Story",
    description:
      "Fill out your health intake form before your appointment. The more I know about your history, the better I can tailor your care.",
  },
  {
    number: "02",
    title: "Get Assessed & Treated",
    description:
      "During your session, we'll review your history, discuss your goals, and begin hands-on treatment with a personalized plan.",
  },
  {
    number: "03",
    title: "Stay on Track",
    description:
      "You'll leave with home exercises, self-care tips, and a recommended treatment schedule to help you feel better, faster.",
  },
];

const ExpectSection = () => {
  return (
    <section id="expect" className="relative">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={expectImage}
          alt="Physiotherapy session"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-dark-overlay/70" />
      </div>

      <div className="relative z-10 py-24 md:py-32">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-xs font-sans tracking-[0.3em] uppercase text-cream/70 mb-4">
              Let us get to know you
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-cream">
              What to Expect at Your First Visit
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-10 md:gap-16 max-w-5xl mx-auto">
            {steps.map((step) => (
              <div key={step.number} className="text-center space-y-4">
                <span className="font-serif text-5xl font-light text-cream/40">
                  {step.number}
                </span>
                <h3 className="font-serif text-2xl text-cream">{step.title}</h3>
                <p className="font-sans text-sm leading-relaxed text-cream/70">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpectSection;
