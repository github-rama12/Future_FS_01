import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import profilePhoto from "@/assets/profile-photo.jpg";
import { useTypingAnimation } from "@/hooks/useTypingAnimation";

const roles = [
  "Aspiring Full Stack Developer",
  "B.Tech CSE Student",
  "Problem Solver",
  "Python & Java Developer",
];

const HeroSection = () => {
  const typedText = useTypingAnimation(roles);

  return (
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
        <div className="flex justify-center mb-8">
          <div className="w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden border-4 border-primary/30 shadow-xl">
            <img
              src={profilePhoto}
              alt="Ramachandra Rao"
              className="w-full h-full object-cover"
              width={512}
              height={512}
            />
          </div>
        </div>
        <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
          Hello, I'm
        </p>
        <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6">
          <span className="text-gradient">Ramachandra Rao</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-8">
          Aspiring Full Stack Developer | B.Tech CSE Student passionate about building web applications and solving real-world problems.
        </p>
        <div className="flex items-center justify-center gap-5 text-muted-foreground">
          <a href="https://github.com/github-rama12/FUTURE_FS_01" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors"><Github size={22} /></a>
          <a href="https://www.linkedin.com/in/pagoti-ramachandra-2b27812a3/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors"><Linkedin size={22} /></a>
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
