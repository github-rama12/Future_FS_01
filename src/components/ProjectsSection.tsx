import { useState } from "react";
import { X } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const projects = [
  {
    title: "AI-Based Smart Attendance System",
    desc: "Real-time attendance system using OpenCV and LBPH algorithm with face detection and recognition.",
    tags: ["Python", "OpenCV", "NumPy", "Pandas", "Tkinter"],
    details: "Developed a real-time attendance system using OpenCV and LBPH algorithm. Implemented face detection and recognition using webcam input. Designed GUI using Tkinter for user interaction and live monitoring. Automated attendance storage in Excel with date and time.",
    features: [
      "Real-time face detection & recognition",
      "LBPH algorithm for identification",
      "Tkinter GUI for live monitoring",
      "Automated Excel attendance storage",
      "Image capture & visual confirmation",
    ],
    status: "Completed",
  },
  {
    title: "Simple Website Blocker Extension",
    desc: "Chrome extension to block user-specified websites and improve productivity with real-time URL monitoring.",
    tags: ["HTML", "CSS", "JavaScript", "Chrome Extensions API"],
    details: "Built a browser extension to block user-specified websites and improve productivity. Implemented real-time URL monitoring and redirection using Chrome Extensions API. Stored blocked websites using Chrome storage for persistent data handling.",
    features: [
      "Block user-specified websites",
      "Real-time URL monitoring & redirection",
      "Chrome storage for persistent data",
      "Simple popup interface",
      "Productivity improvement tool",
    ],
    status: "Completed",
  },
  {
    title: "Local Business Website Design",
    desc: "Fully responsive website for a local business to enhance digital presence and customer reach.",
    tags: ["HTML", "CSS", "JavaScript", "Figma", "Canva"],
    details: "Developed a fully responsive website for a local business to enhance digital presence and customer reach. Implemented modern UI/UX principles for better user experience. Conducted requirement analysis and delivered a tailored solution based on business needs.",
    features: [
      "Fully responsive design",
      "Modern UI/UX principles",
      "Client requirement analysis",
      "Digital presence enhancement",
      "Successfully pitched to business owner",
    ],
    status: "Completed",
  },
  {
    title: "Community Health Data Analysis",
    desc: "Community service project analyzing health and hygiene data with surveys and awareness programs.",
    tags: ["Data Analysis", "Python", "Community Service"],
    details: "Conducted community surveys to assess hygiene and sanitation practices. Collected and analyzed structured data related to health habits. Identified public health issues and proposed short-term and long-term solutions. Delivered awareness programs and documented findings.",
    features: [
      "Community survey design & execution",
      "Structured data collection & analysis",
      "Public health issue identification",
      "Awareness program delivery",
      "Team collaboration & documentation",
    ],
    status: "Completed",
  },
];

const ProjectsSection = () => {
  const [selected, setSelected] = useState<number | null>(null);
  const header = useScrollAnimation();
  const grid = useScrollAnimation(0.05);

  return (
    <section id="projects" className="py-24">
      <div className="container">
        <div ref={header.ref} className={`${header.isVisible ? "scroll-visible" : "scroll-hidden"}`}>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
            Projects I've built while learning and exploring new technologies.
          </p>
        </div>
        <div ref={grid.ref} className={`grid md:grid-cols-2 gap-6 ${grid.isVisible ? "scroll-visible" : "scroll-hidden"}`}>
          {projects.map((p, i) => (
            <div
              key={p.title}
              className="group flex flex-col rounded-xl bg-card border border-border overflow-hidden hover:border-primary/50 transition-all hover:glow-shadow"
              style={{ transitionDelay: grid.isVisible ? `${i * 150}ms` : "0ms" }}
            >
              <div className="h-48 bg-secondary/50 flex items-center justify-center relative">
                <span className="font-heading text-lg text-muted-foreground">{p.title}</span>
                <span className="absolute top-3 right-3 px-3 py-1 text-xs rounded-full bg-accent text-accent-foreground font-medium">
                  {p.status}
                </span>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-heading text-lg font-semibold mb-2">{p.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 flex-1">{p.desc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tags.map((t) => (
                    <span key={t} className="px-2 py-1 text-xs rounded bg-primary/10 text-primary">{t}</span>
                  ))}
                </div>
                <div className="flex items-center justify-end">
                  <button
                    onClick={() => setSelected(i)}
                    className="btn-premium text-sm !py-2 !px-5"
                  >
                    View Details →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selected !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm" onClick={() => setSelected(null)}>
          <div
            className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-xl bg-card border border-border p-8 animate-fade-up"
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={() => setSelected(null)} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors">
              <X size={22} />
            </button>
            <div className="mb-4">
              <h3 className="font-heading text-2xl font-bold mb-2">{projects[selected].title}</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {projects[selected].tags.map((t) => (
                  <span key={t} className="px-2 py-1 text-xs rounded bg-primary/10 text-primary">{t}</span>
                ))}
              </div>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">{projects[selected].details}</p>
            <div>
              <h4 className="font-heading font-semibold mb-3">Key Features</h4>
              <ul className="space-y-2">
                {projects[selected].features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;
