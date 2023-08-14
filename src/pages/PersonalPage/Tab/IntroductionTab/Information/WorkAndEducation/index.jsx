import "../../index.css"
import {useState} from "react";
import {useFormik} from "formik";
import * as Yup from "yup";

function WorkAndEducation() {
    const [workStatus, setWorkStatus] = useState(false)
    const [schoolStatus, setSchoolStatus] = useState(false)

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

    return (
        <>
            <div className="ps-5 mb-4 pe-5">
                <div>
                    <h4 className="fw-500">Work</h4>
                </div>
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

            <div className="ps-5 mb-4 pe-5">
                <div>
                    <h4 className="fw-500">School</h4>
                </div>
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
                               className="feather-plus-circle btn-round-sm text-dark font-lg cursor-pointer hover-edit">
                            </i>
                            <h4 onClick={() => setSchoolStatus(true)}
                                className="fw-700 text-grey-500 font-xsss mt-2 hover-underline cursor-pointer">
                                Add School
                            </h4>
                        </div>
                }
            </div>
        </>
    )
}

export default WorkAndEducation;