import React from "react";
import clientInfo from "../config/clientInfo";
import Hero from "components/Hero";
import DealsStrip from "components/DealsStrip";
import MenuHighlights from "components/MenuHighlights";
import GalleryStrip from "components/GalleryStrip";
import ReviewsTeaser from "components/ReviewTeaser";
import BusinessInfo from "./Businessinfo";

function Home() {
  return (
    <>
      <Hero />
      <DealsStrip />
      <MenuHighlights />
      <GalleryStrip />
      <ReviewsTeaser />
      <BusinessInfo />
    </>
  );
}

export default Home;
