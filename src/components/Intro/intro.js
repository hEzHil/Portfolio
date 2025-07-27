import React from 'react';
import './intro.css';
import profile from '../../assets/IMG_4830-fotor-bg-remover-20231007115021.png';
import {Link} from 'react-scroll';
import hireLogo from '../../assets/suitcase.png';


const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="Hello">Hello,</span>
                <span className="introText">I'm <span className="introName">Ezhil</span><br/>Web Designer</span>
                <p className="introPara">I am Skilled Web Designer with experience in creating<br/> visual appealing and user friendly website. </p>
                <Link><button className="button"><img src={hireLogo} alt="" className="hireLogo"/>Hire Me</button></Link>
                <div>
            <img src={profile} alt="profile" className="bg"></img>
            </div>
            </div> 
        </section>
    )
}
export default Intro;