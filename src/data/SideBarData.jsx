import friendsNav from '../assets/img/sidebar/friends.png'
import groupsNav from '../assets/img/sidebar/groups.png'
import marketNav from '../assets/img/sidebar/marketplace.png'
import pagesNav from '../assets/img/sidebar/pages.png'
import storyNav from '../assets/img/sidebar/story.png'
import newfeedNav from '../assets/img/sidebar/newfeed.png'
import ppl from '../assets/img/ppl.png'
import mess from "../assets/img/messenger.png"
import {getStoredUserData} from "~/service/accountService.js";

let fullName = 'Anonymous'

let user = getStoredUserData()
if (user && user.firstName) {
    fullName = user.firstName + ' ' + user.lastName
}else if (user){
    fullName = user.email
    user.avatar = 'https://media.discordapp.net/attachments/1006048991043145829/1006049027734913075/unknown.png?width=662&height=662'
    console.log(fullName)
}

const SidebarData = [
    {
        icon: user?user.avatar : ppl,
        path: '/profile',
        heading: fullName
    },
    {
        icon: friendsNav,
        path: '/friends',
        heading: 'Friends'
    },
    {
        icon: groupsNav,
        path: '/groups',
        heading: 'Groups'
    },
    {
        icon: newfeedNav,
        path: '/',
        heading: 'Feeds'
    },
    {
        icon: mess,
        path: '/messenger',
        heading: 'Messenger'
    },
    {
        icon: storyNav,
        path: '/stories',
        heading: 'Stories'
    },
    {
        icon: pagesNav,
        path: '/pages',
        heading: 'Pages'
    },
    {
        icon: marketNav,
        path: '/marketplace',
        heading: 'Marketplace'
    }
];

export default SidebarData