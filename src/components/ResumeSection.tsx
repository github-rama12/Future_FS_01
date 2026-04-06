import { Download, GraduationCap, Target, Code2 } from "lucide-react";

const education = [
  {
    degree: "B.Tech in Computer Science & Engineering",
    school: "JNTU University",
    period: "2021 – 2025 (Pursuing)",
    desc: "Currently pursuing B.Tech with focus on full-stack development, data structures, and algorithms.",
  },
  {
    degree: "Intermediate (MPC)",
    school: "State Board of Intermediate Education",
    period: "2019 – 2021",
    desc: "Completed Intermediate education with Mathematics, Physics, and Chemistry.",
  },
  {
    degree: "SSC (10th Class)",
    school: "State Board of Secondary Education",
    period: "2018 – 2019",
    desc: "Completed secondary education with distinction.",
  },
];

const codingProfiles = [
  { name: "LeetCode", url: "https://leetcode.com", desc: "Practicing DSA problems" },
  { name: "HackerRank", url: "https://hackerrank.com", desc: "Problem solving & certifications" },
  { name: "CodeChef", url: "https://codechef.com", desc: "Competitive programming" },
];

const ResumeSection = () => {
  return (
    <section id="resume" className="py-24 bg-secondary/20">
      <div className="container">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-4">
          My <span className="text-gradient">Resume</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-6">
          My academic journey, career goals, and coding profiles.
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

        {/* Career Objective */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-primary/10">
              <Target className="text-primary" size={22} />
            </div>
            <h3 className="font-heading text-xl font-semibold">Career Objective</h3>
          </div>
          <div className="p-6 rounded-xl bg-card border border-border">
            <p className="text-muted-foreground leading-relaxed">
              Aspiring Full Stack Developer seeking opportunities to apply my skills in Java, React, and Spring Boot 
              to build impactful web applications. Eager to learn, grow, and contribute to innovative projects 
              in a dynamic team environment.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
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
                  <div className="absolute left-0 top-0 -translate-x-1/2 w-3 h-3 rounded-full bg-primary" />
                  <p className="text-xs text-primary font-medium mb-1">{item.period}</p>
                  <h4 className="font-heading font-semibold mb-1">{item.degree}</h4>
                  <p className="text-sm text-muted-foreground font-medium mb-2">{item.school}</p>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Coding Profiles */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-lg bg-primary/10">
                <Code2 className="text-primary" size={22} />
              </div>
              <h3 className="font-heading text-xl font-semibold">Coding Profiles</h3>
            </div>
            <div className="space-y-4">
              {codingProfiles.map((profile) => (
                <a
                  key={profile.name}
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Code2 className="text-primary" size={18} />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-sm">{profile.name}</h4>
                    <p className="text-xs text-muted-foreground">{profile.desc}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
