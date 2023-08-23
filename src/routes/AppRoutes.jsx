import {Route, Routes} from "react-router-dom";
import publicRoutes from "../data/RoutesData";
import NotFound from "../pages/NotFound";


function AppRoutes() {
    return (
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
            <Route path="*" element={<NotFound />}/>
        </Routes>
    )
}

export default AppRoutes