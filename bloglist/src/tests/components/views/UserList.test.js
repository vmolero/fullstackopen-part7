import React from 'react'
import '../../setupTests'
import { render } from '@testing-library/react'
import { UserList } from '../../../components/UserList'

describe('<UserList />', () => {
  test('should display user names', async () => {
    const user = { token: '122233', username: 'tim' }
    const users = [
      { username: 'alice', name: 'Alice In Chains', id: 1, blogs: ['A', 'B'] },
      { username: 'bob', name: 'Bob Marley', id: 2, blogs: ['C', 'D'] },
      { username: 'tim', name: 'Tim Tester', id: 3, blogs: ['E', 'F'] }
    ]
    const { getByText } = render(<UserList user={user} users={users} />)
    expect(getByText('Alice In Chains')).toBeDefined()
    expect(getByText('Bob Marley')).toBeDefined()
    expect(getByText('Tim Tester')).toBeDefined()
  })
})
