import {withRouter} from 'react-router-dom'
import './index.css'
import {FaMoon} from 'react-icons/fa'
import Cookie from 'js-cookie'

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
          <button onClick={clickOnLogout} className="logout-btn" type="button">
            Logout
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default withRouter(Header)
