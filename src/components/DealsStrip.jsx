import React from "react";
import clientInfo from "../config/clientInfo";

export default function DealsStrip() {
  const { specials } = clientInfo;
  if (!specials?.items?.length) return null;

  return (
    <section className="deals" aria-labelledby="deals-heading">
      <div className="container ">
        <div className="deals__head ">
          <h2 id="deals-heading">Lunch Specials</h2>
          {specials.window && (
            <p className="deals__window">{specials.window}</p>
          )}
        </div>

        <ul className="deals__grid">
          {specials.items.map(({ day, text, price }) => (
            <li key={day} className="deal" aria-label={`${day} special`}>
              <div className="deal__top">
                <span className="deal__day">{day}</span>
              </div>

              <p className="deal__text">{text}</p>

              {price && <span className="deal__price">{price}</span>}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
