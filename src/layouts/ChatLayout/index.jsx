import Header from "../commons/Header/index.jsx";
import Sidebar from "../commons/Sidebar/index.jsx";
import {useSelector} from "react-redux";
import {selectSidebarPosition} from '../../store/slices/toggleSidebar'

// eslint-disable-next-line react/prop-types
function ChatLayout({children}) {
    const position = useSelector(selectSidebarPosition)

    return (
        <div className="main-wrapper">
            <Header/>
            <Sidebar collapse={true}/>
            <div className={'main-content ' + (position ? 'menu-active' : '')}>
                <div className="middle-sidebar-bottom">
                    {children}
                </div>
            </div>
        </div>
    );
}


export default ChatLayout;