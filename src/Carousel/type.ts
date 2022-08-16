export type SlideImage = {
  id: string;
  url: string;
};

export type ImageType = SlideImage[];

export type Breed = {
  description: string;
  breedId: string;
  breedName: string;
};

export type CatWithBreed = SlideImage & Breed;
