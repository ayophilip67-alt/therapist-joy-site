const Footer = () => {
  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <div>
          <p className="font-serif text-lg text-foreground">Akintomide Jumoke</p>
          <p className="font-sans text-xs tracking-[0.15em] uppercase text-muted-foreground">
            Chronic Pain Physical Therapist
          </p>
        </div>
        <div className="flex gap-8">
          <a href="#services" className="font-sans text-xs tracking-[0.1em] uppercase text-muted-foreground hover:text-foreground transition-colors">
            Services
          </a>
          <a href="#about" className="font-sans text-xs tracking-[0.1em] uppercase text-muted-foreground hover:text-foreground transition-colors">
            About
          </a>
          <a href="#contact" className="font-sans text-xs tracking-[0.1em] uppercase text-muted-foreground hover:text-foreground transition-colors">
            Contact
          </a>
        </div>
        <p className="font-sans text-xs text-muted-foreground">
          © {new Date().getFullYear()} Akintomide Jumoke. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
