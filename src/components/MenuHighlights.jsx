import React from "react";
import clientInfo from "../config/clientInfo";

export default function MenuHighlights() {
  const { categories } = clientInfo;
  if (!categories?.length) return null;

  return (
    <section className="menu-highlights">
      <div className="container">
        <h2>Popular Categories</h2>
        <div className="menu-highlights__grid">
          {categories.map((c) => (
            <a
              key={c.key}
              href="/menu"
              className="menu-card"
              aria-label={c.label}
            >
              <div className="menu-card__img" />
              <div className="menu-card__label">{c.label}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
