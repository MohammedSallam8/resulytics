import React from 'react'
import './Style/MainBusiness.scss'
import { FaSearch } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FaChessBoard } from "react-icons/fa";
import { FaRegLightbulb } from "react-icons/fa";

const MainBusiness = () => {
  return (
    <div className='main-business'>
      <div className='container'>
        <div className='row'>
          <div className='col-12 title'>
            <h2>How We Take Your Business From Good To Great</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
          </div>
          <div className='col-lg-4 col-md-6 col-12 item item-1'>
            <div className='icon'>
              <FaSearch className='i' />
            </div>
            <div className='text'>
              <h3>Analyze Your Data Needs</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
              <a className="link-item" href="/"><FaArrowRight className='i' /> Read More <FaArrowRight className='i1' /></a>
            </div>

          </div>
          <div className='col-lg-4 col-md-6 col-12 item item-2'>
            <div className='icon'>
              <FaChessBoard className='i' />
            </div>
            <div className='text'>
              <h3>Develop A Customized Plan</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
              <a className="link-item" href="/"><FaArrowRight className='i' /> Read More <FaArrowRight className='i1' /></a>
            </div>
          </div>
          <div className='col-lg-4 col-md-6 col-12 item item-3'>
            <div className='icon'>
              <FaRegLightbulb className='i' />
            </div>
            <div className='text'>
              <h3>Implement Your Solution
              </h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
              <a className="link-item" href="/"><FaArrowRight className='i' /> Read More <FaArrowRight className='i1' /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainBusiness