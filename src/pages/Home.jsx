import React from "react";
import Banner from "../components/Home/Banner";
import FeaturedProducts from "../components/Home/FeaturedProducts";
import UserReview from "../components/Home/UserReview";
import Accordion from "../components/Home/Accordion";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="mx-auto container">
        <div className="my-8">
          <h1 className="mb-16 text-4xl text-center  font-extrabold">
            FeatureCard
          </h1>
          <FeaturedProducts></FeaturedProducts>
        </div>
        <div className="my-8">
          <h1 className="mb-16 text-4xl text-center  font-extrabold">
            User Review
          </h1>
          <UserReview></UserReview>
        </div>
        <div className="my-8">
          <h1 className="mb-16 text-4xl text-center  font-extrabold">
            User Asked Questions
          </h1>
          <Accordion></Accordion>
        </div>
      </div>
    </div>
  );
};

export default Home;
<p>Home</p>;
