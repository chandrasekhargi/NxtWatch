import {AiFillHome} from 'react-icons/ai'
import {FaFireAlt} from 'react-icons/fa'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'

import './index.css'

const LeftViewOfHome = () => {
  const listOfTypes = () => (
    <div>
      <div className="home-type-videos">
        <AiFillHome size={20} />
        <p className="home-txt">Home</p>
      </div>
      <div className="home-type-videos">
        <FaFireAlt size={20} />
        <p className="home-txt">Trending</p>
      </div>
      <div className="home-type-videos">
        <SiYoutubegaming size={20} />
        <p className="home-txt">Gaming</p>
      </div>
      <div className="home-type-videos">
        <MdPlaylistAdd size={20} />
        <p className="home-txt">Saved videos</p>
      </div>
    </div>
  )

  const contactUsList = () => (
    <div>
      <h1 className="contact-txt">CONTACT US</h1>
      <div className="contact-logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
          alt="facebook logo"
          className="facebook-logo"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
          alt="twitter logo"
          className="facebook-logo"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
          alt="linked in logo"
          className="facebook-logo"
        />
      </div>
      <h1 className="contact-para">
        Enjoy! Now to see your channels and recommendations!
      </h1>
    </div>
  )

  return (
    <div className="left-list-container">
      {listOfTypes()}
      {contactUsList()}
    </div>
  )
}

export default LeftViewOfHome
