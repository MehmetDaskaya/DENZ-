import { configureStore } from "@reduxjs/toolkit";
import navReducer from "./slices/navSlice";
import { setSignedIn } from "./slices/navSlice";

export const store = configureStore({
    reducer: {
        nav: navReducer,
        setSignedIn: setSignedIn,
    },

});