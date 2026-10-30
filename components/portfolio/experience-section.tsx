import { Reveal } from "@/components/portfolio/reveal"
import { SectionHeading } from "@/components/portfolio/section-heading"

export function ExperienceSection() {
  return (
    <section id="experience" className="content-section content-section-compact" aria-labelledby="section-title-02">
      <div className="site-shell">
        <Reveal>
          <SectionHeading
            index="02"
            eyebrow="MY CURRENT CHAPTER"
            title="Closer to the systems behind software"
            description="I joined Cohesity in July 2026 as a Site Reliability Engineer."
          />
        </Reveal>
        <Reveal delay={0.08}>
          <article className="glass-panel backdrop-blur-2xl experience-card">
            <div className="experience-date-column">
              <span className="timeline-marker" aria-hidden="true" />
              <p className="eyebrow">JULY 2026 — PRESENT</p>
              <span className="experience-current-label">Where I am now</span>
            </div>
            <div className="experience-copy">
              <div className="experience-company-line">
                <span className="experience-company-name">Cohesity</span>
                <span className="experience-company-divider" aria-hidden="true">/</span>
                <span className="experience-company-role">Site Reliability Engineering</span>
              </div>
              <h3>Site Reliability Engineer</h3>
              <p>
                I&apos;m building on my software development background and learning more about the
                systems, automation, and Linux foundations that help software stay dependable.
                It&apos;s a new layer of engineering to explore, and a natural extension of what has
                always made me curious about software.
              </p>
              <div className="experience-focus" aria-label="Areas of interest">
                <span>Linux</span>
                <span>Automation</span>
                <span>Reliability</span>
              </div>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  )
}
