import axios from "axios";
import {VIBELY_API} from "~/app/constants.js";
import {getStoredUserData} from "~/service/accountService.js";

export const findFriends = async () => {
    let result = null;
    let user = getStoredUserData()
    try {
        result = await axios.get(`${VIBELY_API}/friends/` + user.id,{
            headers:{
                Authorization: 'Bearer ' + user.accessToken
            }
        });
    } catch (e) {
        console.log('Find friends error!')
        console.log(e);
    }
    return result;
};