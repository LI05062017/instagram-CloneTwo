import React from 'react'
import PropTypes from 'prop-types'

const Post = ({item, index, deletePost}) => {
  return (
    <div key={index}>
         <p>{item.title}</p>
          <img scr={item.img} />
          <p>{item.caption} </p>
          <p>{item.userName}</p>
          <button type='button' onClick={deletePost}> Delete Post </button>
    </div>
  )
}

Post.propTypes = {
  item: PropTypes.object.isRequired,
  idex: PropTypes.number.isRequired,
  deletePost: PropTypes.string.isRequired
}
export default Post