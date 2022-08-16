import { Breed, CatWithBreed, ImageType, SlideImage } from "../Carousel/type";

export const getRandomElementsFromList = (array: any[], number: number) => {
  //shuffle array randomly
  const shuffled = array.sort(function () {
    return 0.5 - Math.random();
  });
  const list = shuffled.slice(0, number);

  return list.map((item) => {
    return {
      breedId: item.id,
      description: item.description,
      breedName: item.name,
    };
  });
};

export const normalizeImageList = (
  breedList: Breed[],
  imageList: ImageType[]
) => {
  return breedList.map((item, index) => {
    return {
      ...item,
      id: imageList[index][0].id,
      url: imageList[index][0].url,
    };
  });
};

export const addNewImageToList = (
  breedId: string,
  imageList: CatWithBreed[],
  image: SlideImage[]
) => {
  return imageList.map((item) => {
    if (item.breedId === breedId) {
      return { ...item, id: image[0].id, url: image[0].url };
    }
    return item;
  });
};
