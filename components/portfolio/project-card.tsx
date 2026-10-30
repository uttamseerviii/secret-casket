"use client"

import Image from "next/image"
import { motion, useReducedMotion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import type { Project } from "@/lib/portfolio"

type ProjectCardProps = {
  project: Project
  index: number
}

function imageSizes(layout: Project["layout"]) {
  if (layout === "wide") return "(max-width: 640px) 100vw, (max-width: 1020px) 58vw, 66vw"
  if (layout === "compact") return "(max-width: 640px) 100vw, (max-width: 1020px) 42vw, 25vw"
  if (layout === "narrow") return "(max-width: 640px) 100vw, (max-width: 1020px) 42vw, 33vw"
  return "(max-width: 640px) 100vw, (max-width: 1020px) 50vw, 50vw"
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.article
      className={`glass-panel backdrop-blur-2xl project-card project-card-${project.layout}${project.featured ? " project-card-featured" : ""}`}
      initial={reduceMotion ? false : { opacity: 1, y: 14 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.14 }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: "easeOut" }}
      whileHover={reduceMotion ? undefined : { y: -4, transition: { duration: 0.2 } }}
    >
      <div className="project-media">
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          sizes={imageSizes(project.layout)}
          className="project-image"
        />
      </div>
      <div className="project-card-body">
        <div className="project-heading">
          <span className="project-index" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
          <div className="project-heading-copy">
            <p className="eyebrow">{project.category}</p>
            <h3>{project.name}</h3>
          </div>
        </div>
        <p className="project-description">{project.description}</p>
        <ul className="project-tech-list" aria-label={`${project.name} technologies`}>
          {project.technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
        <div className="project-actions">
          <a href={project.sourceUrl} target="_blank" rel="noreferrer">
            <span>Source</span>
            <ArrowUpRight aria-hidden="true" />
          </a>
          {project.liveDemo && (
            <a href={project.liveDemo} target="_blank" rel="noreferrer">
              <span>Live demo</span>
              <ArrowUpRight aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}
