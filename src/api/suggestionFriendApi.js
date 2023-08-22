import axios from "axios";

const SUGGESTION_FRIENDS_API = "https://64a4d936c3b509573b57d457.mockapi.io/api";

export const find20SuggestionFriends = async () => {
    let result = null;
    try {
      result = await axios.get(`${SUGGESTION_FRIENDS_API}/user`);
    } catch (e) {
      console.log("Find suggestion friends API error: " + e);
    }
    return result;
  };
  