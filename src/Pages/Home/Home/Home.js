import React from "react";
import OurTeam from "../../OurTeam/OurTeam";
import Banner from "../Banner/Banner";
import FeatureProducts from "../FeatureProducts/FeatureProducts";
import Reviews from "../Reviews/Reviews";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <FeatureProducts></FeatureProducts>
      <OurTeam></OurTeam>

      <Reviews></Reviews>
    </div>
  );
};

export default Home;
