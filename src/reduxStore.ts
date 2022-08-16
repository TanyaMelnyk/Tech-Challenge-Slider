import { configureStore } from "@reduxjs/toolkit";
import imageReducer from "./Carousel/model";
import type { Dispatch, PayloadAction } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    imageList: imageReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// A thunk action interface, easing use of thunks
export type ActionCreator<Args = void, FakeStore = void> = (
  args: Args
) => (dispatch: Dispatch<any>, getStore: () => FakeStore) => void;

// shortcut for 'PayloadAction'
export type Payload<T> = PayloadAction<T>;
