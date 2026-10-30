"use client"

import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { useEffect, useState } from "react"
import { RESUME_URL } from "@/lib/portfolio"

const navItems = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Experience", id: "experience" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Resume", id: "resume" },
  { label: "Contact", id: "contact" },
]

export function SiteNav() {
  const [activeSection, setActiveSection] = useState("home")
  const [menuOpen, setMenuOpen] = useState(false)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => section !== null)
    let animationFrame = 0

    const updateActiveSection = () => {
      if (animationFrame) return

      animationFrame = window.requestAnimationFrame(() => {
        const activationLine = Math.min(window.innerHeight * 0.36, 300)
        const current =
          sections.reduce<HTMLElement | null>((activeSection, section) => {
            return section.getBoundingClientRect().top <= activationLine ? section : activeSection
          }, null) ?? sections[0]

        if (current) setActiveSection(current.id)
        animationFrame = 0
      })
    }

    updateActiveSection()
    window.addEventListener("scroll", updateActiveSection, { passive: true })
    window.addEventListener("resize", updateActiveSection)

    return () => {
      window.cancelAnimationFrame(animationFrame)
      window.removeEventListener("scroll", updateActiveSection)
      window.removeEventListener("resize", updateActiveSection)
    }
  }, [])

  function getHref(id: string) {
    return id === "resume" ? RESUME_URL : `#${id}`
  }

  function handleNavigation(id: string) {
    setMenuOpen(false)
    if (id !== "resume") setActiveSection(id)
  }

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <header className="site-header backdrop-blur-xl">
        <div className="header-inner">
          <a
            className="wordmark"
            href="#home"
            onClick={() => handleNavigation("home")}
            aria-label="Uttam Seervi, home"
          >
            <span className="wordmark-signature">
              Uttam <em>Seervi</em><span className="wordmark-dot">.</span>
            </span>
          </a>

          <nav className="desktop-nav" aria-label="Main navigation">
            <ul className="nav-list">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    className={`nav-link${item.id === "resume" ? " nav-link-resume" : ""}`}
                    href={getHref(item.id)}
                    aria-current={activeSection === item.id ? "location" : undefined}
                    onClick={() => handleNavigation(item.id)}
                    target={item.id === "resume" ? "_blank" : undefined}
                    rel={item.id === "resume" ? "noreferrer" : undefined}
                  >
                    <span className="nav-link-label">{item.label}</span>
                    {activeSection === item.id && !reduceMotion && (
                      <motion.span
                        className="nav-active-indicator"
                        layoutId="active-navigation-indicator"
                        transition={{ type: "spring", stiffness: 520, damping: 38 }}
                        aria-hidden="true"
                      />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <button
            className="mobile-menu-button"
            type="button"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>

        <AnimatePresence initial={false}>
          {menuOpen && (
            <motion.nav
              id="mobile-navigation"
              className="mobile-nav-panel backdrop-blur-2xl"
              aria-label="Mobile navigation"
              initial={reduceMotion ? false : { opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduceMotion ? { opacity: 1 } : { opacity: 0, y: -8 }}
              transition={{ duration: reduceMotion ? 0 : 0.18, ease: "easeOut" }}
              onKeyDown={(event) => {
                if (event.key === "Escape") setMenuOpen(false)
              }}
            >
              <ul className="mobile-nav-list">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <a
                      className={`mobile-nav-link${activeSection === item.id ? " is-active" : ""}`}
                      href={getHref(item.id)}
                      aria-current={activeSection === item.id ? "location" : undefined}
                      onClick={() => handleNavigation(item.id)}
                      target={item.id === "resume" ? "_blank" : undefined}
                      rel={item.id === "resume" ? "noreferrer" : undefined}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>
    </>
  )
}
