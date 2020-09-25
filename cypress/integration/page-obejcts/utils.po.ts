export type User = {
  user: string;
  password: string;
};

type Users = {
  'rm': User;
  'protheus': User;
}

export const users: Users = {
  'rm': {
    user: 'mestre',
    password: 'totvs@123'
  },
  'protheus': {
    user: '022meurh',
    password: 'totvs'
  }
};


export class Utils {

  navigateToUrl(url: string): void {
    cy.visit(url);
  }

  mobileView(mobileName?: Cypress.ViewportPreset): void {
    if (mobileName) {
      cy.viewport(mobileName);
    } else {
      cy.viewport(1366, 768);
    }
  }

  login({ user, password }: User): void {
    cy.get('app-login [name=user] input').type(user);
    cy.get('app-login [name=password] input').type(password);
    cy.get('app-login .login-button button').click();
  }
}