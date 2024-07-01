import React from 'react'
import './Style/MainItems.scss'
import { FaChartBar } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";
import { FaCogs } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const MainItems = () => {
  return (
    <div className='main-items'>
      <div className='container'>
        <div className='row'>
          <div className='col-12 title'>
            <h2>What We Do</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
          </div>
          <div className='col-lg-4 col-md-6 col-12 item item-1'>
            <div className='icon'>
              <FaChartBar className='i' />
            </div>
            <div className='text'>
              <h3>Research</h3>
              <p>Lorem ipsum dolor sit consectetur, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
              <a href="/">Market Research <FaArrowRight/></a>
              <a href="/">Investment Research <FaArrowRight/></a>
              <a className="link-item" href="/"><FaArrowRight className='i' /> Read More <FaArrowRight className='i1' /></a>
            </div>

          </div>
          <div className='col-lg-4 col-md-6 col-12 item item-2'>
            <div className='icon'>
              <FaChartLine className='i' />
            </div>
            <div className='text'>
              <h3>Analytics</h3>
              <p>Lorem ipsum dolor sit consectetur, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
              <a href="/">Data Analytics <FaArrowRight/></a>
              <a href="/">Business Intelligence <FaArrowRight/></a>
              <a className="link-item" href="/"><FaArrowRight className='i' /> Read More <FaArrowRight className='i1' /></a>
            </div>
          </div>
          <div className='col-lg-4 col-md-6 col-12 item item-3'>
            <div className='icon'>
              <FaCogs className='i' />
            </div>
            <div className='text'>
              <h3>Technology</h3>
              <p>Lorem ipsum dolor sit consectetur, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
              <a href="/">Intelligence Automation <FaArrowRight/></a>
              <a href="/">Quality Engineering <FaArrowRight/></a>
              <a className="link-item" href="/"><FaArrowRight className='i' /> Read More <FaArrowRight className='i1' /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainItems