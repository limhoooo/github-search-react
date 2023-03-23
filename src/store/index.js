import { configureStore } from '@reduxjs/toolkit';
import searchSlice from './reducers/search-slice';

const store = configureStore({
    reducer: {
        search: searchSlice
    }
})

export default store;