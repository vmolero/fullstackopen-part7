/* eslint no-undef: "off", prefer-arrow-callback: "off", func-names: "off" */
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add('login', (username, password) => {
  cy.get('[data-cy=username-input]').type(username)
  cy.get('[data-cy=password-input]').type(password)
  cy.get('[data-cy=login-button]').click()
})

Cypress.Commands.add('logout', () => {
  cy.get('[data-cy=logout-button]').click()
})

Cypress.Commands.add('resetDb', () => {
  cy.request('POST', 'http://localhost:3000/api/testing/reset')
})

Cypress.Commands.add('provisionUser', (username, password, name) => {
  cy.request('POST', 'http://localhost:3000/api/users', {
    username,
    password,
    name
  })
})
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
