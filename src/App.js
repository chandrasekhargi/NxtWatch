import {Route, Switch} from 'react-router-dom'
import {Component} from 'react'

import './App.css'

import ReactObject from './components/Context/ContextObject'
import Login from './components/LoginForm'
import ProtectedRoute from './components/ProtectedRoute'
import VideoDetailsList from './components/VideoDetails'
import ViewOfHomePage from './components/ViewOfHomePage'
import GamingList from './components/GamingVideos'
import TrendingVideos from './components/TrendingVideos'

// Replace your code here
class App extends Component {
  state = {
    savedList: [],
  }

  saveVideoItem = item => {
    console.log(item)
  }

  render() {
    const {savedList} = this.state
    console.log(savedList)

    return (
      <ReactObject.Provider
        value={{
          savedList,
          onDeleteVideo: this.deleteVideoItem,
          onSaveVideo: this.saveVideoItem,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={ViewOfHomePage} />
          <ProtectedRoute exact path="/trending" component={TrendingVideos} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoDetailsList}
          />
          <ProtectedRoute exact path="/gaming" component={GamingList} />
        </Switch>
      </ReactObject.Provider>
    )
  }
}

export default App
