import "../../index.css"

function Contact() {
    const tabs = ["Số điện thoại", "Địa chỉ", "Email"]


    return (
        <>
            {tabs.map((tab) => (
                <div key={tab} className="ps-5 mb-4">
                    <div>
                        <h4>{tab}</h4>
                    </div>
                    <div
                        className="d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss mb-1 cursor-pointer">

                        <a className="feather-plus-circle text-dark text-grey-900 btn-round-sm font-lg"></a>
                        <h4 className="fw-700 text-grey-500 font-xssss mt-2 hover-underline">
                            Thêm thông tin
                        </h4>
                    </div>
                </div>
            ))}
        </>
    )
}

export default Contact;