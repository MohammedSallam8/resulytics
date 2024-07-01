import React from 'react'
import './Style/Courses.scss'
import { FaChevronRight } from "react-icons/fa";
import { FaCalendar } from "react-icons/fa";
import { FaAngleDoubleLeft } from "react-icons/fa";
import { FaAngleDoubleRight } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";


const Courses = () => {
  return (
    <div className='course-container'>
      <div className='course-cover'>
        <div className='details'>
          <h2>Course Grid</h2>
          <div className='link'>
            <a href='/'>Home</a>
            <FaChevronRight className='i'/>
            <span>Course Grid</span>
          </div>
        </div>
      </div>
      <div className='course-content container'>
        <div className='row'>
          <div className='col-12 col-lg-4 col-md-6'>
            <div className="item">
              <div className='item-img'>
                <img src="../../../public/imgs/course1.jpg"/>
                <span className="free">Free</span>
              </div>
              <div className="item-details">
                <div className="item-user">
                  <img src="../../../public/imgs/user1.jpg" />
                  <p className="user-name">Alex Morgan</p>
                </div>
                <h3>Introduction to Quantitative Methods</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                <ul>
                  <li><FaCalendar className='i'/> 8 Weeks Long</li>
                </ul>
                <ul>
                  <li><FaUsers className='i'/> Available Now</li>
                </ul>
              </div>
            </div>
          </div>
          <div className='col-12 col-lg-4 col-md-6'>
            <div className="item">
              <div className='item-img'>
                <img src="../../../public/imgs/course2.jpg"/>
                <span className="price">Free</span>
              </div>
              <div className="item-details">
                <div className="item-user">
                  <img src="../../../public/imgs/user2.jpg" />
                  <p className="user-name">Sarah Taylor</p>
                </div>
                <h3>Introduction to Linear Models and Matrix Algebra</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                <ul>
                  <li><FaCalendar className='i'/> 7 Weeks Long</li>
                </ul>
                <ul>
                  <li><FaUsers className='i'/> Available Now</li>
                </ul>
              </div>
            </div>
          </div>
          <div className='col-12 col-lg-4 col-md-6'>
            <div className="item">
              <div className='item-img'>
                <img src="../../../public/imgs/course3.jpg"/>
                <span className="price">Free</span>
              </div>
              <div className="item-details">
                <div className="item-user">
                  <img src="../../../public/imgs/user3.jpg" />
                  <p className="user-name">David Warner</p>
                </div>
                <h3>Data Science: Inference and Modeling</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                <ul>
                  <li><FaCalendar className='i'/> 2 Weeks Long</li>
                </ul>
                <ul>
                  <li><FaUsers className='i'/> Available Now</li>
                </ul>
              </div>
            </div>
          </div>
          <div className='col-12 col-lg-4 col-md-6'>
            <div className="item">
              <div className='item-img'>
                <img src="../../../public/imgs/course4.jpg"/>
                <span className="price">Free</span>
              </div>
              <div className="item-details">
                <div className="item-user">
                  <img src="../../../public/imgs/user4.jpg" />
                  <p className="user-name">Morgan David</p>
                </div>
                <h3>The Data Science Course: Complete Data Science</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                <ul>
                  <li><FaCalendar className='i'/> 3 Weeks Long</li>
                </ul>
                <ul>
                  <li><FaUsers className='i'/> Available Now</li>
                </ul>
              </div>
            </div>
          </div>
          <div className='col-12 col-lg-4 col-md-6'>
            <div className="item">
              <div className='item-img'>
                <img src="../../../public/imgs/course5.jpg"/>
                <span className="price">Free</span>
              </div>
              <div className="item-details">
                <div className="item-user">
                  <img src="../../../public/imgs/user5.jpg" />
                  <p className="user-name">Talia Sallam</p>
                </div>
                <h3>Java Programming Masterclass for Developers</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                <ul>
                  <li><FaCalendar className='i'/> 3 Weeks Long</li>
                </ul>
                <ul>
                  <li><FaUsers className='i'/> Available Now</li>
                </ul>
              </div>
            </div>
          </div>
          <div className='col-12 col-lg-4 col-md-6'>
            <div className="item">
              <div className='item-img'>
                <img src="../../../public/imgs/course6.jpg"/>
                <span className="price">Free</span>
              </div>
              <div className="item-details">
                <div className="item-user">
                  <img src="../../../public/imgs/user6.jpg" />
                  <p className="user-name">Morgan David</p>
                </div>
                <h3>Machine Learning A-Z™: Hands-On Python</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                <ul>
                  <li><FaCalendar className='i'/> 2 Weeks Long</li>
                </ul>
                <ul>
                  <li><FaUsers className='i'/> Available Now</li>
                </ul>
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

export default Courses