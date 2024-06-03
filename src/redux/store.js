import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import accountReducer from "./accountSlice";
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import cartReducer from './cartSlice';
const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
};
// Part2: Combine Reducers and Create a Store
const store = configureStore({
    reducer: {
        counter: counterReducer,
        cart: cartReducer,
        account: persistReducer(persistConfig, accountReducer),
    },
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});
persistStore(store);
//  export store to global
export default store;
