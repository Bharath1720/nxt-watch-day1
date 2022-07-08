import './index.css'
import HomeVideoCard from '../HomeVideoCard'

const HomeVideos = props => {
  const {homeVideos, onRetry} = props
  const videosCount = homeVideos.length

  const onClickRetry = () => {
    onRetry()
  }

  return (
    <div>
      {videosCount > 0 ? (
        <ul className="video-card-list">
          {homeVideos.map(each => (
            <HomeVideoCard video={each} key={each.id} />
          ))}
        </ul>
      ) : (
        <div className="no-videos-view">
          <img
            className="no-videos-img"
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
            alt="no videos"
          />
          <h1 className="no-videos-heading">No Search results found</h1>
          <p className="no-videos-note">
            Try different keywords or remove search filter
          </p>
          <button className="retry-btn" type="button" onClick={onClickRetry}>
            Retry
          </button>
        </div>
      )}
    </div>
  )
}

export default HomeVideos
