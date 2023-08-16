import axios from "axios";
import {FRIEND_MOCK_API} from "~/app/constants/appConstants.js";

export const findFriends = async () => {
    let result = null;
    try {
        result = await axios.get(`${FRIEND_MOCK_API}/friends`,{
            headers:{
                Authorization: 'token'
            }
        });
    } catch (e) {
        console.log("Friends API error: " + e);
    }
    return result;
};