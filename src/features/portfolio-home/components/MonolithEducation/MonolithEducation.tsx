import type { EducationItem } from "../../theMonolithData";

type MonolithEducationProps = {
  education: EducationItem[];
};

export function MonolithEducation({ education }: MonolithEducationProps) {
  return (
    <section className="monolith-section monolith-reveal">
      <div className="monolith-section-headline">
        <h2>Education</h2>
      </div>

      <div className="monolith-education-card">
        {education.map((item) => (
          <article key={item.degree}>
            <h3>{item.degree}</h3>
            <p>{item.institution}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
