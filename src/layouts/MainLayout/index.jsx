import Header from "../commons/Header/index.jsx";
import MainSidebar from "../commons/Sidebar/MainSidebar/index.jsx";
import RightChat from "../../components/RightChat/index.jsx";
import {useSelector,useDispatch} from "react-redux";
import { useEffect,useState } from "react";
import PreLoader from '../../components/Preloader'
import {selectSidebarPosition} from '../../features/slices/toggleSidebar'

// eslint-disable-next-line react/prop-types
function MainLayout({children,path}) {
    const position = useSelector(selectSidebarPosition)
    const [isLoading,setIsLoading] = useState(useSelector((state) => state.firstLoad.isOn));

    if(!isLoading){
      setTimeout(() => {
        setIsLoading(true);
      }, 800);
    }

    return (<>
        <PreLoader />
        {isLoading &&
        <div className="main-wrapper color-theme-green">
            <Header/>
            <MainSidebar collapse={false}/>
            <div className={'main-content ' + (position ? 'menu-active' : '')} >
                <div className="middle-sidebar-bottom"  >
                      <div className="middle-sidebar-left"   id={( path === "/friends")? "middle" : ""} >
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