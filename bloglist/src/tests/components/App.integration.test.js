import React from 'react'
import { waitForElement } from '@testing-library/react'
import '../setupTests'
import App from '../../App'
import testHelper from '../testHelper'

jest.mock('../../services/blogService')
jest.mock('../../services/loginService')

describe('<App />', () => {
  test('if no user logged, blogs are not rendered', async () => {
    const component = testHelper.renderWithRedux(<App />)
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

    localStorage.setItem('login', JSON.stringify(user))
    const component = testHelper.renderWithRedux(<App />)
    await waitForElement(() =>
      component.container.querySelectorAll('.blogListing')
    )
    const blogListingLis = component.container.querySelectorAll('.blogListing')
    expect(blogListingLis.length).toBe(2)
  })
})
