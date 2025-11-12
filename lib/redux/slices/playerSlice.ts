import { createSlice } from "@reduxjs/toolkit";
import { PlayerSliceTypes, TrackTypes, AlbumTypes } from "@/types";
import type { PayloadAction } from "@reduxjs/toolkit";

interface PlayPayloadTypes {
  track: TrackTypes;
  album: AlbumTypes;
}

const initialState: PlayerSliceTypes = {
  isPlaying: false,
  currentTrack: null,
  currentAlbum: null,
};

export const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    play: (state, action: PayloadAction<PlayPayloadTypes>) => {
      state.isPlaying = true;
      if (action.payload?.track) {
        state.currentTrack = action.payload.track;
        state.currentAlbum = action.payload.album;
      }
    },
    pause: state => {
      state.isPlaying = false;
    },
  },
});

export const { play, pause } = playerSlice.actions;
export default playerSlice.reducer;
