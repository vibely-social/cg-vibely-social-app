import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { findSuggestionFriendsApi,addFriendApi  } from "~/api/suggestionFriendApi";

export const getSuggestionFriends = createAsyncThunk(
  "suggestionFriends",
  async () => {
    const response = await findSuggestionFriendsApi();
    return response.data;
  }
);

export const createRequestFriend = createAsyncThunk(
  "request_friends/add",
  async (id) => {
      const response = await addFriendApi(id);
  }
)

export const suggestionFriendsSlice = createSlice({
  name: "suggestionFriends",
  initialState: {
    suggestionFriendsList: [],
    loading: false,
    error: null,
    suggestionSuccess: false,
    requestSuccess: false
  },

  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setSuccess: (state, action) => {
      state.success = action.payload;
    },

    deleteSuggestionFriend: (state, action) => {
      const updatedSuggestions = state.suggestionFriendsList.filter(
        (friend) => friend.id !== action.payload.id
      );
      return {
        ...state,
        suggestionFriendsList: updatedSuggestions,
      };
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getSuggestionFriends.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.suggestionSuccess = false;
      })
      .addCase(getSuggestionFriends.fulfilled, (state, action) => {
        state.loading = false;
        state.suggestionFriendsList = action.payload;
        state.suggestionSuccess = true;
      })
      .addCase(getSuggestionFriends.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
        state.suggestionSuccess = false;
      })
      .addCase(createRequestFriend.pending, (state) => {
        state.requestSuccess = false;
        state.loading = true;
        state.error = false;
      })
      .addCase(createRequestFriend.rejected, (state, action) => {
        state.requestSuccess = false;
        state.loading = false;
        state.error = action.error;
      })
      .addCase(createRequestFriend.fulfilled, (state, action) => {
        state.requestSuccess = true;
        state.loading = false;
        state.error = false;
      });
  },
});

export const {
    setLoading,
    setError,
    setSuccess,
    deleteSuggestionFriend,
} = suggestionFriendsSlice.actions;

export const selectSuggestionFriendsList = (state) => state.suggestionFriends.suggestionFriendsList;
export const selectFriendRequestList = (state) => state.suggestionFriends.friendRequests;
export const selectLoading = (state) => state.suggestionFriends.loading;
export const selectError = (state) => state.suggestionFriends.error;
export const selectGetSuggestionSuccess = (state) => state.suggestionFriends.suggestionSuccess;
export const selectGetRequestSuccess = (state) => state.suggestionFriends.requestSuccess;

export default suggestionFriendsSlice.reducer;
