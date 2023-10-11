import React, { useState } from 'react';
import './navBar.css';
import logo from'../../assets/p2Logo.avif';
import {Link} from 'react-scroll';
import contactImg from '../../assets/icons8-contacts-100.png';
import Menu from '../../assets/menu.png';
 

const NavBar = () => {
    const [showMenu, setShowMenu ]= useState(false);
    return (
        <nav className="navBar">
            <img src={logo} alt="logo" className="logo" />
            <div className="desktopMenu">
            <Link activeClass="active" to='intro'spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuList">Home</Link>
            <Link activeClass="active" to='skills'spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuList">About</Link>
            {/* <Link activeClass="active" to='intro'spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuList">Portfolio</Link>
            <Link activeClass="active" to='intro'spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuList">Clients</Link> */}
            </div>
            <button className="desktopMenuButton" onClick={()=>{
                    document.getElementById("contact").scrollIntoView({behavior:'smooth'});
                }}>
                <img src={contactImg}  alt="" className="desktopMenuIcon"/>Contact Me
            </button>


            <img src={Menu} alt="Menu" className="mobMenu"  onClick={()=>setShowMenu(!showMenu)}/>
            <div className="navMenu" style={{display: showMenu ?"flex":"none"}}>
            <Link activeClass="active" to='intro' spy={true} smooth={true} offset={-100} duration={500} className="list" onClick={()=>setShowMenu(false)}>Home</Link>
            <Link activeClass="active" to='skills' spy={true} smooth={true} offset={-100} duration={500} className="list"  onClick={()=>setShowMenu(false)}>About</Link>
            <Link activeClass="active" to='contact' spy={true} smooth={true} offset={-100} duration={500} className="list"  onClick={()=>setShowMenu(false)}>Contact</Link>
            </div>
        </nav>
    )
}
export default NavBar