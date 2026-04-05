import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Face Recognition System",
    desc: "AI-powered face recognition system for real-time identification and verification using deep learning models.",
    tags: ["Python", "OpenCV", "TensorFlow", "AI"],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24">
      <div className="container">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-4">
          Featured <span className="text-gradient">Projects</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
          A selection of recent work I'm proud of.
        </p>
        <div className="grid md:grid-cols-3 gap-6 max-w-md md:max-w-lg mx-auto">
          {projects.map((p) => (
            <div
              key={p.title}
              className="group flex flex-col rounded-xl bg-card border border-border overflow-hidden hover:border-primary/50 transition-all hover:glow-shadow"
            >
              <div className="h-48 bg-secondary/50 flex items-center justify-center">
                <span className="font-heading text-lg text-muted-foreground">{p.title}</span>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-heading text-lg font-semibold mb-2">{p.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 flex-1">{p.desc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tags.map((t) => (
                    <span key={t} className="px-2 py-1 text-xs rounded bg-primary/10 text-primary">{t}</span>
                  ))}
                </div>
                <div className="flex gap-3 text-muted-foreground">
                  <a href="#" className="hover:text-primary transition-colors"><Github size={18} /></a>
                  <a href="#" className="hover:text-primary transition-colors"><ExternalLink size={18} /></a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
