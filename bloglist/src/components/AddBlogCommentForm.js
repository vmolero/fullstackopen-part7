import React from 'react'
import { connect } from 'react-redux'
import { useField } from '../hooks'
import { addCommentBlogAction } from '../actions/blogAction'
import { messageLevel, showMessageAction } from '../actions/messageAction'

const AddBlogCommentForm = ({
  blog,
  user,
  addCommentBlogAction,
  showMessageAction
}) => {
  const commentInput = useField('text')
  const handleAddComment = ({ id, comment }) => async evt => {
    evt.preventDefault()
    try {
      await addCommentBlogAction({
        id,
        comment,
        token: user.token
      })

      showMessageAction(`Comment ${comment} added successfully`)
      resetFields()
    } catch (err) {
      showMessageAction(`Failed to add comment ${comment}`, messageLevel.ERROR)
    }
  }

  const resetFields = () => {
    commentInput.onReset()
  }

  return (
    <>
      <form
        onSubmit={handleAddComment({
          id: blog.id,
          comment: commentInput.value
        })}
      >
        <div>
          <input name="author" {...commentInput} />
        </div>
        <button type="submit">Add comment</button>
      </form>
    </>
  )
}

export default connect(
  state => ({
    user: state.user
  }),
  { addCommentBlogAction, showMessageAction }
)(AddBlogCommentForm)
