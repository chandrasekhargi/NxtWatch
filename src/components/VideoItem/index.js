import {formatDistanceToNow} from 'date-fns'
import './index.css'

const VideoItem = props => {
  const {videosData} = props
  const {
    id,
    name,
    title,
    thumbnailUrl,
    profileImageUrl,
    viewCount,
    publishedAt,
  } = videosData
  const publishedTxt = formatDistanceToNow(new Date(publishedAt)).split(' ')
  publishedTxt.splice(0, 1)
  const publishedYearsTxt = `${publishedTxt[0]} ${publishedTxt[1]} ago`

  return (
    <li className="video-list-item">
      <button className="link-btn" type="button">
        <img src={thumbnailUrl} alt={id} className="video-img" />
        <div className="thumbnail-list">
          <img
            src={profileImageUrl}
            alt={`thumbnail ${id}`}
            className="video-thumbnail"
          />
          <div>
            <p className="video-item-title">{title}</p>
            <p className="video-item-name-para">{name}</p>
            <div className="view-published-container">
              <p className="video-item-name">{`${viewCount} views`}</p>
              <li className="video-item-name-list">{publishedYearsTxt}</li>
            </div>
          </div>
        </div>
      </button>
    </li>
  )
}

export default VideoItem
