import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const githubToken = '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';
export const fetchRepositoryList = createAsyncThunk(
    'search/fetchRepositoryList',
    async (owner) => {
        const response = await fetch(`https://api.github.com/users/${owner}/repos`, {
            headers: {
                //Authorization: `token ${githubToken}`
            }
        });
        const data = await response.json();
        return { data, owner };
    }
)
export const fetchRepository = createAsyncThunk(
    'search/fetchRepository',
    async (owner, repo) => {
        const response = await fetch(`https://api.github.com/repos/${owner}/${repo}`, {
            headers: {
                //Authorization: `token ${githubToken}`
            }
        });
        const data = await response.json();
        return data;
    }
)

const initialState = {
    resData: [],
    owner: '',
    loading: false,
    isSelect: false
}
const searchSlice = createSlice({
    name: 'search',
    initialState,
    extraReducers: {
        [fetchRepositoryList.pending]: (state, action) => {
            state.loading = true;
        },
        [fetchRepositoryList.fulfilled]: (state, action) => {
            state.resData = action.payload.data;
            state.owner = action.payload.owner;
            state.isSelect = true;
            state.loading = false;
        },
        [fetchRepositoryList.rejected]: (state, action) => {
            state.loading = false;

        },
    }
})

export const searchActions = searchSlice.actions;
export default searchSlice.reducer;