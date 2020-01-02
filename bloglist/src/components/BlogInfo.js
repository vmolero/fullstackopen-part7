import React from 'react'
import PropTypes from 'prop-types'

const BlogInfo = ({
  likes,
  url,
  ownerUsername,
  username,
  likeHandler,
  deleteHandler
}) => {
  const canDelete = ownerUsername === username || ownerUsername === undefined
  return (
    <div className="blogInfo">
      <p>
        <a href={url}>{url}</a>
      </p>
      <p>
        {likes} likes <button onClick={likeHandler}>like</button>
      </p>
      <p>
        added by <span>{ownerUsername}</span>
      </p>
      {canDelete ? <button onClick={deleteHandler}>delete</button> : null}
    </div>
  )
}

BlogInfo.propTypes = {
  likes: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
  ownerUsername: PropTypes.string,
  username: PropTypes.string.isRequired,
  likeHandler: PropTypes.func.isRequired,
  deleteHandler: PropTypes.func.isRequired
}

export default BlogInfo
