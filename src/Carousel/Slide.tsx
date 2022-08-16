import React, { MutableRefObject } from "react";
import { CatWithBreed, ImageType } from "./type";
import CarouselDots from "./CarouselDots";
import { useAppDispatch } from "../hooks";
import { getImageOfBreed } from "./model";

const Slide = ({
  image,
  index,
  currentSlideIndex,
  slidesRef,
  imageUrls,
  clickIndicator,
}: {
  image: CatWithBreed;
  index: number;
  currentSlideIndex: number;
  slidesRef: MutableRefObject<any[]>;
  imageUrls: ImageType;
  clickIndicator: (index: number) => void;
}) => {
  const dispatch = useAppDispatch();

  const handleClick = (breedId: string) => {
    dispatch(getImageOfBreed(breedId));
  };

  return (
    <li
      key={index}
      className={
        "imageSlide" + (index === currentSlideIndex ? " currentSlide" : "")
      }
      ref={(el) => (slidesRef.current[index] = el)}
    >
      <img className="carouselImage" src={image.url} alt="" />
      <CarouselDots
        imageUrls={imageUrls}
        currentSlideIndex={currentSlideIndex}
        clickIndicator={clickIndicator}
      />
      <div>
        <h2>{image.breedName}</h2>
        <p>{image.description}</p>
      </div>
      <button onClick={() => handleClick(image.breedId)} className="purple-btn">
        Get another cat
      </button>
    </li>
  );
};

export default Slide;
