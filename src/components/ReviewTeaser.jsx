import React from "react";

const MOCK = [
  {
    quote: "Best milk tea in the area! So friendly.",
    author: "Google Reviewer",
  },
  { quote: "Loved the bánh mì + taro combo.", author: "Local Guide" },
  { quote: "Clean shop, fast service.", author: "Customer" },
];

export default function ReviewsTeaser() {
  return (
    <section className="reviews-teaser">
      <div className="container">
        <h2>What People Say</h2>
        <div className="reviews-teaser__grid">
          {MOCK.map((r, i) => (
            <blockquote key={i} className="review">
              <div className="stars" aria-hidden>
                ★★★★★
              </div>
              <p>“{r.quote}”</p>
              <cite>— {r.author}</cite>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
