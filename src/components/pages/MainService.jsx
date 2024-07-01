import React from 'react'
import './Style/MainService.scss'
import { FaArrowRight } from "react-icons/fa";

const Items = () => {
  return (
    <div className='main-service'>
      <div className='items'>
        <div className='container'>
          <div className='row'>
          <div className='col-md-3 col-6 item-content'>
            <div className='item-icon'>
              <img src='../../../public/imgs/item1.png'></img>
            </div>
            <div className='item-details'>
              <h3>10 Years</h3>
              <p>On the market</p>
            </div>
          </div>
          <div className='col-md-3 col-6 item-content'>
            <div className='item-icon'>
              <img src='../../../public/imgs/item2.png'></img>
            </div>
            <div className='item-details'>
              <h3>50+</h3>
              <p>Team Members</p>
            </div>
          </div>
          <div className='col-md-3 col-6 item-content'>
            <div className='item-icon'>
              <img src='../../../public/imgs/item3.png'></img>
            </div>
            <div className='item-details'>
              <h3>100%</h3>
              <p>Satisfaction Rate</p>
            </div>
          </div>
          <div className='col-md-3 col-6 item-content'>
            <div className='item-icon'>
              <img src='../../../public/imgs/item4.png'></img>
            </div>
            <div className='item-details'>
              <h3>90%</h3>
              <p>Senior Scientist</p>
            </div>
          </div>
          </div>
        </div>
      </div>
      <div className='main-service-content'>
      <div className='container'>
        <div className='row'>
          <div className='col-12 title'>
            <h2>Services We Can Help You With</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
          </div>
          <div className='col-lg-4 col-md-6 col-12 service-item'>
            <div className='item'>
            <img src="../../../public/imgs/service3.png" className="img"></img>
              <div className='icon icon-1'>
                <img src='../../../public/imgs/item1.png' />
              </div>
              <div className='text'>
                <h3>Big Data Analysis</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod ut labore et dolore magna aliqua.</p>
                <a className="link-item" href="/"><FaArrowRight className='i' /> Read More <FaArrowRight className='i1' /></a>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-md-6 col-12 service-item'>
            <div className='item'>
              <img src="../../../public/imgs/service3.png" className="img"></img>
              <div className='icon icon-2'>
              <img src='../../../public/imgs/item3.png' />
              </div>
              <div className='text'>
                <h3>Robust Analytics</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod ut labore et dolore magna aliqua.</p>
                <a className="link-item" href="/"><FaArrowRight className='i' /> Read More <FaArrowRight className='i1' /></a>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-md-6 col-12 service-item'>
            <div className='item'>
              <img src="../../../public/imgs/service3.png" className="img"></img>
              <div className='icon icon-3'>
              <img src='../../../public/imgs/item2.png' />
              </div>
              <div className='text'>
                <h3>Marketing Analytics</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <a className="link-item" href="/"><FaArrowRight className='i' /> Read More <FaArrowRight className='i1' /></a>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-md-6 col-12 service-item'>
            <div className='item'>
            <img src="../../../public/imgs/service3.png" className="img"></img>
              <div className='icon icon-4'>
                <img src='../../../public/imgs/item6.png' />
              </div>
              <div className='text'>
                <h3>Data Visualization</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod ut labore et dolore magna aliqua.</p>
                <a className="link-item" href="/"><FaArrowRight className='i' /> Read More <FaArrowRight className='i1' /></a>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-md-6 col-12 service-item'>
            <div className='item'>
            <img src="../../../public/imgs/service3.png" className="img"></img>
              <div className='icon icon-5'>
                <img src='../../../public/imgs/item5.png' />
              </div>
              <div className='text'>
                <h3>Securities Research</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod ut labore et dolore magna aliqua.</p>
                <a className="link-item" href="/"><FaArrowRight className='i' /> Read More <FaArrowRight className='i1' /></a>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-md-6 col-12 service-item'>
            <div className='item'>
            <img src="../../../public/imgs/service3.png" className="img"></img>
              <div className='icon icon-6'>
                <img src='../../../public/imgs/item7.png' />
              </div>
              <div className='text'>
                <h3>Data Governance</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod ut labore et dolore magna aliqua.</p>
                <a className="link-item" href="/"><FaArrowRight className='i' /> Read More <FaArrowRight className='i1' /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Items