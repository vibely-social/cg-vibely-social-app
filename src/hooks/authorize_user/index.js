import {useDispatch, useSelector} from "react-redux";
import {selectUserData, setUserData} from "~/store/slices/userAccount/index.js";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

export const useAuthorizeUser = () => {
    const user = useSelector(selectUserData);
    const storedUser = JSON.parse(localStorage.getItem('user'))
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(()=>{
        if (!user){
            if (!storedUser){
                navigate("/login")
            }else {
                dispatch(setUserData(storedUser))
            }
        }
    })
}