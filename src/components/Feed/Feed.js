import React from 'react'
import PostBox from '../PostBox/PostBox'
import Post from '../Post/Post'
import './index.css'

function Feed() {
  return (
    <div className='feed'>
        <div className='feed_header'>
        <h2> Home </h2>
        </div>
        <PostBox />
        <Post />
    </div>
  )
}

export default Feed