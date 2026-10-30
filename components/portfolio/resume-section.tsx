import { Download, MoveUpRight } from "lucide-react"
import { Reveal } from "@/components/portfolio/reveal"
import { SectionHeading } from "@/components/portfolio/section-heading"
import { RESUME_DOWNLOAD_URL, RESUME_URL } from "@/lib/portfolio"

export function ResumeSection() {
  return (
    <section id="resume" className="content-section content-section-compact" aria-labelledby="section-title-05">
      <div className="site-shell">
        <Reveal>
          <SectionHeading
            index="05"
            eyebrow="MY RESUME"
            title="The short version"
            description="Education, experience, and the technologies I&apos;ve worked with."
          />
        </Reveal>
        <Reveal delay={0.08}>
          <div className="glass-panel backdrop-blur-2xl resume-panel">
            <div className="resume-copy">
              <p className="eyebrow">THE SHORT VERSION</p>
              <h3>My résumé, ready to read.</h3>
              <p>The latest version is available to view or download.</p>
            </div>
            <div className="resume-actions">
              <a className="resume-text-link" href={RESUME_URL} target="_blank" rel="noreferrer">
                Read PDF <MoveUpRight aria-hidden="true" />
              </a>
              <a className="resume-text-link" href={RESUME_DOWNLOAD_URL} target="_blank" rel="noreferrer">
                Download <Download aria-hidden="true" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
