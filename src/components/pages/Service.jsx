import React from 'react'
import './Style/Service.scss'
import { FaChevronRight } from "react-icons/fa";
import { FaRocket } from "react-icons/fa";
import { FaLaptop } from "react-icons/fa";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { FaSearchengin } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";
import { FaCogs } from "react-icons/fa";
import {Link} from "react-router-dom";
import CoverService from './CoverService'

export default function Service () {
  const serviceItem = [
    {id: 1, className: "ser-item", icon: <FaRocket className='i' />, h3: "Startup Applications"},
    {id: 2, className: "ser-item", icon: <FaLaptop className='i' />, h3: "SaaS Solutions"},
    {id: 3, className: "ser-item", icon: <FaMoneyCheckAlt className='i' />, h3: "eCommerce Platforms"},
    {id: 4, className: "ser-item", icon: <FaSearchengin  className='i'/>, h3: "Research"},
    {id: 5, className: "ser-item", icon: <FaChartLine className='i' />, h3: "Analytics"},
    {id: 6, className: "ser-item", icon: <FaCogs className='i' />, h3: "Technology"}
]
  return (
    <div className='ser'>
      <div className='case-cover'>
        <div className="details">
          <h2>ServiceBlock</h2>
          <div className="link">
            <a href="/">Home</a>
            <FaChevronRight className='i'/>
            <span>ServiceBlock</span>
          </div>
        </div>
      </div>
      <div className='service-container container'>
        <div className='row'>
          {serviceItem.map((service) => 
          <div className="col-lg-4 col-md-6 col-12" key={service.id}>
            <div className={service.className}>
              <div className="service-icon">
                {service.icon}
              </div>
              <div className="service-details">
                <h3>{service.h3}</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna adipiscing aliqua.</p>
                <Link to="/service">View Details</Link>
              </div>
            </div>
          </div>
        )}
        </div>
      </div>
      <CoverService />
    </div>
  )
}