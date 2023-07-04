import React from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import { FaRegComment } from 'react-icons/fa'

const ProfilePost = ({postImage}) => {
  return (
    <div className="post" style={{background:`url(${postImage})`}}>
      <div className="stats">
        <span style={{ display: 'flex', alignItems: 'center' }}
        ><AiOutlineHeart size={20} />
          34</span
        >
        <span style={{ display: 'flex', alignItems: 'center' }}
        ><FaRegComment size={20} />
          10</span
        >
      </div>
    </div>
  )
}

export default ProfilePost
