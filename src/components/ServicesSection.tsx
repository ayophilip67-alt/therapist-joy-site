import servicesImage from "@/assets/services-treatment.jpg";

const services = [
  "Chronic Pain Management",
  "Manual Therapy",
  "Post-Surgical Rehabilitation",
  "Dry Needling",
  "Mobility & Flexibility Training",
  "Ergonomic Assessment",
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 md:py-32 bg-secondary">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="space-y-6 order-2 md:order-1">
            <p className="text-xs font-sans tracking-[0.3em] uppercase text-muted-foreground">
              Services
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-light leading-tight text-foreground">
              Relief That Lasts
            </h2>
            <h3 className="font-serif text-xl italic text-muted-foreground">
              Your Session. Your Goals. Your Pace.
            </h3>
            <p className="font-sans text-base leading-relaxed text-muted-foreground">
              Chronic pain isn't just physical — it affects how you sleep, work, and show up in your life. My treatments address the root cause, not just the symptoms, using a combination of hands-on techniques and guided movement.
            </p>
            <ul className="space-y-3 pt-2">
              {services.map((s) => (
                <li key={s} className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-foreground shrink-0" />
                  <span className="font-sans text-sm text-foreground">{s}</span>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="inline-block border border-foreground px-8 py-3 text-xs font-sans tracking-[0.2em] uppercase text-foreground hover:bg-foreground hover:text-primary-foreground transition-colors mt-4"
            >
              Learn More
            </a>
          </div>

          <div className="overflow-hidden order-1 md:order-2">
            <img
              src={servicesImage}
              alt="Physiotherapy treatment"
              className="w-full h-[500px] md:h-[600px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
