import google from "../../assets/img/google-icon.png";
import {Link, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
    loginToAccount,
    selectUserAccountSliceIsSuccess,
    selectUserData,
    setSuccess
} from "~/features/userAccount/index.js";

function Login() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const user = useSelector(selectUserData)
    const success = useSelector(selectUserAccountSliceIsSuccess)
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");


    useEffect(() => {
        if (success) {
            if (user && user.email) {
                console.log("Login success!")
                localStorage.setItem("user", JSON.stringify(user))
                navigate("/")
            }else {
                setErrorMessage("Wrong email or password!")
            }
        }
        return () => {
            dispatch(setSuccess(false))
        }
    }, [success]);

    const handleLogin = (event) => {
        event.preventDefault();
        dispatch(loginToAccount({email, password}))
    }

    return (
        <>
            <div className="main-wrap">
                <div className="nav-header bg-transparent shadow-none border-0">
                    <div className="nav-top w-100">
                        <span onClick={()=>navigate("/")} className='cursor-pointer'>
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
                        <span
                            className="header-btn d-none d-lg-block bg-dark fw-500 text-white font-xsss p-3 ms-auto w100 text-center lh-20 rounded-xl">
                            Login
                        </span>
                        <Link to="/register"
                              className="header-btn d-none d-lg-block bg-dark fw-500 text-white font-xsss p-3 ms-2 w100 text-center lh-20 rounded-xl">
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
                                <h2 className="fw-700 display1-size display2-md-size mb-3">Login into your
                                    account
                                </h2>
                                <form>
                                    <div className="form-group icon-input mb-3">
                                        <i className="font-sm ti-email text-grey-500 pe-0"></i>
                                        <input type="text"
                                               className="style2-input ps-5 form-control text-grey-900 font-xsss fw-600"
                                               placeholder="Your Email Address"
                                               onChange={(e) => {
                                                   setEmail(e.target.value)
                                               }}/>
                                    </div>
                                    <div className="form-group icon-input mb-1">
                                        <input type="Password"
                                               className="style2-input ps-5 form-control text-grey-900 font-xss ls-3"
                                               placeholder="Password"
                                               onChange={(e) => {
                                                   setPassword(e.target.value)
                                               }}/>
                                        <i className="font-sm ti-lock text-grey-500 pe-0"></i>
                                    </div>
                                    <div>
                                        <small className='text-danger'>{errorMessage}</small>
                                    </div>
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
                                                className="form-control text-center style2-input text-white fw-600 bg-dark border-0 p-0 "
                                                onClick={handleLogin}>
                                                Login
                                            </button>

                                        </div>
                                        <h6 className="text-grey-500 font-xsss fw-500 mt-0 mb-0 lh-32">
                                            Dont have account ?
                                            <Link to="/register" className="fw-700 ms-1 text-vibe">Register</Link>
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

export default Login