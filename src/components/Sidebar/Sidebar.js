import React from 'react'
import './Sidebar.css';
import TwitterIcon from '@mui/icons-material/Twitter';
import SidebarOptions from "./SidebarOptions"
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import {Button} from "@material-ui/core"
import profile from "./profile.jpg";
function Sidebar() {
  return (
    <div className='Sidebar'>
    <div className='twitter_icon'>
     <TwitterIcon />
    </div>

     <SidebarOptions active Icons={HomeIcon} text="Home" />
<SidebarOptions Icons={SearchIcon} text="Explore" />
      <SidebarOptions Icons={NotificationsNoneIcon} text="Notifications" />
      <SidebarOptions Icons={MailOutlineIcon} text="Messages" />
      <SidebarOptions Icons={BookmarkBorderIcon} text="Bookmarks" />
      <SidebarOptions Icons={ListAltIcon} text="Lists" />
      <SidebarOptions Icons={PermIdentityIcon} text="Profile" />
      <SidebarOptions Icons={MoreHorizIcon} text="More" />


      <Button variant="outlined" className="sidebar__tweet" >
        Tweet
      </Button>

      <div className='account'>
        <img src = {profile} alt =""/>
        <h3>Ayush Singla</h3>
      </div>
      
    </div>
  )
}

export default Sidebar