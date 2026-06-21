type MonolithHeroProps = {
  title: string[];
  description: string;
  image: string;
  imageAlt: string;
};

export function MonolithHero({
  title,
  description,
  image,
  imageAlt,
}: MonolithHeroProps) {
  return (
    <section className="monolith-hero monolith-reveal">
      <div className="monolith-hero-copy">
        <h1>
          {title.map((line, i) => (
            <span key={line}>
              {i > 0 && <br />}
              {line}
            </span>
          ))}
        </h1>

        <p>{description}</p>

        <button type="button" className="monolith-button">
          View Archive
        </button>
      </div>

      <figure className="monolith-hero-media monolith-grayscale-hover">
        <img src={image} alt={imageAlt} />
      </figure>
    </section>
  );
}
