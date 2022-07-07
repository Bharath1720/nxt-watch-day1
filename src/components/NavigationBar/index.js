import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {CgPlayListAdd} from 'react-icons/cg'
import './index.css'
// import React from 'react'

const NavigationBar = () => (
  //   const {sample} = props
  <div className="navbar">
    <div className="navigation-lg-container">
      <ul className="nav-options">
        <li className="nav-link-container" key="home">
          <AiFillHome size={30} color="#ff0b37" />
          <p className="nav-text">Home</p>
        </li>
        <li className="nav-link-container" key="trending">
          <HiFire size={30} color="#475569" />
          <p className="nav-text">Trending</p>
        </li>
        <li className="nav-link-container" key="gaming">
          <SiYoutubegaming size={30} color="#475569" />
          <p className="nav-text">Gaming</p>
        </li>
        <li className="nav-link-container" key="saved">
          <CgPlayListAdd size={30} color="#475569" />
          <p className="nav-text">Saved Videos</p>
        </li>
      </ul>
    </div>
  </div>
)

export default NavigationBar
