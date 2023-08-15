import axios from "axios";

export const getUserInfoApi = async () => {
    await axios.get("url",{
        headers:{
            //Authorization: token
        }
    })
}