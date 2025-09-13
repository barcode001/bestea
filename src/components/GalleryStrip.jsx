import React from "react";
import clientInfo from "../config/clientInfo";

export default function GalleryStrip() {
  const { gallery } = clientInfo;
  if (!gallery?.length) return null;

  return (
    <section className="gallery-strip">
      <div className="container">
        <h2>Photo Gallery</h2>
        <div className="gallery-strip__row">
          {gallery.slice(0, 6).map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Bestea gallery ${i + 1}`}
              loading="lazy"
            />
          ))}
        </div>
        <div className="center">
          <a className="btn btn--ghost" href="/photo-gallery">
            See More Photos
          </a>
        </div>
      </div>
    </section>
  );
}
