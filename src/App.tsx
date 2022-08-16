import React, { useEffect } from "react";
import Carousel from "./Carousel/Carousel";
import { useAppDispatch, useAppSelector } from "./hooks";
import { getImageList } from "./Carousel/model";
import "./style.scss";

const App = () => {
  const dispatch = useAppDispatch();
  const imageUrls = useAppSelector(({ imageList }) => imageList.images);

  //todo: add loading
  useEffect(() => {
    dispatch(getImageList());
  }, []);

  return <>{imageUrls.length && <Carousel imageUrls={imageUrls} />}</>;
};

export default App;
