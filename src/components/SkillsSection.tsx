const skills = [
  { name: "React", level: 95 },
  { name: "TypeScript", level: 90 },
  { name: "Node.js", level: 85 },
  { name: "CSS / Tailwind", level: 92 },
  { name: "Python", level: 75 },
  { name: "PostgreSQL", level: 80 },
];

const techStack = ["React", "Next.js", "TypeScript", "Node.js", "Express", "PostgreSQL", "MongoDB", "Tailwind CSS", "Docker", "Git", "AWS", "Figma"];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 bg-card/50">
      <div className="container">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-4">
          My <span className="text-gradient">Skills</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
          Technologies and tools I work with daily.
        </p>
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto mb-16">
          {skills.map((s) => (
            <div key={s.name}>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium">{s.name}</span>
                <span className="text-sm text-muted-foreground">{s.level}%</span>
              </div>
              <div className="h-2 rounded-full bg-secondary">
                <div
                  className="h-full rounded-full bg-primary transition-all duration-1000"
                  style={{ width: `${s.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {techStack.map((t) => (
            <span key={t} className="px-4 py-2 rounded-full text-sm border border-border bg-secondary/50 text-foreground hover:border-primary/50 transition-colors">
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
