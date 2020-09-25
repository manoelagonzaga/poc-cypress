export class HomePage {


  getTitle(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get('app-home h1');
  }
}