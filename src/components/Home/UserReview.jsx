import React from "react";
import Review from "./Review";

const UserReview = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
      <Review></Review>
      <Review></Review>
      <Review></Review>
      <Review></Review>
    </div>
  );
};

export default UserReview;
