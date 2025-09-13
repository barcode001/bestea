import React from "react";
import clientInfo from "../config/clientInfo";

export default function DealsStrip() {
  const { specials } = clientInfo;
  if (!specials?.items?.length) return null;

  return (
    <section className="deals">
      <div className="container">
        <div className="deals__head">
          <h2>Lunch Specials</h2>
          <p>{specials.window}</p>
        </div>
        <ul className="deals__grid">
          {specials.items.map((d) => (
            <li key={d.day} className="deal">
              <h3>{d.day}</h3>
              <p className="deal__text">{d.text}</p>
              {d.price && <span className="deal__price">{d.price}</span>}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
