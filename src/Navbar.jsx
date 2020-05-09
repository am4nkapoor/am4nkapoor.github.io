import React from 'react';
import Toolbar from './components/Toolbar/Toolbar';
import Backdrop from './components/Backdrop/Backdrop';
import SideDrawer from './components/SideDrawer/SideDrawer';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Work from './components/Work/Work';
import Contact from './components/Contact/Contact';
import Social from './components/Social/Social';

export default class Navbar extends React.Component{

  state = {
    sideDrawerOpen: false
  }

  drawToggleClickHandler = () =>{
    this.setState((prevState) => {
      return {sideDrawerOpen : !prevState.sideDrawerOpen}
    });
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen:false})
  }

    render() {

      let backdrop;

      if(this.state.sideDrawerOpen){
        backdrop = <Backdrop click={this.backdropClickHandler}/>
      }
      
      return (
        <div class="container">
              <Toolbar drawerClickHandler={this.drawToggleClickHandler}/>
              <SideDrawer show={this.state.sideDrawerOpen}/>
              {backdrop}


              <Social/>
              <div class="email-counter">
                <div>
                  <div class="email-wrapper">
                  <a href="mailto:amankapoor2810@gmail.com" class="email-side">amankapoor2810@gmail.com</a>
                  </div>
                </div>
              </div>

              <main class="main-content">
                <section class="Section_Container">
                  <div>
                    <h1 class="head">Hi! I'm</h1>
                    <h2 class="name">Aman Kapoor.</h2>
                    <h3 class="subtitle">I create products for the web.</h3>
                    <div class="fadeup-enter-done" style={{transitionDelay: '500ms'}}><a href="mailto:amankapoor2810@gmail.com" class="email-link">Get In Touch</a></div>
                  </div>
                </section>

                <About/>
                <Experience/>
                <Work/>
                <Contact />
                
              

              

              </main>
            </div>
        );
    }
}