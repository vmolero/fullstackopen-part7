/* eslint no-undef: "off", prefer-arrow-callback: "off", func-names: "off" */
describe('Users ', function() {
  function provisionBlog(title, author, url) {
    cy.get('[data-cy=menu-home]').click()
    cy.get('[data-cy=show-form-button]').click()
    cy.get('[data-cy=author-input]').type(author)
    cy.get('[data-cy=title-input]').type(title)
    cy.get('[data-cy=url-input]').type(url)
    cy.get('[data-cy=create-blog-button]').click()
    cy.get('[data-cy=hide-form-button]').click()
  }

  before(function() {
    cy.resetDb()
  })

  beforeEach(function() {
    cy.provisionUser('victor', '1234', 'Victor Molero')
    cy.provisionUser('daniel', '1234', 'Daniel Molero')
    cy.visit('http://localhost:3000')
    cy.login('victor', '1234')
  })

  afterEach(function() {
    cy.logout()
    cy.resetDb()
  })

  it('Users has blogs listed', function() {
    provisionBlog('Title1', 'Author1', 'Url1')
    provisionBlog('Title2', 'Author2', 'Url2')
    provisionBlog('Title3', 'Author3', 'Url3')

    cy.contains('Title1')
    cy.contains('Title2')
    cy.contains('Title3')
  })

  it('should display the correct amount of entries', function() {
    provisionBlog('Title1', 'Author1', 'Url1')
    provisionBlog('Title2', 'Author2', 'Url2')
    provisionBlog('Title3', 'Author3', 'Url3')

    cy.get('[data-cy=menu-users]').click()
    cy.contains('Victor Molero').click()
    cy.contains('Title1')
    cy.contains('Title2')
    cy.contains('Title3')
  })
})
