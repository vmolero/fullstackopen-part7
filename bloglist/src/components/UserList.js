import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getAllUserAction } from '../actions/userAction'

const UserList = ({ users, getAllUserAction }) => {
  useEffect(() => {
    getAllUserAction()
  }, [getAllUserAction])

  return (
    <div className="userList">
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Blogs created</th>
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
  )
}

const mapStateToProps = state => ({ users: state.users })

export { UserList }
export default connect(mapStateToProps, { getAllUserAction })(UserList)
