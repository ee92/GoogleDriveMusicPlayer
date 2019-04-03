import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/storage'
import 'firebase/auth'

import config from './config/firebase'

firebase.initializeApp(config)

const googleAuth = new firebase.auth.GoogleAuthProvider()
const auth = firebase.auth()
const db = firebase.database()
const storage = firebase.storage()

export {
  firebase,
  db,
  auth,
  storage,
  googleAuth
}
