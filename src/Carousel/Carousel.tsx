import React, { useEffect, useRef, useState } from "react";
import "./style.scss";
import { CatWithBreed } from "./type";
import Slide from "./Slide";
import CarouselArrow from "./CarouselArrow";

const Carousel = ({
  imageUrls,
  defaultSlideIndex = 0,
}: {
  imageUrls: CatWithBreed[];
  defaultSlideIndex?: number;
}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(defaultSlideIndex);

  const slidesRef = useRef([]);
  const imageTrackRef = useRef(null);

  let slideWidth = 0;

  useEffect(() => {
    slideWidth = slidesRef.current[0].getBoundingClientRect().width;

    slidesRef.current.forEach((slide, index) => {
      slide.style.left = slideWidth * index + "px";
    });
  }, [slidesRef.current]);

  useEffect(() => {
    const amountToMove = slidesRef.current[currentSlideIndex].style.left;
    imageTrackRef.current.style.transform = `translateX(-${amountToMove})`;
  }, [currentSlideIndex]);

  const clickLeftArrow = () => {
    setCurrentSlideIndex(Math.max(currentSlideIndex - 1, 0));
  };
  const clickRightArrow = () => {
    setCurrentSlideIndex(Math.min(currentSlideIndex + 1, imageUrls.length - 1));
  };
  const clickIndicator = (index: number) => {
    setCurrentSlideIndex(index);
  };

  return (
    <div className="imageCarouselContainer">
      <CarouselArrow
        arrowType="left"
        currentSlideIndex={currentSlideIndex}
        clickLeftArrow={clickLeftArrow}
      />
      <div className="imageTrackContainer">
        <ul className="imageTrack" ref={imageTrackRef}>
          {imageUrls.map((item, index) => {
            return (
              <Slide
                key={index}
                image={item}
                index={index}
                currentSlideIndex={currentSlideIndex}
                slidesRef={slidesRef}
                imageUrls={imageUrls}
                clickIndicator={clickIndicator}
              />
            );
          })}
        </ul>
      </div>
      <CarouselArrow
        arrowType="right"
        currentSlideIndex={currentSlideIndex}
        clickRightArrow={clickRightArrow}
        imageUrlsLength={imageUrls.length}
      />
    </div>
  );
};

export default Carousel;
