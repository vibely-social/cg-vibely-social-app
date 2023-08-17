import google from "../../assets/img/google-icon.png";
import {Link, useNavigate} from "react-router-dom";
import {useFormik} from "formik";
import * as Yup from "yup";
import axios from "axios";
import Swal from "sweetalert2";
import {Form, OverlayTrigger, Tooltip} from "react-bootstrap";
import {useState} from "react";
import logo from "~/assets/img/logo.svg";

function Login() {

    const navigate = useNavigate();

    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: Yup.object().shape({
            email: Yup
                .string()
                .required(),
            password: Yup
                .string()
                .required(),
        }),
        onSubmit: async (values) => {
            let user = {
                email: values.email,
                password: values.password,
            }
            await axios.post("http://localhost:8080/api/auth/login", user)
                .then(() => {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Login success!',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    navigate("/");
                })
                .catch(
                    (e) => {
                        Swal.fire({
                            position: 'center',
                            icon: 'error',
                            title: 'Login failed',
                            showConfirmButton: true,
                            allowOutsideClick: false,
                        })
                        console.log(e);
                    })
        }
    });

    let isInvalidEmail = formik.touched.email && formik.errors.email;
    let isInvalidPassword = formik.touched.password && formik.errors.password;


    return (
        <div className="main-wrap">
            <div className="nav-header bg-transparent shadow-none border-0">
                <div className="nav-top w-100">
                        <span href="default.html">
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
                    <span
                        className="header-btn d-none d-lg-block bg-dark fw-500 text-white font-xsss p-3 ms-auto w100 text-center lh-20 rounded-xl">
                            Login
                        </span>
                    <Link to="/register"
                          className="header-btn d-none d-lg-block bg-blue-gradiant fw-500 text-white font-xsss p-3 ms-2 w100 text-center lh-20 rounded-xl">
                        Register
                    </Link>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-5 d-none d-xl-block p-0 vh-100 bg-image-cover bg-no-repeat"
                     style={{backgroundImage: 'url("via.placeholder.com/800x950.png")'}}></div>
                <div className="col-xl-7 vh-100 align-items-center d-flex bg-white rounded-3 overflow-hidden">
                    <div className="card shadow-none border-0 ms-auto me-auto login-card">
                        <div className="card-body rounded-0 text-left">
                            <h2 className="fw-700 display1-size display2-md-size mb-3">Login into your account
                            </h2>
                            <Form className="infoform" onSubmit={formik.handleSubmit}>
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
                                               className={isInvalidEmail
                                                   ? "style2-input ps-5 form-control is-invalid text-grey-900 font-xsss fw-600"
                                                   : "style2-input ps-5 form-control text-grey-900 font-xsss fw-600"
                                               }
                                               placeholder="Your Email Address"
                                               onBlur={formik.handleBlur}
                                               onChange={formik.handleChange}/>
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
                                    <div className="form-group icon-eye-input-log mb-1">
                                        <div className="icon-eye-input-log">
                                            <i className={isPasswordVisible ? "font-sm feather-eye text-grey-500 pe-0" : "font-sm feather-eye-off text-grey-500 pe-0"}
                                               onClick={() => setIsPasswordVisible(!isPasswordVisible)}></i>
                                            <input type={isPasswordVisible ? 'text' : 'password'}
                                                   id="password"
                                                   name="password"
                                                   className={isInvalidPassword
                                                       ? "style2-input ps-5 form-control is-invalid text-grey-900 font-xsss fw-600"
                                                       : "style2-input ps-5 form-control text-grey-900 font-xsss fw-600"
                                                   }
                                                   placeholder="Password"
                                                   onBlur={formik.handleBlur}
                                                   onChange={formik.handleChange}/>
                                            <i className="font-sm ti-lock text-grey-500 pe-0"
                                               style={{left: "15px"}}></i>
                                        </div>
                                    </div>
                                </OverlayTrigger>

                                <div className="form-check text-left mb-3">
                                    <input type="checkbox" className="form-check-input mt-2"
                                           id="exampleCheck1"/>
                                    <label className="form-check-label font-xsss text-grey-500"
                                           htmlFor="exampleCheck1">
                                        Remember me
                                    </label>
                                    <a href="forgot.html"
                                       className="fw-600 font-xsss text-grey-700 mt-1 float-right">
                                        Forgot your Password?
                                    </a>
                                </div>
                                <div className="col-sm-12 p-0 text-left">
                                    <div className="form-group mb-1">
                                        <button
                                            type="submit"
                                            className="form-control text-center style2-input text-white fw-600 bg-dark border-0 p-0 ">
                                            Login
                                        </button>

                                    </div>
                                    <h6 className="text-grey-500 font-xsss fw-500 mt-0 mb-0 lh-32">
                                        Dont have account ?
                                        <Link to="/register" className="fw-700 ms-1 text-blue-gradiant">Register </Link>
                                        Or, Sign in with your social account
                                    </h6>
                                </div>
                                <div className="col-sm-12 p-0 mt-2">
                                    <div className="form-group mb-1 ">
                                        <button
                                           className="w-100 d-flex style2-input text-white fw-600 bg-facebook border-0 p-0 mb-2">
                                            <img
                                                src={google} alt="icon" className="ms-3 mt-2 ms-2 w40 mb-1 me-5"/>
                                            <span className="ms-3 justify-content-center">
                                            Sign in with Google
                                            </span>
                                        </button>
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

export default Login