import {selectConversation} from "~/features/switchConversation/index.js";
import {useSelector} from "react-redux";
import {memo} from "react";
import Message from "./Message";

function Messages ({messages=[]}){
    const contactUser = useSelector(selectConversation)
    return(
        <>
            {
                messages.map((message, index) => {
                    if (message.sender === contactUser.email || message.receiver === contactUser.email){
                        if (message.sender === contactUser.email) {
                            message.income = true
                        }
                        return <Message key={index} message={message}/>
                    }
                })
            }
        </>
    )
}
export default memo(Messages)