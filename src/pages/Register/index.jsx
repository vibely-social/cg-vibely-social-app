import google from "../../assets/img/google-icon.png";
import {Link, useNavigate} from "react-router-dom"
import {useFormik} from "formik";
import * as Yup from "yup";
import {Form, OverlayTrigger, Tooltip} from "react-bootstrap";
import "./index.scss"
import axios from "axios";
import {useState} from "react";
import Swal from "sweetalert2";
import logo from "../../assets/img/logo.svg";

function Register() {

    const navigate = useNavigate();

    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            gender: "",
            day: "",
            month: "",
            year: "",
            acceptTermAndConditions: false,
        },
        validationSchema: Yup.object().shape({
            firstName: Yup
                .string()
                .required("What's your name?"),
            lastName: Yup
                .string()
                .required("What's your name?"),
            email: Yup
                .string()
                .required("Email is a required field")
                .matches(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
                    "Please enter a valid email address !"),
            password: Yup
                .string()
                .required("Password is a required field")
                .test(
                    "lowercase",
                    "must contain at least one lowercase letter",
                    (value) => value && /(?=.*[a-z])/.test(value)
                )
                .test(
                    "uppercase",
                    "must contain at least one uppercase letter",
                    (value) => value && /(?=.*[A-Z])/.test(value)
                )
                .test("digit", "must contain at least one digit",
                    (value) => value && /(?=.*\d)/.test(value)
                )
                .test("special character",
                    "must contain at least 1 special character",
                    (value) => value && /(?=.*[@#$%^&+=!])/.test(value)
                )
                .test("length", "Password must be 8-16 characters",
                    (value) => value && /[A-Za-z\d@#$%^&+=!]{8,16}/.test(value)
                ),
            gender: Yup
                .string()
                .required(),
            day: Yup
                .number()
                .min(1)
                .max(31)
                .notOneOf([-1], "Please select a day")
                .required(),
            month: Yup
                .number()
                .min(1)
                .max(12)
                .notOneOf([-1], "Please select a month")
                .required(),
            year: Yup
                .number()
                .min(1905)
                .max(new Date().getFullYear())
                .notOneOf([-1], "Please select a year")
                .required(),
            acceptTermAndConditions: Yup
                .boolean()
                .oneOf([true])
                .required(),
        }),
        onSubmit: async (values, {resetForm}) => {
            let user = {
                firstName: values.firstName,
                lastName: values.lastName,
                email: values.email,
                password: values.password,
                dayOfBirth: values.day + '/' + values.month + '/' + values.year,
                gender: values.gender,
            }
            await axios.post("http://localhost:8080/api/users", user)
                .then(() => {
                    resetForm();
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Register success!',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    navigate("/login");
                })
                .catch(
                    (e) => {
                        Swal.fire({
                            position: 'center',
                            icon: 'error',
                            title: 'Register failed!',
                            showConfirmButton: true,
                            allowOutsideClick: false,
                        })
                        console.log(e);
                    })
        }
    });

    const [emailExists, setEmailExists] = useState(false);

    const checkEmailExists = async (email) => {
        await axios.get(`http://localhost:8080/api/users?email=${email}`)
            .then(() => {
                setEmailExists(false);
            })
            .catch(
                (e) => {
                    console.log(emailExists, e)
                    setEmailExists(true);
                }
            );
    };

    const generateOptions = (start, end) => {
        return Array.from({length: end - start + 1}, (_, index) => start + index);
    };

    let isInvalidFirstname = formik.touched.firstName && formik.errors.firstName;
    let isInvalidLastname = formik.touched.lastName && formik.errors.lastName;
    let isInvalidEmail = formik.touched.email && formik.errors.email;
    let isInvalidPassword = formik.touched.password && formik.errors.password;
    let isInvalidGender = formik.touched.gender && formik.errors.gender;
    let isInvalidDay = formik.touched.day && formik.errors.day;
    let isInvalidMonth = formik.touched.month && formik.errors.month;
    let isInvalidYear = formik.touched.year && formik.errors.year;
    let isInAcceptTermAndConditions = formik.touched.acceptTermAndConditions && formik.errors.acceptTermAndConditions;

    return (
        <div className="main-wrap">
            <div className="nav-header bg-transparent shadow-none border-0">
                <div className="nav-top w-100">
                        <span>
                            <i className="text-success display1-size me-2 ms-0">
                                <img src={logo} alt="icon"
                                     style={{maxWidth: 50, zIndex: "10000"}}
                                />
                            </i>
                            <span
                                className="d-inline-block fredoka-font ls-3 fw-600 text-current font-xxl logo-text mb-0">
                                Vibely Social
                            </span>
                        </span>
                    <a href="#" className="mob-menu ms-auto me-2 chat-active-btn">
                        <i className="feather-message-circle text-grey-900 font-sm btn-round-md bg-greylight"></i>
                    </a>
                    <a href="default-video.html" className="mob-menu me-2">
                        <i className="feather-video text-grey-900 font-sm btn-round-md bg-greylight"></i>
                    </a>
                    <a href="#" className="me-2 menu-search-icon mob-menu">
                        <i className="feather-search text-grey-900 font-sm btn-round-md bg-greylight"></i>
                    </a>
                    <button className="nav-menu me-0 ms-2"></button>
                    <Link to="/login"
                          className="header-btn d-none d-lg-block bg-vibe fw-500 text-white font-xsss p-3 ms-auto w100 text-center lh-20 rounded-xl">
                        Login
                    </Link>
                    <span
                        className="header-btn d-none opacity-30 d-lg-block bg-dark fw-500 text-white font-xsss p-3 ms-2 w100 text-center lh-20 rounded-xl">
                            Register
                        </span>
                </div>
            </div>

            <div className="row">
                <div className="col-xl-5 d-none d-xl-block p-0 vh-100 bg-image-cover bg-no-repeat"
                     style={{backgroundImage: 'url("via.placeholder.com/800x950.png")'}}></div>
                <div className="col-xl-7 vh-100 align-items-center d-flex bg-white rounded-3 overflow-hidden">
                    <div className="card shadow-none border-0 ms-auto me-auto login-card">
                        <div className="card-bo00 display1-size display2dy rounded-0 text-left">
                            <h2 className="fw-700 display1-size display2-md-size mb-3">Create your account</h2>
                            <Form className="infoform" onSubmit={formik.handleSubmit}>
                                <div className="row">
                                    <OverlayTrigger
                                        placement='left'
                                        show={isInvalidFirstname ? true : false}
                                        overlay={
                                            <Tooltip id='tooltip-left'>
                                                {formik.errors.firstName}
                                            </Tooltip>
                                        }>
                                        <div className="col-lg-6 mb-3">
                                            <div className="form-group icon-input mb-0">
                                                <input type="text"
                                                       id="firstName"
                                                       name="firstName"
                                                       value={formik.values.firstName}
                                                       onBlur={formik.handleBlur}
                                                       onChange={formik.handleChange}
                                                       className={isInvalidFirstname
                                                           ? "style2-input ps-5 form-control is-invalid text-grey-900 font-xsss fw-600"
                                                           : "style2-input ps-5 form-control text-grey-900 font-xsss fw-600"
                                                       }
                                                       placeholder="First name"/>
                                                <i className="font-sm ti-user text-grey-500 pe-0"></i>
                                            </div>
                                        </div>
                                    </OverlayTrigger>

                                    <OverlayTrigger
                                        placement='right'
                                        show={isInvalidLastname ? true : false}
                                        overlay={
                                            <Tooltip id='tooltip-right'>
                                                {formik.errors.lastName}
                                            </Tooltip>
                                        }>
                                        <div className="col-lg-6 mb-3">
                                            <div className="form-group icon-input mb-0">
                                                <input type="text"
                                                       id="lastName"
                                                       name="lastName"
                                                       value={formik.values.lastName}
                                                       onBlur={formik.handleBlur}
                                                       onChange={formik.handleChange}
                                                       className={isInvalidLastname
                                                           ? "style2-input ps-5 form-control is-invalid text-grey-900 font-xsss fw-600"
                                                           : "style2-input ps-5 form-control text-grey-900 font-xsss fw-600"
                                                       }
                                                       placeholder="Last name"/>
                                            </div>
                                        </div>
                                    </OverlayTrigger>

                                </div>

                                <OverlayTrigger
                                    placement='left'
                                    show={isInvalidEmail || emailExists}
                                    overlay={
                                        <Tooltip id='tooltip-left'>
                                            {isInvalidEmail
                                                ? formik.errors.email
                                                : emailExists
                                                    ? "This email is already registered."
                                                    : null}
                                        </Tooltip>
                                    }>
                                    <div className="form-group icon-input mb-3">
                                        <i className="font-sm ti-email text-grey-500 pe-0"></i>
                                        <input type="text"
                                               id="email"
                                               name="email"
                                               value={formik.values.email}
                                               onBlur={(e) => {
                                                   formik.handleBlur(e);
                                                   checkEmailExists(e.target.value);
                                               }}
                                               onChange={formik.handleChange}
                                               className={isInvalidEmail || emailExists
                                                   ? "style2-input ps-5 form-control is-invalid text-grey-900 font-xsss fw-600"
                                                   : "style2-input ps-5 form-control text-grey-900 font-xsss fw-600"
                                               }
                                               placeholder="Your Email Address"/>
                                    </div>
                                </OverlayTrigger>


                                <OverlayTrigger
                                    placement='left'
                                    show={isInvalidPassword ? true : false}
                                    overlay={
                                        <Tooltip id='tooltip-left'>
                                            {formik.errors.password}
                                        </Tooltip>
                                    }>
                                    <div className="form-group icon-eye-input-res mb-3">
                                        <div className="icon-eye-input">
                                            <i className={isPasswordVisible ? "font-sm cursor-pointer feather-eye text-grey-500 pe-0" : "font-sm cursor-pointer feather-eye-off text-grey-500 pe-0"}
                                               onClick={() => setIsPasswordVisible(!isPasswordVisible)}></i>
                                            <input type={isPasswordVisible ? 'text' : 'password'}
                                                   id="password"
                                                   name="password"
                                                   value={formik.values.password}
                                                   onBlur={formik.handleBlur}
                                                   onChange={formik.handleChange}
                                                   className={isInvalidPassword
                                                       ? "style2-input ps-5 form-control is-invalid text-grey-900 font-xsss fw-600 password"
                                                       : "style2-input ps-5 form-control text-grey-900 font-xsss fw-600"
                                                   }
                                                   placeholder="Password"/>
                                            <i className="font-sm ti-lock text-grey-500 pe-0"
                                               style={{left: "15px"}}></i>
                                        </div>
                                    </div>
                                </OverlayTrigger>

                                <div
                                    className="font-xssss"
                                    style={{marginTop: "0.8rem"}}>Date of birth ?
                                </div>
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="form-group mb-1">
                                            <select
                                                id="day"
                                                name="day"
                                                value={formik.values.day}
                                                onBlur={formik.handleBlur}
                                                onChange={formik.handleChange}
                                                style={{
                                                    borderRadius: "1",
                                                    height: "auto",
                                                    paddingRight: "15px"
                                                }}
                                                className={isInvalidDay
                                                    ? "style2-input cursor-pointer w114 h50 text-center form-control-sm text-grey-900 font-xsss fw-600 border-danger"
                                                    : "style2-input cursor-pointer w114 h50 text-center form-control-sm text-grey-900 font-xsss fw-600"
                                                }>
                                                <option value={-1}>Day</option>
                                                {generateOptions(1, 31).map((day) => (
                                                    <option key={day} value={day}>
                                                        {day}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>

                                    <div className="col-md-4">
                                        <div className="form-group mb-1">
                                            <select
                                                id="month"
                                                name="month"
                                                value={formik.values.month}
                                                onBlur={formik.handleBlur}
                                                onChange={formik.handleChange}
                                                style={{borderRadius: "1", height: "auto", paddingRight: "0px"}}
                                                className={isInvalidMonth
                                                    ? "style2-input cursor-pointer w114 h50 text-center form-control-sm text-grey-900 font-xsss fw-600 border-danger"
                                                    : "style2-input cursor-pointer w114 h50 text-center form-control-sm text-grey-900 font-xsss fw-600"
                                                }
                                                placeholder="Month">
                                                <option value={-1}>Month</option>
                                                {generateOptions(1, 12).map((month) => (
                                                    <option key={month} value={month}>
                                                        {month}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>

                                    <div className="col-md-4">
                                        <div className="form-group mb-1">
                                            <select
                                                id="year"
                                                name="year"
                                                value={formik.values.year}
                                                onBlur={formik.handleBlur}
                                                onChange={formik.handleChange}
                                                style={{borderRadius: "1", height: "auto"}}
                                                className={isInvalidYear
                                                    ? "style2-input cursor-pointer w114 h50 text-center form-control-sm text-grey-900 font-xsss fw-600 border-danger"
                                                    : "style2-input cursor-pointer w114 h50 text-center form-control-sm text-grey-900 font-xsss fw-600"
                                                }>
                                                <option value={-1}>Year</option>
                                                {generateOptions(1905, new Date().getFullYear()).map((year) => (
                                                    <option key={year} value={year}>
                                                        {year}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div
                                    className="font-xssss"
                                    style={{marginTop: "0.8rem"}}>Gender ?
                                </div>

                                <div className="row">
                                    <div className="col-md-4" style={{marginTop: "-14px"}}>
                                        <span style={{padding: 0}}
                                              className={`form-control ${isInvalidGender ? "border-danger " : ""}`}>
                                            <label htmlFor="FEMALE"
                                                   className="ps-md-3 fw-600 cursor-pointer"
                                                   style={{paddingRight: "30px"}}>Female</label>
                                            <input type="radio"
                                                   value="FEMALE"
                                                   checked={formik.values.gender === "FEMALE"}
                                                   onChange={formik.handleChange}
                                                   name="gender"
                                                   id="FEMALE"
                                            />
                                        </span>
                                    </div>


                                    <div className="col-md-4" style={{marginTop: "-14px"}}>
                                        <span style={{padding: 0}}
                                              className={`form-control ${isInvalidGender ? "border-danger" : ""}`}>
                                            <label htmlFor="MALE"
                                                   className="ps-md-3 fw-600 cursor-pointer"
                                                   style={{paddingRight: "38px"}}>Male</label>
                                            <input type="radio"
                                                   value="MALE"
                                                   checked={formik.values.gender === "MALE"}
                                                   onChange={formik.handleChange}
                                                   name="gender"
                                                   id="MALE"/>
                                        </span>
                                    </div>

                                    <div className="col-md-4" style={{marginTop: "-14px"}}>
                                        <span style={{padding: 0}}
                                              className={`form-control ${isInvalidGender ? "border-danger" : ""}`}>
                                            <label htmlFor="OTHER"
                                                   className="ps-md-3 fw-600 cursor-pointer"
                                                   style={{paddingRight: "30px"}}>Other</label>
                                            <input type="radio"
                                                   value="OTHER"
                                                   checked={formik.values.gender === "OTHER"}
                                                   onChange={formik.handleChange}
                                                   name="gender"
                                                   className=""
                                                   id="OTHER"/>
                                        </span>
                                    </div>

                                </div>

                                <div className="form-group d-flex align-items-center mb-3 mt-3">
                                    <input type="checkbox"
                                           className={`form-check-input m-0 h23 w23 ${isInAcceptTermAndConditions
                                               ? "border-danger" : ""}`}
                                           id="acceptTermAndConditions"
                                           value="acceptTermAndConditions"
                                           checked={formik.values.acceptTermAndConditions}
                                           onChange={formik.handleChange}
                                           onBlur={formik.handleBlur}
                                           name="acceptTermAndConditions"
                                           style={{borderRadius: "4px"}}
                                    />
                                    <label className="form-check-label ms-5 font-xssss text-grey-500 cursor-pointer"
                                           htmlFor="acceptTermAndConditions">Accept Term and Conditions
                                    </label>
                                </div>
                                <div className="col-sm-12 p-0 text-left">
                                    <div className="form-group mb-1">
                                        <button type="submit"
                                                className="form-control text-center style2-input text-white fw-600 bg-vibe border-0 p-0">
                                            Register
                                        </button>
                                    </div>
                                    <h6 className="text-grey-500 text-center font-xsss fw-500 mt-0 mb-0">
                                        Already have account ?
                                        <Link to="/login" className="fw-700 ms-1 text-vibe">Login </Link>
                                    </h6>
                                </div>
                                <div className="col-sm-12 p-0 mt-4">
                                    <div className="form-group mb-1">
                                        <button
                                           className="w-100 font-xss d-flex style2-input text-white fw-600 bg-facebook border-0 p-0 mb-2">
                                            <img
                                                src={google} alt="icon" className="ms-3 mt-2 ms-3 w40 mb-1 me-5"/>
                                            <span className="ms-4 justify-content-center">
                                                Sign in with Google
                                            </span>
                                        </button>
                                        <h6 className="text-grey-500 text-center font-xsss fw-500 mt-0 mb-0">
                                            Or, Sign in with your social account
                                        </h6>
                                    </div>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register;