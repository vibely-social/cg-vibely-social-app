import "../../index.css"
import {useState} from "react";

function OverView() {
    const [workStatus, setWorkStatus] = useState(false)
    const [schoolStatus, setSchoolStatus] = useState(false)
    const [addressStatus, setAddressStatus] = useState(false)


    return (
        <>
            <div className="ps-5 pe-5 mb-3">
                {
                    workStatus === true ?
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
                                <button onClick={() => setWorkStatus(false)}
                                        className="text-center mb-4 p-1 w50 border-0 float-right rounded-2 d-inline-block hover-button me-2">
                                    Canel
                                </button>
                            </div>
                        </div>
                        :
                        <div onClick={() => setWorkStatus(true)}
                             className="d-flex align-items-center mb-1 cursor-pointer">
                            <a className="feather-plus-circle text-dark btn-round-sm font-lg"></a>
                            <h4 className="fw-700 text-grey-500 font-xsss mt-2 hover-underline">
                                Add a workplace
                            </h4>
                        </div>
                }
            </div>

            <div className="ps-5 pe-5 mb-3">
                {
                    schoolStatus === true ?
                        <div className="row">
                            <div className="col-lg-12 mb-3 mt-2">
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="School"/>
                                </div>
                            </div>
                            <div className="col-lg-12 border-bottom">
                                <button
                                    className="text-center p-1 w50 border-0 float-right rounded-2 d-inline-block hover-button">
                                    Save
                                </button>
                                <button onClick={() => setSchoolStatus(false)}
                                        className="text-center p-1 mb-4 w50 border-0 float-right rounded-2 d-inline-block hover-button me-2">
                                    Canel
                                </button>
                            </div>
                        </div>
                        :
                        <div onClick={() => setSchoolStatus(true)}
                             className="d-flex align-items-center mb-1 cursor-pointer">
                            <a className="feather-plus-circle text-dark btn-round-sm font-lg"></a>
                            <h4 className="fw-700 text-grey-500 font-xsss mt-2 hover-underline">
                                Add school
                            </h4>
                        </div>
                }
            </div>

            <div className="ps-5 pe-5 mb-3">
                {
                    addressStatus === true ?
                        <div className="row">
                            <div className="col-lg-12 mb-3 mt-2">
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Address"/>
                                </div>
                            </div>
                            <div className="col-lg-12 border-bottom">
                                <button
                                    className="text-center p-1 w50 border-0 float-right rounded-2 d-inline-block hover-button">
                                    Save
                                </button>
                                <button onClick={() => setAddressStatus(false)}
                                        className="text-center p-1 mb-4 w50 border-0 float-right rounded-2 d-inline-block hover-button me-2">
                                    Canel
                                </button>
                            </div>
                        </div>
                        :
                        <div onClick={() => setAddressStatus(true)}
                             className="d-flex align-items-center mb-1 cursor-pointer">
                            <a className="feather-plus-circle text-dark btn-round-sm font-lg"></a>
                            <h4 className="fw-700 text-grey-500 font-xsss mt-2 hover-underline">
                                Add address
                            </h4>
                        </div>
                }
            </div>

            <div className="ps-5 mt-4 d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss mb-1">
                <h4>- Birthday: dd/mm/yyyy</h4>
            </div>
        </>
    )
}

export default OverView;