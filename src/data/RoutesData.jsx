import Login from "../pages/Login"
import PersonalPage from "../pages/PersonalPage";
import Feeds from "../pages/Feeds"

const publicRoutes = [
    {path: '/profile', component: PersonalPage,},
    {path: '/Login', component: Login, layout: null},
    {path: '/', component: Feeds},
]

export default publicRoutes;