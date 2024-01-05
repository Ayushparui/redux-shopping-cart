import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    foods: [{}]
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addCart: (state, action) => {
            const food = {
                id: action.payload.id,
                name: action.payload.name,
                image: action.payload.img,
                price: action.payload.price,
                quantity: action.payload.quantity
            }
            state.foods.push(food);
        },
        removeFood: (state, action) => {
            state.foods = state.foods.filter((food) => food.id !== action.payload )
            
        }
    },
});

export const { addCart, removeFood } = cartSlice.actions;
export default cartSlice.reducer;