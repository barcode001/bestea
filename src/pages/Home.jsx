import React from "react";
import Hero from "components/Hero";
import DealsStrip from "components/DealsStrip";
import MenuHighlights from "components/MenuHighlights";
import GalleryStrip from "components/GalleryStrip";
import ReviewsTeaser from "components/ReviewTeaser";
import BusinessInfo from "components/Businessinfo";
import Events from "components/Events";

function Home() {
  return (
    <>
      <Hero />
      <DealsStrip />
      <Events />
      <MenuHighlights />
      <GalleryStrip />
      <ReviewsTeaser />
      <BusinessInfo />
    </>
  );
}

export default Home;
