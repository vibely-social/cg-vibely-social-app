import {useState} from "react";

function PersonalIntro() {
    const [introStatus, setIntroStatus] = useState(false);

    return (<>
        <div className="card w-100 shadow-xss rounded-xxl border-0">
            <div className="card-body d-block p-4">
                <h2 className="fw-700 mb-0 mt-0 font-md text-grey-900">Intro</h2>
            </div>

            <div className="card-body d-block p-4">
                {introStatus === true ?
                    <div>
                        <textarea
                            name="" id="" cols="40" rows="3"
                            className="rounded-3 border-primary">
                        </textarea>
                        <div className="">
                            <button type="submit"
                                    className="text-center p-1 w50 border-0 float-right rounded-2 d-inline-block hover-button">
                                Save
                            </button>
                            <button
                                onClick={() => setIntroStatus(!introStatus)}
                                className="text-center p-1 w75 border-0 float-right rounded-2 d-inline-block hover-button me-2">
                                Cancel
                            </button>
                        </div>
                    </div>

                    : <div>
                        <h6 className="font-xss mb-3 text-center">Write something for us !!!</h6>
                        <span
                            onClick={() => setIntroStatus(!introStatus)}
                            className="cursor-pointer p-1 fw-600 text-center d-block font-xss text-grey-800 bg-primary-gradiant shadow-md rounded-3 ps-2">
                                Edit intro
                        </span>
                    </div>
                }
            </div>
            <div className="card-body ms-1">
                <h4 className="d-flex align-items-center">
                    <i className="feather-home me-2"></i>
                    Lives in China town
                </h4>
            </div>
            <div className="card-body ms-1">
                <h4 className="d-flex align-items-center">
                    <i className="feather-briefcase me-2"></i>
                    Work in Taiwan
                </h4>
            </div>
            <div className="card-body ms-1 border-bottom me-1">
                <h4 className="d-flex align-items-center">
                    <i className="feather-briefcase me-2"></i>
                    Work in Taiwan
                </h4>
            </div>

            <div className="card-body ms-1 mt-2">
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
                <span
                    className="cursor-pointer p-1 fw-600 text-center d-block font-xss text-grey-800 bg-primary-gradiant shadow-md rounded-3 ps-2 mt-2">
                    Add hobbies
                </span>
            </div>

            <div className="card-body mt-2 d-block">
                <div className="row ps-2 pe-2">
                    <div className="col-lg-6 ps-2">
                        <div
                            className="card h240 d-block border-0 rounded-4 mb-3 bg-image-cover"
                            style={{backgroundImage: 'url(https://images.unsplash.com/photo-1595433707802-6b2626ef1c91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80)'}}>
                        </div>
                    </div>
                    <div className="col-lg-6 ps-2">
                        <div
                            className="card h240 d-block border-0 rounded-4 mb-3 bg-image-cover"
                            style={{backgroundImage: 'url(https://i.pinimg.com/564x/5f/5b/3a/5f5b3a54f62bca626d97048f1a750239.jpg)'}}>
                        </div>
                    </div>
                </div>
                <span
                    className="cursor-pointer p-1 fw-600 text-center d-block font-xss text-grey-800 bg-primary-gradiant shadow-md rounded-3 ps-2 mt-2">
                    Edit featured
                </span>
            </div>


        </div>
    </>)
}

export default PersonalIntro;