import './index.css'
import {Link} from 'react-router-dom'
// import {formatDistanceToNow} from 'date-fns'

const GamingVideoCard = props => {
  const {videoDetails} = props
  const {id, title, thumbnailUrl, viewCount} = videoDetails
  // const tillDate = formatDistanceToNow(new Date(2021, 8, 20))
  // const year = new Date(publishedAt).getFullYear()
  // const month = new Date(publishedAt).getMonth()
  // const date = new Date(publishedAt).getDate()
  //   console.log(year)
  //   console.log(month)
  //   console.log(date)
  //   console.log(tillDate)
  // const tillDate = formatDistanceToNow(new Date(year, month, date))
  //  console.log(tillDate)
  return (
    <div className="gamin-parent-container">
      <Link className="nav-link" to={`/videos/${id}`}>
        <li className="gaming-list-item">
          <img
            className="gaming-thumb-nail-image"
            src={thumbnailUrl}
            alt="video thumbnail"
          />
          <div className="gaming-content-section">
            <p className="gaming-title">{title}</p>
            <p className="gaming-views-and-date">
              {viewCount} Watching Worldwide
            </p>
          </div>
        </li>
      </Link>
    </div>
  )
}

export default GamingVideoCard
