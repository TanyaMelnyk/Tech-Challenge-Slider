import React from "react";

const CarouselArrow = ({
  arrowType,
  currentSlideIndex,
  clickLeftArrow,
  clickRightArrow,
  imageUrlsLength,
}: {
  arrowType: "right" | "left";
  currentSlideIndex: number;
  clickLeftArrow?: () => void;
  clickRightArrow?: () => void;
  imageUrlsLength?: number;
}) => {
  if (arrowType === "left") {
    return (
      <div
        className={
          "arrowButton leftArrow " +
          (currentSlideIndex === 0 ? " is-hidden" : "")
        }
        onClick={clickLeftArrow}
      />
    );
  } else {
    return (
      <div
        className={
          "arrowButton rightArrow" +
          (currentSlideIndex === imageUrlsLength - 1 ? " is-hidden" : "")
        }
        onClick={clickRightArrow}
      />
    );
  }
};

export default CarouselArrow;
