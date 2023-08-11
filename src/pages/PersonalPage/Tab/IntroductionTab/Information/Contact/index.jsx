import "../../index.css"
import {useState} from "react";

function Contact() {
    const [phoneStatus, setPhoneStatus] = useState(false)
    const [addressStatus, setAddressStatus] = useState(false)


    return (
        <>
            <div className="ps-5 pe-5 mb-4">
                <div>
                    <h4 className="fw-500">Phone number</h4>
                </div>
                {phoneStatus === true ?
                    <div className="row">
                        <div className="col-lg-12 mb-3">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Phone number"/>
                            </div>
                        </div>
                        <div className="col-lg-12 border-bottom">
                            <button
                                className="text-center p-1 w50 border-0 float-right rounded-2 d-inline-block hover-button">
                                Save
                            </button>
                            <button onClick={() => setPhoneStatus(!phoneStatus)}
                                    className="text-center p-1 mb-4 w50 border-0 float-right rounded-2 d-inline-block hover-button me-2">
                                Canel
                            </button>
                        </div>
                    </div>
                    :
                    <div onClick={() => setPhoneStatus(!phoneStatus)}
                         className="d-flex align-items-center mb-1 cursor-pointer">
                        <a className="feather-plus-circle text-dark btn-round-sm font-lg"></a>
                        <h4 className="fw-700 text-grey-500 font-xsss mt-2 hover-underline">
                            Add information
                        </h4>
                    </div>
                }
            </div>

            <div className="ps-5 pe-5 mb-4">
                <div>
                    <h4 className="fw-500">Address</h4>
                </div>
                {addressStatus === true ?
                    <div className="row">
                        <div className="col-lg-12 mb-3">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Address"/>
                            </div>
                        </div>
                        <div className="col-lg-12 border-bottom">
                            <button
                                className="text-center p-1 w50 border-0 float-right rounded-2 d-inline-block hover-button">
                                Save
                            </button>
                            <button onClick={() => setAddressStatus(!addressStatus)}
                                    className="text-center p-1 mb-4 w50 border-0 float-right rounded-2 d-inline-block hover-button me-2">
                                Canel
                            </button>
                        </div>
                    </div>
                    :
                    <div onClick={() => setAddressStatus(!addressStatus)}
                         className="d-flex align-items-center mb-1 cursor-pointer">
                        <a className="feather-plus-circle text-dark btn-round-sm font-lg"></a>
                        <h4 className="fw-700 text-grey-500 font-xsss mt-2 hover-underline">
                            Add information
                        </h4>
                    </div>
                }
            </div>

            <div className="ps-5 mb-4">
                <div>
                    <h4 className="fw-500">Email</h4>
                </div>
                <div
                    className="d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss mb-1 cursor-pointer">
                    <div className="mt-1 d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss mb-1">
                        <h4 >- support@gmail.com</h4>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;