import React from 'react'
import '../../setupTests'
import UserView from '../../../components/views/UserView'
import testHelper from '../../testHelper'

describe('<HomeView />', () => {
  let component = null
  beforeEach(() => {
    const user = {
      username: 'tester0',
      token: '1231231214',
      name: 'Tim Tester'
    }

    const user1 = {
      id: '1',
      username: 'tester1',
      name: 'Alice Tester'
    }

    const user2 = {
      id: '2',
      username: 'tester2',
      name: 'Bob Tester'
    }

    const user3 = {
      id: '3',
      username: 'tester3',
      name: 'Tim Tester'
    }

    component = testHelper.renderWithRouterAndRedux(<UserView userId={'2'} />, {
      initialState: {
        blogs: [],
        user,
        message: { type: '', text: '' },
        users: [user3, user1, user2]
      }
    })
  })
  test('if no user logged, blogs are not rendered', async () => {
    const blogList = component.container.querySelector('blogList')
    expect(blogList).toBeDefined()
  })
})
