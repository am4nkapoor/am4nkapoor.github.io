import React from 'react';
import './About.css'


const about = props => (
    <section id="about" className="AboutContainer" data-sr-id="0">
    <h3 className="Heading-about">About Me</h3>
    <div className="about_FlexContainer">
        <div className="about_ContentContainer">
          <div>
              <p>I'm a software engineer, backed by an ideology to build highly performant and scalable products. Quickly fathoming a problem and progressively finding its solution have been the building blocks of my professional career.</p>
              <p>Currently, playing with code at <strong><a href="https://collegedunia.com/" target="_blank" rel="nofollow noopener noreferrer">Collegedunia</a></strong> <em>("Coll-age-dunia")</em> on PWA applications for different customer facing verticals, making it light weight and accessible.</p>
              <p>Here are few things I'm proficient in:</p>
          </div>
          <ul className="about_SkillsContainer">
              <li className="about_Skill">React</li>
              <li className="about_Skill">GraphQL</li>
              <li className="about_Skill">JavaScript</li>
              <li className="about_Skill">Angular</li>
              <li className="about_Skill">Vue</li>
              <li className="about_Skill">Node</li>
          </ul>
        </div>
        <div className="about_PicContainer">
          <div className="about_AvatarContainer">
            <div className="about_Avatar">
              <div className="about_custom"></div>
              <picture>
                <img src="/images/hero.jpg" alt="" />
              </picture>
            </div>
          </div>
        </div>
    </div>
  </section>
)

export default about;


