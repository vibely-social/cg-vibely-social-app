import "../../index.css"
import {useState} from "react";
import {useFormik} from "formik";
import * as Yup from "yup";
import {useDispatch, useSelector} from "react-redux";
import {editUserInfo, formatDate, setBirthday, setCity} from "~/store/slices/getUserInfoSlice/UserInfoSlice.js";

function OverView() {
    const [workStatus, setWorkStatus] = useState(false)
    const [schoolStatus, setSchoolStatus] = useState(false)
    const [cityStatus, setCityStatus] = useState(false)
    const [birthdayStatus, setBirthdayStatus] = useState(false)
    const userInfo = useSelector(state => state.userInfo);
    const dispatch = useDispatch();


    const formikWork = useFormik({
        initialValues: {
            company: "",
            position: "",
        },
        validationSchema: Yup.object({
            company: Yup
                .string()
                .required("You must fill in the Company section!"),
            position: Yup
                .string()
                .required("You must fill in the Position section!")
        }),
        onSubmit: (values, {resetForm}) => {
            console.log(values);
            resetForm();
        }
    })

    const formikSchool = useFormik({
        initialValues: {
            school: ""
        },
        validationSchema: Yup.object({
            school: Yup
                .string()
                .required("You must fill in the School section!")
        }),
        onSubmit: (values, {resetForm}) => {
            console.log(values);
            resetForm();
        }
    })

    const formikCity = useFormik({
        initialValues: {
            city: userInfo.city
        },

        enableReinitialize: true,

        validationSchema: Yup.object({
            city: Yup
                .string()
                .required("You must fill in the City section!")
        }),
        onSubmit: (values) => {
            const user = {
                ...userInfo,
                city: values.city
            }
            editUserInfo(user).then(() => {
                dispatch(setCity(user))
                setCityStatus(!cityStatus);
            })
        }
    })

    const formikBirthday = useFormik({
        initialValues: {
            birthday: userInfo.birthday,
        },

        enableReinitialize: true,

        validationSchema: Yup.object({
            birthday: Yup
                .string()
                .required("You must fill in the Birthday section!")
        }),
        onSubmit: async (values) => {
            const user = {
                ...userInfo,
                birthday: values.birthday
            }
            editUserInfo(user).then(() => {
                dispatch(setBirthday(user))
                setBirthdayStatus(!birthdayStatus);
            })
        }
    })



    return (
        <>
            <div className="ps-5 pe-5 mb-3">
                {
                    workStatus === true ?
                        <form className="info-form" onSubmit={formikWork.handleSubmit}>
                            <div className="row">
                                <div className="col-lg-12 h75">
                                    <div className="form-group">
                                        <input type="text"
                                               className="form-control"
                                               id="company"
                                               name="company"
                                               value={formikWork.values.company}
                                               onChange={formikWork.handleChange}
                                               onBlur={formikWork.handleBlur}
                                               placeholder="Company"/>
                                        <span className="text-red">
                                        {formikWork.errors.company}
                                        </span>
                                    </div>
                                </div>
                                <div className="col-lg-12 h75">
                                    <div className="form-group">

                                        <input type="text"
                                               className="form-control"
                                               id="position"
                                               name="position"
                                               value={formikWork.values.position}
                                               onChange={formikWork.handleChange}
                                               onBlur={formikWork.handleBlur}
                                               placeholder="Position"/>
                                        <span className="text-red">
                                        {formikWork.errors.position}
                                        </span>
                                    </div>
                                </div>
                                <div className="col-lg-12 border-bottom">
                                    <button type="submit"
                                            className={
                                                formikWork.isValid ?
                                                    "text-center p-1 w50 border-0 float-right rounded-2 d-inline-block hover-button"
                                                    : "text-center p-1 w50 border-0 float-right rounded-2 d-inline-block hover-no-allowed text-grey-500"
                                            }>
                                        Save
                                    </button>
                                    <button onClick={() => {
                                        setWorkStatus(false),
                                            formikWork.resetForm()
                                    }}
                                            className="text-center mb-4 p-1 w50 border-0 float-right rounded-2 d-inline-block hover-button me-2">
                                        Canel
                                    </button>
                                </div>
                            </div>
                        </form>
                        :
                        <div className="d-flex align-items-center mb-1 ">
                            <i onClick={() => setWorkStatus(true)}
                                className="feather-plus-circle text-dark btn-round-sm font-lg cursor-pointer hover-edit">
                            </i>
                            <h4 onClick={() => setWorkStatus(true)}
                                className="fw-700 text-grey-500 font-xsss mt-2 hover-underline cursor-pointer">
                                Add current Workplace
                            </h4>
                        </div>
                }
            </div>

            <div className="ps-5 pe-5 mb-3">
                {
                    schoolStatus === true ?
                        <form className="info-form" onSubmit={formikSchool.handleSubmit}>
                            <div className="row">
                                <div className="col-lg-12 h75">
                                    <div className="form-group">

                                        <input type="text"
                                               className="form-control"
                                               id="school"
                                               name="school"
                                               value={formikSchool.values.school}
                                               onChange={formikSchool.handleChange}
                                               onBlur={formikSchool.handleBlur}
                                               placeholder="School"/>
                                        <span className="text-red">
                                        {formikSchool.errors.school}
                                        </span>
                                    </div>
                                </div>
                                <div className="col-lg-12 border-bottom">
                                    <button type="submit"
                                            className={
                                                formikSchool.isValid ?
                                                    "text-center p-1 w50 border-0 float-right rounded-2 d-inline-block hover-button"
                                                    : "text-center p-1 w50 border-0 float-right rounded-2 d-inline-block hover-no-allowed text-grey-500"
                                            }>
                                        Save
                                    </button>
                                    <button onClick={() => {
                                        setSchoolStatus(false),
                                            formikSchool.resetForm()
                                    }}
                                            className="text-center mb-4 p-1 w50 border-0 float-right rounded-2 d-inline-block hover-button me-2">
                                        Canel
                                    </button>
                                </div>
                            </div>
                        </form>

                        :
                        <div className="d-flex align-items-center mb-1 ">
                            <i onClick={() => setSchoolStatus(true)}
                               className="feather-plus-circle text-dark btn-round-sm font-lg cursor-pointer hover-edit">
                            </i>
                            <h4 onClick={() => setSchoolStatus(true)}
                                className="fw-700 text-grey-500 font-xsss mt-2 hover-underline cursor-pointer">
                                Add School
                            </h4>
                        </div>
                }
            </div>

            <div className="ps-5 pe-5 mb-3">
                {
                    cityStatus === true ?
                        <form className="info-form" onSubmit={formikCity.handleSubmit}>
                            <div className="row">
                                <div className="col-lg-12 h75">
                                    <div className="form-group">

                                        <input type="text"
                                               className="form-control"
                                               id="city"
                                               name="city"
                                               value={formikCity.values.city}
                                               onChange={formikCity.handleChange}
                                               onBlur={formikCity.handleBlur}
                                               placeholder="City"/>
                                        <span className="text-red">
                                        {formikCity.errors.city}
                                        </span>
                                    </div>
                                </div>
                                <div className="col-lg-12 border-bottom">
                                    <button type="submit"
                                            className={
                                                formikCity.isValid ?
                                                    "text-center p-1 w50 border-0 float-right rounded-2 d-inline-block hover-button"
                                                    : "text-center p-1 w50 border-0 float-right rounded-2 d-inline-block hover-no-allowed text-grey-500"
                                            }>
                                        Save
                                    </button>
                                    <button onClick={() => {
                                        setCityStatus(false)
                                            formikCity.resetForm()
                                    }}
                                            className="text-center mb-4 p-1 w75 border-0 float-right rounded-2 d-inline-block hover-button me-2">
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </form>
                        : userInfo.city != null ?
                            <div
                                className="fw-600 text-dark lh-26 font-xssss mb-1 row">
                                <div className="mt-1 align-items-center text-dark lh-26 mb-1 col-lg-12">
                                    <h4 className="d-flex align-items-center float-left">
                                        <i className="feather-home me-2"></i>
                                        Lives in {userInfo.city}
                                    </h4>
                                    <i onClick={() => setCityStatus(!cityStatus)}
                                       className="ti-pencil d-flex font-md float-right cursor-pointer hover-edit"></i>
                                </div>
                            </div>
                            :
                            <div className="d-flex align-items-center mb-1 ">
                                <i onClick={() => setCityStatus(true)}
                                   className="feather-plus-circle btn-round-sm text-dark font-lg cursor-pointer hover-edit">
                                </i>
                                <h4 onClick={() => setCityStatus(true)}
                                    className="fw-700 text-grey-500 font-xsss mt-2 hover-underline cursor-pointer">
                                    Add current City
                                </h4>
                            </div>
                }
            </div>

            <div className="ps-5 pe-5 mb-3">
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
                                                    : "text-center p-1 w50 border-0 float-right rounded-2 d-inline-block hover-no-allowed text-grey-500"
                                            }>
                                        Save
                                    </button>
                                    <button onClick={() => {
                                        setBirthdayStatus(false)
                                            formikBirthday.resetForm()
                                    }}
                                            className="text-center mb-4 p-1 w50 border-0 float-right rounded-2 d-inline-block hover-button me-2">
                                        Canel
                                    </button>
                                </div>
                            </div>
                        </form>
                        : <div
                            className="fw-600 text-dark lh-26 font-xssss row">
                            <div className="mt-2 align-items-center text-dark lh-26 col-lg-12">
                                <h4 className="d-flex align-items-center float-left">
                                    <i className="ti-thought me-2"></i>
                                    Borns on {formatDate(userInfo.birthday)}
                                </h4>
                                <i onClick={() => setBirthdayStatus(!birthdayStatus)}
                                   className="ti-pencil d-flex font-md float-right cursor-pointer hover-edit"></i>
                            </div>
                        </div>
                }
            </div>
        </>
    )
}

export default OverView;