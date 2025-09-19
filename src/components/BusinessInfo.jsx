import React from "react";
import clientInfo from "../config/clientInfo";

export default function BusinessInfo() {
  const { contact, hours, map } = clientInfo;

  return (
    <section className="bizinfo" id="visit">
      <div className="container bizinfo__grid">
        <div>
          <h2 className="fade-up">Visit Us</h2>
          <p className="fade-up">
            <strong>Address:</strong> {contact.address}
          </p>
          <p className="fade-up">
            <strong>Phone:</strong>{" "}
            <a href={`tel:${contact.phone.replace(/\D/g, "")}`}>
              {contact.phone}
            </a>
          </p>
          <h3 className="fade-up">Hours</h3>
          <ul className="hours fade-up">
            {Object.entries(hours).map(([day, val]) => (
              <li key={day}>
                <span className="hours__day ">{day.toUpperCase()}</span>
                <span>{val}</span>
              </li>
            ))}
          </ul>
          <div className="bizinfo__socials fade-up">
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
        <div className="map__wrap fade-up">
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
