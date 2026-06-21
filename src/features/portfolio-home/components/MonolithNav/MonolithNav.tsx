import type { NavItem, SocialLink } from "../../theMonolithData";
import { SocialIcon } from "../SocialIcon/SocialIcon";

type MonolithNavProps = {
  navItems: NavItem[];
  socialLinks: SocialLink[];
};

export function MonolithNav({ navItems, socialLinks }: MonolithNavProps) {
  return (
    <header className="monolith-header">
      <nav className="monolith-nav">
        <div className="monolith-nav-section monolith-nav-left">
          <div className="monolith-logo">Jonathan Zapata</div>
        </div>

        <div className="monolith-nav-section monolith-nav-center">
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
        </div>

        <div className="monolith-nav-section monolith-nav-right">
          <ul className="monolith-social-links">
            {socialLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="monolith-social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                >
                  <SocialIcon name={link.label} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <button
          className="monolith-menu-button"
          type="button"
          aria-label="Open navigation menu"
        >
          <span aria-hidden="true">Menu</span>
        </button>
      </nav>
    </header>
  );
}
