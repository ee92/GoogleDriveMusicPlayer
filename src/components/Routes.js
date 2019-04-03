import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomeContainer from '../containers/Home'

const Routes = () => (
  <Router>
    <Switch>
      <Route path='/' exact component={HomeContainer}/>
    </Switch>
  </Router>
)

export default Routes
