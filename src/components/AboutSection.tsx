import { Code2, Palette, Rocket } from "lucide-react";

const highlights = [
  { icon: Code2, title: "Clean Code", desc: "Writing maintainable, scalable solutions" },
  { icon: Palette, title: "Creative Design", desc: "Pixel-perfect, user-centered interfaces" },
  { icon: Rocket, title: "Performance", desc: "Optimized for speed and accessibility" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24">
      <div className="container">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-4">
          About <span className="text-gradient">Me</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
          I'm a passionate developer with 5+ years of experience building web applications.
          I love turning complex problems into simple, beautiful solutions.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((h) => (
            <div
              key={h.title}
              className="group p-8 rounded-xl bg-card border border-border hover:border-primary/50 transition-all hover:glow-shadow"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <h.icon className="text-primary" size={24} />
              </div>
              <h3 className="font-heading text-lg font-semibold mb-2">{h.title}</h3>
              <p className="text-muted-foreground text-sm">{h.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
