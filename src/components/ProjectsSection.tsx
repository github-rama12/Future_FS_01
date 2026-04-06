import { useState } from "react";
import { ExternalLink, Github, X } from "lucide-react";

const projects = [
  {
    title: "Employee Management System",
    desc: "A web application to manage employee records with CRUD operations using Spring Boot and React.",
    tags: ["Java", "Spring Boot", "React", "MySQL"],
    details: "A full-stack Employee Management System built with Spring Boot backend and React frontend. Features include adding, editing, deleting, and viewing employee records. Uses MySQL for data persistence and RESTful APIs for communication between frontend and backend.",
    features: ["CRUD operations for employees", "RESTful API integration", "Search & filter employees", "Responsive React UI", "MySQL database"],
  },
  {
    title: "Face Recognition System",
    desc: "AI-powered face recognition system for real-time identification using deep learning models.",
    tags: ["Python", "OpenCV", "TensorFlow", "AI"],
    details: "An advanced face recognition system using deep learning models for real-time face detection and identification. Utilizes OpenCV for image processing and TensorFlow for neural network inference. Designed for security and attendance tracking applications.",
    features: ["Real-time face detection", "Multi-face tracking", "Deep learning models", "Attendance tracking", "High accuracy recognition"],
  },
  {
    title: "Job Portal App",
    desc: "An online job portal connecting job seekers with employers, featuring job listings and applications.",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    details: "A full-stack job portal application where employers can post job openings and job seekers can search, filter, and apply for jobs. Includes user authentication, profile management, and application tracking. Built with MERN stack.",
    features: ["Job search & filters", "User authentication", "Application tracking", "Employer dashboard", "Profile management"],
    status: "In Progress",
  },
];

const ProjectsSection = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="projects" className="py-24">
      <div className="container">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-4">
          Featured <span className="text-gradient">Projects</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
          Projects I've built while learning and exploring new technologies.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <div
              key={p.title}
              className="group flex flex-col rounded-xl bg-card border border-border overflow-hidden hover:border-primary/50 transition-all hover:glow-shadow"
            >
              <div className="h-48 bg-secondary/50 flex items-center justify-center relative">
                <span className="font-heading text-lg text-muted-foreground">{p.title}</span>
                {"status" in p && p.status && (
                  <span className="absolute top-3 right-3 px-3 py-1 text-xs rounded-full bg-accent text-accent-foreground font-medium">
                    {p.status}
                  </span>
                )}
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-heading text-lg font-semibold mb-2">{p.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 flex-1">{p.desc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tags.map((t) => (
                    <span key={t} className="px-2 py-1 text-xs rounded bg-primary/10 text-primary">{t}</span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex gap-3 text-muted-foreground">
                    <a href="#" className="hover:text-primary transition-colors"><Github size={18} /></a>
                    <a href="#" className="hover:text-primary transition-colors"><ExternalLink size={18} /></a>
                  </div>
                  <button
                    onClick={() => setSelected(i)}
                    className="text-sm text-primary hover:underline font-medium"
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
            <div className="flex gap-4 mt-8">
              <a href="#" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity">
                <Github size={16} /> View Code
              </a>
              <a href="#" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border text-foreground font-medium text-sm hover:bg-secondary transition-colors">
                <ExternalLink size={16} /> Live Demo
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;
