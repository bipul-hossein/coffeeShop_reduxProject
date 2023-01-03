import { createSlice } from "@reduxjs/toolkit";

const initialProducts = {
    products: [
        { _id: 1, title: "Black coffee", price: 24, details: "very beautiful" },
        { _id: 2, title: "Milk coffee", price: 34, details: "very beautiful" },
        { _id: 3, title: "Green coffee", price: 100, details: "very beautiful" },
    ]
};

export const productsSlice = createSlice({
    name: "products",
    initialState: initialProducts,
    reducers: {
        showProducts:(state) => state,
    }

});

export const {showProducts}= productsSlice.actions;

export default productsSlice.reducer;