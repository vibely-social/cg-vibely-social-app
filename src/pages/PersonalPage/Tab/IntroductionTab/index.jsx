import WorkAndStudy from "./Infomation/WorkAndStutdy/index.jsx";
import {useState} from "react";
import "./index.css"
import Contact from "./Infomation/Contact/index.jsx";
import UserDetail from "./Infomation/UserDetail/index.jsx";
import OverView from "./Infomation/OverView/index.jsx";

function IntroductionTab() {
    const tabs = ["Tổng quan", "Công việc và học vấn", "Thông tin liên hệ cơ bản", "Chi tiết về bạn"]

    const [type, setType] = useState("Tổng quan")

    return (
        <>
            <div className="card w-100 shadow-xss rounded-xxl border-0 d-block font-xssss text-grey-500 mt-3" style={{height: 600}}>
                <div className="card-body d-block font-xssss text-grey-500 p-4">
                    <h3 className="fw-700 d-block font-xssss text-grey-500 font-xsss text-grey-900">Giới thiệu</h3>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-lg-4 border-end ps-4 align-items-center">
                            {tabs.map((tab) => (
                                <span onClick={() => setType(tab)}
                                      key={tab}
                                      className={type === tab ?
                                          "cursor-pointer p-2 fw-600 d-block font-xss text-grey-800 mb-2 bg-lightblue rounded-2 ps-2" :
                                          "cursor-pointer p-2 d-block font-xsss text-grey-800 mb-2 hover-item"}>
                                    {tab}
                                </span>
                            ))}
                        </div>
                        <div className="col-lg-8">
                            {
                                type === 'Tổng quan' ? <OverView/>
                                    : type === 'Công việc và học vấn' ? <WorkAndStudy/>
                                        : type === 'Thông tin liên hệ cơ bản' ? <Contact/>
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