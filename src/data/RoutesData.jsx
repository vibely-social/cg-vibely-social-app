import Home from "../pages/Home"
import Login from "../pages/login"
import Register from "../pages/register/index.jsx";


const publicRoutes = [
    {path: '/', component: Home},
    {path: '/login', component: Login, layout: null},
    {path: '/register', component: Register, layout: null}

]

export default publicRoutes