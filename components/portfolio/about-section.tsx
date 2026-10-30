import { GraduationCap } from "lucide-react"
import { Reveal } from "@/components/portfolio/reveal"
import { SectionHeading } from "@/components/portfolio/section-heading"

export function AboutSection() {
  return (
    <section id="about" className="content-section" aria-labelledby="section-title-01">
      <div className="site-shell">
        <Reveal>
          <SectionHeading
            index="01"
            eyebrow="A LITTLE ABOUT ME"
            title="The person behind the projects"
            description="My path has moved from building software toward understanding how to keep it dependable."
          />
        </Reveal>
        <div className="about-grid">
          <Reveal delay={0.08} className="about-copy">
            <p>
              I&apos;m Uttam Seervi, a Site Reliability Engineer at Cohesity. I studied Information
              Science and Engineering at BMS College of Engineering, and my background in software
              development is still the starting point for how I approach systems.
            </p>
            <p>
              These days, I&apos;m curious about the layer below the interface: Linux, automation, and
              the small details that help software stay reliable. I like following a problem from
              an application to the systems it depends on.
            </p>
          </Reveal>
          <Reveal delay={0.14} className="glass-panel backdrop-blur-2xl about-note-card">
            <p className="eyebrow">A QUESTION I KEEP COMING BACK TO</p>
            <blockquote className="about-quote">What&apos;s happening underneath the interface?</blockquote>
            <p className="about-note-copy">
              That curiosity connects the way I learned to build software with the work I&apos;m doing
              in reliability now.
            </p>
            <div className="about-education">
              <span className="education-icon" aria-hidden="true">
                <GraduationCap />
              </span>
              <div>
                <p className="eyebrow">EDUCATION</p>
                <p className="education-degree">B.E. in Information Science and Engineering</p>
                <p className="education-school">BMS College of Engineering</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
