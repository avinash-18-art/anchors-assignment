// App.js
import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import UserProfile from './components/UserProfile'
import PostDetail from './components/PostDetail'
import ProtectedRoute from './components/ProtectedRoute'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <ProtectedRoute path="/profile" component={UserProfile} />
          <Route path="/post/:id" component={PostDetail} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
