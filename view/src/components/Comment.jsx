import React from 'react'

const Comment = ({username , dp , comment}) => {
  return (
    <div className="comments">
      <div className="user-avatar"></div>
      <p>
        <b>keshavmonga : </b>Hello this is my comment . Welcome to
        comment section . This is very educated comment section where
        you can know about the expert`s opinion
      </p>
    </div>
  )
}

export default Comment
