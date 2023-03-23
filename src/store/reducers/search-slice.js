import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const githubToken = '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';
export const fetchRepositories = createAsyncThunk(
    'search/fetchRepositories',
    async (name) => {
        const response = await fetch(`https://api.github.com/users/${name}/repos`, {
            headers: {
                Authorization: `token ${githubToken}`
            }
        });
        const data = await response.json();
        return data;
    }
)

const initialState = {
    resData: [],
    loading: false
}
const searchSlice = createSlice({
    name: 'search',
    initialState,
    extraReducers: {
        [fetchRepositories.pending]: (state, action) => {
            state.loading = true;
        },
        [fetchRepositories.fulfilled]: (state, action) => {
            state.resData = action.payload;
            state.loading = false;
        },
        [fetchRepositories.rejected]: (state, action) => {
            state.loading = false;

        },
    }
})

export const searchActions = searchSlice.actions;
export default searchSlice.reducer;