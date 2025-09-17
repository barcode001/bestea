import React from "react";
import Hero from "components/Hero";
import DealsStrip from "components/DealsStrip";
import Events from "components/Events";
import MenuHighlights from "components/MenuHighlights";
import GalleryStrip from "components/GalleryStrip";
import ReviewsTeaser from "components/ReviewTeaser";
import BusinessInfo from "../components/BusinessInfo";

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
