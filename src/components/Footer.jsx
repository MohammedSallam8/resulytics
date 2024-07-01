import React from 'react';
import '../style/Footer.scss';
import Logo from '../../public/imgs/logo.png'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { FaEnvelope } from "react-icons/fa";
import { FaRegEnvelopeOpen } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='f-m-container'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-4 col-md-6 col-12'>
            <img src={Logo} alt="Logo" />
            <p>Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse.</p>
            <div className='social'>
            <span><FaFacebookF /></span>
            <span><FaTwitter /></span>
            <span><RiInstagramFill /></span>
            <span><FaLinkedinIn /></span>
            </div>
          </div>
          <div className='col-lg-2 col-md-6 col-12'>
          <h3>Explore</h3>
          <div className='links'>
            <a href='/'>Home</a>
            <a href='/AboutUS'>About</a>
            <a href='/CaseStudies'>Case Studies</a>
            <a href='/Blog'>Our Blog</a>
            <a href='/Contact'>Contact</a>
          </div>
          </div>
          <div className='col-lg-2 col-md-6 col-12'>
            <h3>Resources</h3>
            <div class="links">
              <a href="/">Our Scientists</a>
              <a href="/Service">Our Services</a>
              <a href="/studies">Testimonials</a>
              <a href="/Blog">SaaS Solutions</a>
              <a href="/studies">Case Studies</a>
            </div>
          </div>
          <div className='col-lg-4 col-md-6 col-12'>
            <h3>Address</h3>
            <div class="links">
              <p className='p-link'><FaLocationDot className='icons' /> 175 5th Ave, New York, NY 10010,<br/> <span>United States</span></p>
              <a className='a-link' href="/"><IoCall className='icons' /> +1 (123) 456 7890</a>
              <a className='a-link' href="/"><FaEnvelope className='icons' /> hello@rewy.com</a>
              <a className='a-link' href="/"><FaRegEnvelopeOpen className='icons' /> +55 785 4578964</a>
            </div>
          </div>
          <div class="inner-footer d-lg-block d-none">
            <p>Copyright @2021 <strong>Rewy</strong> All rights reserved <span>Envy Theme</span></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer