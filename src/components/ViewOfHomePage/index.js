// hjhj
import {Component} from 'react'
import {HiXCircle} from 'react-icons/hi'
import {BiSearch} from 'react-icons/bi'
// import {HiXMark} from 'react-icons/hi'
import Cookie from 'js-cookie'
import Loader from 'react-loader-spinner'

import LeftViewOfHome from '../LeftViewOfHome'
import VideoItem from '../VideoItem'
import Header from '../Header'

import './index.css'

// const typesOfContent = [
//   {
//     id: 'home',
//     displayText: 'Home',
//   },
//   {
//     id: 'trending',
//     displayText: 'Trending',
//   },
//   {
//     id: 'gaming',
//     displayText: 'Gaming',
//   },
//   {
//     id: 'saved-videos',
//     displayText: 'Saved videos',
//   },
// ]

const dependencyApi = {
  inSuccess: 'SUCCESS',
  inFailure: 'FAILURE',
  inProgress: 'PROGRESS',
}

class ViewOfHomePage extends Component {
  state = {
    apiStatus: 'INITIAL',
    videosData: [],
    isClosed: false,
    searchInput: '',
    searchInputValue: '',
    // initialVideoType: typesOfContent[0].id,
  }

  componentDidMount = () => {
    this.getVideosData()
  }

  getVideosData = async () => {
    this.setState({apiStatus: dependencyApi.inProgress})
    const {searchInputValue} = this.state
    const url = `https://apis.ccbp.in/videos/all?search=${searchInputValue}`
    const jwtToken = Cookie.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)

    if (response.ok) {
      const data = await response.json()
      const updatedData = data.videos.map(eachItem => ({
        id: eachItem.id,
        publishedAt: eachItem.published_at,
        thumbnailUrl: eachItem.thumbnail_url,
        title: eachItem.title,
        viewCount: eachItem.view_count,
        profileImageUrl: eachItem.channel.profile_image_url,
        name: eachItem.channel.name,
      }))

      //   const a = formatDistanceToNow(new Date(updatedData[4].publishedAt))
      //   const b = a.split(' ')

      //   console.log(`${b[0]} ${b[1]} ago`)

      this.setState({
        apiStatus: dependencyApi.inSuccess,
        videosData: updatedData,
      })
    } else {
      this.setState({apiStatus: dependencyApi.inFailure})
    }
  }

  //   clickOnContentTypeBtn = name => {
  //     const {initialVideoType} = this.state
  //     // const lowerCaseName = typesOfContent.find(each => each.displayText === name)
  //     // console.log(lowerCaseName)
  //     console.log(initialVideoType)

  //     this.setState({initialVideoType: name}, this.getVideosData)
  //   }

  clickOnClose = () => {
    this.setState({isClosed: true})
  }

  showPremiumImage = () => (
    <div className="premium-img">
      <div className="premium-content">
        <div className="premium-logo-and-close-logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            className="home-logo"
            alt="home-logo"
          />
          <button
            onClick={this.clickOnClose}
            className="close-btn"
            type="button"
          >
            <HiXCircle size={20} />
          </button>
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

  showSuccessView = () => {
    const {videosData} = this.state
    return (
      <ul className="video-unordered-container">
        {videosData.map(each => (
          <VideoItem videosData={each} key={each.id} />
        ))}
      </ul>
    )
  }

  searchValue = event => {
    this.setState({searchInput: event.target.value})
  }

  searchVideoInput = () => {
    const {searchInput} = this.state
    this.setState({searchInputValue: searchInput}, this.getVideosData)
  }

  showLoader = () => (
    <div data-testid="loader">
      <Loader type="ThreeDots" color="#3b82f6" height="30" width="50" />
    </div>
  )

  showSuccessOrFailureView = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case dependencyApi.inSuccess:
        return this.showSuccessView()
      case dependencyApi.inProgress:
        return this.showLoader()
      default:
        return null
    }
  }

  render() {
    const {isClosed, searchInput} = this.state

    const wrongBtnForPremiumImg = isClosed ? null : this.showPremiumImage()
    return (
      <>
        <Header />
        <div className="view-of-home-page-container">
          <LeftViewOfHome />
          <div className="premium-success-view-container">
            {wrongBtnForPremiumImg}
            <div className="search-home-list-container">
              <input
                type="search"
                placeholder="Search"
                className="search-home-list"
                onChange={this.searchValue}
                value={searchInput}
              />
              <button
                onClick={this.searchVideoInput}
                className="search-icon-btn"
                type="button"
              >
                <BiSearch size={15} />
              </button>
            </div>
            {this.showSuccessOrFailureView()}
          </div>
        </div>
      </>
    )
  }
}

export default ViewOfHomePage
