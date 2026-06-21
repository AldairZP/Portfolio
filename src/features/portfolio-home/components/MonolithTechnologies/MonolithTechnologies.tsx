type MonolithTechnologiesProps = {
  technologies: string[];
};

export function MonolithTechnologies({
  technologies,
}: MonolithTechnologiesProps) {
  return (
    <section className="monolith-section monolith-reveal">
      <div className="monolith-section-headline">
        <h2>Technologies</h2>
      </div>

      <ul className="monolith-tech-grid">
        {technologies.map((technology) => (
          <li key={technology}>{technology}</li>
        ))}
      </ul>
    </section>
  );
}
