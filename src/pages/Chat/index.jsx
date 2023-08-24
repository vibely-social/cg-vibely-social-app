import ChatBox from "~/components/ChatBox/index.jsx";
import {selectSidebarPosition} from "~/features/toggleSidebar/index.js";
import {useSelector} from "react-redux";
import {useAuthorizeUser} from "~/hooks/authorizeUser.jsx";
import ChatSidebar from "~/layouts/commons/Sidebar/ChatSidebar/index.jsx";

function Chat() {
    const position = useSelector(selectSidebarPosition)
    useAuthorizeUser()

    return (
        <>
            <ChatSidebar/>
            <div className={'main-content ' + (position ? 'chat-menu-active' : 'chat-menu')}>
                <div className="middle-sidebar-bottom d-flex pt-0 mt-3">
                    <div className="middle-sidebar-left ms-0 ps-0 pe-0 me-0 d-flex justify-content-center"
                         style={{maxWidth: '100%'}}>
                        <div className="container ms-2 mb-0 pb-0 me-1" style={{maxWidth: '96%'}}>
                            <ChatBox/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Chat