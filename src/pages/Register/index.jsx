import google from "../../assets/img/google-icon.png";
import {Link, useNavigate} from "react-router-dom"
import {useFormik} from "formik";
import * as Yup from "yup";
import {Form, Overlay, OverlayTrigger, Tooltip} from "react-bootstrap";
import "./index.scss"
import axios from "axios";
import {useState} from "react";

function Register() {

// const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmedPassword: "",
            gender: "",
            day: "",
            month: "",
            year: "",
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
                .required()
                .matches(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
                    "Please enter a valid email address !"),
            password: Yup
                .string()
                .required()
                .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!])[A-Za-z\d@#$%^&+=!]{8,16}$/,
                    "Password must be 6-18 characters and contain at least one letter, one number and a special character"),
            confirmedPassword: Yup
                .string()
                .required()
                .oneOf([Yup.ref("password"), null],
                    "Password must match"),
            gender: Yup
                .string(),
            day: Yup
                .number()
                .min(1)
                .max(31)
                .required(),
            month: Yup
                .number()
                .min(1)
                .max(31)
                .required(),
            year: Yup
                .number()
                .min(1905)
                .max(new Date().getFullYear())
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

            try {
                const response = await axios.post("http://localhost:8080/api/users", user)
                console.log(user);
                if (response.status === 200) {
                    resetForm();
                    // setMessage("Login successfully")
                    console.log(user)
                    alert("Register in successfully!!!");
                    navigate("/login")
                } else if (response.status === 400) {
                    console.log("Email already registered");
                } else {
                    // console.log(response.data)
                    // setMessage("Invalid Credential")
                    // console.log(message);
                    console.log("Invalid Credential");
                }
            } catch (error) {
                // setMessage("error")
                // console.log(message)
                console.error("Error:", error);
            }
        }
    });

    const [emailExists, setEmailExists] = useState(false);

    const checkEmailExists = async (email) => {
        try {
            const response = await axios.get(`http://localhost:8080/api/users?email=${email}`);
            const statusCode = response.status;

            if (statusCode === 200) {
                setEmailExists(false);
                console.log("Email Valid");
            } else if (statusCode === 400) {
                console.log("Email exist")
                setEmailExists(true);
            }
            console.log(emailExists);

        } catch (error) {
            console.error("Error checking email:", error);
            // console.log("Email exist");
            // setEmailExists(true);
        }
    };

    // const isLeapYear = (year) => {
    //     return ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0));
    // }
    const generateOptions = (start, end) => {
        return Array.from({length: end - start + 1}, (_, index) => start + index);
    };


    let isInvalidFirstname = formik.touched.firstName && formik.errors.firstName;
    let isInvalidLastname = formik.touched.lastName && formik.errors.lastName;
    let isInvalidEmail = formik.touched.email && formik.errors.email;
    let isInvalidPassword = formik.touched.password && formik.errors.password;
    let isInvalidConfirmedPassword = formik.touched.confirmedPassword && formik.errors.confirmedPassword;
    let isInvalidGender = formik.touched.gender && formik.errors.gender;
    let isInvalidDay = formik.touched.day && formik.errors.day;
    let isInvalidMonth = formik.touched.month && formik.errors.month;
    let isInvalidYear = formik.touched.year && formik.errors.year;

    return (
        <>
            <div className="main-wrap">
                <div className="nav-header bg-transparent shadow-none border-0">
                    <div className="nav-top w-100">
                        <span>
                            <i className="feather-zap text-success display1-size me-2 ms-0"></i>
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
                              className="header-btn d-none d-lg-block bg-dark fw-500 text-white font-xsss p-3 ms-auto w100 text-center lh-20 rounded-xl">
                            Login
                        </Link>
                        <span
                            className="header-btn d-none d-lg-block bg-dark fw-500 text-white font-xsss p-3 ms-2 w100 text-center lh-20 rounded-xl">
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
                                <h2 className="fw-7-md-size mb-4">Create your account</h2>
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
                                                <div className="form-group icon-input">
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
                                                <div className="form-group icon-input">
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
                                        show={isInvalidEmail ? true : false}
                                        overlay={
                                            <Tooltip id='tooltip-left'>
                                                {formik.errors.email}
                                            </Tooltip>
                                        }>
                                        <div className="form-group icon-input mb-3">
                                            <i className="font-sm ti-email text-grey-500 pe-0"></i>
                                            <input type="text"
                                                   id="email"
                                                   name="email"
                                                   value={formik.values.email}
                                                // onBlur={formik.handleBlur}
                                                   onBlur={(e) => {
                                                       formik.handleBlur(e);
                                                       if (e.target.value && !formik.errors.email) {
                                                           checkEmailExists(e.target.value);
                                                       }
                                                   }}
                                                   onChange={formik.handleChange}
                                                   className={isInvalidEmail && 'is-valid'
                                                       ? "style2-input ps-5 form-control is-invalid text-grey-900 font-xsss fw-600"
                                                       : "style2-input ps-5 form-control text-grey-900 font-xsss fw-600"
                                                   }
                                                   placeholder="Your Email Address"/>


                                        </div>
                                    </OverlayTrigger>
                                    {emailExists && <div>Email is already registered.</div>}

                                    <OverlayTrigger
                                        placement='left'
                                        show={isInvalidPassword ? true : false}
                                        overlay={
                                            <Tooltip id='tooltip-left'

                                            >
                                                {formik.errors.password}
                                            </Tooltip>
                                        }>
                                        <div className="form-group icon-input mb-3">
                                            <input type="Password"
                                                   id="password"
                                                   name="password"
                                                   value={formik.values.password}
                                                   onBlur={formik.handleBlur}
                                                   onChange={formik.handleChange}
                                                   className={isInvalidPassword
                                                       ? "style2-input ps-5 form-control is-invalid text-grey-900 font-xsss ls-3"
                                                       : "style2-input ps-5 form-control text-grey-900 font-xsss ls-3"
                                                   }
                                                   placeholder="Password"/>
                                            <i className="font-sm ti-lock text-grey-500 pe-0"></i>
                                        </div>
                                    </OverlayTrigger>

                                    <OverlayTrigger
                                        placement='right'
                                        show={isInvalidConfirmedPassword ? true : false}
                                        overlay={
                                            <Tooltip id='tooltip-right'>
                                                {formik.errors.confirmedPassword}
                                            </Tooltip>
                                        } defaultShow={null}>
                                        <div className="form-group icon-input mb-1">
                                            <input type="Password"
                                                   id="confirmedPassword"
                                                   name="confirmedPassword"
                                                   value={formik.values.confirmedPassword}
                                                   onBlur={formik.handleBlur}
                                                   onChange={formik.handleChange}
                                                   className={isInvalidConfirmedPassword
                                                       ? "style2-input ps-5 form-control is-invalid text-grey-900 font-xsss ls-3"
                                                       : "style2-input ps-5 form-control text-grey-900 font-xsss ls-3"
                                                   }
                                                   placeholder="Confirm Password"/>
                                            <i className="font-sm ti-lock text-grey-500 pe-0"></i>
                                        </div>
                                    </OverlayTrigger>
                                    <div
                                        className="font-xssss"
                                        style={{marginTop: "0.8rem"}}>Date of birth ?
                                    </div>
                                    <div className="row">
                                        <OverlayTrigger
                                            placement='left'
                                            show={isInvalidDay ? true : false}
                                            overlay={
                                                <Tooltip id='tooltip-left'>
                                                    {formik.errors.day}
                                                </Tooltip>
                                            }>
                                            <div className="col-md-4">
                                                <div className="form-group">
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
                                                            ? "style2-input ps-5 form-control-sm is-invalid text-grey-900 font-xsss fw-600"
                                                            : "style2-input ps-5 form-control-sm text-grey-900 font-xsss fw-600"
                                                        }>
                                                        <option value="day">Day</option>
                                                        {generateOptions(1, 31).map((day) => (
                                                            <option key={day} value={day}>
                                                                {day}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>
                                            </div>
                                        </OverlayTrigger>

                                        <OverlayTrigger
                                            placement='top'
                                            show={isInvalidMonth ? true : false}
                                            overlay={
                                                <Tooltip id='tooltip-top'>
                                                    {formik.errors.month}
                                                </Tooltip>
                                            }>
                                            <div className="col-md-4">
                                                <div className="form-group">
                                                    <select
                                                        id="month"
                                                        name="month"
                                                        value={formik.values.month}
                                                        onBlur={formik.handleBlur}
                                                        onChange={formik.handleChange}
                                                        style={{borderRadius: "1", height: "auto", paddingRight: "0px"}}
                                                        className={isInvalidMonth
                                                            ? "style2-input ps-5 form-control-sm is-invalid text-grey-900 font-xsss fw-600"
                                                            : "style2-input ps-5 form-control-sm text-grey-900 font-xsss fw-600"
                                                        }
                                                        placeholder="Month">
                                                        <option value="">Month</option>
                                                        {generateOptions(1, 12).map((month) => (
                                                            <option key={month} value={month}>
                                                                {month}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>
                                            </div>
                                        </OverlayTrigger>

                                        <OverlayTrigger
                                            placement='right'
                                            show={isInvalidYear ? true : false}
                                            overlay={
                                                <Tooltip id='tooltip-right'>
                                                    {formik.errors.year}
                                                </Tooltip>
                                            }>
                                            <div className="col-md-4">
                                                <div className="form-group">
                                                    <select
                                                        id="year"
                                                        name="year"
                                                        value={formik.values.year}
                                                        onBlur={formik.handleBlur}
                                                        onChange={formik.handleChange}
                                                        style={{borderRadius: "1", height: "auto"}}
                                                        className={isInvalidYear
                                                            ? "style2-input ps-5 form-control-sm is-invalid font-xsss fw-600"
                                                            : "style2-input ps-5 form-control-sm font-xsss fw-600"
                                                        }>
                                                        <option value="Year">Year</option>
                                                        {generateOptions(1905, new Date().getFullYear()).map((year) => (
                                                            <option key={year} value={year}>
                                                                {year}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>
                                            </div>
                                        </OverlayTrigger>
                                    </div>
                                    <div
                                        className="font-xssss"
                                        style={{marginTop: "0.8rem"}}>Gender ?
                                    </div>

                                    <div className="row">
                                        <OverlayTrigger
                                            placement='left'
                                            show={isInvalidGender ? true : false}
                                            overlay={
                                                <Tooltip id='tooltip-left'>
                                                    {formik.errors.gender}
                                                </Tooltip>
                                            }>
                                            <div className="col-md-4" style={{marginTop: "-14px"}}>
                                                <span style={{padding: 0}} className="form-control">
                                                    <label htmlFor="female"
                                                           className="ps-md-3 fw-600"
                                                           style={{paddingRight: "30px"}}>Female</label>
                                                    <input type="radio"
                                                           value="FEMALE"
                                                           checked={formik.values.gender === "FEMALE"}
                                                           onChange={formik.handleChange}
                                                           name="gender"
                                                           id="FEMALE"/>
                                                </span>
                                            </div>
                                        </OverlayTrigger>

                                        <OverlayTrigger
                                            placement='left'
                                            show={isInvalidGender ? true : false}
                                            overlay={
                                                <Tooltip id='tooltip-left'>
                                                    {formik.errors.gender}
                                                </Tooltip>
                                            }>
                                            <div className="col-md-4" style={{marginTop: "-14px"}}>
                                                <span style={{padding: 0}} className="form-control">
                                                    <label htmlFor="male"
                                                           className="ps-md-3 fw-600"
                                                           style={{paddingRight: "38px"}}>Male</label>
                                                    <input type="radio"
                                                           value="MALE"
                                                           checked={formik.values.gender === "MALE"}
                                                           onChange={formik.handleChange}
                                                           name="gender"
                                                           id="MALE"/>
                                                </span>
                                            </div>
                                        </OverlayTrigger>

                                        <OverlayTrigger
                                            placement='left'
                                            show={isInvalidGender ? true : false}
                                            overlay={
                                                <Tooltip id='tooltip-left'>
                                                    {formik.errors.gender}
                                                </Tooltip>
                                            }>
                                            <div className="col-md-4" style={{marginTop: "-14px"}}>
                                                <span style={{padding: 0}} className="form-control">
                                                    <label htmlFor="gender"
                                                           className="ps-md-3 fw-600"
                                                           style={{paddingRight: "30px"}}>Other</label>
                                                    <input type="radio"
                                                           value="OTHER"
                                                           checked={formik.values.gender === "OTHER"}
                                                           onChange={formik.handleChange}
                                                           name="gender"
                                                           id="OTHER"/>
                                                </span>
                                            </div>
                                        </OverlayTrigger>
                                    </div>


                                    <div className="form-check text-left text-center" style={{scale: "1"}}>
                                        <input type="checkbox" className="form-check-input " style={{scale: "0.5"}}
                                               id="exampleCheck1"/>
                                        <label className="form-check-label font-xssss text-grey-500 "
                                               htmlFor="exampleCheck1">Accept Term and
                                            Conditions
                                        </label>
                                    </div>
                                    <div className="col-sm-12 p-0 text-left">
                                        <div className="form-group mb-1">
                                            <button type="submit"
                                                    className="form-control text-center style2-input text-white fw-600 bg-dark border-0 p-0"
                                            >
                                                Register
                                            </button>
                                        </div>
                                        <h6 className="text-grey-500 font-xsss fw-500 mt-0 mb-0 lh-32">
                                            Already have account ?
                                            <Link to="/login" className="fw-700 ms-1 text-vibe">Login </Link>
                                            Or, Sign in with your social account
                                        </h6>
                                    </div>
                                    <div className="col-sm-12 p-0 text-center mt-2">
                                        <div className="form-group mb-1">
                                            <a href="#"
                                               className="form-control text-left style2-input text-white fw-600 bg-facebook border-0 p-0 mb-2">
                                                <img
                                                    src={google} alt="icon" className="ms-2 w40 mb-1 me-5"/>
                                                Sign in with Google
                                            </a>
                                        </div>
                                    </div>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register;