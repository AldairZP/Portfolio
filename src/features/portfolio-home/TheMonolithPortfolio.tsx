import type { FormEvent } from "react";
import "./TheMonolithPortfolio.css";
import {
  education,
  experiences,
  hero,
  navItems,
  projects,
  socialLinks,
  technologies,
  type ProjectItem,
} from "./theMonolithData";

type ProjectCardProps = {
  item: ProjectItem;
};

function ProjectCard({ item }: ProjectCardProps) {
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

function TheMonolithPortfolio() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className="monolith-page">
      <header className="monolith-header">
        <nav className="monolith-shell monolith-nav">
          <div className="monolith-logo">Jonathan Zapata</div>

          <ul className="monolith-nav-links" aria-label="Primary navigation">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className={`monolith-nav-link ${item.active ? "is-active" : ""}`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            className="monolith-menu-button"
            type="button"
            aria-label="Open navigation menu"
          >
            <span aria-hidden="true">Menu</span>
          </button>
        </nav>
      </header>

      <main className="monolith-shell monolith-main" id="about">
        <section className="monolith-hero monolith-reveal">
          <div className="monolith-hero-copy">
            <h1>
              Visual <br /> Engineering <br /> For Precision.
            </h1>

            <p>{hero.description}</p>

            <button type="button" className="monolith-button">
              View Archive
            </button>
          </div>

          <figure className="monolith-hero-media monolith-grayscale-hover">
            <img src={hero.image} alt={hero.imageAlt} />
          </figure>
        </section>

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

        <section className="monolith-section monolith-reveal" id="archive">
          <div className="monolith-section-headline">
            <h2>Experience</h2>
          </div>

          <div className="monolith-experience-list">
            {experiences.map((experience) => (
              <article
                className="monolith-experience-item"
                key={experience.role}
              >
                <div>
                  <h3>{experience.role}</h3>
                  <p>{experience.company}</p>
                </div>

                <span>{experience.timeline}</span>
              </article>
            ))}
          </div>
        </section>

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

        <section className="monolith-section monolith-reveal">
          <a className="monolith-cta" href="#contact">
            <h3>Want To See More Recent Work?</h3>

            <span>
              Visit Digital Archive <strong aria-hidden="true">→</strong>
            </span>
          </a>
        </section>

        <section className="monolith-section monolith-reveal" id="contact">
          <div className="monolith-newsletter">
            <h2>Inquiry</h2>
            <p>
              Join the collective for monthly insights into technical design and
              engineering updates.
            </p>

            <form onSubmit={handleSubmit}>
              <label htmlFor="email-input">Email Address</label>
              <input
                id="email-input"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="USER@THEMONOLITH.CO"
                required
              />

              <button
                type="submit"
                className="monolith-button monolith-button-solid"
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer>
        <div className="monolith-shell monolith-footer-main">
          <div className="monolith-footer-brand">The Monolith</div>

          <ul className="monolith-footer-links">
            {socialLinks.map((link) => (
              <li key={link}>
                <a href="#">{link}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="monolith-shell monolith-footer-note">
          <p>© 2024 The Monolith Editorial. Engineered For Precision.</p>
        </div>
      </footer>
    </div>
  );
}

export default TheMonolithPortfolio;
