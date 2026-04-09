import { Code2, Palette, Rocket } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import aboutImg from "@/assets/about-img.jpg";

const highlights = [
  { icon: Code2, title: "Problem Solver", desc: "Love tackling complex coding challenges and competitive programming" },
  { icon: Palette, title: "Creative Builder", desc: "Building user-friendly interfaces with modern web technologies" },
  { icon: Rocket, title: "Quick Learner", desc: "Always exploring new frameworks, tools, and technologies" },
];

const AboutSection = () => {
  const header = useScrollAnimation();
  const imageAnim = useScrollAnimation(0.1);
  const cards = useScrollAnimation(0.1);

  return (
    <section id="about" className="py-24">
      <div className="container">
        <div ref={header.ref} className={`${header.isVisible ? "scroll-visible" : "scroll-hidden"}`}>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
            I'm a B.Tech Computer Science student with a strong passion for full-stack web development.
            I enjoy learning new technologies, building real-world projects, and solving problems through code.
          </p>
        </div>

        <div ref={imageAnim.ref} className={`grid md:grid-cols-2 gap-12 items-center mb-16 ${imageAnim.isVisible ? "scroll-visible" : "scroll-hidden"}`}>
          <div className="rounded-xl overflow-hidden border border-border glow-shadow">
            <img
              src={aboutImg}
              alt="Ramachandra Rao working"
              className="w-full h-auto object-cover"
              loading="lazy"
              width={800}
              height={800}
            />
          </div>
          <div className="space-y-6">
            <h3 className="font-heading text-2xl font-semibold">
              B.Tech CSE Student & Aspiring Developer
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Currently pursuing B.Tech in Computer Science & Engineering at Raghu Engineering College
              with a CGPA of 8.10. I'm passionate about Python, Java, and Data Structures & Algorithms.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I've built projects ranging from AI-based face recognition systems to Chrome extensions,
              and I'm always eager to learn new technologies and solve real-world problems.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-lg bg-card border border-border">
                <p className="text-2xl font-bold text-primary">8.10</p>
                <p className="text-xs text-muted-foreground">CGPA</p>
              </div>
              <div className="p-4 rounded-lg bg-card border border-border">
                <p className="text-2xl font-bold text-primary">4+</p>
                <p className="text-xs text-muted-foreground">Projects Built</p>
              </div>
            </div>
          </div>
        </div>

        <div ref={cards.ref} className={`grid md:grid-cols-3 gap-6 ${cards.isVisible ? "scroll-visible" : "scroll-hidden"}`}>
          {highlights.map((h, i) => (
            <div
              key={h.title}
              className="group p-8 rounded-xl bg-card border border-border hover:border-primary/50 transition-all hover:glow-shadow hover-scale"
              style={{ transitionDelay: cards.isVisible ? `${i * 150}ms` : "0ms" }}
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
