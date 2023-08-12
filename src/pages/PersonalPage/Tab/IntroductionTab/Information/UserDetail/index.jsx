import "../../index.css"

function UserDetail() {
    const tabs = ["Full name", "Gender", "Birthday"]


    return (
        <>
            {tabs.map((tab) => (

                <div key={tab} className="ps-5 mb-4">
                    <div>
                        <h4 className="fw-500">{tab}</h4>
                    </div>
                    <div
                        className="d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss mb-1 cursor-pointer">
                        <div className="mt-1 d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss mb-1">
                            <h4 >- abcxyz</h4>
                        </div>
                    </div>
                </div>
            ))}

        </>
    )
}

export default UserDetail;