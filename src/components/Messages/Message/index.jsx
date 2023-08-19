// eslint-disable-next-line react/prop-types
import {getStoredUserData} from "~/service/accountService.js";
import {useSelector} from "react-redux";
import {selectConversation} from "~/features/switchConversation/index.js";

function Message({message}){
    const {senderName, time, content, check, income} = message;
    const contactUser = useSelector(selectConversation)
    const user = getStoredUserData()
    return (
        <>
            <div className={"message-item " + (!income && "outgoing-message")}>
                <div className="message-user">
                    <figure className="avatar">
                        <img src={income? contactUser.avatarUrl : user.avatar} alt="image"/>
                    </figure>
                    <div>
                        <h5>{senderName}</h5>
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