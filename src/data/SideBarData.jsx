import  friendsNav  from '../assets/img/sidebar/friends.png' 
import  groupsNav  from '../assets/img/sidebar/groups.png' 
import  marketNav  from '../assets/img/sidebar/marketplace.png' 
import  pagesNav from '../assets/img/sidebar/pages.png' 
import  storyNav  from '../assets/img/sidebar/story.png' 
import  newfeedNav  from '../assets/img/sidebar/newfeed.png' 
import  ppl  from '../assets/img/ppl.png'
import  mess from "../assets/img/messenger.png"
 
 const SidebarData = [
    {
        icon: ppl,
        path: '/profile',
        heading: 'Thành Nguyễn'
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
        path: '/messages',
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