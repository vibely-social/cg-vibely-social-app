import axios from "axios";
import {VIBELY_API} from "~/app/constants.js";
import {getStoredUserData} from "~/service/accountService"


export const findSuggestionFriendsApi = async () => {
    let result = null;
    let user = getStoredUserData()
    console.log(user);
    try {
      
      result = await axios.get(`${VIBELY_API}/users/${user.id}/suggestionFriends`,{
        headers:{
          Authorization: 'Bearer ' + user.accessToken
          }
        });
      } catch (e) {
      console.log("Find suggestion friends API error: " + e);
    }
    console.log(result);
    return result;
  };
  