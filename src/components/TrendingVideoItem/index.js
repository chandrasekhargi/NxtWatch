import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'
import {
  TrendingVideoItemBtn,
  TrendingCountContainer,
  TrendingCountViews,
  TrendingItemImg,
  TrendingListItem,
  TrendingTitle,
} from '../../styledComponent'
import './index.css'

const TrendingVideoItem = props => {
  const {trendingData} = props
  const {id, title, thumbnailUrl, name, viewCount, publishedAt} = trendingData
  const publishedTxt = formatDistanceToNow(new Date(publishedAt)).split(' ')
  publishedTxt.splice(0, 1)
  const publishedYearsTxt = `${publishedTxt[0]} ${publishedTxt[1]} ago`

  return (
    <TrendingListItem>
      <Link className="item-link" to={`/videos/${id}`}>
        <TrendingVideoItemBtn>
          <TrendingItemImg src={thumbnailUrl} alt={`trending ${title}`} />
          <div>
            <TrendingTitle>{title}</TrendingTitle>
            <TrendingCountViews>{name}</TrendingCountViews>
            <TrendingCountContainer>
              <TrendingCountViews>{`${viewCount} views`}</TrendingCountViews>
              <TrendingCountViews>{publishedYearsTxt}</TrendingCountViews>
            </TrendingCountContainer>
          </div>
        </TrendingVideoItemBtn>
      </Link>
    </TrendingListItem>
  )
}

export default TrendingVideoItem
