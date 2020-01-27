import React from "react";
import { Link } from "react-router-dom";
import { Fade } from "react-slideshow-image";

import slideshow1 from "../images/slideshow1.jpg";
import slideshow2 from "../images/slideshow2.jpg";
import slideshow3 from "../images/slideshow3.jpg";

const fadeImages = [slideshow1, slideshow2, slideshow3];

const fadeProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`fade transition from ${oldIndex} to ${newIndex}`);
  }
};

export default class SlideShow extends React.Component {
  render() {
    const { text, to } = this.props;
    return (
      <div className="slide-container">
        <Fade {...fadeProperties}>
          <div className="each-fade">
            <div className="image-container">
              <img src={fadeImages[0]} alt="image1" />
            </div>

            <Link to={to} className="slide-show__text">
              {text}
            </Link>
          </div>
          <div className="each-fade">
            <div className="image-container">
              <img src={fadeImages[1]} alt="image2" />
            </div>
            <Link to={to} className="slide-show__text">
              {text}
            </Link>
          </div>
          <div className="each-fade">
            <div className="image-container">
              <img src={fadeImages[2]} alt="image3" />
            </div>
            <Link to={to} className="slide-show__text">
              {text}
            </Link>
          </div>
        </Fade>
      </div>
    );
  }
}
