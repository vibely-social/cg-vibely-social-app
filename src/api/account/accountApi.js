import axios from "axios";
import {VIBELY_API} from "~/app/constants/appConstants.js";


export const loginApi = async (data) => {
    let response = {};
    try {
        response = await axios.post(VIBELY_API+'/auth/login', data)
        return response.data
    } catch (e) {
        console.log("Login error: " + e);
        return response.data
    }
}
export const registerApi = async (data) => {
    let response = {};
    try {
        response = await axios.post(VIBELY_API+'/users', data)
    } catch (e) {
        console.log("Register error: " + e);
    }
    return response.data;
}

export const checkEmailApi = async (data) => {
    let response = {};
    try {
        response = await axios.get(VIBELY_API+'/auth/user/'+ data)
    } catch (e) {
        console.log("Check email error: " + e);
    }
    return response.data;
}
