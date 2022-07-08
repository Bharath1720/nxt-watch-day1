import './index.css'
import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'

const HomeVideoCard = props => {
  const {video} = props
  const {
    id,
    title,
    thumbnailUrl,
    viewCount,
    publishedAt,
    name,
    profileImageUrl,
  } = video
  // const tillDate = formatDistanceToNow(new Date(2021, 8, 20))
  const year = new Date(publishedAt).getFullYear()
  const month = new Date(publishedAt).getMonth()
  const date = new Date(publishedAt).getDate()
  //   console.log(year)
  //   console.log(month)
  //   console.log(date)
  //   console.log(tillDate)
  const tillDate = formatDistanceToNow(new Date(year, month, date))
  //  console.log(tillDate)
  return (
    <div>
      <Link className="nav-link" to={`/videos/${id}`}>
        <li className="list-item">
          <img
            className="thumb-nail-image"
            src={thumbnailUrl}
            alt="video thumbnail"
          />
          <div className="video-details">
            <img
              className="profile-image"
              src={profileImageUrl}
              alt="channel logo"
            />
            <div className="content-section">
              <p className="title-color">{title}</p>
              <p className="channel-name">{name}</p>
              <p className="views-and-date">
                {viewCount} views
                <span className="dot">.</span>
                <span>{tillDate}</span>
              </p>
            </div>
          </div>
        </li>
      </Link>
    </div>
  )
}

export default HomeVideoCard
