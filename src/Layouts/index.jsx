import Header from "./Header";
import Sidebar from "./Sidebar";
import RightChat from "../components/RightChat";
import { useState,useEffect } from "react";
import PreLoader from "../components/Preloader";

function Layouts({ children}) {
  
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

    return ( <>
    {isLoading ? (<PreLoader />) : 
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
            <RightChat />
      </div>  }
      </>
     );
}


export default Layouts;