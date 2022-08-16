import { CatWithBreed } from "./type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchBreedsList, fetchCatByBreed } from "../Network/Network";
import {
  addNewImageToList,
  getRandomElementsFromList,
  normalizeImageList,
} from "../shared/utils";
import { ActionCreator, RootState } from "../reduxStore";

export interface TasksState {
  images: CatWithBreed[];
}
const initialState: TasksState = {
  images: [],
};

export const carouselSlice = createSlice({
  name: "carousel",
  initialState,
  reducers: {
    saveImages: (state, { payload }: PayloadAction<CatWithBreed[]>) => {
      state.images = payload;
    },
  },
});

export const getImageList: ActionCreator<void, RootState> =
  () => async (dispatch) => {
    try {
      const breedsList = await fetchBreedsList();
      const breedsRandomList = getRandomElementsFromList(breedsList, 4);

      const randomCatsList = await Promise.all(
        breedsRandomList.map((url) => {
          return fetchCatByBreed(url.breedId);
        })
      );

      const imageList = normalizeImageList(breedsRandomList, randomCatsList);
      
      if (imageList && imageList.length) {
        dispatch(actions.saveImages(imageList));
      }
    } catch (e) {
      console.error("Unexpected error", e);
    }
  };

export const getImageOfBreed: ActionCreator<string, RootState> =
  (breedId) => async (dispatch, getState) => {
    const image = await fetchCatByBreed(breedId);
    const updatedList = addNewImageToList(
      breedId,
      getState().imageList.images,
      image
    );
    dispatch(actions.saveImages(updatedList));
  };

const { actions } = carouselSlice;

export default carouselSlice.reducer;
