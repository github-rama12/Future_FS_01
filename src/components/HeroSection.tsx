import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-40"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      <div className="relative z-10 container text-center animate-fade-up">
        <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
          Hello, I'm
        </p>
        <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6">
          <span className="text-gradient">Ramachandra Rao</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-8">
          Full-Stack Developer crafting modern web experiences with clean code and creative design.
        </p>
        <div className="flex items-center justify-center gap-4 mb-12">
          <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity">
            Get in Touch
          </a>
          <a href="#projects" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground hover:bg-secondary transition-colors">
            View Work
          </a>
        </div>
        <div className="flex items-center justify-center gap-5 text-muted-foreground">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors"><Github size={22} /></a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors"><Linkedin size={22} /></a>
          <a href="mailto:ramapagoti3@gmail.com" className="hover:text-primary transition-colors"><Mail size={22} /></a>
        </div>
      </div>
      <a href="#about" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground animate-float">
        <ArrowDown size={24} />
      </a>
    </section>
  );
};

export default HeroSection;
