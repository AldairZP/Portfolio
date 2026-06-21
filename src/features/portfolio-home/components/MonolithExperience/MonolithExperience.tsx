import type { ExperienceItem } from "../../theMonolithData";

type MonolithExperienceProps = {
  experiences: ExperienceItem[];
};

export function MonolithExperience({ experiences }: MonolithExperienceProps) {
  return (
    <section className="monolith-section monolith-reveal" id="archive">
      <div className="monolith-section-headline">
        <h2>Experience</h2>
      </div>

      <div className="monolith-experience-list">
        {experiences.map((experience) => (
          <article className="monolith-experience-item" key={experience.role}>
            <div>
              <h3>{experience.role}</h3>
              <p>{experience.company}</p>
            </div>

            <span>{experience.timeline}</span>
          </article>
        ))}
      </div>
    </section>
  );
}
