import Header from "../commons/Header/index.jsx";
import {useSelector} from "react-redux";
import {selectSidebarPosition} from "../../features/toggleSidebar/sidebarSlice.js";
import ChatSidebar from "../commons/ChatSidebar/index.jsx";

// eslint-disable-next-line react/prop-types
function ChatLayout({children}) {
    const position = useSelector(selectSidebarPosition)

    return (
        <div className="main-wrapper color-theme-green">
            <Header/>
            <ChatSidebar collapse={false}/>
            <div className={'main-content ' + (position ? 'menu-active' : '')}
                 style={{paddingLeft: position?'180px':'360px'}}
            >
                    {children}
            </div>
        </div>
    );
}


export default ChatLayout;