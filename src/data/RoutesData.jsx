 import Home from "../Pages/Home"
 import Login from "../Pages/Login"
 
 
 const publicRoutes = [
    { path: '/' , component: Home},
    { path: '/login' , component: Login, layout: null},
    
]

export default publicRoutes