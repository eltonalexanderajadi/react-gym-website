import React from 'react';
import './Footer.css';
import Github from '../../assets/github.png';
import Instagram from '../../assets/instagram.png';
import Linkedin from '../../assets/linkedin.png';
import Logo from '../../assets/logo.png';
import {AiOutlineGithub} from 'react-icons/ai';
import {BsLinkedin} from 'react-icons/bs';
import {FiInstagram} from 'react-icons/fi';

const Footer = () => {
  return (
    <div className='Footer-container'>
        <hr />
        <div className='footer'>
            <div className='social-links'>
            <a href= 'https://github.com'> <AiOutlineGithub /> </a>
            <a href= 'https://linkedin.com'> <BsLinkedin /> </a>
            <a href= 'https://instagram.com'> <FiInstagram /> </a>
        </div>
        <div className='logo-f'>
            <img src={Logo} alt="" />
            </div>
        </div>
        <div className='blur footer-blur1'></div>
        <div className='blur footer-blur2'></div>
    </div>
  )
}

export default Footer