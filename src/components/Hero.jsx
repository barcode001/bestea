import React from "react";
import clientInfo from "../config/clientInfo";
import hero from "../images/hero/hero-bestea-clear.png";

export default function Hero() {
  const { tagline, contact } = clientInfo;

  return (
    <section className="hero">
      {/* Decorative blobs */}
      <div className="hero__blob hero__blob--pink" aria-hidden />
      <div className="hero__blob hero__blob--lavender" aria-hidden />

      <div className="container hero__inner">
        {/* Brand art */}
        <div className="hero__art">
          {/* Use the transparent PNG you created */}
          <img
            src={hero}
            alt="Bestea logo with two bubble tea cups"
            className="hero__image"
            loading="eager"
            width="980"
            height="420"
          />
        </div>

        {/* Text + CTAs */}
        <div className="hero__copy">
          <p className="hero__tagline">{tagline}</p>

          <div className="hero__cta">
            <a className="btn btn--primary" href="/menu">
              View Menu
            </a>
            <a
              className="btn btn--ghost"
              href={`tel:${contact.phone.replace(/\D/g, "")}`}
            >
              Call {contact.phone}
            </a>
            <a
              className="btn btn--ghost"
              href="https://maps.google.com/?q=10705 Market St, Ste B, Houston, TX 77029"
              target="_blank"
              rel="noreferrer"
            >
              Directions
            </a>
          </div>

          <p className="hero__hours">
            Open today: <span>See hours below</span>
          </p>
        </div>

        {/* Optional featured picks (can delete if you prefer ultra-minimal) */}
        <ul className="hero__picks">
          <li>Signature Milk Tea</li>
          <li>Matcha Latte</li>
          <li>Vietnamese Coffee</li>
        </ul>
      </div>
    </section>
  );
}
