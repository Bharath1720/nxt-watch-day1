import {CgPlayListAdd} from 'react-icons/cg'

import Header from '../Header'
import NavigationBar from '../NavigationBar'
import './index.css'
// import TrendingVideoCard from '../TrendingVideoCard'

const SavedVideos = props => {
  const {savedVideos} = props
  return (
    <>
      <Header />
      <NavigationBar />
      <div className="saved-container">
        <div className="saved-video-title">
          <div className="saved-title-icon-container">
            <CgPlayListAdd size={35} color="#ff0000" />
            <p className="saved-text">Saved Videos</p>
          </div>
        </div>
        {/* {savedVideos.length > 0 ? (
          <ul className="saved-video-list">
            {savedVideos.map(eachVideo => (
              <TrendingVideoCard key={eachVideo.id} videoDetails={eachVideo} />
            ))}
          </ul>
        ) : (
          <div className="no-saved-videos">
            <img
              className="no-saved-videos-image"
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
              alt="no saved videos"
            />
            <h1 className="no-saved-videos-heading">No saved videos found</h1>
            <p className="no-saved-videos-note">
              You can save your videos while watching them
            </p>
          </div>
        )} */}
        <div className="no-saved-videos">
          <img
            className="no-saved-videos-image"
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
            alt="no saved videos"
          />
          <h1 className="no-saved-videos-heading">No saved videos found</h1>
          <p className="no-saved-videos-note">
            You can save your videos while watching them
          </p>
        </div>
      </div>
    </>
  )
}

export default SavedVideos
