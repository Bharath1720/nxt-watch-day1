import './index.css'
import {BsBrightnessHigh} from 'react-icons/bs'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FiLogOut} from 'react-icons/fi'

const Header = props => {
  const {sample} = props
  return (
    <div className="navbar-bg-color">
      <img
        className="header-logo"
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
        alt="website logo"
      />
      <div className="actions-container">
        <button className="theme-btn" type="button">
          <BsBrightnessHigh color="#ffffff" size={25} />
        </button>
        <img
          className="profile-image"
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
          alt="profile"
        />
        <button className="menu-btn" type="button">
          <GiHamburgerMenu color="#ffffff" size={25} />
        </button>
        <button className="logout-btn-logo" type="button">
          <FiLogOut size={25} color="#ffffff" />
        </button>
        <button className="logout-btn" type="button">
          Logout
        </button>
      </div>
    </div>
  )
}
export default Header
