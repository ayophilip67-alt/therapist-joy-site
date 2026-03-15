const CTASection = () => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-foreground">
      <div className="container text-center max-w-3xl mx-auto">
        <p className="text-xs font-sans tracking-[0.3em] uppercase text-primary-foreground/60 mb-4">
          Get Started
        </p>
        <h2 className="font-serif text-4xl md:text-5xl font-light text-primary-foreground leading-tight mb-6">
          Experienced Therapist. Comfortable Space. You Call the Shots.
        </h2>
        <p className="font-sans text-base text-primary-foreground/70 leading-relaxed mb-10">
          This is your session — your comfort, your pace, your needs. Ready to start feeling better? Book your first appointment today.
        </p>
        <a
          href="mailto:info@ajpt.ca"
          className="inline-block border border-primary-foreground px-10 py-3.5 text-xs font-sans tracking-[0.2em] uppercase text-primary-foreground hover:bg-primary-foreground hover:text-foreground transition-colors"
        >
          Book a Session
        </a>
      </div>
    </section>
  );
};

export default CTASection;
