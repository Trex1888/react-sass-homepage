import React from "react";
import "./banner.scss";
import { images } from "../../images";

function Banner() {
  return (
    <div>
      <div className="banner container">
        <picture>
          <source media="(max-width:767px)" srcSet={images.works_mobile} />
          <img src={images.works_desktop} alt="img" />
        </picture>

        <div className="banner__wrapper">
          <div className="title">
            <div className="title1">Find Out More About How We Work</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
