import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'semantic-ui-react'

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
        {likes} likes <Button onClick={likeHandler}>Like</Button>
      </p>
      <p>
        added by <span>{ownerUsername}</span>
      </p>
      {canDelete ? <Button onClick={deleteHandler}>Delete</Button> : null}
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
