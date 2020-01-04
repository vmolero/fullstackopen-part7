/* eslint no-undef: "off", prefer-arrow-callback: "off", func-names: "off" */
describe('Blogs ', () => {
  beforeEach(function() {
    cy.visit('http://localhost:3000')
  })

  it('front page can be opened', function() {
    cy.contains('Blogs')
  })

  describe('when logged in', function() {
    beforeEach(function() {
      cy.login('victor', '1234')
    })

    it('name of the user is shown', function() {
      cy.contains('logged in as victor')
    })

    it('a new blog can be created', function() {
      cy.get('[data-cy=show-form-button]').click()
      cy.get('[data-cy=author-input]').type('Sponge Bob')
      cy.get('[data-cy=title-input]').type('The box')
      cy.get('[data-cy=url-input]').type('http://the-box.com')
      cy.get('[data-cy=create-blog-button]').click()
      cy.get('[data-cy=toast').contains(
        'Blog entry The box by Sponge Bob created successfully'
      )
    })
  })
})
