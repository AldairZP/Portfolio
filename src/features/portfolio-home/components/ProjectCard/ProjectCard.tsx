import type { ProjectItem } from "../../theMonolithData";

type ProjectCardProps = {
  item: ProjectItem;
};

export function ProjectCard({ item }: ProjectCardProps) {
  return (
    <article className="monolith-project-card">
      <div className="monolith-project-image monolith-grayscale-hover">
        <img src={item.image} alt={item.alt} loading="lazy" />
      </div>

      <div className="monolith-project-body">
        <div>
          <span className="monolith-project-code">{item.code}</span>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>

        <a href={item.href} className="monolith-button monolith-button-link">
          Explore
        </a>
      </div>
    </article>
  );
}
