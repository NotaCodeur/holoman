import { configureStore } from "@reduxjs/toolkit";
import { heliumApi } from "../services/heliumApi";


export default configureStore({
    reducer: {
        [heliumApi.reducerPath]: heliumApi.reducer,
    },
});