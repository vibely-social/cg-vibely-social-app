import Header from "../commons/Header/index.jsx";
import {useSelector,useDispatch} from "react-redux";
import ChatSidebar from "../commons/Sidebar/ChatSidebar/index.jsx";
import {selectSidebarPosition} from '../../store/slices/toggleSidebar'
import PreLoader from "../../components/Preloader";

// eslint-disable-next-line react/prop-types
function ChatLayout({children}) {
    const position = useSelector(selectSidebarPosition)
    const firstLoad = useSelector((state) => state.firstLoad.isOn);
    const dispatch = useDispatch()

    if(firstLoad === false ){
        setTimeout(() => {
          dispatch(turnOffLoader())
        }, 1500);
    }



    return (<>
        <PreLoader />
        <div className="main-wrapper color-theme-green">
            <Header/>
            <ChatSidebar collapse={false}/>
            <div className={'main-content ' + (position ? 'chat-menu-active' : 'chat-menu')}
                 // style={{paddingLeft: position?'180px':'360px'}}
            >
                    {children}
            </div>
        </div>
        </>
    );
}


export default ChatLayout;