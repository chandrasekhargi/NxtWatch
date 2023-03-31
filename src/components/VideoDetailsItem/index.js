import ReactPlayer from 'react-player'
import {formatDistanceToNow} from 'date-fns'
import {
  TrendingTitle,
  TrendingCountViews,
  SmallImg,
  TrendingCountContainer,
  TrendingHeading,
} from '../../styledComponent'
import './index.css'

const VideoDetailsItem = props => {
  const {videoDetails} = props
  const {
    id,
    title,
    profileImageUrl,
    subscriberCount,
    viewCount,
    publishedAt,
    description,
    name,
    videoUrl,
  } = videoDetails
  const publishedTxt = formatDistanceToNow(new Date(publishedAt)).split(' ')
  publishedTxt.splice(0, 1)
  const publishedYearsTxt = `${publishedTxt[0]} ${publishedTxt[1]} ago`

  return (
    <li>
      <ReactPlayer url={videoUrl} controls />
      <TrendingTitle>{title}</TrendingTitle>
      <TrendingCountContainer>
        <TrendingCountViews>{`${viewCount} views`}</TrendingCountViews>
        <TrendingCountViews>{publishedYearsTxt}</TrendingCountViews>
      </TrendingCountContainer>
      <TrendingHeading>
        <SmallImg src={profileImageUrl} alt={`video ${id}`} />
        <div>
          <p>{name}</p>
          <TrendingCountViews>{`${subscriberCount} subscribers`}</TrendingCountViews>
        </div>
      </TrendingHeading>
      <TrendingTitle>{description}</TrendingTitle>
    </li>
  )
}

export default VideoDetailsItem
