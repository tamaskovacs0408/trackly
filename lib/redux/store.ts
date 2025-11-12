import { configureStore } from "@reduxjs/toolkit";
import playerReducer from "@/lib/redux/slices/playerSlice";

export function createStore() {
  return configureStore({
    reducer: {
      player: playerReducer,
    },
  });
}

export const store = createStore();