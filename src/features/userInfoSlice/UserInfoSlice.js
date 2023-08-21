import {createSlice} from "@reduxjs/toolkit";
import {editUserInfoApi} from "~/api/getUserInfoApi.js";

const initialState = {
    id: '',
    email: '',
    firstName: '',
    lastName: '',
    birthday: '',
    gender: '',
    phoneNumber: '',
    city: '',
}

export const editUserInfo = async (userInfo) => {
    await editUserInfoApi(userInfo);
}

export const formatDate = (date) => {
    const year = date.slice(0, 4);
    const month = date.slice(5, 7);
    const day = date.slice(8, 10);
    return `${day}/${month}/${year}`;
}

const UserInfoSlice = createSlice({
    name: 'userInfo',
    initialState,
    reducers: {
        setFullName(state, payload) {
            state.firstName = payload.payload.firstName;
            state.lastName = payload.payload.lastName;
        },
        setBirthday(state, payload) {
            state.birthday = payload.payload.birthday;
        },
        setGender(state, payload) {
            state.gender = payload.payload.gender;
        },
        setPhoneNumber(state, payload) {
            state.phoneNumber = payload.payload.phoneNumber;
        },
        setCity(state, payload) {
            state.city = payload.payload.city;
        },
        setUserInfo(state, payload) {
            state.id = payload.payload.id;
            state.email = payload.payload.email;
            state.firstName = payload.payload.firstName;
            state.lastName = payload.payload.lastName;
            state.birthday = payload.payload.birthday;
            state.gender = payload.payload.gender;
            state.phoneNumber = payload.payload.phoneNumber;
            state.city = payload.payload.city;

        },
    },
})

export const {
    setFullName,
    setBirthday,
    setGender,
    setPhoneNumber,
    setCity,
    setUserInfo
} = UserInfoSlice.actions;

export default UserInfoSlice.reducer