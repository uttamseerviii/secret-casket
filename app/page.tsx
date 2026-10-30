import { AboutSection } from "@/components/portfolio/about-section"
import { ContactSection } from "@/components/portfolio/contact-section"
import { ExperienceSection } from "@/components/portfolio/experience-section"
import { HeroSection } from "@/components/portfolio/hero-section"
import { ProjectsSection } from "@/components/portfolio/projects-section"
import { ResumeSection } from "@/components/portfolio/resume-section"
import { SiteFooter } from "@/components/portfolio/site-footer"
import { SiteNav } from "@/components/portfolio/site-nav"
import { SkillsSection } from "@/components/portfolio/skills-section"

export default function Page() {
  return (
    <>
      <SiteNav />
      <main id="main-content">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <ResumeSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  )
}
