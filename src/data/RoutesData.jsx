 import Feeds from "../pages/Feeds"
 import Login from "../pages/Login"
 

 const PublicRoutes = [
    { path: '/' , component: Feeds},
    { path: '/login' , component: Login, layout: null},
]

export default PublicRoutes