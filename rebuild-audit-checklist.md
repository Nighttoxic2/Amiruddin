# Portfolio Rebuild Audit + Improvement Checklist

Date: 2026-06-26
Live site audited: https://nighttoxic2.github.io/amiruddin-portfolio/
Reference studied for UX quality only: https://www.gabrielvaldivia.com

## Current live site audit

### Current strengths
- Clear cybersecurity/Linux/AI infrastructure positioning.
- Static GitHub Pages deployment works.
- Resume PDF link returns 200.
- Meta description, canonical, Open Graph, Twitter Card, JSON-LD, robots.txt, sitemap.xml, and .nojekyll exist.
- Lighthouse mobile scores are strong: Performance 97, Accessibility 100, Best Practices 100, SEO 100.
- Site already uses project/case-study framing and recruiter-friendly language.

### Major issues / gaps
- Visual identity is still closer to a polished resume page than a world-class portfolio.
- Hero lacks a professional portrait and cinematic personal brand moment.
- Current story is broad but not emotionally memorable enough: it says what Amir does, but not enough why he builds.
- Project sections need deeper case studies: problem, solution, architecture, constraints, security decisions, lessons, future improvements.
- Projects listed in the prompt are not fully represented yet: News Sarvar, Pi-hole, Immich, Nextcloud, Nginx Proxy Manager, GitHub Pages, Docker infrastructure details.
- Need clearer skill confidence levels: Comfortable / Currently Learning / Interested In.
- Timeline needs richer learning journey: education, certifications, projects, career, achievements.
- Recruiter CTA can be stronger: role fit, interview reason, resume, LinkedIn, GitHub, email.
- Need stronger visual hierarchy and section choreography.
- Need portfolio-specific screenshots/visual cards with sanitized public-safe imagery.

### Section-level notes
- Hero: strong headline but needs full name, professional title, portrait, sharper CTA pair, premium animated background.
- About: needs a warmer authentic personal story; current copy is useful but slightly generic.
- Projects: current cards are too compressed; rebuild as premium case studies.
- Roadmap/timeline: good idea; expand into interactive career/learning journey.
- Tools: good but should become modern tech cards with confidence grouping.
- Certifications: verify all certs against resume before publishing.
- Contact: functional but should feel more premium and include LinkedIn/resume/GitHub/email.

### Design audit
- Typography is readable but can become more premium with stronger display/body pairing.
- Spacing is decent but sections need stronger rhythm and contrast.
- Current dark theme is competent; rebuild should feel more Apple/Linear/Vercel: deeper blacks, soft gray surfaces, subtle cyan, refined glass, high contrast.
- Animations exist but should be more intentional: reveal, magnetic CTA, cursor-safe hover, reduced-motion support.

### Accessibility audit
- Lighthouse accessibility score: 100.
- Keep skip link, semantic sections, keyboard focus, aria-pressed toggles, contrast, reduced-motion handling.
- During rebuild, avoid custom controls without keyboard states.

### Performance audit
- Lighthouse performance score: 97.
- FCP: 1.5s; LCP: 1.5s; CLS: 0; TBT: 0ms.
- Speed Index: 4.3s; render-blocking CSS and cache lifetime flagged as minor improvements.
- Rebuild must keep static assets light, images optimized, lazy-loaded, and animations GPU-safe.

### SEO audit
- Lighthouse SEO score: 100.
- Existing meta infrastructure is good.
- Rebuild should preserve: title, description, canonical, OG, Twitter Card, robots.txt, sitemap.xml, structured data.
- Add stronger keywords around entry-level cybersecurity, IT support, Linux, Docker, homelab, AI infrastructure, Selangor/Malaysia if truthful.

### Security/public-safety audit
- Static GitHub Pages architecture is appropriate.
- No secrets/API keys observed in fetched HTML/CSS/JS.
- The word Tailscale appears; this is acceptable if generic, but avoid exposing private Tailscale IPs, internal URLs, admin panels, or service hostnames.
- Final export must scan for: localhost, 127.0.0.1, 192.168.*, 10.*, 172.16.*, 100.*, tokens, keys, .env, admin paths.

## Reference-site UX lessons, without copying

What makes the reference effective:
- Immediate confident positioning in one sentence.
- Premium restraint: few colors, strong hierarchy, high-quality imagery.
- Clear audience targeting.
- Projects feel curated, not dumped.
- Navigation and content are easy to scan.
- Strong personal credibility through story, clients/projects, and proof.

Original direction for Amir:
- Build a premium cybersecurity/AI-infrastructure story, not a designer clone.
- Use original copy, layout, graphics, animations, and imagery.
- Make Sarvar/Hermes/projects the equivalent of proof-of-work case studies.
- Use dark premium visual system with subtle blue/cyan technical accents.

## Internal rebuild checklist

### Discovery/interview
- [ ] Personal branding: target companies, job titles, industries, image.
- [ ] About story: personality, interests, why tech/security/Linux/AI/automation/homelab.
- [ ] Resume review: verify latest resume, experiences, dates, certifications.
- [ ] Project interviews: Sarvar, Hermes, News Sarvar, Docker, Pi-hole, Immich, Nextcloud, GitHub Pages, other projects.
- [ ] Skills grouping: Comfortable / Currently Learning / Interested In.
- [ ] Contact links: GitHub, LinkedIn, email, resume.
- [ ] Portrait: corporate and tech versions.

### Build
- [ ] Rebuild from scratch as static GitHub Pages site.
- [ ] Hero with full name, portrait, title, CTAs, animated background.
- [ ] Authentic About section.
- [ ] Premium case-study project pages/sections.
- [ ] Interactive timeline.
- [ ] Technology cards with honest skill levels.
- [ ] Recruiter-focused “Why work with me”.
- [ ] Contact and resume download.
- [ ] SEO metadata, OG image, Twitter Cards, sitemap, robots, JSON-LD.
- [ ] Accessibility and reduced-motion support.
- [ ] Performance budget and optimized images.
- [ ] Public-safety scan.

### Final QA before deployment
- [ ] Desktop/laptop/tablet/mobile checks.
- [ ] Console errors fixed.
- [ ] Broken links fixed.
- [ ] Resume download verified.
- [ ] Grammar and consistency checked.
- [ ] Lighthouse Performance/Accessibility/Best Practices/SEO captured.
- [ ] Ask Feyo for final approval before publishing major rebuild.
