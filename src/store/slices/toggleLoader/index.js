import {createSlice} from "@reduxjs/toolkit";

const toogleLoader = createSlice({
    name: 'firstLoad',
    initialState: {
        isOn: false,
      },
    reducers: {
      turnOffLoader: (state) => {
        state.isOn = true;
      },
    },
  });

export const { turnOffLoader } = toogleLoader.actions;

export default toogleLoader;