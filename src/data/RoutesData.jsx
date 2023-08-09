 import Login from "../pages/Login"
 import Feeds from "../pages/Feeds"
 

 const PublicRoutes = [
    { path: '/' , component: Feeds},
    { path: '/login' , component: Login, layout: null},
]

export default PublicRoutes