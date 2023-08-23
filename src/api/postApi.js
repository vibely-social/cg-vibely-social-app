import axios from "axios";
import {VIBELY_API} from "~/app/constants.js";

export const getPostDetail = async (id) => {
    let result = null;
    let user = JSON.parse(localStorage.getItem('user'))
    try {
        result = await axios.get(`${VIBELY_API}/posts/${id}`,{
            headers:{
                Authorization: 'Bearer ' + user.accessToken
            }
        });
    } catch (e) {
        return e.response
    }
    return result;
};