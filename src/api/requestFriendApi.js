import axios from "axios";
import {VIBELY_API} from "~/app/constants.js";
import {getStoredUserData} from "~/service/accountService";

export const findRequestFriendsApi = async () => {
    let result = null;
    let user = getStoredUserData()
    try{
        result = await axios.get(`${VIBELY_API}/friends/request`,{
            headers:{
              Authorization: 'Bearer ' + user.accessToken
              }
            });
        } catch (e) {
            console.log("Find request friends API error: " + e);
        }
          console.log(result);
          return result;
};

export const deleteRequestFriendApi = async (friendIdToDelete) => {
  let user = getStoredUserData();
  try {
    const response = await axios.delete(
      `${VIBELY_API}/friends/${user.id}/requested/${friendIdToDelete}`,
      {
        headers: {
          Authorization: 'Bearer ' + user.accessToken,
        },
      }
    );
    return response.data;
  } catch (e) {
    console.log("Delete request friend API error: " + e);
    throw e;
  }
};

export const addFriendApi = async (friendRequestDto) => {
  let user = getStoredUserData();
  try {
    const response = await axios.post(
      `${VIBELY_API}/friends/request`,
      friendRequestDto,
      {
        headers: {
          Authorization: 'Bearer ' + user.accessToken,
        },
      }
    );
    return response.data;
  } catch (e) {
    console.log("Adding friend API error: " + e);
    throw e;
  }
};

export const acceptFriendApi = async (id) => {
  let user = getStoredUserData();
  try {
    const response = await axios.get(
      `${VIBELY_API}/friends/accept/${id}`,
      {
        headers: {
          Authorization: 'Bearer ' + user.accessToken,
        },
      }
    );
  } catch (e) {
    console.log("Adding friend API error: " + e);
  }
};


