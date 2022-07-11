import React from 'react'
import './SidebarOptions.css';
function SidebarOptions({active , text , Icons}) {
  return (
    <div className = {`SidebarOptons ${active && 'SidebarOptions--active'}`}>
      <Icons/>
<h2>{text}</h2>
    </div>
  )
}

export default SidebarOptions