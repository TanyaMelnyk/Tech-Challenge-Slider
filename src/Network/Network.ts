import { ImageType } from "../Carousel/type";

export async function fetchImageList(limit: number): Promise<ImageType> {
  const url = `https://api.thecatapi.com/v1/images/search?limit=${limit}&api_key=e3139813-0792-4442-8702-4dfd666b6b45`;

  return fetch(url)
    .then(async (res) => {
      return res.json();
    })
    .catch((err) => {
      throw new Error(err);
    });
}

export async function fetchBreedsList(): Promise<any> {
  const url = `https://api.thecatapi.com/v1/breeds/`;

  return fetch(url)
    .then(async (res) => {
      return res.json();
    })
    .catch((err) => {
      throw new Error(err);
    });
}

export async function fetchCatByBreed(breedId: string): Promise<any> {
  const url = `https://api.thecatapi.com/v1/images/search?breed_id=${breedId}`;

  return fetch(url)
    .then(async (res) => {
      return res.json();
    })
    .catch((err) => {
      throw new Error(err);
    });
}
