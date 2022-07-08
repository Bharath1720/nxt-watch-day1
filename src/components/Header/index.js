import './index.css'
import {BsBrightnessHigh} from 'react-icons/bs'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FiLogOut} from 'react-icons/fi'
import Popup from 'reactjs-popup'
import Cookies from 'js-cookie'
import {withRouter} from 'react-router-dom'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  return (
    <div className="navbar-bg-color">
      <img
        className="header-logo"
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
        alt="website logo"
      />
      <div className="actions-container">
        <button className="theme-btn" data-testid="theme" type="button">
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
        <Popup
          modal
          trigger={
            <button className="log-out-btn" type="button">
              Logout
            </button>
          }
        >
          {close => (
            <div className="modal-container">
              <p className="modal-desc">Are you sure, you want to logout?</p>
              <div className="buttons-container">
                <button
                  className="close-button"
                  type="button"
                  data-testid="closeButton"
                  onClick={() => close()}
                >
                  Cancel
                </button>

                <button
                  className="confirm-button"
                  type="button"
                  onClick={onClickLogout}
                >
                  Confirm
                </button>
              </div>
            </div>
          )}
        </Popup>
        <Popup
          modal
          trigger={
            <button className="logout-icon-button" type="button">
              <FiLogOut size={25} color="#ffffff" />
            </button>
          }
          className="popup-content"
        >
          {close => (
            <div className="modal-container">
              <p className="modal-desc">Are you sure, you want to logout?</p>
              <div className="buttons-container">
                <button
                  className="close-button"
                  type="button"
                  data-testid="closeButton"
                  onClick={() => close()}
                >
                  Cancel
                </button>

                <button
                  className="confirm-button"
                  type="button"
                  onClick={onClickLogout}
                >
                  Confirm
                </button>
              </div>
            </div>
          )}
        </Popup>
      </div>
    </div>
  )
}
export default withRouter(Header)
