import WorkAndEducation from "./Information/WorkAndEducation/index.jsx";
import {useState} from "react";
import "./index.css"
import Contact from "./Information/Contact/index.jsx";
import UserDetail from "./Information/UserDetail/index.jsx";
import OverView from "./Information/OverView/index.jsx";


function IntroductionTab() {
    const tabs = ["Over View", "Work and Education", "Contact and basic info", "Details about you"]


    const [type, setType] = useState("Over View")

    return (
        <>
            <div className="card w-100 shadow-xss rounded-xxl border-0 d-block mt-3"
                 style={{height: 800}}>
                <div className="card-body d-block p-4">
                    <h3 className="fw-700 font-md">About</h3>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-lg-4 border-end ps-4 align-items-center">
                            {tabs.map((tab) => (
                                <span onClick={() => {setType(tab)}}
                                      key={tab}
                                      className={type === tab ?
                                          "cursor-pointer p-2 fw-600 d-block font-xs text-grey-800 mb-2 bg-lightblue rounded-2 ps-2" :
                                          "cursor-pointer p-2 d-block font-xss text-grey-800 mb-2 hover-about-tab"}>
                                    {tab}
                                </span>
                            ))}
                        </div>
                        <div className="col-lg-8">
                            {
                                type === 'Over View' ? <OverView/>
                                    : type === 'Work and Education' ? <WorkAndEducation/>
                                        : type === 'Contact and basic info' ? <Contact/>
                                            : <UserDetail/>
                            }
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default IntroductionTab;