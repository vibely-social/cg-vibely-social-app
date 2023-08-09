import React from "react";
import {Route, Routes} from "react-router-dom";
import publicRoutes from "../data/RoutesData";
import NotFound from "../pages/NotFound";
import Layouts from "../Layouts/index"


function AppRoutes() {
    return (
        <Routes>
            {publicRoutes.map((route, index) => {
                const Page = route.component;
                const Layout = route.layout;
                const Tab = route.tab;
                return <Route
                    key={index}
                    path={route.path}
                    element={
                        Layout === null ?
                            <Page/> : Tab === null ?
                                <Layouts><Page/></Layouts> :
                                <Layouts>
                                    <Page>
                                        <Tab/>
                                    </Page>
                                </Layouts>
                    }/>
            })}
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    )
}

export default AppRoutes