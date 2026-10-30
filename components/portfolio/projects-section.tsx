import { Reveal } from "@/components/portfolio/reveal"
import { ProjectCard } from "@/components/portfolio/project-card"
import { SectionHeading } from "@/components/portfolio/section-heading"
import { projects } from "@/lib/portfolio"

export function ProjectsSection() {
  return (
    <section id="projects" className="content-section projects-section" aria-labelledby="section-title-04">
      <div className="site-shell">
        <Reveal>
          <SectionHeading
            index="04"
            eyebrow="SELECTED BUILDS"
            title="A few things I’ve made"
            description="These projects span full-stack apps, machine learning, and blockchain—each one a chance to learn by making something real."
          />
        </Reveal>
        <div className="project-grid">
          {projects.map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
