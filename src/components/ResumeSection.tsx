import { Download, Briefcase, GraduationCap } from "lucide-react";

const experience = [
  {
    role: "Full-Stack Developer",
    company: "Tech Solutions Pvt Ltd",
    period: "2023 – Present",
    desc: "Building scalable web applications using React, Node.js, and cloud technologies. Led a team of 4 developers on client projects.",
  },
  {
    role: "Frontend Developer",
    company: "Creative Web Agency",
    period: "2021 – 2023",
    desc: "Developed responsive UI components and optimized performance for high-traffic websites using React and TypeScript.",
  },
  {
    role: "Junior Developer",
    company: "StartUp Hub",
    period: "2020 – 2021",
    desc: "Contributed to full-stack development of SaaS products, working with Python, Django, and React.",
  },
];

const education = [
  {
    degree: "B.Tech in Computer Science",
    school: "JNTU University",
    period: "2016 – 2020",
    desc: "Graduated with distinction. Specialized in AI and Machine Learning.",
  },
];

const ResumeSection = () => {
  return (
    <section id="resume" className="py-24 bg-secondary/20">
      <div className="container">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-4">
          My <span className="text-gradient">Resume</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-6">
          A summary of my professional journey and qualifications.
        </p>
        <div className="flex justify-center mb-16">
          <a
            href="/Ramachandra_Rao_Resume.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
          >
            <Download size={18} />
            Download Resume
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Experience */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-lg bg-primary/10">
                <Briefcase className="text-primary" size={22} />
              </div>
              <h3 className="font-heading text-xl font-semibold">Experience</h3>
            </div>
            <div className="space-y-0">
              {experience.map((item, i) => (
                <div key={i} className="relative pl-8 pb-8 border-l border-border last:pb-0">
                  <div className="absolute left-0 top-0 -translate-x-1/2 w-3 h-3 rounded-full bg-primary" />
                  <p className="text-xs text-primary font-medium mb-1">{item.period}</p>
                  <h4 className="font-heading font-semibold mb-1">{item.role}</h4>
                  <p className="text-sm text-muted-foreground font-medium mb-2">{item.company}</p>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-lg bg-primary/10">
                <GraduationCap className="text-primary" size={22} />
              </div>
              <h3 className="font-heading text-xl font-semibold">Education</h3>
            </div>
            <div className="space-y-0">
              {education.map((item, i) => (
                <div key={i} className="relative pl-8 pb-8 border-l border-border last:pb-0">
                  <div className="absolute left-0 top-0 -translate-x-1/2 w-3 h-3 rounded-full bg-accent" />
                  <p className="text-xs text-accent font-medium mb-1">{item.period}</p>
                  <h4 className="font-heading font-semibold mb-1">{item.degree}</h4>
                  <p className="text-sm text-muted-foreground font-medium mb-2">{item.school}</p>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
