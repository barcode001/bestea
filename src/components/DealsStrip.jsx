import React from "react";
import clientInfo from "../config/clientInfo";

export default function DealsStrip() {
  const { specials } = clientInfo;
  if (!specials?.items?.length) return null;

  return (
    <section className="deals" aria-labelledby="deals-heading">
      <div className="container">
        <div className="deals__head fade-up">
          <h2 className="" id="deals-heading">
            Lunch Specials
          </h2>
          {specials.window && (
            <p className="deals__window ">{specials.window}</p>
          )}
        </div>

        <ul className="deals__grid fade-up">
          {specials.items.map(({ day, text, price }) => (
            <li key={day} className="deal " aria-label={`${day} special`}>
              <div className="deal__top">
                <span className="deal__day fade-up">{day}</span>
              </div>

              <p className="deal__text fade-up">{text}</p>

              {price && <span className="deal__price fade-up">{price}</span>}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
