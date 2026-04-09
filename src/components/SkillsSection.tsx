import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const skills = [
  { name: "Python", level: 85 },
  { name: "Java", level: 80 },
  { name: "C", level: 70 },
  { name: "DSA (Python)", level: 75 },
  { name: "HTML / CSS", level: 85 },
  { name: "JavaScript", level: 70 },
  { name: "SQL", level: 70 },
  { name: "Machine Learning", level: 65 },
];

const techStack = [
  "Python", "Java", "C", "JavaScript", "HTML", "CSS", "SQL",
  "NumPy", "Pandas", "OpenCV", "Tkinter", "Scikit-learn",
  "Git", "GitHub", "VS Code", "Jupyter Notebook",
  "MS Excel", "Figma", "Canva", "Chrome Extensions API",
];

const softSkills = [
  "Teamwork & Collaboration",
  "Planning & Organizing",
  "Analytical Thinking",
  "Problem Solving",
  "Communication",
  "Time Management",
];

const SkillsSection = () => {
  const header = useScrollAnimation();
  const bars = useScrollAnimation(0.1);
  const stack = useScrollAnimation(0.1);

  return (
    <section id="skills" className="py-24 bg-card/50">
      <div className="container">
        <div ref={header.ref} className={`${header.isVisible ? "scroll-visible" : "scroll-hidden"}`}>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-4">
            My <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
            Technologies and tools I'm learning and working with.
          </p>
        </div>
        <div ref={bars.ref} className={`grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16 ${bars.isVisible ? "scroll-visible" : "scroll-hidden"}`}>
          {skills.map((s, i) => (
            <div key={s.name} style={{ transitionDelay: bars.isVisible ? `${i * 80}ms` : "0ms" }}>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium">{s.name}</span>
                <span className="text-sm text-muted-foreground">{s.level}%</span>
              </div>
              <div className="h-2.5 rounded-full bg-secondary">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-1000"
                  style={{ width: bars.isVisible ? `${s.level}%` : "0%" }}
                />
              </div>
            </div>
          ))}
        </div>
        <div ref={stack.ref} className={`${stack.isVisible ? "scroll-visible" : "scroll-hidden"}`}>
          <h3 className="font-heading text-lg font-semibold text-center mb-4">Tech Stack</h3>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {techStack.map((t) => (
              <span key={t} className="px-4 py-2 rounded-full text-sm border border-border bg-secondary/50 text-foreground hover:border-primary/50 transition-colors">
                {t}
              </span>
            ))}
          </div>
          <h3 className="font-heading text-lg font-semibold text-center mb-4">Soft Skills</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {softSkills.map((t) => (
              <span key={t} className="px-4 py-2 rounded-full text-sm border border-accent/30 bg-accent/10 text-foreground hover:border-accent/50 transition-colors">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
