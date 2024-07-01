import React from 'react'
import './Style/MainCarousel.scss'
import Carousel from 'react-bootstrap/Carousel';

const MainCarousel = () => {
  return (
    <div className='main-carousel'>
      <div className='container'>
        <Carousel>
          <Carousel.Item>
            <div className='carousel-items'>
              <div className='carousel-details'>
                <div className='logo'>
                  <img src='../../../public/imgs/logo2.png' />
                  <span>CASE STUDY #1</span>
                </div>
                <div className='title'>
                  <h2>Data Science in Pharmaceutical Industries</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspersors atque reprehenderit soluta, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores atque reprehenderit soluta.</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspersors atque reprehenderit soluta, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores atque reprehenderit soluta.</p>
                </div>
              </div>
              <div className='carousel-cover'>
                <img src='../../../public/imgs/case-study1.jpg' />
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className='carousel-items'>
              <div className='carousel-details'>
                <div className='logo'>
                  <img src='../../../public/imgs/logo2.png' />
                  <span>CASE STUDY #2</span>
                </div>
                <div className='title'>
                  <h2>Mathematics, Advanced Statistics in Python</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspersors atque reprehenderit soluta, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores atque reprehenderit soluta.</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspersors atque reprehenderit soluta, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores atque reprehenderit soluta.</p>
                </div>
              </div>
              <div className='carousel-cover'>
                <img src='../../../public/imgs/case-study1.jpg' />
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  )
}

export default MainCarousel