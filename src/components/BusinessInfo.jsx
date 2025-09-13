import React from "react";
import clientInfo from "../config/clientInfo";

export default function BusinessInfo() {
  const { contact, hours, map } = clientInfo;

  return (
    <section className="bizinfo" id="visit">
      <div className="container bizinfo__grid">
        <div>
          <h2>Visit Us</h2>
          <p>
            <strong>Address:</strong> {contact.address}
          </p>
          <p>
            <strong>Phone:</strong>{" "}
            <a href={`tel:${contact.phone.replace(/\D/g, "")}`}>
              {contact.phone}
            </a>
          </p>
          <h3>Hours</h3>
          <ul className="hours">
            {Object.entries(hours).map(([day, val]) => (
              <li key={day}>
                <span className="hours__day">{day.toUpperCase()}</span>
                <span>{val}</span>
              </li>
            ))}
          </ul>
          <div className="bizinfo__socials">
            <a
              href="https://www.instagram.com/besteatx/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
            <a
              href="https://www.facebook.com/61573248324362"
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </a>
          </div>
        </div>
        <div className="map__wrap">
          <iframe
            title="Bestea map"
            src={map.embed}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
