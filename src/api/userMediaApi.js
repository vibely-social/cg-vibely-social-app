import axios from "axios";
import {VIBELY_API} from "~/app/constants.js";

export const getUserMedia = async (id, pageIndex) => {
    let result = null;
    let user = JSON.parse(localStorage.getItem('user'))
    try {
        result = await axios.get(`${VIBELY_API}/media/${id}`,{
            headers:{
                Authorization: 'Bearer ' + user.accessToken
            }
        });
    } catch (e) {
        console.log('Error at get media!')
        console.log(e)
    }
    return result;
};