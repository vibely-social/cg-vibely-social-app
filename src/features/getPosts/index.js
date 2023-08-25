import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import { getPostsList } from "~/api/postApi";

export const fetchPosts = createAsyncThunk('fetchNewPosts', async () => {
  const response = await getPostsList();
  return response.data;
});

const postsSlice = createSlice({
    name: 'posts',
    initialState: {
      newPosts: [],
      isLoading: false,
      isSuccess: false,
      isFailed: false
    },
    reducers: {
      createPost: (state, action) => {
          state.newPosts.unshift(action.payload);
      }
    },
      extraReducers: (builder) => {
        builder.addCase(fetchPosts.pending, (state, action) => {
          state.isLoading = true;
        }),
        builder.addCase(fetchPosts.fulfilled, (state, action) => {
          state.isLoading = false;
          state.newPosts = action.payload
          state.isSuccess = true;
        }),
        builder.addCase(fetchPosts.rejected, (state, action) => {
          state.isLoading = false;
          state.isFailed = true;
        })
    },
  });

export const { setPosts, createPost } = postsSlice.actions;

export default postsSlice;