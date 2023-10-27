import {getAccessToken} from "~/service/accountService.js";
import axios from "axios";
import {VIBELY_API} from "~/app/constants.js";

export const updateAvatarApi = async (body) => {
    const token = getAccessToken();
    let response = null;
    try {
         response = await axios.post(
            `${VIBELY_API}/users/avatar`,
            body,
            {
                headers:{
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "multipart/form-data",
                }
            }
        )
        return response.data;
    }catch (e){
        console.log('Fail to update avatar!', e)
    }
}