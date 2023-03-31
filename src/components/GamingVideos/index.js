import {Component} from 'react'
import Cookie from 'js-cookie'
import Loader from 'react-loader-spinner'
import {SiYoutubegaming} from 'react-icons/si'

import GamingItem from '../GamingItem'
import Header from '../Header'
import LeftViewOfHome from '../LeftViewOfHome'
import {
  TrendingUnorderedRowContainer,
  TrendingCountContainer,
  GamingHeading,
  ContentTypeHeading,
  TrendingHeading,
} from '../../styledComponent'
import './index.css'

const GamingApiStatus = {
  inSuccess: 'SUCCESS',
  inFailure: 'FAILURE',
  inProgress: 'PROGRESS',
}

class GamingList extends Component {
  state = {
    apiStatus: 'INITIAL',
    gamingData: [],
  }

  componentDidMount = () => {
    this.getGamingStatus()
  }

  getGamingStatus = async () => {
    this.setState({apiStatus: GamingApiStatus.inProgress})
    const url = 'https://apis.ccbp.in/videos/gaming'
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
      const updatedGamingData = data.videos.map(eachItem => ({
        id: eachItem.id,
        thumbnailUrl: eachItem.thumbnail_url,
        title: eachItem.title,
        viewCount: eachItem.view_count,
      }))
      this.setState({
        apiStatus: GamingApiStatus.inSuccess,
        gamingData: updatedGamingData,
      })
    } else {
      this.setState({apiStatus: GamingApiStatus.inFailure})
    }
  }

  showGamingSuccess = () => {
    const {gamingData} = this.state
    return (
      <>
        <GamingHeading>
          <TrendingHeading>
            <SiYoutubegaming size={30} />
            <ContentTypeHeading>Gaming</ContentTypeHeading>
          </TrendingHeading>
          <TrendingUnorderedRowContainer>
            {gamingData.map(each => (
              <GamingItem gamingData={each} key={each.id} />
            ))}
          </TrendingUnorderedRowContainer>
        </GamingHeading>
      </>
    )
  }

  showGamingProgress = () => (
    <div data-testid="loader">
      <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
    </div>
  )

  renderGamingVideosList = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case GamingApiStatus.inFailure:
        return this.showGamingFailure()
      case GamingApiStatus.inSuccess:
        return this.showGamingSuccess()
      case GamingApiStatus.inProgress:
        return this.showGamingProgress()
      default:
        return null
    }
  }

  render() {
    return (
      <>
        <Header />
        <TrendingCountContainer>
          <LeftViewOfHome />
          {this.renderGamingVideosList()}
        </TrendingCountContainer>
      </>
    )
  }
}

export default GamingList
