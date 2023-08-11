import Header from "../commons/Header/index.jsx";
import Sidebar from "../commons/Sidebar/index.jsx";
import RightChat from "../../components/RightChat/index.jsx";
import {useSelector} from "react-redux";
import { useEffect,useState } from "react";
import PreLoader from '../../components/Preloader'
import {selectSidebarPosition} from "../../features/toggleSidebar/sidebarSlice.js";

// eslint-disable-next-line react/prop-types
function MainLayout({children}) {
    const position = useSelector(selectSidebarPosition)

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }, []);

    return (<>
        {isLoading ? (<PreLoader />) :
        <div className="main-wrapper">
            <Header/>
            <Sidebar collapse={false}/>
            <div className={'main-content ' + (position ? 'menu-active' : '')}>
                <div className="middle-sidebar-bottom">
                    <div className="middle-sidebar-left">
                        {children}
                    </div>
                </div>
            </div>
            <RightChat/>
        </div>}
        </>
    );
}


export default MainLayout;