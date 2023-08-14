import "../../index.css"
import {useEffect, useState} from "react";
import {useFormik} from "formik";
import * as Yup from "yup";
import axios from "axios";

function Contact() {
    const API = "https://64c33809eb7fd5d6ebd09f15.mockapi.io/api/v1/informations/1"
    const [phoneStatus, setPhoneStatus] = useState(false)
    const [addressStatus, setAddressStatus] = useState(false)
    const [emailStatus, setEmailStatus] = useState(false)
    const [userInfo, setUserInfo] = useState({})

    useEffect(() => {
        axios.get(API)
            .then(res => {
                setUserInfo(res.data)
            })
    }, []);

    const formikAddress = useFormik({
        initialValues: {
            address: ""
        },
        validationSchema: Yup.object({
            address: Yup
                .string()
                .required("You must fill in the Address section!")
        }),
        onSubmit: (values, {resetForm}) => {
            console.log(values);
            resetForm();
        }
    })

    const formikPhone = useFormik({
        initialValues: {
            phone: ""
        },
        validationSchema: Yup.object({
            phone: Yup
                .string()
                .required("You must fill in the Phone number section!")
                .matches(/^[0-9]{10}$/,
                    "Please enter a valid Phone number - (includes 10 numbers) !"),

        }),
        onSubmit: (values, {resetForm}) => {
            console.log(values);
            resetForm();
        }
    })

    const formikEmail = useFormik({
        initialValues: {
            email: ""
        },
        validationSchema: Yup.object({
            email: Yup
                .string()
                .required("You must fill in the Email address section!")
                .matches(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
                    "Please enter a valid Email address - (email@example.com) !"),
        }),
        onSubmit: async (values, {resetForm}) => {
            let currentUser = {
                email: values.email
            }
            await axios.put(API, currentUser).then(() => {
                    setUserInfo(currentUser)
                    setEmailStatus(!emailStatus)
                }
            )
            resetForm();
        }
    })


    return (
        <>
            <div className="ps-5 pe-5 mb-4">
                <div>
                    <h4 className="fw-500">Phone number</h4>
                </div>
                {
                    phoneStatus === true ?
                        <form className="info-form" onSubmit={formikPhone.handleSubmit}>
                            <div className="row">
                                <div className="col-lg-12 h75">
                                    <div className="form-group">

                                        <input type="text"
                                               className="form-control"
                                               id="phone"
                                               name="phone"
                                               value={formikPhone.values.phone}
                                               onChange={formikPhone.handleChange}
                                               onBlur={formikPhone.handleBlur}
                                               placeholder="Phone number"/>
                                        <span className="text-red">
                                        {formikPhone.errors.phone}
                                        </span>
                                    </div>
                                </div>
                                <div className="col-lg-12 border-bottom">
                                    <button type="submit"
                                            className={
                                                formikPhone.isValid ?
                                                    "text-center p-1 w50 border-0 float-right rounded-2 d-inline-block hover-button"
                                                    : "text-center p-1 w50 border-0 float-right rounded-2 d-inline-block hover-no-allowed text-grey-500"
                                            }>
                                        Save
                                    </button>
                                    <button onClick={() => {
                                        setPhoneStatus(false),
                                            formikPhone.resetForm()
                                    }}
                                            className="text-center mb-4 p-1 w50 border-0 float-right rounded-2 d-inline-block hover-button me-2">
                                        Canel
                                    </button>
                                </div>
                            </div>
                        </form>

                        :
                        <div className="d-flex align-items-center mb-1 ">
                            <i onClick={() => setPhoneStatus(true)}
                               className="feather-plus-circle btn-round-sm text-dark font-lg cursor-pointer hover-edit">
                            </i>
                            <h4 onClick={() => setPhoneStatus(true)}
                                className="fw-700 text-grey-500 font-xsss mt-2 hover-underline cursor-pointer">
                                Add Mobile Phone number
                            </h4>
                        </div>
                }
            </div>

            <div className="ps-5 pe-5 mb-4">
                <div>
                    <h4 className="fw-500">Address</h4>
                </div>
                {
                    addressStatus === true ?
                        <form className="info-form" onSubmit={formikAddress.handleSubmit}>
                            <div className="row">
                                <div className="col-lg-12 h75">
                                    <div className="form-group">

                                        <input type="text"
                                               className="form-control"
                                               id="address"
                                               name="address"
                                               value={formikAddress.values.address}
                                               onChange={formikAddress.handleChange}
                                               onBlur={formikAddress.handleBlur}
                                               placeholder="Address"/>
                                        <span className="text-red">
                                        {formikAddress.errors.address}
                                        </span>
                                    </div>
                                </div>
                                <div className="col-lg-12 border-bottom">
                                    <button type="submit"
                                            className={
                                                formikAddress.isValid ?
                                                    "text-center p-1 w50 border-0 float-right rounded-2 d-inline-block hover-button"
                                                    : "text-center p-1 w50 border-0 float-right rounded-2 d-inline-block hover-no-allowed text-grey-500"
                                            }>
                                        Save
                                    </button>
                                    <button onClick={() => {
                                        setAddressStatus(false),
                                            formikAddress.resetForm()
                                    }}
                                            className="text-center mb-4 p-1 w50 border-0 float-right rounded-2 d-inline-block hover-button me-2">
                                        Canel
                                    </button>
                                </div>
                            </div>
                        </form>
                        :
                        <div className="d-flex align-items-center mb-1 ">
                            <i onClick={() => setAddressStatus(true)}
                               className="feather-plus-circle btn-round-sm text-dark font-lg cursor-pointer hover-edit">
                            </i>
                            <h4 onClick={() => setAddressStatus(true)}
                                className="fw-700 text-grey-500 font-xsss mt-2 hover-underline cursor-pointer">
                                Add current Address
                            </h4>
                        </div>
                }
            </div>

            <div className="ps-5 mb-4 pe-5">
                <div>
                    <h4 className="fw-500">Email</h4>
                </div>
                {
                    emailStatus === true ?
                        <form className="info-form" onSubmit={formikEmail.handleSubmit}>
                            <div className="row">
                                <div className="col-lg-12 h75">
                                    <div className="form-group">

                                        <input type="text"
                                               className="form-control"
                                               id="email"
                                               name="email"
                                               value={formikEmail.values.email}
                                               onChange={formikEmail.handleChange}
                                               onBlur={formikEmail.handleBlur}
                                               placeholder="Email address"/>
                                        <span className="text-red">
                                        {formikEmail.errors.email}
                                        </span>
                                    </div>
                                </div>
                                <div className="col-lg-12 border-bottom">
                                    <button type="submit"
                                            className={
                                                formikEmail.isValid ?
                                                    "text-center p-1 w50 border-0 float-right rounded-2 d-inline-block hover-button"
                                                    : "text-center p-1 w50 border-0 float-right rounded-2 d-inline-block hover-no-allowed text-grey-500"
                                            }>
                                        Save
                                    </button>
                                    <button onClick={() => {
                                        setEmailStatus(false),
                                            formikEmail.resetForm()
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
                            <h4 className="d-flex float-left">- {userInfo.email}</h4>
                            <i onClick={() => setEmailStatus(!emailStatus)}
                                className="ti-pencil d-flex font-md float-right cursor-pointer hover-edit"></i>
                        </div>
                    </div>
                }
            </div>

        </>
    )
}

export default Contact;