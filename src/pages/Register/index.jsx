import google from "../../assets/img/google-icon.png";
import {Link} from "react-router-dom"
import {useFormik} from "formik";
import * as Yup from "yup";

function Register() {

    const formik  = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
            confirmedPassword: ""
        },
        validationSchema: Yup.object({
            name: Yup
                .string()
                .required("You must fill in this section!"),
            email: Yup
                .string()
                .required("You must fill in this section!")
                .matches(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
                    "Please enter a valid email address !"),
            password: Yup
                .string()
                .required("You must fill in this section!")
                .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!])[A-Za-z\d@#$%^&+=!]{8,16}$/,
                    "Password must be 6-18 characters and contain at least one letter, one number and a special character"),
            confirmedPassword: Yup
                .string()
                .required("You must fill in this section!")
                .oneOf([Yup.ref("password"), null],
                    "Password must match")
        }),
        onSubmit: (values, {resetForm}) => {
            alert("Login in successfully!!!");
            console.log(values);
            resetForm();
        }
    });

    var isInvalidName = formik.errors.name;
    var isFocusName = formik.touched.name;
    var isInvalidEmail = formik.touched.email && formik.errors.email;
    var isInvalidPassword = formik.touched.password && formik.errors.password;
    var isInvalidConfirmedPassword = formik.touched.confirmedPassword && formik.errors.confirmedPassword;

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
                                <form className="infoform" onSubmit={formik.handleSubmit}>
                                    <div className="form-group icon-input mb-3">
                                        <i className="font-sm ti-user text-grey-500 pe-0"></i>
                                        <input type="text"
                                               id="name"
                                               name="name"
                                               value={formik.values.name}
                                               onBlur={formik.handleBlur}
                                               onChange={formik.handleChange}
                                               className={isInvalidName
                                                   ? "style2-input ps-5 form-control is-invalid text-grey-900 font-xsss fw-600"
                                                   : isFocusName
                                                   ? "style2-input ps-5 form-control is-valid text-grey-900 font-xsss fw-600"
                                                   :"style2-input ps-5 form-control is-invalid text-grey-900 font-xsss fw-600"
                                               }
                                               placeholder="Your Name"/>
                                        {isInvalidName
                                            ? (<div className="errorMsg text-red font-xsss">{formik.errors.name}</div>)
                                            : null}
                                    </div>
                                    <div className="form-group icon-input mb-3">
                                        <i className="font-sm ti-email text-grey-500 pe-0"></i>
                                        <input type="text"
                                               id="email"
                                               name="email"
                                               value={formik.values.email}
                                               onBlur={formik.handleBlur}
                                               onChange={formik.handleChange}
                                               className={isInvalidEmail
                                                   ? "style2-input ps-5 form-control is-invalid text-grey-900 font-xsss fw-600"
                                                   : "style2-input ps-5 form-control is-valid text-grey-900 font-xsss fw-600"
                                               }
                                               placeholder="Your Email Address"/>
                                        {isInvalidEmail
                                            ? (<div className="errorMsg text-red font-xsss">{formik.errors.email}</div>)
                                            : null}
                                    </div>
                                    <div className="form-group icon-input mb-3">
                                        <input type="Password"
                                               id="password"
                                               name="password"
                                               value={formik.values.password}
                                               onBlur={formik.handleBlur}
                                               onChange={formik.handleChange}
                                               className={isInvalidPassword
                                                   ? "style2-input ps-5 form-control is-invalid text-grey-900 font-xsss ls-3"
                                                   : "style2-input ps-5 form-control is-valid text-grey-900 font-xsss ls-3"
                                               }
                                               placeholder="Password"/>
                                        {isInvalidPassword
                                            ? (<div
                                                className="errorMsg text-red font-xsss">{formik.errors.password}</div>)
                                            : null}
                                        <i className="font-sm ti-lock text-grey-500 pe-0"></i>
                                    </div>
                                    <div className="form-group icon-input mb-1">
                                        <input type="Password"
                                               id="confirmedPassword"
                                               name="confirmedPassword"
                                               value={formik.values.confirmPassword}
                                               onBlur={formik.handleBlur}
                                               onChange={formik.handleChange}
                                               className={isInvalidConfirmedPassword
                                                   ? "style2-input ps-5 form-control is-invalid text-grey-900 font-xsss ls-3"
                                                   : "style2-input ps-5 form-control is-valid text-grey-900 font-xsss ls-3"
                                               }
                                               placeholder="Confirm Password"/>
                                        {isInvalidConfirmedPassword
                                            ? (<div
                                                className="errorMsg text-red font-xsss">{formik.errors.confirmedPassword}</div>)
                                            : null}
                                        <i className="font-sm ti-lock text-grey-500 pe-0"></i>
                                    </div>
                                    <div className="form-check text-left mb-3">
                                        <input type="checkbox" className="form-check-input mt-2" id="exampleCheck1"/>
                                        <label className="form-check-label font-xsss text-grey-500"
                                               htmlFor="exampleCheck1">Accept Term and
                                            Conditions
                                        </label>
                                    </div>
                                    <div className="col-sm-12 p-0 text-left">
                                        <div className="form-group mb-1">
                                            <button type="submit"
                                                    className="form-control text-center style2-input text-white fw-600 bg-dark border-0 p-0 ">
                                                Register
                                            </button>
                                        </div>
                                        <h6 className="text-grey-500 font-xsss fw-500 mt-0 mb-0 lh-32">
                                            Already have account ?
                                            <Link to="/login" className="fw-700 ms-1 text-vibe">Login</Link>
                                        </h6>
                                    </div>
                                    <div className="col-sm-12 p-0 text-center mt-2">
                                        <h6 className="mb-0 d-inline-block bg-white fw-500 font-xsss text-grey-500 mb-3">
                                            Or, Sign in with your social account
                                        </h6>
                                        <div className="form-group mb-1">
                                            <a href="#"
                                               className="form-control text-left style2-input text-white fw-600 bg-facebook border-0 p-0 mb-2">
                                                <img
                                                    src={google} alt="icon" className="ms-2 w40 mb-1 me-5"/>
                                                Sign in with Google
                                            </a>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register;