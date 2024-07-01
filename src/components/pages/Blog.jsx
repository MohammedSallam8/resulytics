import React from 'react'
import './Style/Blog.scss'
import { FaChevronRight } from "react-icons/fa";
import { FaRegCalendar } from "react-icons/fa";
import { FaAngleDoubleLeft } from "react-icons/fa";
import { FaAngleDoubleRight } from "react-icons/fa";

const Blog = () => {
  return (
    <div className='blog-container'>
      <div className='blog-cover'>
        <div className='details'>
          <h2>Blog</h2>
          <div className='link'>
            <a href='/'>Home</a>
            <FaChevronRight className='i'/>
            <span>Blog</span>
          </div>
        </div>
      </div>
      <div className='blog-content container'>
        <div className='row'>
          <div className='col-12 col-lg-4 col-md-6'>
            <div className="item">
              <img src="../../../public/imgs/blog1.jpg"/>
              <div className="item-details">
                <div className="img">
                  <img src="../../../public/imgs/user1.jpg"/>
                  <span>Alex Morgan</span>
                </div>
                <div className="history">
                  <FaRegCalendar className='i'/>
                  <span>April 5, 2020</span>
                </div>
                <h3>The Data Surrounding Higher Education</h3>
              </div>
            </div>
          </div>
          <div className='col-12 col-lg-4 col-md-6'>
            <div className="item">
              <img src="../../../public/imgs/blog2.jpg"/>
              <div className="item-details">
                <div className="img">
                  <img src="../../../public/imgs/user2.jpg"/>
                  <span>Sarah Taylor</span>
                </div>
                <div className="history">
                  <FaRegCalendar className='i'/>
                  <span>April 6, 2020</span>
                </div>
                <h3>Conversion Rate the Sales Funnel Optimization</h3>
              </div>
            </div>
          </div>
          <div className='col-12 col-lg-4 col-md-6'>
            <div className="item">
              <img src="../../../public/imgs/blog3.jpg"/>
              <div className="item-details">
                <div className="img">
                  <img src="../../../public/imgs/user3.jpg"/>
                  <span>David Warner</span>
                </div>
                <div className="history">
                  <FaRegCalendar className='i'/>
                  <span>April 7, 2020</span>
                </div>
                <h3>Business Data is changing the world’s Energy</h3>
              </div>
            </div>
          </div>
          <div className='col-12 col-lg-4 col-md-6'>
            <div className="item">
              <img src="../../../public/imgs/blog4.jpg"/>
              <div className="item-details">
                <div className="img">
                  <img src="../../../public/imgs/user4.jpg"/>
                  <span>Warner Alex</span>
                </div>
                <div className="history">
                  <FaRegCalendar className='i'/>
                  <span>April 8, 2020</span>
                </div>
                <h3>The data-driven approach to understanding</h3>
              </div>
            </div>
          </div>
          <div className='col-12 col-lg-4 col-md-6'>
            <div className="item">
              <img src="../../../public/imgs/blog5.jpg"/>
              <div className="item-details">
                <div className="img">
                  <img src="../../../public/imgs/user5.jpg"/>
                  <span>Talia Sallam</span>
                </div>
                <div className="history">
                  <FaRegCalendar className='i'/>
                  <span>April 9, 2020</span>
                </div>
                <h3>Finding the blocks of neighboring fields</h3>
              </div>
            </div>
          </div>
          <div className='col-12 col-lg-4 col-md-6'>
            <div className="item">
              <img src="../../../public/imgs/blog6.jpg"/>
              <div className="item-details">
                <div className="img">
                  <img src="../../../public/imgs/user6.jpg"/>
                  <span>Morgan David</span>
                </div>
                <div className="history">
                  <FaRegCalendar className='i'/>
                  <span>April 10, 2020</span>
                </div>
                <h3>Data into Your Enterprise to Drive Insights</h3>
              </div>
            </div>
          </div>
          <div class="col-12 page-number">
            <span><FaAngleDoubleLeft className='i'/></span>
            <span className="active">1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span><FaAngleDoubleRight className='i'/></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog