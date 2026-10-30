"use client"

import { motion, useReducedMotion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { personalLinks, RESUME_URL } from "@/lib/portfolio"

const journey = [
  {
    step: "01",
    label: "EDUCATION",
    title: "Information Science & Engineering",
    detail: "BMS College of Engineering",
  },
  {
    step: "02",
    label: "FOUNDATION",
    title: "Software development",
    detail: "Learning through projects and practice",
  },
  {
    step: "03",
    label: "TODAY",
    title: "Site Reliability Engineer",
    detail: "Cohesity · since July 2026",
  },
]

export function HeroSection() {
  const reduceMotion = useReducedMotion()
  const entrance = (delay: number) => ({
    initial: reduceMotion ? false : { opacity: 1, y: 14 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: reduceMotion ? 0 : 0.55,
      delay: reduceMotion ? 0 : delay,
      ease: "easeOut" as const,
    },
  })

  return (
    <section id="home" className="hero-section" aria-labelledby="hero-title">
      <div className="site-shell">
        <div className="hero-grid">
          <motion.article className="glass-panel backdrop-blur-2xl hero-intro-card" {...entrance(0.04)}>
            <div>
              <p className="hero-eyebrow">Curious about what happens under the hood</p>
              <h1 id="hero-title">
                <span className="hero-title-greeting">Hi, I&apos;m</span>
                <span className="hero-title-name">
                  Uttam <em>Seervi.</em>
                </span>
              </h1>
              <p className="hero-role-line">
                <span>Site Reliability Engineer</span>
                <span className="hero-role-divider">at</span>
                <span>Cohesity</span>
              </p>
              <p className="hero-intro">
                I bring a software development background to my work in site reliability. I&apos;m
                drawn to the layers beneath an application: Linux, automation, and the systems that
                help software stay dependable.
              </p>
            </div>

            <div className="hero-actions-block">
              <div className="hero-text-links">
                <a className="hero-text-link" href="#projects">
                  A few things I&apos;ve built
                  <ArrowUpRight aria-hidden="true" />
                </a>
                <a
                  className="hero-text-link hero-text-link-secondary"
                  href={RESUME_URL}
                  target="_blank"
                  rel="noreferrer"
                >
                  Résumé
                  <ArrowUpRight aria-hidden="true" />
                </a>
              </div>
              <div className="hero-social-row" aria-label="Social profiles">
                <a href={personalLinks.github} target="_blank" rel="noreferrer" aria-label="GitHub profile">
                  GitHub <ArrowUpRight aria-hidden="true" />
                </a>
                <a href={personalLinks.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile">
                  LinkedIn <ArrowUpRight aria-hidden="true" />
                </a>
              </div>
            </div>
          </motion.article>

          <motion.aside className="glass-panel backdrop-blur-2xl journey-card" {...entrance(0.16)} aria-label="My journey">
            <div className="journey-intro">
              <p className="eyebrow">MY PATH, SO FAR</p>
              <span className="journey-scribble">still unfolding</span>
            </div>
            <h2 className="journey-title">From code<br />to systems.</h2>
            <ol className="journey-list">
              {journey.map((item) => (
                <li key={item.step}>
                  <span className="journey-step-number" aria-hidden="true">{item.step}</span>
                  <div className="journey-step-content">
                    <p className="journey-step-label">{item.label}</p>
                    <h3>{item.title}</h3>
                    <p>{item.detail}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="journey-interest">
              <p className="eyebrow">WHAT KEEPS ME CURIOUS</p>
              <p>Linux <span>·</span> automation <span>·</span> reliability</p>
            </div>
          </motion.aside>
        </div>
        <div className="hero-scroll-cue" aria-hidden="true">
          <span>THERE&apos;S MORE TO THE STORY</span>
          <span className="scroll-cue-line" />
        </div>
      </div>
    </section>
  )
}
