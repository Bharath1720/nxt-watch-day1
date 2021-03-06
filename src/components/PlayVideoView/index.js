import ReactPlayer from 'react-player'
import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {BiListPlus} from 'react-icons/bi'
import './index.css'

const PlayVideoView = props => {
  const {videoDetails, clickLiked, clickDisLiked} = props
  const {
    title,
    videoUrl,
    viewCount,
    publishedAt,
    description,
    name,
    profileImageUrl,
    // thumbnailUrl,
    subscriberCount,
  } = videoDetails[0]

  const onClickLike = () => {
    clickLiked()
  }

  const onClickDislike = () => {
    clickDisLiked()
  }

  return (
    <div className="video-player">
      {/* <p>{JSON.stringify(videoDetails)}</p>{' '} */}
      <ReactPlayer url={videoUrl} controls width="100%" />
      <p className="player-video-title"> {title}</p>
      <div className="play-video-status-container">
        <p className="play-video-status">
          {viewCount} views
          <span className="play-video-dot">.</span>
          {publishedAt}
        </p>
        <div className="play-social-buttons-container">
          <div className="btn-container">
            <button onClick={onClickLike} className="social-btn" type="button">
              <AiOutlineLike size={25} />
              <span className="btn-txt">Like</span>
            </button>
          </div>
          <div className="btn-container">
            <button
              onClick={onClickDislike}
              className="social-btn"
              type="button"
            >
              <AiOutlineDislike size={25} />
              <span className="btn-txt">Dislike</span>
            </button>
          </div>
          <div className="btn-container">
            <button className="social-btn" type="button">
              <BiListPlus size={25} />
              <span className="btn-txt">Saved</span>
            </button>
          </div>
        </div>
      </div>
      <hr className="hr-line" />
      <div className="channel-container">
        <img
          className="channel-image"
          src={profileImageUrl}
          alt="channel logo"
        />
        <div className="channel-info">
          <p className="channel-name">{name}</p>
          <p className="channel-subscribers">{subscriberCount} Subscribers</p>
          <p className="channel-description">{description}</p>
        </div>
      </div>
    </div>
  )
}

export default PlayVideoView
