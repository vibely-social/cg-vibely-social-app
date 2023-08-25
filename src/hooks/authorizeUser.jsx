import {refreshTokenApi} from "~/api/accountApi.js";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";

export const useAuthorizeUser = () => {
    const storedUser = JSON.parse(localStorage.getItem('user'))
    const navigate = useNavigate();
    const lastAuthentication = localStorage.getItem('lastAuth')

    useEffect(() => {
        let refreshToken;
        if (!storedUser) {
            navigate("/login")
        } else {
            refreshToken = storedUser.refreshToken
        }
        const now = (new Date())/1000
        if ((now - lastAuthentication > 1800)){
            const response = refreshTokenApi(refreshToken)
            response.then(response => response.data)
                .then(data => {
                    localStorage.setItem('user', JSON.stringify(
                        {
                            ...storedUser,
                            accessToken: data
                        }
                    ))
                    localStorage.setItem('lastAuth','' + now)
                    console.log('Authenticated!')
                })
                .catch(reason => {
                    console.log(reason)
                    navigate("/login")
                })
        }


    }, [])
}