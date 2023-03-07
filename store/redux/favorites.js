import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: {
        ids: []
    },
    reducers: {
        addFavorite: (state, action) => {
            // state.ids.push(action.payload.id);
            state.ids.push(action.payload);
        },
        removeFavorite: (state, action) => {
            // state.ids.splice(state.ids.indexOf(action.payload.id), 1);
            state.ids.splice(state.ids.indexOf(action.payload), 1);
        },
    }
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;