import React from 'react'
import '../setupTests'
import { render } from '@testing-library/react'
import { UserList } from '../../components/UserList'
import { BrowserRouter } from 'react-router-dom'

describe('<UserList />', () => {
  test('should display user names', async () => {
    const getAllUserActionMock = jest.fn()
    const users = [
      { username: 'alice', name: 'Alice In Chains', id: 1, blogs: ['A', 'B'] },
      { username: 'bob', name: 'Bob Marley', id: 2, blogs: ['C', 'D'] },
      { username: 'tim', name: 'Tim Tester', id: 3, blogs: ['E', 'F'] }
    ]
    const { getByText } = render(
      <BrowserRouter>
        <UserList getAllUserAction={getAllUserActionMock} users={users} />
      </BrowserRouter>
    )
    expect(getByText('Alice In Chains')).toBeDefined()
    expect(getByText('Bob Marley')).toBeDefined()
    expect(getAllUserActionMock.mock.calls.length).toBe(1)
  })
})
