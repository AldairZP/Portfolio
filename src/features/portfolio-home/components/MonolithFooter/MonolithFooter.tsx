import type { SocialLink } from "../../theMonolithData";

type MonolithFooterProps = {
  socialLinks: SocialLink[];
};

export function MonolithFooter({ socialLinks }: MonolithFooterProps) {
  return (
    <footer>
      <div className="monolith-shell monolith-footer-main">
        <div className="monolith-footer-brand">The Monolith</div>

        <ul className="monolith-footer-links">
          {socialLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      </div>

      <div className="monolith-shell monolith-footer-note">
        <p>© 2024 The Monolith Editorial. Engineered For Precision.</p>
      </div>
    </footer>
  );
}
