import React from 'react'
import { waitForElement } from '@testing-library/react'
import '../../setupTests'
import HomeView from '../../../components/views/HomeView'
import testHelper from '../../testHelper'

jest.mock('../../../services/blogService')
jest.mock('../../../services/loginService')

describe('<HomeView />', () => {
  test('if no user logged, blogs are not rendered', async () => {
    const component = testHelper.renderWithRouterAndRedux(<HomeView />)
    const formElement = component.container.querySelector('form')
    expect(formElement).toBeDefined()
    const blogListingDiv = component.container.querySelector('.blogListings')
    expect(blogListingDiv).toBe(null)
  })

  test('should display blog list for a logged user', async () => {
    const user = {
      username: 'tester',
      token: '1231231214',
      name: 'Tim Tester'
    }

    const component = testHelper.renderWithRouterAndRedux(<HomeView />, {
      initialState: { blogs: [], user, message: { type: '', text: '' } }
    })
    await waitForElement(() =>
      component.container.querySelectorAll('.blogListing')
    )
    const blogListingLis = component.container.querySelectorAll('.blogListing')
    expect(blogListingLis.length).toBe(2)
  })
})
