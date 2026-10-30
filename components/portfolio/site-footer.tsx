import { ArrowUpRight } from "lucide-react"
import { personalLinks } from "@/lib/portfolio"

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-shell footer-inner">
        <a className="footer-wordmark" href="#home" aria-label="Uttam Seervi, back to top">
          Uttam <em>Seervi</em><span className="wordmark-dot">.</span>
        </a>
        <p className="footer-note">Software, systems, and a little curiosity.</p>
        <div className="footer-links">
          <a href={personalLinks.github} target="_blank" rel="noreferrer">
            GitHub <ArrowUpRight aria-hidden="true" />
          </a>
          <a href={personalLinks.linkedin} target="_blank" rel="noreferrer">
            LinkedIn <ArrowUpRight aria-hidden="true" />
          </a>
          <span>© {new Date().getFullYear()} Uttam Seervi</span>
        </div>
      </div>
    </footer>
  )
}
