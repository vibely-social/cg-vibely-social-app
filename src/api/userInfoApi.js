import axios from "axios";
import {VIBELY_API} from "~/app/constants.js";

export const userInfoApi = async () => {
    try{
        return await axios.get(VIBELY_API + '/users/info' /1);
    } catch (error){
        console.log(error);
        return error;
    }
}
export const editUserInfoApi = async (userInfo) => {
    try{
        return await axios.put(VIBELY_API + '/users/info', userInfo)
    } catch (error){
        console.log(error);
        return error;
    }
}




