import React from 'react';
import './Style/Home.scss'
;import{ FaArrowRight } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import MainBusiness from './MainBusiness';
import MainItems from './MainItems';
import MainService from './MainService';
import MainIndustries from './MainIndustries';
import MainOurTeam from './MainOurTeam';
import MainCarousel from './MainCarousel';
import MainValuable from './MainValuable';
import CoverService from './CoverService';
import Contact from './Contact';

const Home = () => {
  return (
    <>
    <div className='cover-home'>
      <div className='container-fluid'>
        <div className='row'>
          <div className="col-lg-6 col-12 item-text">
            <div className="text-details">
              <h1>Managed Analytics and Data Analysis Platform</h1>
              <p>We have created a cloud based tool to do your all boring tasks related to data analysis and decision making based on the nature of data!</p>
            </div>
            <div className="button">
              <button className="link-btn"><FaArrowRight className='h-icon'/>About US</button>
              <button className="link-btn link-btn-1"><FaCheck className='h-icon'/>Get Started</button>
            </div>
          </div>

          <div className="col-lg-6 col-12 img-cover">
            <img src="/public/imgs/banner-four-main.png"/>
          </div>

        </div>
      </div>
    </div>
    <MainBusiness />
    <MainItems />
    <MainService />
    <MainIndustries />
    <MainOurTeam />
    <MainCarousel />
    <MainValuable />
    <CoverService />
    </>
  )
}

export default Home