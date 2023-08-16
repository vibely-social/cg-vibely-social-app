import {useState} from "react";

function FriendTab() {
    const tabs = ["All friends", "Following"]

    const [type, setType] = useState("All friends")

    return (
        <>
            <div className="card w-100 d-block d-flex shadow-xss rounded-xxl border-0 mt-3">
                <div className="card-body d-flex p-4">
                    <h2 className="fw-700 mb-0 mt-0 font-md text-grey-900">Friends</h2>
                    <div className="search-form-2 ms-auto">
                        <i className="ti-search font-xss cursor-pointer"></i>
                        <input type="text"
                               className="form-control text-grey-500 mb-0 bg-greylight theme-dark-bg border-0"
                               placeholder="Search "/>
                    </div>
                </div>
                <div className="card-body d-block w-100 mb-0 p-0">
                    <ul className="nav nav-tabs h55 d-flex product-info-tab border-bottom-0 ps-4"
                        id="pills-tab" role="tablist">
                        {tabs.map((tab) => (
                            <li key={tab} className="list-inline-item me-5 ">
                                <span data-toggle="tab"
                                      onClick={() => setType(tab)}
                                      className={type === tab ?
                                          "fw-600 font-xsss text-dark pt-3 pb-3 ls-1 d-inline-block cursor-pointer border-bottom-dark" :
                                          "fw-600 font-xssss text-grey-500 pt-3 pb-3 ls-1 d-inline-block cursor-pointer"}>
                                    {tab}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-6 col-sm-6 pe-2 ps-2">
                            <div className="card d-block border-0 shadow-xss rounded-3 mb-3">
                                <div className="card-body d-block d-flex w-100">
                                    <img className="h75 w75 cursor-pointer"
                                         src="https://via.placeholder.com/50x50.png" alt="ava"/>
                                    <div className="ms-3">
                                        <h4 className="fw-700 font-xsss mt-3 cursor-pointer">Tam lỏ</h4>
                                        <p className="fw-500 font-xsssss text-grey-500 mt-0 mb-3">support@gmail.com</p>
                                    </div>
                                    <a href="#" className="ms-auto mt-auto mb-auto"
                                       id="dropdownMenu4" data-bs-toggle="dropdown"
                                       aria-haspopup="true" aria-expanded="true">
                                        <i className="ti-more-alt text-grey-900 btn-round-md bg-greylight font-xss"></i>
                                    </a>
                                    <div
                                        className="dropdown-menu dropdown-menu-start p-4 rounded-xxl border-0 shadow-lg"
                                        aria-labelledby="dropdownMenu4">
                                        <div className="card-body p-0 d-flex mt-2 cursor-pointer">
                                            <i className="feather-lock text-grey-500 me-3 font-lg"></i>
                                            <h4 className="fw-600 text-grey-900 font-xssss mt-0 me-4">
                                                Unfollow
                                                <span className="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">Save to your saved items</span>
                                            </h4>
                                        </div>
                                        <div className="card-body p-0 d-flex mt-2 cursor-pointer">
                                            <i className="ti-eraser text-grey-500 me-3 font-lg"></i>
                                            <h4 className="fw-600 mb-0 text-grey-900 font-xssss mt-0 me-4">
                                                Unfriend
                                                <span className="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">Save to your saved items</span>
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6 pe-2 ps-2">
                            <div className="card d-block border-0 shadow-xss rounded-3 mb-3">
                                <div className="card-body d-block d-flex w-100">
                                    <img className="h75 w75 cursor-pointer"
                                         src="https://via.placeholder.com/50x50.png" alt="ava"/>
                                    <div className="ms-3">
                                        <h4 className="fw-700 font-xsss mt-3 cursor-pointer">Tam lỏ</h4>
                                        <p className="fw-500 font-xsssss text-grey-500 mt-0 mb-3">support@gmail.com</p>
                                    </div>
                                    <a href="#" className="ms-auto mt-auto mb-auto"
                                       id="dropdownMenu4" data-bs-toggle="dropdown"
                                       aria-haspopup="true" aria-expanded="true">
                                        <i className="ti-more-alt text-grey-900 btn-round-md bg-greylight font-xss"></i>
                                    </a>
                                    <div
                                        className="dropdown-menu dropdown-menu-start p-4 rounded-xxl border-0 shadow-lg"
                                        aria-labelledby="dropdownMenu4">
                                        <div className="card-body p-0 d-flex mt-2 cursor-pointer">
                                            <i className="feather-lock text-grey-500 me-3 font-lg"></i>
                                            <h4 className="fw-600 text-grey-900 font-xssss mt-0 me-4">
                                                Unfollow
                                                <span className="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">Save to your saved items</span>
                                            </h4>
                                        </div>
                                        <div className="card-body p-0 d-flex mt-2 cursor-pointer">
                                            <i className="ti-eraser text-grey-500 me-3 font-lg"></i>
                                            <h4 className="fw-600 mb-0 text-grey-900 font-xssss mt-0 me-4">
                                                Unfriend
                                                <span className="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">Save to your saved items</span>
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6 pe-2 ps-2">
                            <div className="card d-block border-0 shadow-xss rounded-3 mb-3">
                                <div className="card-body d-block d-flex w-100">
                                    <img className="h75 w75 cursor-pointer"
                                         src="https://via.placeholder.com/50x50.png" alt="ava"/>
                                    <div className="ms-3">
                                        <h4 className="fw-700 font-xsss mt-3 cursor-pointer">Tam lỏ</h4>
                                        <p className="fw-500 font-xsssss text-grey-500 mt-0 mb-3">support@gmail.com</p>
                                    </div>
                                    <a href="#" className="ms-auto mt-auto mb-auto"
                                       id="dropdownMenu4" data-bs-toggle="dropdown"
                                       aria-haspopup="true" aria-expanded="true">
                                        <i className="ti-more-alt text-grey-900 btn-round-md bg-greylight font-xss"></i>
                                    </a>
                                    <div
                                        className="dropdown-menu dropdown-menu-start p-4 rounded-xxl border-0 shadow-lg"
                                        aria-labelledby="dropdownMenu4">
                                        <div className="card-body p-0 d-flex mt-2 cursor-pointer">
                                            <i className="feather-lock text-grey-500 me-3 font-lg"></i>
                                            <h4 className="fw-600 text-grey-900 font-xssss mt-0 me-4">
                                                Unfollow
                                                <span className="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">Save to your saved items</span>
                                            </h4>
                                        </div>
                                        <div className="card-body p-0 d-flex mt-2 cursor-pointer">
                                            <i className="ti-eraser text-grey-500 me-3 font-lg"></i>
                                            <h4 className="fw-600 mb-0 text-grey-900 font-xssss mt-0 me-4">
                                                Unfriend
                                                <span className="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">Save to your saved items</span>
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6 pe-2 ps-2">
                            <div className="card d-block border-0 shadow-xss rounded-3 mb-3">
                                <div className="card-body d-block d-flex w-100">
                                    <img className="h75 w75 cursor-pointer"
                                         src="https://via.placeholder.com/50x50.png" alt="ava"/>
                                    <div className="ms-3">
                                        <h4 className="fw-700 font-xsss mt-3 cursor-pointer">Tam lỏ</h4>
                                        <p className="fw-500 font-xsssss text-grey-500 mt-0 mb-3">support@gmail.com</p>
                                    </div>
                                    <a href="#" className="ms-auto mt-auto mb-auto"
                                       id="dropdownMenu4" data-bs-toggle="dropdown"
                                       aria-haspopup="true" aria-expanded="true">
                                        <i className="ti-more-alt text-grey-900 btn-round-md bg-greylight font-xss"></i>
                                    </a>
                                    <div
                                        className="dropdown-menu dropdown-menu-start p-4 rounded-xxl border-0 shadow-lg"
                                        aria-labelledby="dropdownMenu4">
                                        <div className="card-body p-0 d-flex mt-2 cursor-pointer">
                                            <i className="feather-lock text-grey-500 me-3 font-lg"></i>
                                            <h4 className="fw-600 text-grey-900 font-xssss mt-0 me-4">
                                                Unfollow
                                                <span className="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">Save to your saved items</span>
                                            </h4>
                                        </div>
                                        <div className="card-body p-0 d-flex mt-2 cursor-pointer">
                                            <i className="ti-eraser text-grey-500 me-3 font-lg"></i>
                                            <h4 className="fw-600 mb-0 text-grey-900 font-xssss mt-0 me-4">
                                                Unfriend
                                                <span className="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">Save to your saved items</span>
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6 pe-2 ps-2">
                            <div className="card d-block border-0 shadow-xss rounded-3 mb-3">
                                <div className="card-body d-block d-flex w-100">
                                    <img className="h75 w75 cursor-pointer"
                                         src="https://via.placeholder.com/50x50.png" alt="ava"/>
                                    <div className="ms-3">
                                        <h4 className="fw-700 font-xsss mt-3 cursor-pointer">Tam lỏ</h4>
                                        <p className="fw-500 font-xsssss text-grey-500 mt-0 mb-3">support@gmail.com</p>
                                    </div>
                                    <a href="#" className="ms-auto mt-auto mb-auto"
                                       id="dropdownMenu4" data-bs-toggle="dropdown"
                                       aria-haspopup="true" aria-expanded="true">
                                        <i className="ti-more-alt text-grey-900 btn-round-md bg-greylight font-xss"></i>
                                    </a>
                                    <div
                                        className="dropdown-menu dropdown-menu-start p-4 rounded-xxl border-0 shadow-lg"
                                        aria-labelledby="dropdownMenu4">
                                        <div className="card-body p-0 d-flex mt-2 cursor-pointer">
                                            <i className="feather-lock text-grey-500 me-3 font-lg"></i>
                                            <h4 className="fw-600 text-grey-900 font-xssss mt-0 me-4">
                                                Unfollow
                                                <span className="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">Save to your saved items</span>
                                            </h4>
                                        </div>
                                        <div className="card-body p-0 d-flex mt-2 cursor-pointer">
                                            <i className="ti-eraser text-grey-500 me-3 font-lg"></i>
                                            <h4 className="fw-600 mb-0 text-grey-900 font-xssss mt-0 me-4">
                                                Unfriend
                                                <span className="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">Save to your saved items</span>
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6 pe-2 ps-2">
                            <div className="card d-block border-0 shadow-xss rounded-3 mb-3">
                                <div className="card-body d-block d-flex w-100">
                                    <img className="h75 w75 cursor-pointer"
                                         src="https://via.placeholder.com/50x50.png" alt="ava"/>
                                    <div className="ms-3">
                                        <h4 className="fw-700 font-xsss mt-3 cursor-pointer">Tam lỏ</h4>
                                        <p className="fw-500 font-xsssss text-grey-500 mt-0 mb-3">support@gmail.com</p>
                                    </div>
                                    <a href="#" className="ms-auto mt-auto mb-auto"
                                       id="dropdownMenu4" data-bs-toggle="dropdown"
                                       aria-haspopup="true" aria-expanded="true">
                                        <i className="ti-more-alt text-grey-900 btn-round-md bg-greylight font-xss"></i>
                                    </a>
                                    <div
                                        className="dropdown-menu dropdown-menu-start p-4 rounded-xxl border-0 shadow-lg"
                                        aria-labelledby="dropdownMenu4">
                                        <div className="card-body p-0 d-flex mt-2 cursor-pointer">
                                            <i className="feather-lock text-grey-500 me-3 font-lg"></i>
                                            <h4 className="fw-600 text-grey-900 font-xssss mt-0 me-4">
                                                Unfollow
                                                <span className="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">Save to your saved items</span>
                                            </h4>
                                        </div>
                                        <div className="card-body p-0 d-flex mt-2 cursor-pointer">
                                            <i className="ti-eraser text-grey-500 me-3 font-lg"></i>
                                            <h4 className="fw-600 mb-0 text-grey-900 font-xssss mt-0 me-4">
                                                Unfriend
                                                <span className="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">Save to your saved items</span>
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6 pe-2 ps-2">
                            <div className="card d-block border-0 shadow-xss rounded-3 mb-3">
                                <div className="card-body d-block d-flex w-100">
                                    <img className="h75 w75 cursor-pointer"
                                         src="https://via.placeholder.com/50x50.png" alt="ava"/>
                                    <div className="ms-3">
                                        <h4 className="fw-700 font-xsss mt-3 cursor-pointer">Tam lỏ</h4>
                                        <p className="fw-500 font-xsssss text-grey-500 mt-0 mb-3">support@gmail.com</p>
                                    </div>
                                    <a href="#" className="ms-auto mt-auto mb-auto"
                                       id="dropdownMenu4" data-bs-toggle="dropdown"
                                       aria-haspopup="true" aria-expanded="true">
                                        <i className="ti-more-alt text-grey-900 btn-round-md bg-greylight font-xss"></i>
                                    </a>
                                    <div
                                        className="dropdown-menu dropdown-menu-start p-4 rounded-xxl border-0 shadow-lg"
                                        aria-labelledby="dropdownMenu4">
                                        <div className="card-body p-0 d-flex mt-2 cursor-pointer">
                                            <i className="feather-lock text-grey-500 me-3 font-lg"></i>
                                            <h4 className="fw-600 text-grey-900 font-xssss mt-0 me-4">
                                                Unfollow
                                                <span className="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">Save to your saved items</span>
                                            </h4>
                                        </div>
                                        <div className="card-body p-0 d-flex mt-2 cursor-pointer">
                                            <i className="ti-eraser text-grey-500 me-3 font-lg"></i>
                                            <h4 className="fw-600 mb-0 text-grey-900 font-xssss mt-0 me-4">
                                                Unfriend
                                                <span className="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">Save to your saved items</span>
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FriendTab;
