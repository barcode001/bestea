import React from "react";
import clientInfo from "../config/clientInfo";
import useScrollReveal from "hooks/useScrollReveal";

import milkTeaImg from "../images/categories/milk-tea.png";
import fruitTeaImg from "../images/categories/fruit-tea.png";
import smoothieImg from "../images/categories/smoothie19.png";
import matchaImg from "../images/categories/matcha.png";
import coffeeImg from "../images/categories/coffee.png";
import snackImg from "../images/categories/snack.png";

const IMG_MAP = {
  milk_tea: milkTeaImg,
  fruit_tea: fruitTeaImg,
  smoothies: smoothieImg,
  matcha: matchaImg,
  coffee: coffeeImg,
  snacks: snackImg,
};

// normalize "Milk Tea" / "milkTea" / "milk-tea" -> "milk_tea"
const toKey = (str = "") =>
  String(str)
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "_") // spaces, dashes -> underscore
    .replace(/^_+|_+$/g, "");

// optional aliases
const ALIASES = {
  milktea: "milk_tea",
  fruittea: "fruit_tea",
};

const resolveImg = (cat) => {
  if (cat.image) return cat.image;

  const k1 = toKey(cat.key);
  const k2 = toKey(cat.label);
  const alias1 = ALIASES[k1];
  const alias2 = ALIASES[k2];

  return (
    IMG_MAP[k1] ||
    IMG_MAP[k2] ||
    (alias1 && IMG_MAP[alias1]) ||
    (alias2 && IMG_MAP[alias2])
  );
};

export default function MenuHighlights() {
  useScrollReveal();
  const { categories } = clientInfo;
  if (!categories?.length) return null;

  return (
    <section
      className="menu-highlights"
      aria-labelledby="menu-highlights-heading"
    >
      <div className="container">
        <h2 className="fade-up" id="menu-highlights-heading">
          Popular Categories
        </h2>

        <div className="menu-highlights__grid">
          {categories.map((c) => {
            const imgSrc = resolveImg(c);
            return (
              <a
                key={c.key || c.label}
                href="/menu"
                className="menu-card fade-up"
                aria-label={c.label}
                data-key={toKey(c.key || c.label)}
              >
                <div className="menu-card__media">
                  {imgSrc ? (
                    <img
                      src={imgSrc}
                      alt={`${c.label} at Bestea`}
                      loading="lazy"
                      width="640"
                      height="360"
                    />
                  ) : (
                    <div className="menu-card__placeholder" aria-hidden />
                  )}
                  <span className="menu-card__badge fade-up">{c.label}</span>
                  <div className="menu-card__overlay" aria-hidden />
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
