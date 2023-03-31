import {Component} from 'react'
import Cookie from 'js-cookie'
import Loader from 'react-loader-spinner'
import {FaFireAlt} from 'react-icons/fa'

import TrendingVideoItem from '../TrendingVideoItem'
import Header from '../Header'
import LeftViewOfHome from '../LeftViewOfHome'
import {
  TrendingUnorderedColumnContainer,
  TrendingCountContainer,
  TrendingHeading,
  ContentTypeHeading,
} from '../../styledComponent'
import './index.css'

const TrendingApiStatus = {
  inSuccess: 'SUCCESS',
  inFailure: 'FAILURE',
  inProgress: 'PROGRESS',
}

class TrendingVideos extends Component {
  state = {
    apiStatus: 'INITIAL',
    trendingData: [],
  }

  componentDidMount = () => {
    this.getTrendingStatus()
  }

  getTrendingStatus = async () => {
    this.setState({apiStatus: TrendingApiStatus.inProgress})
    const url = 'https://apis.ccbp.in/videos/trending'
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
      const updatedTrendingData = data.videos.map(eachItem => ({
        id: eachItem.id,
        publishedAt: eachItem.published_at,
        thumbnailUrl: eachItem.thumbnail_url,
        title: eachItem.title,
        viewCount: eachItem.view_count,
        profileImageUrl: eachItem.channel.profile_image_url,
        name: eachItem.channel.name,
      }))
      this.setState({
        apiStatus: TrendingApiStatus.inSuccess,
        trendingData: updatedTrendingData,
      })
    } else {
      this.setState({apiStatus: TrendingApiStatus.inFailure})
    }
  }

  showTrendingSuccess = () => {
    const {trendingData} = this.state
    return (
      <TrendingUnorderedColumnContainer>
        <TrendingHeading>
          <FaFireAlt size={30} />
          <ContentTypeHeading>Trending</ContentTypeHeading>
        </TrendingHeading>
        {trendingData.map(each => (
          <TrendingVideoItem trendingData={each} key={each.id} />
        ))}
      </TrendingUnorderedColumnContainer>
    )
  }

  showTrendingProgress = () => (
    <div data-testid="loader">
      <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
    </div>
  )

  renderTrendingVideosList = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case TrendingApiStatus.inFailure:
        return this.showTrendingFailure()
      case TrendingApiStatus.inSuccess:
        return this.showTrendingSuccess()
      case TrendingApiStatus.inProgress:
        return this.showTrendingProgress()
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
          {this.renderTrendingVideosList()}
        </TrendingCountContainer>
      </>
    )
  }
}

export default TrendingVideos
