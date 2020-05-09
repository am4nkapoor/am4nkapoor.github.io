import React from 'react'

import './SideDrawer.css'

const sideDrawer = props => {
  let drawerClasses = 'side-drawer';
  if(props.show){
    drawerClasses = 'side-drawer open';
  }
  return (
    <div className="menu__Sidebar">
      <nav className={drawerClasses}>
        <ul>
          {/* <li>
            <a href="/">Products</a>
          </li>
          <li>
            <a href="/">Users</a>
          </li> */}
          <li class="menu_NavListItem">
            <a href="#about" class="menu_NavLink">About</a>
          </li>
          <li class="menu_NavListItem">
            <a href="#jobs" class="menu_NavLink">Experience</a>
          </li>
          <li class="menu_NavListItem">
            <a href="#projects" class="menu_NavLink">Work</a>
          </li>
          <li class="menu_NavListItem">
            <a href="#contact" class="menu_NavLink">Contact</a>
          </li>
        </ul>
        <a href="/static/Aman_Resume(Front-End).pdf" target="_blank" rel="nofollow noopener noreferrer" class="menu__ResumeLink">Resume</a>
      </nav>
    </div>
  )
}

export default sideDrawer