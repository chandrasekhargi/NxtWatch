// hjhj
import {Component} from 'react'
import {Redirect} from 'react-router-dom'
// import {HiXMark} from 'react-icons/hi'
import Cookie from 'js-cookie'
import LeftViewOfHome from '../LeftViewOfHome'
import Header from '../Header'
import './index.css'

class ViewOfHomePage extends Component {
  showPremiumImage = () => (
    <div className="premium-img">
      <div className="premium-content">
        <div className="premium-logo-and-close-logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            className="home-logo"
            alt="home-logo"
          />
          {/* <HiXMark size={20} /> */}
        </div>
        <p className="premium-para">
          Buy Next Watch Premium prepaid Plans with UPI
        </p>
        <div className="get-it-now-btn-container">
          <button className="get-it-now-btn" type="button">
            GET IT NOW
          </button>
        </div>
      </div>
    </div>
  )

  render() {
    return (
      <>
        <Header />
        <div className="view-of-home-page-container">
          <LeftViewOfHome />
          {this.showPremiumImage()}
        </div>
      </>
    )
  }
}

export default ViewOfHomePage
