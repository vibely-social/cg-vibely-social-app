import MainLayout from "../layouts/MainLayout";
import ChatLayout from "../layouts/ChatLayout/index.jsx";
import Feeds from "../pages/Feeds"
import Login from "../pages/Login"
import Register from "../pages/Register";
import PersonalPage from "../pages/PersonalPage";
import Chat from "~/pages/Chat/index.jsx";
import Friends from "~/pages/Friends";

export const publicRoutes = [
    {path: '/', component: Feeds, layout: MainLayout},
    {path: '/profile', component: PersonalPage, layout: MainLayout},
    {path: '/login', component: Login, layout: null},
    {path: '/register', component: Register, layout: null},
    {path: '/friends', component: Friends, layout: MainLayout},
    {path: '/messenger', component: Chat, layout: ChatLayout}
]

export default publicRoutes;