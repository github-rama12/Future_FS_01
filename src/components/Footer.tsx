import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => (
  <footer className="py-8 border-t border-border">
    <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-sm text-muted-foreground">© 2026 John Doe. All rights reserved.</p>
      <div className="flex gap-4 text-muted-foreground">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors"><Github size={18} /></a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors"><Linkedin size={18} /></a>
        <a href="mailto:hello@example.com" className="hover:text-primary transition-colors"><Mail size={18} /></a>
      </div>
    </div>
  </footer>
);

export default Footer;
