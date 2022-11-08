import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  signedIn: true,
  origin: null,
  destination: null,
  travelTimeInformation: null,
  initialTravelInformation: null,
  initialTravelDuration: null,
  initialTravelDurationFinal: null,
  earthDistance: null,
  seaTravelInformation: null,
};

export const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    setSignedIn: (state, action) => {
      state.signedIn = action.payload;
    },

    setOrigin: (state, action) => {
      state.origin = action.payload;
    },
    setDestination: (state, action) => {
      state.destination = action.payload;
    },
    setTravelTimeInformation: (state, action) => {
      state.travelTimeInformation = action.payload;
    },
    setInitialTravelInformation: (state, action) => {
      state.initialTravelInformation = action.payload;
    },
    setInitialTravelDuration: (state, action) => {
      state.initialTravelDuration = action.payload;
    },
    setEarthDistance: (state, action) => {
      state.earthDistance = action.payload;
    },
    setSeaTravelInformation: (state, action) => {
      state.seaTravelInformation = action.payload;
    },
    selectInitialTravelDurationFinal: (state, action) => {
      state.initialTravelDurationFinal = action.payload;
    },
  },
});

export const {
  setSignedIn,
  setOrigin,
  setDestination,
  setTravelTimeInformation,
  setInitialTravelInformation,
  setInitialTravelDuration,
  setEarthDistance,
  setSeaTravelInformation,
  setInitialTravelDurationFinal,
} = navSlice.actions;

//Selectors
export const selectSignedIn = (state) => state.nav.signedIn;
export const selectOrigin = (state) => state.nav.origin;
export const selectDestination = (state) => state.nav.destination;
export const selectTravelTimeInformation = (state) =>
  state.nav.travelTimeInformation;
export const selectInitialTravelInformation = (state) =>
  state.nav.initialTravelInformation;
export const selectInitialTravelDuration = (state) =>
  state.nav.initialTravelDuration;
export const selectEarthDistance = (state) => state.nav.earthDistance;
export const selectSeaTravelInformation = (state) =>
  state.nav.seaTravelInformation;
export const selectInitialTravelDurationFinal = (state) =>
  state.nav.initialTravelDurationFinal;

export default navSlice.reducer;
