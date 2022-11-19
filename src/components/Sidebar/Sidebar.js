import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home';
import TagIcon from '@mui/icons-material/Tag';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import PersonIcon from '@mui/icons-material/Person';
import SidebarButton from '../SidebarButton/SidebarButton';
import SideBarProfile from '../SideBarProfile/SideBarProfile';
import { Button } from "@material-ui/core";
import './index.css'



function Sidebar() {
  return (
    <div className="sideBar">
      <div className='sidebarButtons'>
      <div className="sideBarTeradon">teradon.</div>

      <SidebarButton active Icon={HomeIcon} text="Home" />
      <SidebarButton  Icon={TagIcon} text="Explore" />
      <SidebarButton  Icon={NotificationsIcon} text="Notifications" />
      <SidebarButton  Icon={ChatBubbleIcon} text="Messages" />
      <SidebarButton  Icon={BookmarkIcon} text="Saved" />
      <SidebarButton  Icon={PersonIcon} text="Profile" />

      <Button  className="sideBarPost" fullWidth>Post</Button>
      </div>
      <SideBarProfile className="sidebarProfile" />
    </div>
  );
}

export default Sidebar