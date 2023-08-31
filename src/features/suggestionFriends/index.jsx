import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { findSuggestionFriendsApi } from "~/api/suggestionFriendApi";

export const getSuggestionFriends = createAsyncThunk(
  "suggestionFriends",
  async () => {
    console.log('api call');
    const response = await findSuggestionFriendsApi();
    console.log('response');
    return response.data;
  }
);

export const suggestionFriendsSlice = createSlice({
  name: "suggestionFriends",
  initialState: {
    suggestionFriendsList: [],
    loading: false,
    error: null,
    success: false,
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
        state.success = false;
      })
      .addCase(getSuggestionFriends.fulfilled, (state, action) => {
        state.loading = false;
        state.suggestionFriendsList = action.payload;
        state.success = true;
      })
      .addCase(getSuggestionFriends.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
        state.success = false;
      })
  },
});

export const {
  setLoading,
  setError,
  setSuccess,
  deleteSuggestionFriend,
} = suggestionFriendsSlice.actions;

export const selectSuggestionFriendsList = (state) =>
  state.suggestionFriends.suggestionFriendsList;
export const selectLoading = (state) => state.suggestionFriends.loading;
export const selectError = (state) => state.suggestionFriends.error;
export const selectGetSuggestionSuccess = (state) => state.suggestionFriends.success;

export default suggestionFriendsSlice.reducer;
