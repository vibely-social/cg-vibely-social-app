import Header from "../commons/Header/index.jsx";
import MainSidebar from "../commons/MainSidebar/index.jsx";
import RightChat from "../../components/RightChat/index.jsx";
import {useSelector} from "react-redux";
import {selectSidebarPosition} from "../../features/toggleSidebar/sidebarSlice.js";

// eslint-disable-next-line react/prop-types
function MainLayout({children}) {
    const position = useSelector(selectSidebarPosition)

    return (
        <div className="main-wrapper color-theme-green">
            <Header/>
            <MainSidebar collapse={false}/>
            <div className={'main-content ' + (position ? 'menu-active' : '')}>
                <div className="middle-sidebar-bottom">
                    <div className="middle-sidebar-left">
                        {children}
                    </div>
                </div>
            </div>
            <RightChat/>
        </div>
    );
}


export default MainLayout;