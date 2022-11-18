import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home';
import TagIcon from '@mui/icons-material/Tag';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import PersonIcon from '@mui/icons-material/Person';
import SidebarButton from '../SidebarButton/SidebarButton';
import './index.css'


function Sidebar() {
  return (
    <div className="sideBar">
      <SidebarButton  Icon={HomeIcon} text="Home" />
      <SidebarButton  Icon={TagIcon} text="Explore" />
      <SidebarButton  Icon={NotificationsIcon} text="Notifications" />
      <SidebarButton  Icon={ChatBubbleIcon} text="Messages" />
      <SidebarButton  Icon={BookmarkIcon} text="Saved" />
      <SidebarButton  Icon={PersonIcon} text="Profile" />

    </div>
  );
}

export default Sidebar