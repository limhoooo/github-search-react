import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { API } from '../../api/index';
import { sortByDate } from '../../util/parseDate';
import { searchType } from './../../type/searchType';

interface searchSliceType {
  resData: searchType[];
  owner: string;
  loading: boolean;
  isSelect: boolean;
}

export const fetchRepositoryList = createAsyncThunk('search/fetchRepositoryList', async (owner: string) => {
  const response = await API.get(`/users/${owner}/repos`);
  return { data: response.data, owner };
});
export const fetchRepository = createAsyncThunk(
  'search/fetchRepository',
  async (data: { owner: string; repo: string }) => {
    const response = await API.get(`/repos/${data.owner}/${data.repo}/commits`);
    return response.data;
  }
);

const initialState: searchSliceType = {
  resData: [],
  owner: '',
  loading: false,
  isSelect: false,
};
const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    updateLoading: (state, actions: PayloadAction<boolean>) => {
      state.loading = actions.payload;
    },
  },
  extraReducers: {
    [fetchRepositoryList.pending.type]: (state, action) => {
      state.loading = true;
    },
    [fetchRepositoryList.fulfilled.type]: (state, action) => {
      state.resData = sortByDate(action.payload.data, 'updated_at').reverse();
      state.owner = action.payload.owner;
      state.isSelect = true;
    },
    [fetchRepositoryList.rejected.type]: (state, action) => {
      state.loading = false;
    },
    [fetchRepository.pending.type]: (state, action) => {
      state.loading = true;
    },
    // [fetchRepository.fulfilled.type]: (state, action) => {
    // },
    [fetchRepository.rejected.type]: (state, action) => {
      state.loading = false;
    },
  },
});

export const searchActions = searchSlice.actions;
export default searchSlice.reducer;
