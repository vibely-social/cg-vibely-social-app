import {useState} from "react";
import ContactFanPage from "~/pages/OwnerFanPage/Tab/IntroductionTabFanPage/InformationFanPage/ContactFanPage/index.jsx";
import WorkAndEducationFanPage
    from "~/pages/OwnerFanPage/Tab/IntroductionTabFanPage/InformationFanPage/WorkAndEducation/index.jsx";
import OverViewFanPage from "~/pages/OwnerFanPage/Tab/IntroductionTabFanPage/InformationFanPage/OverViewFanPage/index.jsx";
import FanPageDetail from "~/pages/OwnerFanPage/Tab/IntroductionTabFanPage/InformationFanPage/FanPageDetail/index.jsx";

function IntroductionTabFanPage() {
    const tabs = ["Over View", "Work and Education", "Contact and basic info", "Details about you"]
    const [type, setType] = useState("Over View")


    return (
        <>
            <div className="card w-100 shadow-xss rounded-xxl border-0 d-block mt-3">
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
                                          "cursor-pointer p-2 fw-600 d-block font-xs text-grey-800 mb-2 bg-current rounded-2 ps-2" :
                                          "cursor-pointer p-2 d-block font-xss text-grey-800 mb-2 hover-button rounded"}>
                                    {tab}
                                </span>
                            ))}
                        </div>
                        <div className="col-lg-8">
                            {
                                type === 'Over View' ? <OverViewFanPage />
                                    : type === 'Work and Education' ? <WorkAndEducationFanPage />
                                        : type === 'Contact and basic info' ? <ContactFanPage />
                                            : <FanPageDetail />
                            }
                        </div>
                    </div>
                </div>
            </div>

            <div className="card w-100 shadow-xss rounded-xxl border-0 d-block mt-3"
                 style={{height: 800}}>
                <div className="card-body d-block p-4">
                    <h3 className="fw-700 font-md">Other</h3>
                </div>
            </div>
        </>
    )
}
export default IntroductionTabFanPage;