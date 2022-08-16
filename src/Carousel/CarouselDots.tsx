import React from "react";
import { ImageType } from "./type";

const CarouselDots = ({
  imageUrls,
  currentSlideIndex,
  clickIndicator,
}: {
  imageUrls: ImageType;
  currentSlideIndex: number;
  clickIndicator: (index: number) => void;
}) => {
  return (
    <div className="indicatorNav">
      {imageUrls.map((item, index) => {
        return (
          <button
            key={index}
            className={
              "carouseIndicator" +
              (index === currentSlideIndex ? " currentSlide" : "")
            }
            onClick={() => clickIndicator(index)}
          />
        );
      })}
    </div>
  );
};

export default CarouselDots;
