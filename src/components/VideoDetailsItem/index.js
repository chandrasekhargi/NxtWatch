import ReactPlayer from 'react-player'
import {BiLike, BiDislike} from 'react-icons/bi'
import {MdPlaylistAdd} from 'react-icons/md'
import {formatDistanceToNow} from 'date-fns'
import {
  TrendingTitle,
  TrendingCountViews,
  SmallImg,
  TrendingCountContainer,
  TrendingHeading,
  FlexBtnContainerWithMargin,
  ContainerWithSpace,
  OnlyFlexWithBorder,
  ParaEle,
} from '../../styledComponent'
import ReactObject from '../Context/ContextObject'
import './index.css'

const VideoDetailsItem = props => (
  <ReactObject.Consumer>
    {value => {
      const {onSaveVideo} = {value}
      const {videoDetails, saveVideoItem} = props
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
      const isSaved = saveVideoItem ? '#3b82f6' : '#000000'
      const clickOnSave = () => {
        onSaveVideo(videoDetails)
      }
      const publishedTxt = formatDistanceToNow(new Date(publishedAt)).split(' ')
      publishedTxt.splice(0, 1)
      const publishedYearsTxt = `${publishedTxt[0]} ${publishedTxt[1]} ago`

      return (
        <li>
          <ReactPlayer url={videoUrl} controls width="100%" height={500} />
          <TrendingTitle>{title}</TrendingTitle>
          <ContainerWithSpace>
            <TrendingCountContainer>
              <TrendingCountViews>{`${viewCount} views`}</TrendingCountViews>
              <TrendingCountViews>{publishedYearsTxt}</TrendingCountViews>
            </TrendingCountContainer>
            <TrendingCountContainer>
              <FlexBtnContainerWithMargin>
                <BiLike size={20} name="a" />
                Like
              </FlexBtnContainerWithMargin>
              <FlexBtnContainerWithMargin>
                <BiDislike size={20} name="a" />
                Dislike
              </FlexBtnContainerWithMargin>
              <FlexBtnContainerWithMargin
                TxtColor={isSaved}
                onClick={clickOnSave}
              >
                <MdPlaylistAdd size={20} />
                Save
              </FlexBtnContainerWithMargin>
            </TrendingCountContainer>
          </ContainerWithSpace>
          <OnlyFlexWithBorder>
            <SmallImg src={profileImageUrl} alt={`video ${id}`} />
            <div>
              <ParaEle>{name}</ParaEle>
              <TrendingCountViews>{`${subscriberCount} subscribers`}</TrendingCountViews>
            </div>
          </OnlyFlexWithBorder>
          <TrendingTitle>{description}</TrendingTitle>
        </li>
      )
    }}
  </ReactObject.Consumer>
)

export default VideoDetailsItem
