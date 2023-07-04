import { Avatar } from '@mui/material'
import Comment from './Comment'
import React from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import { FaRegComment } from 'react-icons/fa'

const Post = ({ postId, caption, postImage, likes, comments, ownerImage,  ownerName, ownerId }) => {
  return (
    <div className="post-container">
      <div className="hp_post">
        <div className="user-info-container">
          <Avatar sx={{marginInline:'1rem'}}>{ownerImage}</Avatar>
          <span>{ownerName}</span>
        </div>
        <img className="main-post" src={postImage}></img>
        <b>{caption}</b>
        <p>{likes?.length} likes</p>
        <div className="post-actions">
          <AiOutlineHeart size={30} />
          <FaRegComment size={30} />
        </div>
      </div>
      <div className="h-divider"></div>
      <div className="post-comments">
        <input type="text" placeholder="Add comment" />
        <div className="comments first-comment">
          <div className="user-avatar"></div>
          <p>
            <b>keshavmonga : </b>Hello this is my comment . Welcome to
            comment section . This is very educated comment section where
            you can know about the expert`s opinion
          </p>
        </div>
        <Comment />
      </div>
    </div>
  )
}

export default Post
