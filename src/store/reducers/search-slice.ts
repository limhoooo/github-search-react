import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API } from '../../api/index';

interface searchType {
  id: string;
  name: string;
  description: string;
  created_at: string;
  language: string;
}

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
    const response = await API.get(`/repos/${data.owner}/${data.repo}`);
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
    test: state => {
      state.loading = true;
    },
  },
  extraReducers: {
    [fetchRepositoryList.pending.type]: (state, action) => {
      state.loading = true;
    },
    [fetchRepositoryList.fulfilled.type]: (state, action) => {
      state.resData = action.payload.data;
      state.owner = action.payload.owner;
      state.isSelect = true;
      state.loading = false;
    },
    [fetchRepositoryList.rejected.type]: (state, action) => {
      state.loading = false;
    },
    // [fetchRepository.pending.type]: (state, action) => {},
    // [fetchRepository.fulfilled.type]: (state, action) => {},
    // [fetchRepository.rejected.type]: (state, action) => {},
  },
});

export const searchActions = searchSlice.actions;
export default searchSlice.reducer;
