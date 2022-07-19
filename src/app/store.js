import { configureStore } from "@reduxjs/toolkit";
import { Api } from "../services/Api";


export default configureStore({
    reducer: {
        [Api.reducerPath]: Api.reducer,
    },
});