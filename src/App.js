import {Route, Switch} from 'react-router-dom'

import './App.css'
import Login from './components/LoginForm'
import ProtectedRoute from './components/ProtectedRoute'
import ViewOfHomePage from './components/ViewOfHomePage'
import Header from './components/Header'

// Replace your code here
const App = () => (
  <>
    <Switch>
      <Route exact path="/login" component={Login} />
      <ProtectedRoute exact path="/" component={ViewOfHomePage} />
    </Switch>
  </>
)

export default App
