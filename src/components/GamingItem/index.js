// non value
import {Link} from 'react-router-dom'
import {
  GamingItemImg,
  GamingListItem,
  TrendingCountViews,
  TrendingTitle,
  GamingColumnItemBtn,
} from '../../styledComponent'

const GamingItem = props => {
  const {gamingData} = props
  const {id, thumbnailUrl, title, viewCount} = gamingData

  return (
    <GamingListItem>
      <GamingColumnItemBtn>
        <Link className="item-link" to={`/videos/${id}`}>
          <GamingItemImg src={thumbnailUrl} alt={`gaming ${id}`} />
          <TrendingTitle>{title}</TrendingTitle>
          <TrendingCountViews>{`${viewCount} watching worldwide`}</TrendingCountViews>
        </Link>
      </GamingColumnItemBtn>
    </GamingListItem>
  )
}

export default GamingItem
