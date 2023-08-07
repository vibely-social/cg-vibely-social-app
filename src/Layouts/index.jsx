import Header from "./Header";
import Sidebar from "./Sidebar";

function Layouts({ children}) {
    
    return ( 
      <div className="main-wrapper">
            <Header />
            <Sidebar />
            <div className="main-content">
              <div className="middle-sidebar-bottom">
                <div className="middle-sidebar-left pe-0">
                   {children}
                </div>
              </div>
            </div>
      </div>  
     );
}


export default Layouts;