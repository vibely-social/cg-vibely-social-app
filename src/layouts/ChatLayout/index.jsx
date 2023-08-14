import Header from "../commons/Header/index.jsx";
import {useSelector} from "react-redux";
import ChatSidebar from "../commons/Sidebar/ChatSidebar/index.jsx";
import {selectSidebarPosition} from '../../store/slices/toggleSidebar'

// eslint-disable-next-line react/prop-types
function ChatLayout({children}) {
    const position = useSelector(selectSidebarPosition)

    return (
        <div className="main-wrapper color-theme-green">
            <Header/>
            <ChatSidebar collapse={false}/>
            <div className={'main-content ' + (position ? 'chat-menu-active' : 'chat-menu')}
                 // style={{paddingLeft: position?'180px':'360px'}}
            >
                    {children}
            </div>
        </div>
    );
}


export default ChatLayout;