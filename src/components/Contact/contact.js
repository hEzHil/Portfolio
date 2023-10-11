import React, { useRef } from 'react';
import './contact.css'
import Facebook from '../../assets/facebook.png';
import Instagram from '../../assets/instagram.png';
import Linkedin from '../../assets/linkedin.png';
import X from '../../assets/twitter.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_socgx2f', 'template_jnwm0h6', form.current, 'eI-17BA5kOJktFATC')
            .then((result) => {
                 console.log(result.text);
                 e.target.reset();
                 alert('Email semt !');
            }, (error) => {
                 console.log(error.text);
            });
      };
    return (
        <section id='contactPage'>
        <div id="contact">
            <h1 className="contactPageTitle"> Contact Me </h1>
            <span className="contactDesc">Please fill out the below form  to discuss any work opportunities.</span>
            <form className="contactForm" ref={form}  onSubmit={sendEmail}>
                <input type="text" className="name" placeholder="Your Name" name='your_name'/>
                <input type="mail" className="mail" placeholder="Your Mail" name='your_email'/>
                <textarea className="msg" name="message" rows="5" placeholder=" Your message"/>
                <button type="submit" value="send" className="submitBtn">Submit</button>
                <div className="links">
                    <img src={Facebook} alt ="faceBookIcon" className="link"/>
                    <img src={Instagram} alt ="instagramIcon" className="link"/>
                    <img src={Linkedin} alt ="linkedInIcon" className="link"/>
                    <img src={X} alt ="twitterIcon" className="link"/>

                </div>
            </form>
        </div>
        </section>
    )
} 
export default Contact;