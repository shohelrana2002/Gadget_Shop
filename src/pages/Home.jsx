import React from "react";
import Banner from "../components/Home/Banner";
import FeaturedProducts from "../components/Home/FeaturedProducts";
import UserReview from "../components/Home/UserReview";
import Accordion from "../components/Home/Accordion";
import { Helmet } from "react-helmet-async";
import userPic from "../../public/user.png";
const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Gadget Shop | Home</title>
        <link rel="icon" type="image/svg+xml" href={userPic} />
      </Helmet>
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
