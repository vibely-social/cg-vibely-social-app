import {useState} from "react";
import {useSelector} from "react-redux";
import {formatDate} from "~/features/userInfoSlice/UserInfoSlice.js";
import {useFormik} from "formik";
import "~/components/PersonalIntro/index.css"

function PersonalIntro() {
    const [bioStatus, setBioStatus] = useState(false);
    const [hobbyStatus, setHobbyStatus] = useState(false);
    const userInfo = useSelector(state => state.userInfo);

    const formikBio = useFormik({
        initialValues: {
            bio: ''
        },

        enableReinitialize: true,

        onSubmit: (values) => {
            // const user = {
            //     ...userInfo, intro: values.intro
            // }
            // editUserInfo(user).then(() => {
            //     // dispatch(setIntro(user))
                setBioStatus(!bioStatus);
            // })
        }
    })


    return (<>
        <div className="card w-100 shadow-xss rounded-xxl border-0">
            <div className="card-body d-block p-4">
                <h2 className="fw-700 mb-0 mt-0 font-md text-grey-900">Intro</h2>
            </div>

            <div className="card-body d-block p-4">
                {bioStatus === true ?
                    <div>
                            <textarea
                                name="bio" id="bio"
                                cols="40" rows="3"
                                form="bio-form"
                                value={formikBio.values.bio}
                                onChange={formikBio.handleChange}
                                onBlur={formikBio.handleBlur}
                                placeholder="Write something for us !!!"
                                className="rounded-3 border-primary text-center">
                            </textarea>
                        <form id="bio-form" className="" onSubmit={formikBio.handleSubmit}>
                            <button type="submit"
                                    className="text-center p-1 w50 border-0 float-right rounded-2 d-inline-block hover-button">
                                OK
                            </button>
                        </form>
                    </div>

                    : <div>
                        <h6 className="font-xss mb-3 text-center ">
                            {formikBio.values.bio}
                        </h6>
                        <span
                            onClick={() => setBioStatus(!bioStatus)}
                            className="cursor-pointer hover-opacity p-1 fw-600 text-center d-block font-xss text-grey-800 bg-current rounded-3 ps-2">
                                Edit bio
                        </span>
                    </div>}
            </div>

            <div>
                {userInfo.company != null ? <div className="card-body ms-1">
                    <h4 className="d-flex align-items-center">
                        <i className="feather-briefcase me-2"></i>
                        Work at {userInfo.company} with position {userInfo.position}
                    </h4>
                </div> : null}

                {userInfo.city != null ? <div className="card-body ms-1">
                    <h4 className="d-flex align-items-center">
                        <i className="feather-home me-2"></i>
                        Lives in {userInfo.city + ", " + userInfo.district}
                    </h4>
                </div> : null}

                <div className="card-body ms-1 border-bottom me-1">
                    <h4 className="d-flex align-items-center">
                        <i className="ti-thought me-2"></i>
                        Born on {formatDate(userInfo.birthday)}
                    </h4>
                </div>
            </div>


            <div className="card-body ms-1 mt-2">
                <div>
                    <button
                        style={{borderColor: "aqua"}}
                        className="cursor-pointer p-1 text-center font-xss text-grey-800 rounded-4 ps-2 me-2 mb-2">
                        Cooking
                    </button>
                    <button
                        className="cursor-pointer p-1 text-center font-xss text-grey-800 rounded-4 border-warning ps-2 me-2 mb-2">
                        Animal keeping
                    </button>
                    <button
                        style={{borderColor: "purple"}}
                        className="cursor-pointer p-1 text-center font-xss text-grey-800 rounded-4 ps-2 me-2 mb-2">
                        Extreme Sport
                    </button>
                    <button
                        style={{borderColor: "red"}}
                        className="cursor-pointer p-1 text-center font-xs text-grey-800 rounded-4 ps-2 me-2 mb-2">
                        Traveling
                    </button>
                </div>

                <span
                    className="cursor-pointer hover-opacity p-1 fw-600 text-center d-block font-xss text-grey-800 bg-current rounded-3 ps-2 mt-2">
                    Add hobbies
                </span>
            </div>




        </div>
    </>)
}

export default PersonalIntro;