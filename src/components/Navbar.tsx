import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "What to Expect", href: "#expect" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm">
      <nav className="container flex items-center justify-between py-5">
        <a href="#" className="font-serif text-xl font-semibold tracking-wide text-foreground">
          AKINTOMIDE JUMOKE
          <span className="block text-xs font-sans font-normal tracking-[0.2em] text-muted-foreground">
            PHYSIOTHERAPY
          </span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm font-sans tracking-[0.15em] uppercase text-foreground hover:text-muted-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="border border-foreground px-6 py-2.5 text-xs font-sans tracking-[0.2em] uppercase text-foreground hover:bg-foreground hover:text-primary-foreground transition-colors"
          >
            Book Now
          </a>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background border-t border-border px-6 py-8 space-y-6">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-sm font-sans tracking-[0.15em] uppercase text-foreground"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="inline-block border border-foreground px-6 py-2.5 text-xs font-sans tracking-[0.2em] uppercase text-foreground"
          >
            Book Now
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
