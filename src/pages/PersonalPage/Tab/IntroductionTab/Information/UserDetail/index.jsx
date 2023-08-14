import "../../index.css"
import {useEffect, useState} from "react";
import {useFormik} from "formik";
import * as Yup from "yup";
import axios from "axios";

function UserDetail() {
    const API = "https://64c33809eb7fd5d6ebd09f15.mockapi.io/api/v1/informations/1"
    const [nameStatus, setNameStatus] = useState(false)
    const [genderStatus, setGenderStatus] = useState(false)
    const [birthdayStatus, setBirthdayStatus] = useState(false)
    const [userInfo, setUserInfo] = useState({})

    useEffect(() => {
        axios.get(API)
            .then(res => {
                setUserInfo(res.data)
            })
    }, []);

    const formikName = useFormik({
        initialValues: {
            name: ""
        },
        validationSchema: Yup.object({
            name: Yup
                .string()
                .required("You must fill in the Name section!"),
        }),
        onSubmit: async (values, {resetForm}) => {
            let currentUser = {
                name: values.name,
                gender: userInfo.gender,
                birthday: userInfo.birthday
            }
            await axios.put(API, currentUser).then(() => {
                    setUserInfo(currentUser)
                    setNameStatus(!nameStatus)
                }
            )
            resetForm();
        }
    })
    const formikGender = useFormik({
        initialValues: {
            gender: ""
        },
        validationSchema: Yup.object({
            gender: Yup
                .string()
                .required("You must to select your gender!")
        }),
        onSubmit: async (values, {resetForm}) => {
            let currentUser = {
                name: userInfo.name,
                gender: values.gender,
                birthday: userInfo.birthday
            }
            await axios.put(API, currentUser).then(() => {
                    setUserInfo(currentUser)
                    setGenderStatus(!genderStatus)
                }
            )
            resetForm();
        }
    })
    const formikBirthday = useFormik({
        initialValues: {
            birthday: ""
        },
        validationSchema: Yup.object({
            birthday: Yup
                .string()
                .required("You must fill in the Birthday section!")
        }),
        onSubmit: async (values, {resetForm}) => {
            let currentUser = {
                name: userInfo.name,
                gender: userInfo.gender,
                birthday: values.birthday
            }
            await axios.put(API, currentUser).then(() => {
                    setUserInfo(currentUser)
                    setBirthdayStatus(!birthdayStatus)
                }
            )
            resetForm();
        }
    })

    return (
        <>
            <div className="ps-5 mb-4 pe-5">
                <div>
                    <h4 className="fw-500">Full Name</h4>
                </div>
                {
                    nameStatus === true ?
                        <form className="info-form" onSubmit={formikName.handleSubmit}>
                            <div className="row">
                                <div className="col-lg-12 h75">
                                    <div className="form-group">
                                        <input type="text"
                                               className="form-control"
                                               id="name"
                                               name="name"
                                               value={formikName.values.name}
                                               onChange={formikName.handleChange}
                                               onBlur={formikName.handleBlur}
                                               placeholder="Name"/>
                                        <span className="text-red">
                                        {formikName.errors.name}
                                        </span>
                                    </div>
                                </div>
                                <div className="col-lg-12 border-bottom">
                                    <button type="submit"
                                            className={
                                                formikName.isValid ?
                                                    "text-center p-1 w50 border-0 float-right rounded-2 d-inline-block hover-button"
                                                    : "text-center p-1 w50 border-0 float-right rounded-2 d-inline-block hover-no-allowed text-grey-500"
                                            }>
                                        Save
                                    </button>
                                    <button onClick={() => {
                                        setNameStatus(false),
                                            formikName.resetForm()
                                    }}
                                            className="text-center mb-4 p-1 w50 border-0 float-right rounded-2 d-inline-block hover-button me-2">
                                        Canel
                                    </button>
                                </div>
                            </div>
                        </form>
                        : <div
                            className="fw-600 text-dark lh-26 font-xssss mb-1 row">
                            <div className="mt-1 align-items-center text-dark lh-26 mb-1 col-lg-12">
                                <h4 className="d-flex float-left">- {userInfo.name}</h4>
                                <i onClick={() => setNameStatus(!nameStatus)}
                                   className="ti-pencil d-flex font-md float-right cursor-pointer hover-edit"></i>
                            </div>
                        </div>
                }
            </div>

            <div className="ps-5 pe-5 mb-4">
                <div>
                    <h4 className="fw-500">Gender</h4>
                </div>
                {
                    genderStatus === true ?
                        <form className="info-form" onSubmit={formikGender.handleSubmit}>
                            <div className="row">
                                <div className="col-lg-12 h75">
                                    <select
                                        id="gender"
                                        name="gender"
                                        value={formikGender.values.gender}
                                        onChange={formikGender.handleChange}
                                        onBlur={formikBirthday.handleBlur}
                                        className="form-select-sm form-gender">
                                        <option className="font-xsss"
                                                defaultValue="">Select Gender
                                        </option>
                                        <option className="font-xsss" value="MALE">MALE</option>
                                        <option className="font-xsss" value="FEMALE">FEMALE</option>
                                        <option className="font-xsss" value="OTHER">OTHER</option>
                                    </select>
                                    <span className="text-red">
                                        {formikGender.errors.gender}
                                        </span>
                                </div>
                                <div className="col-lg-12 border-bottom">
                                    <button type="submit"
                                            className={
                                                formikGender.isValid ?
                                                    "text-center p-1 w50 border-0 float-right rounded-2 d-inline-block hover-button"
                                                    : "text-center p-1 w50 border-0 float-right rounded-2 d-inline-block hover-no-allowed text-grey-500"
                                            }>
                                        Save
                                    </button>
                                    <button onClick={() => {
                                        setGenderStatus(false),
                                            formikGender.resetForm()
                                    }}
                                            className="text-center mb-4 p-1 w50 border-0 float-right rounded-2 d-inline-block hover-button me-2">
                                        Canel
                                    </button>
                                </div>
                            </div>
                        </form>
                        : <div
                            className="fw-600 text-dark lh-26 font-xssss mb-1 row">
                            <div className="mt-1 align-items-center text-dark lh-26 mb-1 col-lg-12">
                                <h4 className="d-flex float-left">- {userInfo.gender}</h4>
                                <i onClick={() => setGenderStatus(!genderStatus)}
                                   className="ti-pencil d-flex font-md float-right cursor-pointer hover-edit"></i>
                            </div>
                        </div>
                }
            </div>

            <div className="ps-5 mb-4 pe-5">
                <div>
                    <h4 className="fw-500">Birthday</h4>
                </div>
                {
                    birthdayStatus === true ?
                        <form className="info-form" onSubmit={formikBirthday.handleSubmit}>
                            <div className="row">
                                <div className="col-lg-12 h75">
                                    <div className="form-group">

                                        <input type="date"
                                               min="1900-01-01"
                                               max="2023-12-31"
                                               className="form-control"
                                               id="birthday"
                                               name="birthday"
                                               value={formikBirthday.values.birthday}
                                               onChange={formikBirthday.handleChange}
                                               onBlur={formikBirthday.handleBlur}
                                               placeholder="Birthday address"/>
                                        <span className="text-red">
                                        {formikBirthday.errors.birthday}
                                        </span>
                                    </div>
                                </div>
                                <div className="col-lg-12 border-bottom">
                                    <button type="submit"
                                            className={
                                                formikBirthday.isValid ?
                                                    "text-center p-1 w50 border-0 float-right rounded-2 d-inline-block hover-button"
                                                    : "text-center p-1 w50 border-0 float-right rounded-2 d-inline-block hover-no-allowed text-grey-500"}>
                                        Save
                                    </button>
                                    <button onClick={() => {
                                        setBirthdayStatus(false),
                                            formikBirthday.resetForm()
                                    }}
                                            className="text-center mb-4 p-1 w50 border-0 float-right rounded-2 d-inline-block hover-button me-2">
                                        Canel
                                    </button>
                                </div>
                            </div>
                        </form>
                        : <div
                            className="fw-600 text-dark lh-26 font-xssss mb-1 row">
                            <div className="mt-1 align-items-center text-dark lh-26 mb-1 col-lg-12">
                                <h4 className="d-flex float-left">- {userInfo.birthday}</h4>
                                <i onClick={() => setBirthdayStatus(!birthdayStatus)}
                                   className="ti-pencil d-flex font-md float-right cursor-pointer hover-edit"></i>
                            </div>
                        </div>
                }
            </div>

        </>
    )
}

export default UserDetail;