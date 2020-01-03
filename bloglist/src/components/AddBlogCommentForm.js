import React from 'react'
import { connect } from 'react-redux'
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

export default connect(
  state => ({
    user: state.user
  }),
  { addCommentBlogAction, showMessageAction }
)(AddBlogCommentForm)
