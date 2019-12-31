import React from 'react'
import { connect } from 'react-redux'
import { useField } from '../hooks'
import { newBlogAction } from '../actions/blogAction'
import { messageLevel, showMessageAction } from '../actions/messageAction'

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
      <form
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
        <div>
          author
          <input name="author" {...authorInput} />
        </div>
        <div>
          title
          <input name="title" {...titleInput} />
        </div>
        <div>
          url
          <input name="url" {...urlInput} />
        </div>
        <button type="submit">Create</button>
        <button type="reset">reset</button>
      </form>
    </>
  )
}

export default connect(
  state => ({
    user: state.user
  }),
  { newBlogAction, showMessageAction }
)(CreateBlogForm)
