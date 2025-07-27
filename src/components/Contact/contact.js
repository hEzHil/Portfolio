import React, { useRef } from 'react';
import './contact.css';
import Facebook from '../../assets/facebook.png';
import Instagram from '../../assets/instagram.png';
import Linkedin from '../../assets/linkedin.png';
import X from '../../assets/twitter.png';
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_7j5hswt', 'template_jnwm0h6', form.current, 'eI-17BA5kOJktFATC')
            .then((result) => {
                console.log(result.text);
                e.target.reset();
                toast.success('Email sent successfully!');
            }, (error) => {
                console.log(error.text);
                toast.error('Failed to send email!');
            });
    };

    return (
        <section id='contactPage'>
            <div id="contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className="contactDesc">Please fill out the below form to discuss any work opportunities.</span>
                <form className="contactForm" ref={form} onSubmit={sendEmail}>
                    <input type="text" className="name" placeholder="Your Name" name='your_name' required />
                    <input type="email" className="mail" placeholder="Your Mail" name='your_email' required />
                    <textarea className="msg" name="message" rows="5" placeholder="Your message" required />
                    <button type="submit" className="submitBtn">Submit</button>
                    <div className="links">
                        <img src={Facebook} alt="faceBookIcon" className="link" />
                        <img src={Instagram} alt="instagramIcon" className="link" />
                        <img src={Linkedin} alt="linkedInIcon" className="link" />
                        <img src={X} alt="twitterIcon" className="link" />
                    </div>
                </form>
                <ToastContainer position="top-center" autoClose={3000} />
            </div>
        </section>
    );
};

export default Contact;
