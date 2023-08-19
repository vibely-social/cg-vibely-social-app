import axios from "axios";

const USER_INFO_API = "http://localhost:8080/api/users/info"
export const getUserInfoApi = async () => {
    try{
        return await axios.get(`${USER_INFO_API}/1`);
    } catch (error){
        console.log(error);
        return error;
    }
}
export const editUserInfoApi = async (userInfo) => {
    try{
        return await axios.put(USER_INFO_API, userInfo)
    } catch (error){
        console.log(error);
        return error;
    }
}




