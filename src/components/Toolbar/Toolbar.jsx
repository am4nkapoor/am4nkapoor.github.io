import React from 'react'

import DrawerToggleButton from '../SideDrawer/DrawerToggleButton'
import './Toolbar.css'

const toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
      <div className="toolbar__toggle-button">
          <DrawerToggleButton  click ={props.drawerClickHandler} />
      </div>
      <div className="spacer" />
      <div className="toolbar_navigation-items">
        <ul>
          <li class="header_NavListItem">
            <a href="#about" class="header_NavLink">About</a>
          </li>
          <li class="header_NavListItem">
            <a href="#jobs" class="header_NavLink">Experience</a>
          </li>
          <li class="header_NavListItem">
            <a href="#projects" class="header_NavLink">Work</a>
          </li>
          <li class="header_NavListItem">
            <a href="#contact" class="header_NavLink">Contact</a>
          </li>
          <div>
            <div class="fadedown-enter-done"><a href="/static/Aman_Resume(Front-End).pdf" target="_blank" rel="nofollow noopener noreferrer" class="header_ResumeLink">Resume</a></div>
          </div>
        </ul>
      </div>
    </nav>
  </header>
)

export default toolbar;