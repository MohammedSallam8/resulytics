import React from 'react'
import './Style/CaseStudies.scss'
import { FaChevronRight } from "react-icons/fa";
import { FaPlusCircle } from "react-icons/fa";

export default function CaseStudies () {
  const caseItem = [
    {id: 1, img: "../../../public/imgs/case1.jpg", h3: "Movie Recommendation", p: "System Project"},
    {id: 2, img: "../../../public/imgs/case2.jpg", h3: "Customer Segmentation", p: "Machine Learning"},
    {id: 3, img: "../../../public/imgs/case3.jpg", h3: "Data Analysis", p: "Web Project"},
    {id: 4, img: "../../../public/imgs/case4.jpg", h3: "Detection Project", p: "Programming"},
    {id: 5, img: "../../../public/imgs/case5.jpg", h3: "Data Scientist", p: "Data Scientist"},
    {id: 6, img: "../../../public/imgs/case6.jpg", h3: "Benefits Research", p: "Science Projects"},
]
  return (
    <div className='case-studies'>
      <div className='case-cover'>
        <div className="details">
          <h2>Case Studies 2 Columns</h2>
          <div className="link">
            <a href="/">Home</a>
            <FaChevronRight className='i'/>
            <span>Case Studies 2 Columns</span>
          </div>
        </div>
      </div>
      <div className='case-studies-container container'>
        <div className='row'>
          {caseItem.map((item) => 
          <div className="col-md-6 col-12 mb" key={item.id}>
            <div className="item-cover">
              <img src={item.img}/>
              <div className="color">
              <FaPlusCircle className='i'/>
              </div>
            </div>
            <div className="item-details">
              <h3>{item.h3}</h3>
              <p>{item.h3}</p>
            </div>
          </div>
        )}
        </div>
      </div>
    </div>
  )
}
