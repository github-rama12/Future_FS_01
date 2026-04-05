import { useState } from "react";
import { ExternalLink, Github, X } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    desc: "Full-stack marketplace with real-time inventory, Stripe payments, and admin dashboard.",
    tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
    details: "A comprehensive e-commerce solution featuring product catalog management, shopping cart with persistent sessions, real-time inventory tracking, Stripe payment integration with webhook handling, and a full admin dashboard for order management, analytics, and customer support. Built with React on the frontend and Node.js/Express backend with PostgreSQL database.",
    features: ["Real-time inventory sync", "Stripe payment gateway", "Admin analytics dashboard", "Order tracking system", "Customer review system"],
  },
  {
    title: "Task Management App",
    desc: "Collaborative project management tool with drag-and-drop boards and real-time updates.",
    tags: ["TypeScript", "Next.js", "Prisma", "WebSocket"],
    details: "A Trello-inspired project management platform with real-time collaboration powered by WebSockets. Features include drag-and-drop task boards, team workspaces, file attachments, activity logging, and deadline notifications. Built with Next.js and Prisma ORM for type-safe database operations.",
    features: ["Drag-and-drop Kanban boards", "Real-time collaboration", "Team workspaces", "File attachments", "Deadline notifications"],
  },
  {
    title: "AI Content Generator",
    desc: "SaaS platform leveraging OpenAI for automated blog post and social media content creation.",
    tags: ["React", "Python", "OpenAI", "AWS"],
    details: "An AI-powered SaaS platform that generates high-quality blog posts, social media captions, and marketing copy using OpenAI's GPT models. Includes a rich text editor, content scheduling, SEO optimization suggestions, and team collaboration features. Deployed on AWS with serverless architecture.",
    features: ["GPT-powered content generation", "Rich text editor", "Content scheduling", "SEO optimization", "Team collaboration"],
  },
  {
    title: "Face Recognition System",
    desc: "AI-powered face recognition system for real-time identification and authentication using deep learning models.",
    tags: ["Python", "OpenCV", "TensorFlow", "AI"],
    details: "An advanced face recognition system using deep learning models for real-time face detection, identification, and authentication. Utilizes OpenCV for image processing, TensorFlow for neural network inference, and supports multi-face tracking. Designed for security and access control applications.",
    features: ["Real-time face detection", "Multi-face tracking", "Deep learning models", "Access control integration", "High accuracy authentication"],
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
          A selection of recent work I'm proud of.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
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

      {/* Project Detail Modal */}
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
