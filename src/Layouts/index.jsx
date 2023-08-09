import Header from "./Header";
import Sidebar from "./Sidebar";
import React from "react";

function Layouts({ children}) {
    
    return ( 
      <div className="main-wrapper">
            <Header />
            <Sidebar />
            <div className="main-content">
              <div className="middle-sidebar-bottom">
                <div className="middle-sidebar-left">
                   {children}
                </div>
              </div>
            </div>
      </div>  
     );
}


export default Layouts;