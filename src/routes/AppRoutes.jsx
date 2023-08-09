import React from "react";
import { BrowserRouter,Route, Routes, useLocation } from "react-router-dom";
import publicRoutes from "../data/RoutesData";
import NotFound from "../pages/NotFound";
import Layouts from "../Layouts/index"


function AppRoutes(){
    return (
            <Routes>
                {publicRoutes.map((route,index) => {
                    const Page = route.component;
                    const Layout = route.layout
                    return <Route 
                        key={index}
                        path={route.path}
                        element={
                            Layout === null ? <Page/> : <Layouts><Page/></Layouts>
                    }/>
                })}
                <Route path="*" element= {<NotFound />}/>
                
            </Routes>
    )
}
export default AppRoutes