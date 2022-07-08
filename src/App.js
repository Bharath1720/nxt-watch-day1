import './App.css'
import {Switch, Route, Redirect} from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'
import TrendingVideos from './components/TrendingVideos'
import GamingVideos from './components/GamingVideos'
import SavedVideos from './components/SavedVideos'
import NotFound from './components/NotFound'
import VideoDetailView from './components/VideoDetailView'
import ProtectedRoute from './components/ProtectedRoute'

const App = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
    <ProtectedRoute exact path="/" component={Home} />
    <ProtectedRoute exact path="/trending" component={TrendingVideos} />
    <ProtectedRoute exact path="/gaming" component={GamingVideos} />
    <ProtectedRoute exact path="/videos/:id" component={VideoDetailView} />
    <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
    <Route path="/not-found" component={NotFound} />
    <Redirect to="not-found" />
  </Switch>
)

export default App
