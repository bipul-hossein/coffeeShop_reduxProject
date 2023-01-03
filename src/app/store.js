import { configureStore } from "@reduxjs/toolkit";
import  productsReducer from "../pages/ProductsSlice";


const store = configureStore({
    reducer: {
        productsReducer: productsReducer
    }
});

export default store;