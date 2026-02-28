import aboutImage from "@/assets/about-therapist.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="overflow-hidden">
            <img
              src={aboutImage}
              alt="Akintomide Jumoke, Physiotherapist"
              className="w-full h-[500px] md:h-[600px] object-cover"
            />
          </div>

          <div className="space-y-6">
            <p className="text-xs font-sans tracking-[0.3em] uppercase text-muted-foreground">
              About
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-light leading-tight text-foreground">
              Your Chronic Pain Specialist
            </h2>
            <p className="font-sans text-base leading-relaxed text-muted-foreground">
              I'm Akintomide Jumoke, a licensed physical therapist specializing in chronic pain management. Whether you're dealing with persistent back pain, joint stiffness, nerve pain, or post-surgical discomfort — I'm here to help you reclaim your life without relying on medication alone.
            </p>
            <p className="font-sans text-base leading-relaxed text-muted-foreground">
              My approach is rooted in evidence-based practice, compassion, and a deep respect for your body's capacity to heal. Every treatment plan is designed with you — not just for you. You deserve care that listens first.
            </p>
            <a
              href="#contact"
              className="inline-block border border-foreground px-8 py-3 text-xs font-sans tracking-[0.2em] uppercase text-foreground hover:bg-foreground hover:text-primary-foreground transition-colors mt-4"
            >
              More on me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
