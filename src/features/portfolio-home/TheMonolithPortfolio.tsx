import type { FormEvent } from "react";
import "./TheMonolithPortfolio.css";
import "./components/MonolithNav/MonolithNav.css";
import "./components/MonolithHero/MonolithHero.css";
import "./components/ProjectCard/ProjectCard.css";
import "./components/MonolithExperience/MonolithExperience.css";
import "./components/MonolithTechnologies/MonolithTechnologies.css";
import "./components/MonolithEducation/MonolithEducation.css";
import "./components/MonolithCTA/MonolithCTA.css";
import "./components/MonolithContact/MonolithContact.css";
import "./components/MonolithFooter/MonolithFooter.css";
import {
  education,
  experiences,
  hero,
  navItems,
  projects,
  socialLinks,
  technologies,
} from "./theMonolithData";
import { MonolithNav } from "./components/MonolithNav/MonolithNav";
import { MonolithHero } from "./components/MonolithHero/MonolithHero";
import { MonolithProjects } from "./components/MonolithProjects/MonolithProjects";
import { MonolithExperience } from "./components/MonolithExperience/MonolithExperience";
import { MonolithTechnologies } from "./components/MonolithTechnologies/MonolithTechnologies";
import { MonolithEducation } from "./components/MonolithEducation/MonolithEducation";
import { MonolithCTA } from "./components/MonolithCTA/MonolithCTA";
import { MonolithContact } from "./components/MonolithContact/MonolithContact";
import { MonolithFooter } from "./components/MonolithFooter/MonolithFooter";

const heroTitle = ["Visual", "Engineering", "For Precision."];

export default function TheMonolithPortfolio() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className="monolith-page">
      <MonolithNav navItems={navItems} socialLinks={socialLinks} />

      <main className="monolith-shell monolith-main" id="about">
        <MonolithHero
          title={heroTitle}
          description={hero.description}
          image={hero.image}
          imageAlt={hero.imageAlt}
        />

        <MonolithProjects projects={projects} />

        <MonolithExperience experiences={experiences} />

        <MonolithTechnologies technologies={technologies} />

        <MonolithEducation education={education} />

        <MonolithCTA />

        <MonolithContact onSubmit={handleSubmit} />
      </main>

      <MonolithFooter socialLinks={socialLinks} />
    </div>
  );
}
