import {Component} from 'react'
import Cookie from 'js-cookie'
import Loader from 'react-loader-spinner'
import {SiYoutubegaming} from 'react-icons/si'

import GamingItem from '../GamingItem'
import Header from '../Header'
import LeftViewOfHome from '../LeftViewOfHome'
import VideoDetailsItem from '../VideoDetailsItem'
import {
  TrendingUnorderedColumnContainer,
  TrendingCountContainer,
  GamingHeading,
  ContentTypeHeading,
  TrendingHeading,
} from '../../styledComponent'
import './index.css'

const videoDetailsApiStatus = {
  inSuccess: 'SUCCESS',
  inFailure: 'FAILURE',
  inProgress: 'PROGRESS',
}

class VideoDetailsList extends Component {
  state = {
    apiStatus: 'INITIAL',
    videoDetailsData: [],
    saveVideoItem: false,
  }

  componentDidMount = () => {
    this.getVideoDetailsStatus()
  }

  getVideoDetailsStatus = async () => {
    this.setState({apiStatus: videoDetailsApiStatus.inProgress})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const url = `https://apis.ccbp.in/videos/${id}`
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
      const detailsData = data.video_details

      const updatedVideoDetailsData = {
        id: detailsData.id,
        publishedAt: detailsData.published_at,
        thumbnailUrl: detailsData.thumbnail_url,
        title: detailsData.title,
        viewCount: detailsData.view_count,
        profileImageUrl: detailsData.channel.profile_image_url,
        subscriberCount: detailsData.channel.subscriber_count,
        name: detailsData.channel.name,
        videoUrl: detailsData.video_url,
        description: detailsData.description,
      }
      this.setState({
        apiStatus: videoDetailsApiStatus.inSuccess,
        videoDetailsData: updatedVideoDetailsData,
      })
    } else {
      this.setState({apiStatus: videoDetailsApiStatus.inFailure})
    }
  }

  addToWatchLater = id => {
    const {saveVideoItem} = this.state
    console.log(id)

    this.setState({saveVideoItem: !saveVideoItem})
  }

  showVideoDetailsSuccess = () => {
    const {videoDetailsData, saveVideoItem} = this.state

    return (
      <>
        <TrendingUnorderedColumnContainer>
          <VideoDetailsItem
            addToWatchLater={this.addToWatchLater}
            saveVideoItem={saveVideoItem}
            videoDetails={videoDetailsData}
          />
        </TrendingUnorderedColumnContainer>
      </>
    )
  }

  showVideoDetailsProgress = () => (
    <div data-testid="loader">
      <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
    </div>
  )

  renderVideoDetailsList = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case videoDetailsApiStatus.inFailure:
        return this.showVideoDetailsFailure()
      case videoDetailsApiStatus.inSuccess:
        return this.showVideoDetailsSuccess()
      case videoDetailsApiStatus.inProgress:
        return this.showVideoDetailsProgress()
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
          {this.renderVideoDetailsList()}
        </TrendingCountContainer>
      </>
    )
  }
}

export default VideoDetailsList
