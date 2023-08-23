import {selectConversation} from "~/features/switchConversation/index.js";
import {useSelector} from "react-redux";
import {memo} from "react";
import Message from "./Message";

function Messages ({messages=[]}){
    const contactUser = useSelector(selectConversation)
    console.log('messages')
    console.log(messages)
    return(
        <>
            {
                messages.map((message, index) => {
                    let displayMessage = {...message}
                    if (displayMessage.sender === contactUser.email || displayMessage.receiver === contactUser.email){
                        if (displayMessage.sender === contactUser.email) {
                            displayMessage.income = true
                        }
                        return <Message key={index} message={displayMessage}/>
                    }
                })
            }
        </>
    )
}
export default memo(Messages)