import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { find20SuggestionFriends } from "~/api/suggestionFriendApi";

export const get20SuggestionFriends = createAsyncThunk(
  "suggestionFriends/get20SuggestionFriends",
  async () => {
    const response = await find20SuggestionFriends();
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
      state.suggestionFriendsList = updatedSuggestions;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(get20SuggestionFriends.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(get20SuggestionFriends.fulfilled, (state, action) => {
        state.loading = false;
        state.suggestionFriendsList = action.payload;
        state.success = true;
      })
      .addCase(get20SuggestionFriends.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
        state.success = false;
      });
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
export const selectSuccess = (state) => state.suggestionFriends.success;

export default suggestionFriendsSlice.reducer;
