import React from "react";
import AddReview from "../Home/Reviews/AddReview/AddReview";
import Payments from "./Payments";

const ProcessAfterReview = () => {
  return (
    <div>
      <Payments />
      <AddReview />
    </div>
  );
};

export default ProcessAfterReview;
