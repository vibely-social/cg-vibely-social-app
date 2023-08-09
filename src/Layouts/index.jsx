import Header from "./Header";
import Sidebar from "./Sidebar";
import RightChat from "../components/RightChat";

function Layouts({ children}) {
    
    return ( 
      <div className="main-wrapper">
            <Header />
            <Sidebar />
            <div className="main-content ">
              <div className="middle-sidebar-bottom">
                <div className="middle-sidebar-left pe-0">
                   {children}
                </div>
              </div>
            </div>
            <RightChat />
      </div>  
     );
}


export default Layouts;