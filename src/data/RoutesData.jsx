import Home from "../pages/Home"
import Login from "../pages/Login"
import PersonalPage from "../pages/PersonalPage";
import IntroductionTab from "../components/IntroductionTab/index.jsx";
import FriendTab from "../components/FriendTab/index.jsx";
import MediaTab from "../components/MediaTab/index.jsx";
import PostTab from "../components/PostTab/index.jsx";


const publicRoutes = [
    {path: '/', component: Home, tab: null},
    {path: '/profile', component: PersonalPage, tab: PostTab},
    {path: '/profile/posts', component: PersonalPage, tab: PostTab},
    {path: '/profile/introduction', component: PersonalPage, tab: IntroductionTab},
    {path: '/profile/friend', component: PersonalPage, tab: FriendTab},
    {path: '/profile/media', component: PersonalPage, tab: MediaTab},
    {path: '/Login', component: Login, layout: null, tab: null},
]

export default publicRoutes