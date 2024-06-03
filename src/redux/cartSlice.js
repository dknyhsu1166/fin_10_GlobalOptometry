import { createSlice } from '@reduxjs/toolkit';

const initialState = { cartItems: [] };
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addCartItems: (state, action) => {
            const item = action.payload;
            const product = state.cartItems.find((x) => x.id === item.id);
            if (product) {
                const cartItems = state.cartItems.map((x) =>
                    x.id === product.id ? item : x
                );
                state.cartItems = cartItems;
            } else {
                state.cartItems = [...state.cartItems, item];
            }
        },
        removeCartItems: (state, action) => {
            state.cartItems = state.cartItems.filter((x) => x.id !== action.payload);
        },
        clearCart: (state) => {
            state.cartItems = [];
        }

    },
});

//export state to global
export const selectCartItems = (state) => state.cart.cartItems;
//export actions to global
export const { addCartItems, removeCartItems, clearCart} = cartSlice.actions;
//export reducer to globalclearCart
export default cartSlice.reducer;