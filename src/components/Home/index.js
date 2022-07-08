import {Component} from 'react'
import Cookies from 'js-cookie'
import {AiOutlineClose, AiOutlineSearch} from 'react-icons/ai'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import NavigationBar from '../NavigationBar'

import './index.css'
import FailureView from '../FailureView'
import HomeVideos from '../HomeVideos'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    homeVideos: [],
    apiStatus: apiStatusConstants.initial,
    searchInput: '',
    bannerDisplay: 'flex',
  }

  componentDidMount() {
    this.getHomeVideos()
  }

  getHomeVideos = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const {searchInput} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const data = await response.json()
      //  console.log(data)
      const updatedData = data.videos.map(each => ({
        id: each.id,
        title: each.title,
        thumbnailUrl: each.thumbnail_url,
        viewCount: each.view_count,
        publishedAt: each.published_at,
        name: each.channel.name,
        profileImageUrl: each.channel.profile_image_url,
      }))
      //  console.log(updatedData)
      this.setState({
        homeVideos: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  getSearchResults = () => {
    this.getHomeVideos()
  }

  onCloseBanner = () => {
    this.setState({bannerDisplay: 'none'})
  }

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  onRetry = () => {
    this.setState({searchInput: ''}, this.getVideos)
  }

  renderFailureView = () => <FailureView onRetry={this.onRetry} />

  renderLoadingView = () => (
    <div className="loader-container">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  renderSuccessView = () => {
    const {homeVideos} = this.state
    return (
      <>
        {/* <p className="json">{JSON.stringify(homeVideos)}</p> */}
        <HomeVideos homeVideos={homeVideos} onRetry={this.onRetry} />
      </>
    )
  }

  renderHomeVideos = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderSuccessView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()

      default:
        return null
    }
  }

  render() {
    const {searchInput, bannerDisplay} = this.state
    const display = bannerDisplay === 'flex' ? 'flex' : 'none'

    return (
      <div>
        {/* <p>{JSON.stringify(searchInput)}</p> */}
        <Header />
        <NavigationBar />
        <div className="banner-home-container">
          <div
            className="banner-container"
            style={{
              display: `${display}`,
            }}
          >
            <div className="banner-left-part">
              <img
                className="banner-image"
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                alt="nxt watch logo"
              />
              <p className="banner-text">
                Buy Nxt Watch Premium prepaid plans with <br /> UPI
              </p>
              <button className="banner-btn" type="button">
                GET IT NOW
              </button>
            </div>
            <div className="banner-right-part">
              <button
                onClick={this.onCloseBanner}
                type="button"
                className="banner-close-btn"
              >
                <AiOutlineClose size={25} />
              </button>
            </div>
          </div>
          <div className="search-container">
            <input
              className="search-input"
              type="search"
              value={searchInput}
              onChange={this.onChangeSearchInput}
              placeholder="search"
              color="'#f9f9f9"
            />
            <button
              onClick={this.getSearchResults}
              data-testid="searchButton"
              type="button"
              className="search-icon-container"
            >
              <AiOutlineSearch size={20} />
            </button>
          </div>
          {this.renderHomeVideos()}
        </div>
      </div>
    )
  }
}
export default Home
