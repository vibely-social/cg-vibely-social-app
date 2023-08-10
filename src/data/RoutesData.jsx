import Feeds from "../pages/Feeds"
import Login from "../pages/Login"
import Register from "../pages/Register";
import PersonalPage from "../pages/PersonalPage";


const publicRoutes = [
    {path: '/', component: Feeds},
    {path: '/profile', component: PersonalPage,},
    {path: '/login', component: Login, layout: null},
    {path: '/register', component: Register, layout: null}
]

export default publicRoutes;