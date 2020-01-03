import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { useField } from '../hooks'
import { addCommentBlogAction } from '../actions/blogAction'
import { messageLevel, showMessageAction } from '../actions/messageAction'
import { Button, Form } from 'semantic-ui-react'

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
      <Form
        onSubmit={handleAddComment({
          id: blog.id,
          comment: commentInput.value
        })}
      >
        <Form.Field>
          <input name="author" {...commentInput} />
        </Form.Field>
        <Button type="submit">Add comment</Button>
      </Form>
    </>
  )
}

AddBlogCommentForm.propTypes = {
  user: PropTypes.objectOf(PropTypes.string).isRequired,
  blog: PropTypes.shape({
    id: PropTypes.string.isRequired,
    author: PropTypes.string,
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    comments: PropTypes.arrayOf(PropTypes.string)
  }),
  addCommentBlogAction: PropTypes.func.isRequired,
  showMessageAction: PropTypes.func.isRequired
}

export default connect(
  state => ({
    user: state.user
  }),
  { addCommentBlogAction, showMessageAction }
)(AddBlogCommentForm)
