import { Avatar } from '@mui/material'
import React from 'react'
import { Button } from "@material-ui/core";
import './index.css'

function PostBox() {
  return (
    <div className="PostBox">
      <form>
        <div className="postBoxInput">
          <Avatar src="https://pbs.twimg.com/media/C3_nYXcVUAEsIUK.jpg" />
          <input placeholder='whats going on'></input>
        </div>
      </form>
      <div className='buttonPostContainer'>
    
      <Button
        type="submit"
        className="postBox__postButton"
        >Post</Button>
        </div>
    </div>
  );
}

export default PostBox