import React from 'react'
import './Style/MainOurTeam.scss'

const MainOurTeam = () => {
  return (
    <div className='main-team'>
      <img src='../../../public/imgs/vector-shape4.png' className='cover-1'/>
      <img src='../../../public/imgs/vector-shape1.png' className='cover-2'/>
      <img src='../../../public/imgs/map-shape1.png' className='cover-3'/>
      <div className='container'>
        <div className='row'>
          <div className="col-lg-6 col-12">
            <div className='team'>
            <img src="../../../public/imgs/team1.jpg" className="team-1" />
            <img src="../../../public/imgs/team3.jpg" className="team-2" />
            <img src="../../../public/imgs/team4.jpg" className="team-3" />
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div className='details'>
              <div className='logo'>
                <img src="../../../public/imgs/logo2.png" />
                <span>OUR TEAM</span>
              </div>
              <h2>Meet Our Data Scientist Preparing For Your Business Success</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
              <a href="/" className="link-btn">View Our Team</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainOurTeam