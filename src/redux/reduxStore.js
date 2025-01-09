import { configureStore } from "@reduxjs/toolkit";
import userAuthSlice from "./userAuthSlice";

const reduxStore = configureStore({
    reducer : userAuthSlice
})
export default reduxStore;