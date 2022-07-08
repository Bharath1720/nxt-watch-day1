import './index.css'
import {formatDistanceToNow} from 'date-fns'
import {Link} from 'react-router-dom'

const TrendingVideoCard = props => {
  const {videoDetails} = props
  const {
    id,
    title,
    thumbnailUrl,
    viewCount,
    publishedAt,
    name,
    profileImageUrl,
  } = videoDetails

  const year = new Date(publishedAt).getFullYear()
  const month = new Date(publishedAt).getMonth()
  const date = new Date(publishedAt).getDate()
  const tillDate = formatDistanceToNow(new Date(year, month, date))

  return (
    <Link to={`/videos/${id}`} className="nav-link">
      <li className="trending-list-item">
        <img
          className="trending-thumbnail-image"
          src={thumbnailUrl}
          alt="video thumbnail"
        />
        <div className="trending-video-details">
          <img
            className="trending-profile-image"
            src={profileImageUrl}
            alt="channel logo"
          />
          <div className="trending-content-section">
            <p className="trending-title">{title}</p>
            <p className="trending-channel-name">{name}</p>
            <p className="views-and-date">
              {viewCount} views
              <span className="dot">.</span>
              <span>{tillDate}</span>
            </p>
          </div>
        </div>
      </li>
    </Link>
  )
}

export default TrendingVideoCard
