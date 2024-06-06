import * as React from "react";
import Box from "@mui/material/Box";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import "../styles/home-carousel.css";
import { AboutUs } from "./AboutUs";

interface HomeCarousel {
  image: string;
  subTitle: string;
  title: string;
  btnText?: string;
}

const images: HomeCarousel[] = [
  {
    image: "homeImg1.jpg",
    subTitle: "U'll really like what we do",
    title: "Fresh Coffee In The Morning ☕",
    btnText: "Buy One Now",
  },
  {
    image: "homeImg2.jpg",
    subTitle: "Enjoy the finest coffee drinks.",
    title: "Enjoy Our Exclusive Coffee and Cocktails",
    btnText: "Explore",
  },
  {
    image: "homeImg3.jpg",
    subTitle: "Making Our coffee with lover.",
    title: "Alluring and Fragrant Coffee Aroma",
    btnText: "Explore",
  },
];

export const Home = () => {
  return (
    <Box>
      <Carousel autoPlay className="home__carousel">
        {images.map(({ subTitle, title, image, btnText }) => (
          <Box key={title}>
            <Box className="home__carousel-image-container">
              <Box
                component="img"
                src={`/assets/images/${image}`}
                alt={title}
              />
            </Box>
            <Box className="home__carousel--content">
              <h4>{subTitle}</h4>
              <h2>{title}</h2>
              {btnText && <button className="button">{btnText}</button>}
            </Box>
          </Box>
        ))}
      </Carousel>
      <AboutUs />
    </Box>
  );
};