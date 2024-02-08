import React from 'react';
import './footer.css';
import gpt3Logo from '../../assets/logo.svg';

const Footer = () => (
    <div className='gpt3__footer section__pading'>
      <div className='gpt3__footer-heading'>
       <h1 className='gradient__text'>Do you want to step into the future before others?</h1>
      </div>
       
       <div className='gpt3__footer-btn'>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSfaWCoxzPc9SG9vtYrMtv1tY06YUVCHnuYdlos77_E_yTTUuw/viewform?usp=pp_url"target="_blank" rel="noopener noreferrer">
        <p>Request Early Access</p>
        </a>
        
       </div>

       <div className='gpt3__footer-links'>
         <div className='gpt3__footer-links_logo'> 
           <img src={gpt3Logo} alt='logo' />
           <p>Designed by Nesrine Kabachi, <br /> All Rights Reserved</p>
         </div>
        <div className='gpt3__footer-links_div'>
        <h4>Links</h4>
        <a href="https://www.instagram.com/nesrinedeveloper/" target="_blank" rel="noopener noreferrer">
        <p>Instagram</p>
        </a>
         <a href="https://www.facebook.com/Nesrinekabachi20" target="_blank" rel="noopener noreferrer">
         <p>Facebook</p>
         </a>
        <a href="https://www.tiktok.com/@nesrinedeveloper?_t=8g172DDxZwM&_r=1" target="_blank" rel="noopener noreferrer">
        <p>TikTok</p>
        </a>
        
        <a href="mailto:kabachinesrine34@gmail.com">
        <p>Contact</p>
        </a>
        
        </div>
        <div className="gpt3__footer-links_div">
        <h4>Company</h4>
        <p>Nesrine NeuroWeb Technologies</p>
        <p>Privacy Policy</p>
        <a href="mailto:kabachinesrine34@gmail.com">
        <p>Contact</p>
        </a>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Get in touch</h4>
        <p>Algiers / Algeria</p>
        <p>kabachinesrine34@gmail.com</p>
      </div>
    </div>

    <div className='gpt3__footer-copyright'>
      <p>@2024 Nesrine NeuroWeb Technologies. Nesrine Kabachi All rights reserved.</p>
    </div>
    </div>
  )

export default Footer;