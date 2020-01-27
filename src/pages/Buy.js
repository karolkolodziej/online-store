import React from "react";

import Card from "../components/Card";

import imageP1 from "../images/sweater1.jpg";

export const Buy = () => {
  return (
    <div className="ui vertically grid">
      <div className="three column row">
        <div className="column">
          <Card
            image={imageP1}
            title="Sweater JULIA"
            price="300$"
            description="100% cotton"
            alt="Product1"
          />
        </div>
        <div className="column">
          <Card
            image={imageP1}
            title="Sweater JULIA2"
            price="350$"
            description="100% cotton"
            alt="Product1"
          />
        </div>
        <div className="column">
          <Card
            image={imageP1}
            title="Sweater JULIA3"
            price="340$"
            description="100% cotton"
            alt="Product1"
          />
        </div>
      </div>
    </div>
  );
};
