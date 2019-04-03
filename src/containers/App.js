import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateAuth } from '../redux/modules/auth'
import { config } from '../config/googleapi'
import Home from './Home'

class App extends Component {

  login = () => window.gapi.auth2.getAuthInstance().signIn()

  logout = () => window.gapi.auth2.getAuthInstance().signOut()

  initClient = () => {
    window.gapi.client.init(config).then(() => {
      let user = window.gapi.auth2.getAuthInstance()
      user.isSignedIn.listen((status) => {
        this.props.updateAuth(status, user.currentUser.get())
      })
      if (!user.isSignedIn.get()) {
        this.login()
      } else {
        this.props.updateAuth(true, user.currentUser.get())
      }
    })
  }

  componentDidMount() {
    window.gapi.load('client:auth2', this.initClient)
  }

  render() {
    return (
      <Home/>
    )
  }
}

export default connect(null, {updateAuth})(App)
