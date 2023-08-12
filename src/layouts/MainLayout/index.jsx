import Header from "../commons/Header/index.jsx";
import Sidebar from "../commons/Sidebar";
import RightChat from "../../components/RightChat/index.jsx";
import {useSelector} from "react-redux";
import { useEffect,useState } from "react";
import PreLoader from '../../components/Preloader'
import {selectSidebarPosition} from '../../store/slices/toggleSidebar'

// eslint-disable-next-line react/prop-types
function MainLayout({children}) {
    const position = useSelector(selectSidebarPosition)

    const [isLoading, setIsLoading] = useState(true);
    const [loader,setLoader] = useState(false)

    useEffect(() => {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
      setTimeout(() => {
        setLoader(true);
      }, 2000);
    }, []);



    return (<>
        {!loader && <PreLoader />}
        {!isLoading &&
        <div className="main-wrapper">
            <Header/>
            <Sidebar collapse={false}/>
            <div className={'main-content color-theme-green ' + (position ? 'menu-active' : '')}>
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