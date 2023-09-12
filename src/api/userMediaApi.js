import axios from "axios";
import {VIBELY_API} from "~/app/constants.js";

export const getUserMedia = async ({id, page}) => {
    let result = null;
    let user = JSON.parse(localStorage.getItem('user'))
    console.log('id: ' + id)
    try {
        console.log(`${VIBELY_API}/media/${id}?page=${page}`);
        result = await axios.get(`${VIBELY_API}/media/${id}?page=${page}`,{
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