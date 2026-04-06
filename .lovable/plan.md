## Plan: Student Portfolio Overhaul + Working Contact Form

### What Changes

**1. Resume Section → Student-Focused Education & Experience**
Replace the current professional experience (Full-Stack Developer, Frontend Developer, Junior Developer) with student-appropriate content:

- Education: B.Tech in Computer Science (current student), Intermediate, SSC
- Experience: replaced with academic projects, internships, or relevant coursework
- Add a "Career Objective" section similar to the reference site
- Add coding profiles section (LeetCode, HackerRank, CodeChef) like the reference

**2. About Section → Student Bio**
Update the "5+ years of experience" text to reflect a student profile — aspiring developer, currently pursuing B.Tech, passionate about learning and building projects.

**3. Skills Section → Student-Relevant Stack**
Adjust skill levels to be more realistic for a student. Update tech stack to match what a student would know (Java, Python, C, React, Spring Boot, SQL, etc. based on the reference).

**4. Hero Section → Student Developer**
Change tagline from "Full-Stack Developer" to something like "Aspiring Full Stack Developer" with a student-appropriate subtitle.

**5. Contact Form → Working via mailto**
Since there's no backend, wire the "Send Message" button to open the user's email client with a pre-filled `mailto:` link containing the form data (name, email, message). This provides real functionality without needing a server. The toast will confirm the action.

**6. Projects Section → Student Projects**  
Replace professional-grade projects (E-Commerce Platform, SaaS) with student-level projects matching the reference style: Employee Management System,  Face Recognition System, and an ongoing Job Portal update app.

**7. Navbar Brand**
Change "Portfolio" to "Ramachandra.dev" to match the reference style.

### Files Modified

- `src/components/ResumeSection.tsx` — Replace with student education timeline + career objective
- `src/components/AboutSection.tsx` — Student-appropriate bio
- `src/components/SkillsSection.tsx` — Student-level skills and tech stack
- `src/components/HeroSection.tsx` — Student developer tagline
- `src/components/ContactSection.tsx` — Wire form to mailto: for real functionality
- `src/components/ProjectsSection.tsx` — Student-level projects
- `src/components/Navbar.tsx` — Brand name update