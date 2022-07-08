import {Link} from 'react-router-dom'
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
        <Link className="nav-link" to="/">
          <li className="nav-link-container" key="home">
            <AiFillHome size={30} color="#ff0b37" />
            <p className="nav-text">Home</p>
          </li>
        </Link>
        <Link className="nav-link" to="/trending">
          <li className="nav-link-container" key="trending">
            <HiFire size={30} color="#475569" />
            <p className="nav-text">Trending</p>
          </li>
        </Link>
        <Link className="nav-link" to="/gaming">
          <li className="nav-link-container" key="gaming">
            <SiYoutubegaming size={30} color="#475569" />
            <p className="nav-text">Gaming</p>
          </li>
        </Link>
        <Link className="nav-link" to="/saved-videos">
          <li className="nav-link-container" key="saved">
            <CgPlayListAdd size={30} color="#475569" />
            <p className="nav-text">Saved Videos</p>
          </li>
        </Link>
      </ul>
      <div className="contact-info">
        <p className="contact-heading">CONTACT US</p>
        <div className="contact-icons">
          <img
            className="contact-image"
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
            alt="facebook logo"
          />
          <img
            className="contact-image"
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
            alt="twitter logo"
          />
          <img
            className="contact-image"
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
            alt="linked in logo"
          />
        </div>
        <p className="contact-note">
          Enjoy! Now to see your channels and recommendations!
        </p>
      </div>
    </div>
    <ul className="navigation-sm-container">
      <Link className="nav-link" to="/">
        <li className="nav-link-container" key="home">
          <AiFillHome size={30} color="#ff0b37" />
        </li>
      </Link>

      <Link className="nav-link" to="/trending">
        <li className="nav-link-sm-container" key="trending">
          <HiFire size={30} color="#475569" />
        </li>
      </Link>
      <Link className="nav-link" to="/gaming">
        <li className="nav-link-sm-container" key="gaming">
          <SiYoutubegaming size={30} color="#475569" />
        </li>
      </Link>

      <Link className="nav-link" to="/saved-videos">
        <li className="nav-link-sm-container" key="saved">
          <CgPlayListAdd size={30} color="#475569" />
        </li>
      </Link>
    </ul>
  </div>
)

export default NavigationBar
