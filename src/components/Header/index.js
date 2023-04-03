import {withRouter} from 'react-router-dom'

import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'
import './index.css'
import {FaMoon} from 'react-icons/fa'
import Cookie from 'js-cookie'
import {PopUpContainerWithSpace, LogOutBtn} from '../../styledComponent'

const Header = props => {
  const {history} = props
  const clickOnLogout = () => {
    Cookie.remove('jwt_token')
    history.push('/login')
  }
  return (
    <nav className="header-bg">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
        alt="header-logo"
        className="header-logo"
      />
      <ul className="headers-list">
        <li>
          <FaMoon size={20} />
        </li>
        <li>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
            alt="profile"
            className="profile"
          />
        </li>
        <li>
          <Popup
            modal
            trigger={
              <button className="logout-btn" type="button">
                Logout
              </button>
            }
            className="popup-content"
            position="bottom left"
          >
            {close => (
              <>
                <div>
                  Are you sure,you want to logout?
                  <PopUpContainerWithSpace>
                    <LogOutBtn
                      btnBorder="1px solid #000000"
                      color="#000000"
                      bgColor="transparent"
                      onClick={() => close()}
                    >
                      Cancel
                    </LogOutBtn>
                    <LogOutBtn
                      onClick={clickOnLogout}
                      btnBorder="1px solid #ffffff"
                      color="#ffffff"
                      bgColor="#3b82f6"
                    >
                      Confirm
                    </LogOutBtn>
                  </PopUpContainerWithSpace>
                </div>
              </>
            )}
          </Popup>
        </li>
      </ul>
    </nav>
  )
}

export default withRouter(Header)
