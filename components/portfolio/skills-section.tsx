import { Reveal } from "@/components/portfolio/reveal"
import { SectionHeading } from "@/components/portfolio/section-heading"
import { skillGroups } from "@/lib/portfolio"

export function SkillsSection() {
  return (
    <section id="skills" className="content-section" aria-labelledby="section-title-03">
      <div className="site-shell">
        <Reveal>
          <SectionHeading
            index="03"
            eyebrow="THINGS I WORK WITH"
            title="Tools I&apos;ve gotten to know"
            description="A working snapshot of the technologies I&apos;ve used across software development and project work."
          />
        </Reveal>
        <div className="glass-panel backdrop-blur-2xl skills-list" aria-label="Skills and technologies">
          {skillGroups.map((group, index) => (
            <Reveal key={group.title} delay={index * 0.045} className="skill-row">
              <div className="skill-row-heading">
                <span className="skill-row-index" aria-hidden="true">0{index + 1}</span>
                <div>
                  <h3>{group.title}</h3>
                  <p>{group.description}</p>
                </div>
              </div>
              <ul className="skill-tags" aria-label={`${group.title} skills`}>
                {group.items.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
