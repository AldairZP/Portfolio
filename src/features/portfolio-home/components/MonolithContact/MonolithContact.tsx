import type { FormEvent } from "react";

type MonolithContactProps = {
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
};

export function MonolithContact({ onSubmit }: MonolithContactProps) {
  return (
    <section className="monolith-section monolith-reveal" id="contact">
      <div className="monolith-newsletter">
        <h2>Inquiry</h2>
        <p>
          Join the collective for monthly insights into technical design and
          engineering updates.
        </p>

        <form onSubmit={onSubmit}>
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
  );
}
