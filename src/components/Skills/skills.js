import React from 'react';
import './skills.css';
import Java from '../../assets/java.png';
import AppDesign from '../../assets/app-development.png';
import UI from '../../assets/ux-design.png';
import WebDesign from'../../assets/web-design.png';


const Skills =() =>{
    return (
    <section id="skills">
         <span className="skillTitile">What I do</span>
         <span className="skillDesc">I am skilled and passionate web designer with experience in creating visually appealing and user friendly website.  I have strong understanding of design and keen eye for details. I am proficient in HTML, CSS, JavaScript, and JAVA.</span>
         <div className="skillBars">
            <div className="skillBar">
                <img src={UI} alt="uiDesign" className="skillBarImg"/>
                <div className="skillBarText">
                    <h2>UI/UX Design</h2>
                    <p>I am well experienced in UI/UX design</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={WebDesign} alt="webDesign" className="skillBarImg"/>
                <div className="skillBarText">
                    <h2>Web Design</h2>
                    <p>I am well experienced in Web design</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={AppDesign} alt="appDesign" className="skillBarImg"/>
                <div className="skillBarText">
                    <h2>App Design</h2>
                    <p>I am well experienced in app design</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={Java} alt="Java" className="skillBarImg"/>
                <div className="skillBarText">
                    <h2>JAVA</h2>
                    <p>Well experienced in backend coding</p>
                </div>
            </div>
         </div>
    </section>
    );
}
export default Skills;