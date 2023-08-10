import "../../index.css"

function WorkAndStudy() {
    const tabs = ["Công việc", "Trường học"]
    return (
        <>
            {tabs.map((tab) => (
                <div key={tab} className="ps-5 mb-4">
                    <div>
                        <h4>{tab}</h4>
                    </div>
                    <div className="d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss mb-1 cursor-pointer">
                        <i className="feather-plus-circle text-dark text-grey-900 btn-round-sm font-lg"></i>
                        <h4 className="fw-700 text-grey-500 font-xssss mt-2 hover-underline">
                            Thêm thông tin
                        </h4>
                    </div>
                </div>
            ))}

        </>
    )
}

export default WorkAndStudy;