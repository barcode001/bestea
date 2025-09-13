import React from "react";
import clientInfo from "@/config/clientInfo";

export default function Hero() {
  const { businessName, tagline, contact } = clientInfo;

  return (
    <section className="hero">
      <div
        className="hero__bg"
        role="img"
        aria-label={`${businessName} hero`}
      />
      <div className="container hero__inner">
        <div className="hero__text">
          <h1 className="hero__title">{businessName}</h1>
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
      </div>
    </section>
  );
}
