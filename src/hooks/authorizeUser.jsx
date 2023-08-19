import {refreshTokenApi} from "~/api/accountApi.js";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {selectLastAuth, setLastAuth} from "~/features/authentication/index.js";

export const useAuthorizeUser = () => {
    const storedUser = JSON.parse(localStorage.getItem('user'))
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const lastAuthentication = useSelector(selectLastAuth)

    useEffect(() => {
        let refreshToken;
        if (!storedUser) {
            console.log(storedUser)
            // navigate("/login")
        } else {
            refreshToken = storedUser.refreshToken
        }
        const now = (new Date())/1000
        console.log(now)
        if ((now - lastAuthentication > 1800)){
            const response = refreshTokenApi(refreshToken)
            response.then(response => response.data)
                .then(data => {
                    localStorage.setItem('user', JSON.stringify(
                        {
                            accessToken: data,
                            ...storedUser
                        }
                    ))
                    dispatch(setLastAuth(now))
                    console.log('Authenticated!')
                })
                .catch(reason => {
                    console.log(reason)
                    // navigate("/login")
                })
        }


    }, [])
}