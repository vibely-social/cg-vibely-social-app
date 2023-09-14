import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { deleteRequestFriendApi, findRequestFriendsApi, acceptFriendApi  } from "~/api/requestFriendApi";

export const getRequestFriends = createAsyncThunk(
  "requestFriends",
  async () => {
    const response = await findRequestFriendsApi();
    return response.data;
  }
);

export const deleteRequestFriend = createAsyncThunk(
    "request_friends/delete",
    async (friendIdToDelete) => {
        const response = await deleteRequestFriendApi(friendIdToDelete);
        return response.data;
    }
)

export const acceptRequestFriend = createAsyncThunk(
    "request_friends/accept",
    async (id) => {
        await acceptFriendApi(id);
    }
)

export const requestFriendsSlice = createSlice({
  name: "requestFriends",
  initialState: {
    requestFriendsList: [],
    loading: false,
    error: null,
    success: false,
  },

  reducer: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setSuccess: (state, action) => {
      state.success = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
    .addCase (getRequestFriends.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
    .addCase(getRequestFriends.fulfilled, (state, action) => {
        state.loading = false;
        state.requestFriendsList = action.payload;
        state.success = true;
      })
    .addCase(getRequestFriends.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
        state.success = false;
      })
      .addCase(deleteRequestFriend.pending, (state) => {
        state.success = false;
        state.loading = true;
        state.error = false;
      })
      .addCase(deleteRequestFriend.rejected, (state, action) => {
        state.success = false;
        state.loading = false;
        state.error = action.error;
      })
      .addCase(deleteRequestFriend.fulfilled, (state, action) => {
        state.success = true;
        state.loading = false;
        state.error = false;
      })
      .addCase(acceptRequestFriend.pending, (state) => {
        state.success = false;
        state.loading = true;
        state.error = false;
      })
      .addCase(acceptRequestFriend.rejected, (state, action) => {
        state.success = false;
        state.loading = false;
        state.error = action.error;
      })
      .addCase(acceptRequestFriend.fulfilled, (state, action) => {
        state.success = true;
        state.loading = false;
        state.error = false;
      })
  }
});

export const {
    setLoading,
    setError,
    setSuccess,
  } = requestFriendsSlice.actions;

  export const selectRequestFriendLoading = (state) => state.requestFriends.loading;
  export const selectRequestFriendError = (state) => state.requestFriends.error;
  export const selectRequestFriendSuccess = (state) => state.requestFriends.success;
  export const selectRequestFriendsList = (state) => state.requestFriends.requestFriendsList;
 
  export default requestFriendsSlice.reducer;

