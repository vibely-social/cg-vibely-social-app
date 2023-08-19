import axios from "axios";
import {VIBELY_API} from "~/app/constants.js";

export const userInfoApi = async () => {
    let response = {};
    try{
        response = await axios.get(`${VIBELY_API}/users/info/1`);
    } catch (e) {
        console.log("Register error: " + e);
    }
    return response.data;
}
export const editUserInfoApi = async (data) => {
    let response = {};

    try{
        response = await axios.put(`${VIBELY_API}/users/info`, data)
    } catch (e) {
        console.log("Register error: " + e);
    }
    return response.data;
}




