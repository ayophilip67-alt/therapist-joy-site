import heroImage from "@/assets/hero-physio.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <img
        src={heroImage}
        alt="Physiotherapy treatment session"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-dark-overlay/50" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <p className="text-sm font-sans tracking-[0.3em] uppercase text-cream/80 mb-4 animate-fade-up">
          Relax, you're in the right place
        </p>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light text-cream leading-tight animate-fade-up" style={{ animationDelay: "0.2s" }}>
          Chronic Pain
          <br />
          Physical Therapy
        </h1>
      </div>
    </section>
  );
};

export default HeroSection;
