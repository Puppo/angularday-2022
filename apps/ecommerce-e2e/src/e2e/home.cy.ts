import { getPageHeader } from '../support/app.po';

describe('ecommerce', () => {
  beforeEach(() => cy.visit('/'));

  it('should display home page', () => {
    // Function helper example, see `../support/app.po.ts` file
    getPageHeader().contains('Home');
  });
});
