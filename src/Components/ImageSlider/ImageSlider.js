import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./ImageSlider.css";
import Web from "../../Images/Web.jpg";
import Web2 from "../../Images/Web2.jpg";
import Web3 from "../../Images/Web3.jpg";

function ImageSlider() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} interval={1000}>
      <Carousel.Item>
        <img className="d-block w-100" src={Web2} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Web3} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Web} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
}

export default ImageSlider;
