import React from 'react';
import './App.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';

export default function Footer() {
    return (

<div className='footer-container'>
<footer className=" d-flex justify-content-center">
      <ul  className="list-unstyled d-flex gap-4" style={{color:'#575757' }}>
        <a href='gmail.com'>
        <li><FontAwesomeIcon icon={faEnvelope} /> Email</li>
        </a>
        <a href='linkedin.com'>
        <li><FontAwesomeIcon icon={faLinkedinIn} /> Linkedin</li>
        </a>
        <a href='twitter.com'>
        <li><FontAwesomeIcon icon={faXTwitter} /> Twitter</li>
        </a>
        <a href='instagram.com'>
        <li><FontAwesomeIcon icon={faInstagram} /> Instagram</li>
        </a>
       
      </ul>
    </footer>
    </div>
    )};