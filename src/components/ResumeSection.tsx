import { Download, GraduationCap, Target, Code2, Award, Trophy, Briefcase } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const education = [
  {
    degree: "B.Tech – Computer Science & Engineering",
    score: "CGPA: 8.10",
    school: "Raghu Engineering College, Vishakhapatnam, AP",
    period: "July 2023 – Present",
    desc: "Currently pursuing B.Tech with focus on full-stack development, data structures, algorithms, and machine learning.",
  },
  {
    degree: "Diploma (Polytechnic)",
    score: "Percentage: 85.6%",
    school: "Balaji Polytechnic College, Vizianagaram, AP",
    period: "April 2021 – March 2024",
    desc: "Completed Polytechnic diploma with strong academic performance.",
  },
  {
    degree: "Matriculation (SSC)",
    score: "Percentage: 96.67%",
    school: "Gayatri School, Srikakulam, AP",
    period: "April 2020 – March 2021",
    desc: "Completed secondary education with distinction.",
  },
];

const internships = [
  {
    role: "Web Development Intern",
    company: "Future Interns",
    period: "Currently Active",
    desc: "Working on real-world web development projects, building responsive websites and learning industry best practices.",
  },
];

const achievements = [
  "Solved competitive programming problems on CodeChef, improving logical thinking and problem-solving skills.",
  "Presented project demos with clear documentation and structure, earning positive feedback from faculty.",
  "Attended technical seminars on system design and data science delivered by industry experts on campus.",
  "Built AI-based Smart Attendance System using face recognition with OpenCV.",
];

const codingProfiles = [
  { name: "LeetCode", url: "https://leetcode.com", desc: "Practicing DSA problems" },
  { name: "HackerRank", url: "https://hackerrank.com", desc: "Problem solving & certifications" },
  { name: "CodeChef", url: "https://codechef.com", desc: "Competitive programming" },
];

const coreCompetencies = [
  "Machine Learning Fundamentals",
  "Data Analysis",
  "Object-Oriented Programming",
  "Data Structures & Algorithms",
  "Problem Solving",
  "Python Programming",
  "Web Development",
  "Database Management",
];

const ResumeSection = () => {
  const header = useScrollAnimation();
  const objective = useScrollAnimation();
  const eduSection = useScrollAnimation();
  const internSection = useScrollAnimation();
  const codingSection = useScrollAnimation();
  const achieveSection = useScrollAnimation();
  const competencies = useScrollAnimation();

  return (
    <section id="resume" className="py-24 bg-secondary/20">
      <div className="container">
        <div ref={header.ref} className={`${header.isVisible ? "scroll-visible" : "scroll-hidden"}`}>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-4">
            My <span className="text-gradient">Resume</span>
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-6">
            My academic journey, career goals, achievements, and coding profiles.
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
        </div>

        {/* Career Objective */}
        <div ref={objective.ref} className={`max-w-3xl mx-auto mb-16 ${objective.isVisible ? "scroll-visible" : "scroll-hidden"}`}>
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-primary/10">
              <Target className="text-primary" size={22} />
            </div>
            <h3 className="font-heading text-xl font-semibold">Career Objective</h3>
          </div>
          <div className="p-6 rounded-xl bg-card border border-border">
            <p className="text-muted-foreground leading-relaxed">
              Motivated Computer Science undergraduate with hands-on experience in Python, Java, and Data Structures.
              Seeking a software or data-related internship to apply problem-solving skills, enhance technical knowledge,
              and gain real-world industry exposure.
            </p>
          </div>
        </div>

        {/* Core Competencies */}
        <div ref={competencies.ref} className={`max-w-3xl mx-auto mb-16 ${competencies.isVisible ? "scroll-visible" : "scroll-hidden"}`}>
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-primary/10">
              <Award className="text-primary" size={22} />
            </div>
            <h3 className="font-heading text-xl font-semibold">Core Competencies</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {coreCompetencies.map((c) => (
              <span key={c} className="px-4 py-2 rounded-full text-sm border border-border bg-card text-foreground">
                {c}
              </span>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto mb-16">
          {/* Education */}
          <div ref={eduSection.ref} className={`${eduSection.isVisible ? "scroll-visible-x" : "scroll-hidden-left"}`}>
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
                  <h4 className="font-heading font-semibold mb-0.5">{item.degree}</h4>
                  <p className="text-sm text-accent font-semibold mb-1">{item.score}</p>
                  <p className="text-sm text-muted-foreground font-medium mb-2">{item.school}</p>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Internships & Coding Profiles */}
          <div>
            <div ref={internSection.ref} className={`mb-10 ${internSection.isVisible ? "scroll-visible-x" : "scroll-hidden-right"}`}>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Briefcase className="text-primary" size={22} />
                </div>
                <h3 className="font-heading text-xl font-semibold">Internships</h3>
              </div>
              <div className="space-y-4">
                {internships.map((item, i) => (
                  <div key={i} className="p-4 rounded-xl bg-card border border-border">
                    <p className="text-xs text-primary font-medium mb-1">{item.period}</p>
                    <h4 className="font-heading font-semibold">{item.role}</h4>
                    <p className="text-sm text-accent font-medium mb-2">{item.company}</p>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div ref={codingSection.ref} className={`${codingSection.isVisible ? "scroll-visible-x" : "scroll-hidden-right"}`}>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Code2 className="text-primary" size={22} />
                </div>
                <h3 className="font-heading text-xl font-semibold">Coding Profiles</h3>
              </div>
              <div className="space-y-3">
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

        {/* Achievements */}
        <div ref={achieveSection.ref} className={`max-w-3xl mx-auto ${achieveSection.isVisible ? "scroll-visible" : "scroll-hidden"}`}>
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-primary/10">
              <Trophy className="text-primary" size={22} />
            </div>
            <h3 className="font-heading text-xl font-semibold">Achievements</h3>
          </div>
          <div className="space-y-3">
            {achievements.map((a, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-primary shrink-0" />
                <p className="text-sm text-muted-foreground">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
