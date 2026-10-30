import { ArrowUpRight, Mail } from "lucide-react"
import { Reveal } from "@/components/portfolio/reveal"
import { personalLinks, RESUME_URL } from "@/lib/portfolio"

export function ContactSection() {

  return (
    <section id="contact" className="content-section contact-section" aria-labelledby="contact-title">
      <div className="site-shell">
        <Reveal>
          <div className="glass-panel backdrop-blur-2xl contact-panel">
            <div className="contact-copy">
              <p className="eyebrow">06 / SAY HELLO</p>
              <h2 id="contact-title">Let&apos;s talk.</h2>
              <p>
                If you&apos;re interested in software, site reliability, or learning by building,
                I&apos;d be happy to hear from you.
              </p>
            </div>
            <div className="contact-links">
              <a className="contact-email" href={`mailto:${personalLinks.email}`}>
                <Mail aria-hidden="true" />
                <span className="contact-link-copy">
                  <span className="contact-link-label">EMAIL</span>
                  {personalLinks.email}
                </span>
                <ArrowUpRight aria-hidden="true" />
              </a>
              <a
                className="contact-resume-link"
                href={RESUME_URL}
                target="_blank"
                rel="noreferrer"
              >
                Or, view my résumé
                <ArrowUpRight aria-hidden="true" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
