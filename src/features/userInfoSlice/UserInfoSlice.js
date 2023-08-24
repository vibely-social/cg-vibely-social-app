import {createSlice} from "@reduxjs/toolkit";
import {editUserInfoApi} from "~/api/userInfoApi.js";

const initialState = {
    id: '',
    email: '',
    firstName: '',
    lastName: '',
    birthday: '',
    gender: '',
    phoneNumber: '',
    city: '',
    district: '',
    school: '',
    company: '',
    position: '',
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
            state.district = payload.payload.district;
        },
        setSchool(state, payload) {
            state.school = payload.payload.school;
        },
        setWork(state, payload) {
            state.company = payload.payload.company;
            state.position = payload.payload.position;
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
            state.district = payload.payload.district;
            state.school = payload.payload.school;
            state.company = payload.payload.company;
            state.position = payload.payload.position;

        },
    },
})

export const {
    setFullName,
    setBirthday,
    setGender,
    setPhoneNumber,
    setCity,
    setSchool,
    setWork,
    setUserInfo,
} = UserInfoSlice.actions;

export default UserInfoSlice.reducer