import React from 'react'
import './index.css'

function SideBarProfile() {
  return (
    <div className="sidebarProfile">
      <div className="imgContainer">
        <img className='sidebarUserImg' src="https://avatars.githubusercontent.com/u/91472105?s=400&u=7fde5618ff45703c2fee70a728c443c97379dd9f&v=4"></img>
      </div>
      <div className='sidebarUserInfo'>
        <p className='sidebarUsername'>UserName</p>
        <p className='sidebarUserAddress'>@userAdress</p>
      </div>
    </div>
  );
}

export default SideBarProfile