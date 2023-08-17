// eslint-disable-next-line react/prop-types
function Message({message}){
    // eslint-disable-next-line react/prop-types
    const {name, time, content, check, income} = message;
    // console.log(time)
    return (
        <>
            <div className={"message-item " + (!income && "outgoing-message")}>
                <div className="message-user">
                    <figure className="avatar">
                        <img src="https://via.placeholder.com/50x50.png" alt="image"/>
                    </figure>
                    <div>
                        <h5>{name}</h5>
                        <div className="time">
                            {/* eslint-disable-next-line react/prop-types */}
                            {time.substring(11,16)}
                            {check && <i className="ti-double-check text-info"></i>}
                        </div>
                    </div>
                </div>
                <div className="message-wrap">{content}</div>
            </div>
            <>
                {/*<div className="message-item outgoing-message">*/}
                {/*    <div className="message-user">*/}
                {/*        <figure className="avatar">*/}
                {/*            <img src="https://via.placeholder.com/50x50.png" alt="image"/>*/}
                {/*        </figure>*/}
                {/*        <div>*/}
                {/*            <h5>Byrom Guittet</h5>*/}
                {/*            <div className="time">*/}
                {/*                01:35 PM*/}
                {/*                <i className="ti-double-check text-info"></i>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*    <div className="message-wrap">*/}
                {/*        Ai am phai then kìu èn dú?*/}
                {/*    </div>*/}
                {/*</div>*/}
            </>
        </>
    )
}
export default Message