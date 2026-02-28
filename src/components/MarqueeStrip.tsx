interface MarqueeStripProps {
  items: string[];
  variant?: "dark" | "light";
}

const MarqueeStrip = ({ items, variant = "dark" }: MarqueeStripProps) => {
  const bg = variant === "dark" ? "bg-foreground" : "bg-secondary";
  const text = variant === "dark" ? "text-primary-foreground" : "text-foreground";

  const content = items.join("  |  ");
  const repeated = `${content}  |  ${content}  |  `;

  return (
    <div className={`${bg} py-3 overflow-hidden whitespace-nowrap`}>
      <div className={`inline-block animate-marquee ${text} text-xs font-sans tracking-[0.25em] uppercase`}>
        {repeated}
      </div>
    </div>
  );
};

export default MarqueeStrip;
