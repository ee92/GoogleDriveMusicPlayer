import React from 'react'

const login = () => window.gapi.auth2.getAuthInstance().signIn()

const logout = () => window.gapi.auth2.getAuthInstance().signOut()

const Auth = ({user}) => (
  <div>
    {user.status === true
      ? <button onClick={logout}>logout {user.info.getBasicProfile().getName()}</button>
      : <button onClick={login}>login</button>
    }
  </div>
)

export default Auth
