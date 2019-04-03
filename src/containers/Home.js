import React from 'react'
import { connect } from 'react-redux'
import { updateLibrary, selectSong } from '../redux/modules/library'
import { login, logout } from '../redux/modules/auth'
import Library from '../components/Library'
import Player from '../components/Player'
import Auth from '../components/Auth'

class Home extends React.Component {

  playSong = (song) => this.props.selectSong(song.id)

  upvote = () => {

  }

  downvote = () => {

  }

  getLibrary = () => {
    window.gapi.client.drive.files.list({
      'pageSize': 10,
      'fields': "nextPageToken, files(id, name, mimeType, webContentLink)",
      'q': "mimeType contains 'audio/'"
    })
    .then((res) => {
      let files = {}
      res.result.files.forEach(x => files[x.id] = x)
      this.props.updateLibrary(files)
    })
    .catch((err) => {
      console.log(err)
    })
  }

  componentDidUpdate(prevProps) {
    if (this.props.user !== prevProps.user) {
      if (this.props.user.status === true) {
        this.getLibrary()
      }
    }
  }

  render() {
    let { user, library, song } = this.props
    let currentSong = library[song] || {}
    return (
      <div>
        <Auth user={user}/>
        {user.status &&
          <div>
            <Player
              song={currentSong}
              upvote={this.upvote}
              downvote={this.downvote}
            />
            <Library
              items={library}
              play={this.playSong}
            />
          </div>
        }
      </div>
    )
  }
}

const mapState = state => ({
  user: state.user,
  library: state.library,
  song: state.song
})

const mapDispatch = {
  updateLibrary,
  selectSong
}

export default connect(mapState, mapDispatch)(Home)
