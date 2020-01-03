import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { getAllUserAction } from '../actions/userAction'
import { Link } from 'react-router-dom'
import { Table } from 'semantic-ui-react'

const UserList = ({ users, getAllUserAction }) => {
  useEffect(() => {
    getAllUserAction()
  }, [getAllUserAction])

  return (
    <div className="userList">
      <Table basic="very" celled collapsing>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>User</Table.HeaderCell>
            <Table.HeaderCell>Blogs created</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {users.map(user => (
            <Table.Row key={user.id}>
              <Table.Cell>
                <Link to={`/users/${user.id}`}>{user.name}</Link>
              </Table.Cell>
              <Table.Cell>{user.blogs.length}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  )
}

const mapStateToProps = state => ({ users: state.users })

UserList.propTypes = {
  user: PropTypes.objectOf(PropTypes.string).isRequired,
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
  blog: PropTypes.shape({
    title: PropTypes.string.isRequired
  }),
  getAllUserAction: PropTypes.func.isRequired
}

export { UserList }
export default connect(mapStateToProps, { getAllUserAction })(UserList)
