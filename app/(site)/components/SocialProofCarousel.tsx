"use client";

// React
import { useState } from "react";
// Components
import SocialProofCard from "./SocialProofCard";

// React Multi Carousel
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
    slidesToSlide: 1,
    partialVisibilityGutter: 0,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1,
    partialVisibilityGutter: 0,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
    partialVisibilityGutter: 0,
  },
};

export default function SocialProofCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  console.log(activeIndex);

  return (
    <Carousel
      draggable
      swipeable
      centerMode
      infinite
      focusOnSelect
      responsive={responsive}
      ssr
      removeArrowOnDeviceType={["mobile", "tablet", "desktop"]}
      afterChange={(previousSlide, { currentSlide }) =>
        setActiveIndex(currentSlide)
      }
    >
      <SocialProofCard />
      <SocialProofCard />
      <SocialProofCard />
      <SocialProofCard />
      <SocialProofCard />
      <SocialProofCard />
    </Carousel>
  );
}
