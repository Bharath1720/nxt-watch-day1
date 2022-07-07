import './index.css'
import HomeVideoCard from '../HomeVideoCard'

const HomeVideos = props => {
  const {homeVideos} = props
  const videosCount = homeVideos.length
  return (
    <div>
      {videosCount > 0 ? (
        <ul className="video-card-list">
          {homeVideos.map(each => (
            <HomeVideoCard video={each} key={each.id} />
          ))}
        </ul>
      ) : null}
    </div>
  )
}

export default HomeVideos
