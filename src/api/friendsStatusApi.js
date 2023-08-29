import {getStoredUserData} from "~/service/accountService.js";
import axios from "axios";
import {VIBELY_API} from "~/app/constants.js";

export const getStatus = async (friendEmails) => {
    let result = null;
    let user = getStoredUserData()
    try {
        result = await axios.post(
            `${VIBELY_API}/friends/status`,
            {friendEmails},
            {
                headers: {
                    Authorization: 'Bearer ' + user.accessToken
                }
            });
    } catch (e) {
        console.log('Get status error!')
        console.log(e);
    }
    return result;
};