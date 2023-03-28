import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API } from "../../api/index";
export const fetchRepositoryList = createAsyncThunk(
  "search/fetchRepositoryList",
  async (owner) => {
    const response = await API.get(`/users/${owner}/repos`);
    return { data: response.data, owner };
  }
);
export const fetchRepository = createAsyncThunk(
  "search/fetchRepository",
  async (data) => {
    const response = await API.get(`/repos/${data.owner}/${data.repo}`);
    return response.data;
  }
);

const initialState = {
  resData: [],
  owner: "",
  loading: false,
  isSelect: false,
};
const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    test: (state) => {
      state.loading = "test";
    },
  },
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
    [fetchRepository.pending]: (state, action) => {},
    [fetchRepository.fulfilled]: (state, action) => {},
    [fetchRepository.rejected]: (state, action) => {},
  },
});

export const searchActions = searchSlice.actions;
export default searchSlice.reducer;
