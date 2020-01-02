import React from 'react'
import '../setupTests'
import { render, fireEvent } from '@testing-library/react'
import { Blog } from '../../components/Blog'

describe('<Blog />', () => {
  test('renders default content: title + author whereas info is hidden', () => {
    const blog = {
      title: 'Learning React',
      author: 'Victor Molero',
      url: 'http://learning-react.com',
      likes: 7,
      user: {
        username: 'victor'
      }
    }

    const user = {
      username: 'victor'
    }

    const component = render(
      <Blog
        blog={blog}
        user={user}
        likeBlogAction={jest.fn()}
        deleteBlogAction={jest.fn()}
        showMessageAction={jest.fn()}
      />
    )

    const element = component.container.querySelector('div.header')
    expect(element.textContent).toBe('Learning React written by Victor Molero')

    const infoElement = component.container.querySelector('div.blogInfo')
    expect(infoElement).toHaveStyle('display: block')
  })

  test('display blog info when header is clicked', () => {
    const blog = {
      title: 'Learning React',
      author: 'Victor Molero',
      url: 'http://learning-react.com',
      likes: 7,
      user: {
        username: 'victor'
      }
    }

    const stubFn = () => {}

    const user = {
      username: 'victor'
    }

    const component = render(
      <Blog
        blog={blog}
        user={user}
        likeBlogAction={stubFn}
        deleteBlogAction={stubFn}
        showMessageAction={stubFn}
      />
    )

    const element = component.container.querySelector('div.header')
    fireEvent.click(element)

    const infoElement = component.container.querySelector('div.blogInfo')
    expect(infoElement).toHaveStyle('display: block')

    const deleteButton = component.getAllByText('delete')
    expect(deleteButton.length).toBe(1)
  })

  test('delete button is not shown if entry belongs to a different user', () => {
    const blog = {
      title: 'Learning React',
      author: 'Victor Molero',
      url: 'http://learning-react.com',
      likes: 7,
      user: {
        username: 'victor'
      }
    }

    const stubFn = jest.fn()

    const user = {
      username: 'daniel'
    }

    const component = render(
      <Blog
        blog={blog}
        user={user}
        likeBlogAction={stubFn}
        deleteBlogAction={stubFn}
        showMessageAction={stubFn}
      />
    )
    const element = component.container.querySelector('div.header')
    fireEvent.click(element)
    let deleteButton
    try {
      deleteButton = component.getByText('delete')
    } catch (err) {
      // do nothing
    } finally {
      expect(deleteButton).not.toBeDefined()
    }
  })
})
