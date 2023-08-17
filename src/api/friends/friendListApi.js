import axios from "axios";
import {VIBELY_API} from "~/app/constants/appConstants.js";

export const findFriends = async () => {
    let result = null;
    const USER = JSON.parse(localStorage.getItem('user'))
    try {
        result = await axios.get(`${VIBELY_API}/friends/` + USER.id,{
            headers:{
                Authorization: 'Bearer ' + USER.accessToken
            }
        });
    } catch (e) {
        console.log("Friends API error: " + e);
    }
    return result;
};