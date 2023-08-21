import axios from "axios";
import {VIBELY_API} from "~/app/constants.js";

export const userInfoApi = async (id) => {
    let response = {};

    try{
        response = await axios.get(`${VIBELY_API}/users/info/${id}`);
    } catch (e) {
        console.log("Get user info error! " + e);
    }
    return response.data;
}
export const editUserInfoApi = async (data) => {
    let response = {};
    try{
        response = await axios.put(`${VIBELY_API}/users`, data)
    } catch (e) {
        console.log("Edit user info error! " + e);
    }
    return response.data;
}




