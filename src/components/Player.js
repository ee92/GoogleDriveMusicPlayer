import React from 'react'

const Player = ({song, upvote, downvote}) => (
  <div>
    <audio src={song.webContentLink} controls/>
    <button onClick={upvote}>like</button>
    <button onClick={downvote}>hate</button>
  </div>
)

export default Player
