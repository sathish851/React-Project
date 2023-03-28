import { configureStore,combineReducers } from "@reduxjs/toolkit";
import authSlice from "./slice";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web


const persistConfig = {
    key: 'root',
    storage,
};

const reducer = combineReducers({
    auth:authSlice.reducer
})
const persistedReducer = persistReducer(persistConfig, reducer);


const store = configureStore({
    reducer: persistedReducer,
    
});
export default store;