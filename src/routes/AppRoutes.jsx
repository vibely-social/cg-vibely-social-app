import {Route, Routes} from "react-router-dom";
import publicRoutes from "~/data/RoutesData";
import NotFound from "~/pages/NotFound";
import Login from "~/pages/Login"
import Register from "~/pages/Register/index.jsx";


function AppRoutes() {
    return (
        <>
            <Routes>
                {
                    publicRoutes.map((route, index) => {
                        const Page = route.component;
                        const Layout = route.layout;
                        return <Route
                            key={index}
                            path={route.path}
                            element={
                                Layout === null
                                    ? <Page/>
                                    : <Layout path={route.path}><Page/></Layout>
                            }/>

                    })
                }
                <Route path="*" element={<NotFound/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
            </Routes>
        </>
    )
}

export default AppRoutes