import React from 'react'
import { connect } from 'react-redux'
import { useField } from '../hooks'
import { newBlogAction } from '../actions/blogAction'
import { messageLevel, showMessageAction } from '../actions/messageAction'
import { Form, Button } from 'semantic-ui-react'

const CreateBlogForm = ({ user, newBlogAction, showMessageAction }) => {
  const authorInput = useField('text')
  const titleInput = useField('text')
  const urlInput = useField('text')
  const handleCreateBlog = ({ author, title, url, user }) => async evt => {
    evt.preventDefault()
    try {
      await newBlogAction({
        blog: { author, title, url, user },
        token: user.token
      })

      showMessageAction(`Blog entry ${title} by ${author} created successfully`)
      resetFields()
    } catch (err) {
      showMessageAction(
        `Failed to create ${title} by ${author}`,
        messageLevel.ERROR
      )
    }
  }

  const resetFields = () => {
    authorInput.onReset()
    titleInput.onReset()
    urlInput.onReset()
  }

  return (
    <>
      <h2>Create blog</h2>
      <Form
        onSubmit={handleCreateBlog({
          author: authorInput.value,
          title: titleInput.value,
          url: urlInput.value,
          user
        })}
        onReset={evt => {
          evt.preventDefault()
          resetFields()
        }}
      >
        <Form.Field>
          <label htmlFor="author">Author</label>
          <input name="author" {...authorInput} />
        </Form.Field>
        <Form.Field>
          <label htmlFor="title">Title</label>
          <input name="title" {...titleInput} />
        </Form.Field>
        <Form.Field>
          <label htmlFor="url">Url</label>
          <input name="url" {...urlInput} />
        </Form.Field>
        <Button type="submit">Create</Button>
        <Button type="reset">reset</Button>
      </Form>
    </>
  )
}

export default connect(
  state => ({
    user: state.user
  }),
  { newBlogAction, showMessageAction }
)(CreateBlogForm)
