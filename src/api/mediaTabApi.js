import axios from "axios";
import {VIBELY_API} from "~/app/constants.js";

export const getUserMedia = async () => {
    let result = null;
    let user = JSON.parse(localStorage.getItem('user'))
    try {
        result = await axios.get(`${VIBELY_API}/media/` + user.id,{
            headers:{
                Authorization: 'Bearer ' + user.accessToken
            }
        });
    } catch (e) {
        console.log(e.response);
        return e.response
    }
    return result;
};