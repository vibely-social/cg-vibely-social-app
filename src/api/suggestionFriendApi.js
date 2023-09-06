import axios from "axios";
import {VIBELY_API} from "~/app/constants.js";
import {getStoredUserData} from "~/service/accountService"


export const findSuggestionFriendsApi = async () => {
    let result = null;
    let user = getStoredUserData()
    console.log(user);
    try {
      
      result = await axios.get(`${VIBELY_API}/users/${user.id}/suggestion_friends`,{
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

  export const addFriendApi = async (id) => {
    let user = getStoredUserData();
    try {
      const response = await axios.post(`${VIBELY_API}/friends/${id}`, {
        headers: {
          Authorization: "Bearer " + user.accessToken,
        },
      });
    } catch (e) {
      console.log("Adding friend API error: " + e);
      throw e;
    }
  };
  