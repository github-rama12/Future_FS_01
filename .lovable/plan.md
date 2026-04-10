

## Plan: Portfolio Enhancement — Scroll-to-Top, Projects, Skill Icons, Links & Premium CTA Buttons

### Summary
Add a scroll-to-top button, mark all projects as completed, add skill icons via CDN (devicon), update GitHub/LinkedIn URLs, and implement premium glassmorphism/gradient animated CTA buttons across all sections.

### Changes

**1. Scroll-to-Top Button** — New `src/components/ScrollToTop.tsx`
- Floating button (bottom-right) that appears after scrolling 300px
- Glassmorphism style with smooth fade-in/out animation
- Arrow-up icon, scrolls to top on click
- Add to `Index.tsx`

**2. Projects — Mark All Completed**
- Add `status: "Completed"` to all 4 projects in `ProjectsSection.tsx`
- Badge already renders when status exists

**3. Skill Icons via Devicon CDN**
- Add devicon CDN link to `index.html`
- Update `SkillsSection.tsx` tech stack items to include devicon class names (e.g., `devicon-python-plain`, `devicon-java-plain`)
- Show icon + text for each tech stack pill

**4. GitHub & LinkedIn URLs**
- `HeroSection.tsx`: GitHub → `https://github.com/github-rama12`, LinkedIn stays same
- `Footer.tsx`: GitHub → `https://github.com/github-rama12`

**5. Premium Animated CTA Buttons** — New CSS classes + button updates
- Add `.btn-premium` class in `index.css` with:
  - Glassmorphism background (`backdrop-blur`, semi-transparent gradient)
  - Hover: scale(1.05), glow box-shadow, slight translateY(-2px) lift
  - Active: scale(0.98) bounce-back
  - Smooth 300ms transitions
  - Rounded-full, modern padding

- **Hero**: Add "View My Work" CTA button (scrolls to projects) + "Download Resume" button
- **About**: Add "Learn More" button below about text (scrolls to skills)
- **Projects**: Style "View Details" buttons with premium style
- **Contact**: Style submit button with premium animated style

### Files Modified
- `src/components/ScrollToTop.tsx` — New component
- `src/pages/Index.tsx` — Add ScrollToTop
- `src/components/ProjectsSection.tsx` — All projects completed + premium buttons
- `src/components/SkillsSection.tsx` — Devicon icons for tech stack
- `src/components/HeroSection.tsx` — Updated GitHub URL + premium CTA buttons
- `src/components/AboutSection.tsx` — "Learn More" premium button
- `src/components/ContactSection.tsx` — Premium submit button
- `src/components/Footer.tsx` — Updated GitHub URL
- `src/index.css` — Premium button CSS classes
- `index.html` — Devicon CDN link

