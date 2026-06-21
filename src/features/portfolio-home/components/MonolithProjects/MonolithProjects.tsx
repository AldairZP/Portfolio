import type { ProjectItem } from "../../theMonolithData";
import { ProjectCard } from "../ProjectCard/ProjectCard";

type MonolithProjectsProps = {
  projects: ProjectItem[];
};

export function MonolithProjects({ projects }: MonolithProjectsProps) {
  return (
    <section className="monolith-section monolith-reveal" id="index">
      <div className="monolith-section-headline">
        <h2>Selected Case Studies</h2>
      </div>

      <div className="monolith-project-grid">
        {projects.map((project) => (
          <ProjectCard item={project} key={project.id} />
        ))}
      </div>
    </section>
  );
}
