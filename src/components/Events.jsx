import React from "react";
import useScrollReveal from "../hooks/useScrollReveal";
// If you don’t pass props, these render by default
const DEFAULT_EVENTS = [
  {
    id: "fry-day",
    title: "Fry-day Friday",
    dateRange: "Friday, August 8th, 2025",
    details: ["1 Order of Cheese Fries and 1 Medium Drink for $8.88"],
  },
  {
    id: "back-to-school",
    title: "Back to School Deal",
    dateRange: "Monday, August 11th, 2025 – Sunday, August 24th, 2025",
    details: [
      "Buy 1 Vermicelli or Rice Plate Get 1 Lemonade Tea Free",
      "Teachers get free upsize and 1 free topping!",
    ],
  },
];

export default function Events({ items = DEFAULT_EVENTS }) {
  useScrollReveal();
  return (
    <section className="events" aria-labelledby="events-heading">
      <div className="container">
        <h2 id="events-heading" className="events__title fade-up ">
          Upcoming events
        </h2>

        <div className="events__grid " role="list">
          {items.map((ev) => (
            <article key={ev.id} className="event fade-up" role="listitem">
              <h3 className="event__title fade-up">{ev.title}</h3>
              {ev.dateRange && (
                <p className="event__date fade-up">{ev.dateRange}</p>
              )}
              {Array.isArray(ev.details) && ev.details.length > 0 && (
                <div className="event__details fade-up ">
                  {ev.details.map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
