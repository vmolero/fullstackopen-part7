import React from 'react'
import { connect } from 'react-redux'

const UserList = ({ users }) => {
  return (
    <>
      <div className="userList">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Blog number</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.blogs.length}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

const selectUsers = blogs => {
  function hasUsername(blog) {
    return 'user' in blog && 'username' in blog.user
  }

  function includesUsername(key, obj) {
    return Object.keys(obj).includes(key)
  }
  return blogs.reduce((carry, blog) => {
    if (hasUsername(blog) && !includesUsername(blog.user.username, carry)) {
      return { ...carry, [blog.user.username]: blog.user }
    }
    return carry
  }, {})
}

const mapStateToProps = state => ({ users: selectUsers(state.blogs) })

export { UserList }
export default connect(mapStateToProps, null)(UserList)
