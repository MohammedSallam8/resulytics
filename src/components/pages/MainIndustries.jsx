import React from 'react'
import './Style/MainIndustries.scss'
import { FaIndustry } from "react-icons/fa";
import { FaHospital } from "react-icons/fa";
import { FaTruckMoving } from "react-icons/fa";
import { FaCoins } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaWarehouse } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaBitcoin } from "react-icons/fa";

const MainIndustries = () => {
  return (
    <div className='main-industries'>
      <div className='container'>
        <div className='row'>
          <div className='col-12 title'>
          <h2>Industries We Serve</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
          </div>
          <div className="col-lg-3 col-md-6 col-12">
            <div className="item">
              <FaIndustry className='i' />
              <h6>Manufacturing</h6>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12">
            <div className="item">
              <FaHospital className='i' />
              <h6>Healthcare</h6>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12">
            <div className="item">
              <FaTruckMoving className='i' />
              <h6>Automobile</h6>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12">
            <div className="item">
              <FaCoins className='i' />
              <h6>Banking</h6>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12">
            <div className="item">
              <FaHome className='i' />
              <h6>Real Estate</h6>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12">
            <div className="item">
              <FaWarehouse className='i' />
              <h6>Logistic</h6>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12">
            <div className="item">
              <FaUsers className='i' />
              <h6>Insurance</h6>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12">
            <div className="item">
              <FaBitcoin className='i' />
              <h6>Capital Markets</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainIndustries