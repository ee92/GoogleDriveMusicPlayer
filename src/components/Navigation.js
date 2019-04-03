import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => (
  <div>
    <Link to='/library'>Library</Link>
    <Link to='/upload'>Upload</Link>
  </div>
)

export default Navigation
