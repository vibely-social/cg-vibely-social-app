import "../../index.css"
import {useState} from "react";

function WorkAndEducation() {
    const [workStatus, setWorkStatus] = useState(false)
    const [schoolStatus, setSchoolStatus] = useState(false)

    return (
        <>
            <div className="ps-5 mb-4 pe-5">
                <div>
                    <h4 className="fw-500">Work</h4>
                </div>
                {workStatus === true ?
                    <div className="row">
                        <div className="col-lg-12 mb-3">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Company"/>
                            </div>
                        </div>
                        <div className="col-lg-12 mb-3">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Position"/>
                            </div>
                        </div>
                        <div className="col-lg-12 border-bottom">
                            <button
                                className="text-center p-1 w50 border-0 float-right rounded-2 d-inline-block hover-button">
                                Save
                            </button>
                            <button onClick={() => setWorkStatus(!workStatus)}
                                    className="text-center p-1 mb-4 w50 border-0 float-right rounded-2 d-inline-block hover-button me-2">
                                Canel
                            </button>
                        </div>
                    </div>
                    :
                    <div onClick={() => setWorkStatus(!workStatus)}
                         className="d-flex align-items-center mb-1 cursor-pointer">
                        <a className="feather-plus-circle text-dark btn-round-sm font-lg"></a>
                        <h4 className="fw-700 text-grey-500 font-xsss mt-2 hover-underline">
                            Add information
                        </h4>
                    </div>
                }
            </div>

            <div className="ps-5 mb-4 pe-5">
                <div>
                    <h4 className="fw-500">School</h4>
                </div>
                {schoolStatus === true ?
                    <div className="row">
                        <div className="col-lg-12 mb-3">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="School"/>
                            </div>
                        </div>
                        <div className="col-lg-12 border-bottom">
                            <button
                                className="text-center p-1 w50 border-0 float-right rounded-2 d-inline-block hover-button">
                                Save
                            </button>
                            <button onClick={() =>setSchoolStatus(!schoolStatus)}
                                    className="text-center p-1 mb-4 w50 border-0 float-right rounded-2 d-inline-block hover-button me-2">
                                Canel
                            </button>
                        </div>
                    </div>
                    :
                    <div onClick={() => setSchoolStatus(!schoolStatus)}
                         className="d-flex align-items-center mb-1 cursor-pointer">
                        <a className="feather-plus-circle text-dark btn-round-sm font-lg"></a>
                        <h4 className="fw-700 text-grey-500 font-xsss mt-2 hover-underline">
                            Add information
                        </h4>
                    </div>
                }
            </div>
        </>
    )
}

export default WorkAndEducation;