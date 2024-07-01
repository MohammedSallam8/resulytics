import React from 'react'
import './Style/MainValuable.scss'
import { FaRegCalendar } from "react-icons/fa";

const MainValuable = () => {
  return (
    <div className='main-valuable'>
      <div className='container'>
        <div className='row'>
        <div className='col-12 cover'>
          <img src='../../../public/imgs/vector-shape5.png' className='cover-1'/>
          <img src='../../../public/imgs/vector-shape2.png' className='cover-2'/>
        </div>
        <div className='col-12 title'>
          <h2>Latest Valuable Insights</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
        </div>
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
                <span>April 30, 2020</span>
              </div>
              <h3>Six Ways to Make Smarter Decisions</h3>
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
                <span>April 28, 2020</span>
              </div>
              <h3>The Challenges to Tackle Before You Start With AI</h3>
            </div>
          </div>
        </div>
        <div className='col-12 col-lg-4 '>
        <div className="item">
            <img src="../../../public/imgs/blog3.jpg"/>
            <div className="item-details">
              <div className="img">
                <img src="../../../public/imgs/user3.jpg"/>
                <span>David Warner</span>
              </div>
              <div className="history">
                <FaRegCalendar className='i'/>
                <span>April 29, 2020</span>
              </div>
              <h3>Why Organizations Want an Analytics Platform</h3>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default MainValuable