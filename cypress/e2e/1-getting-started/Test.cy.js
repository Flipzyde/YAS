/// <reference types="cypress"/>

describe('Saucedemo Testing', () =>{

  it('Verify navigation to webpage', () => {
    cy.visit('https://www.saucedemo.com/');
  });

  })
  
   

  const navigateToVerify = () => {
    cy.get('.inventory_container .inventory_item')
      .should('have.length', 6)
      .eq(0)
      .should('contain', 'Sauce Labs Backpack')
      .find('[data-test="add-to-cart-sauce-labs-backpack"]')
      .click()
      .should('contain', 'Remove');

    cy.get('.inventory_item')
      .eq(1)
      .find('[data-test="add-to-cart-sauce-labs-bike-light"]')
      .click();

    cy.get('.inventory_item')
      .eq(2)
      .find('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]')
      .click();
  };

  it('verify App logo on login page', () => {
    cy.get('.login_logo').should('be.visible');
  });

  it('verify login', () => {
    cy.get('[placeholder="Username"]').type('standard_user');
    cy.get('[placeholder="Password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();
    cy.location('pathname').should('eq', '/inventory.html');
  });

  it('verify error message with invalid login details', () => {
    cy.get('[placeholder="Username"]').type('standad_user');
    cy.get('[placeholder="Password"]').type('secret_auce');
    cy.get('[data-test="login-button"]').click();
    cy.get('[data-test="error"]').should('contain', 'Username and password do not match any user in this service');
  });

  it('verify homepage content', () => {
    navigateToVerify();
  });

  it('verify unauthorized user in cart session', () => {
    cy.get('.shopping_cart_link').click();
    cy.location('pathname').should('contain', '/');
  });

  it('verify cart content', () => {
    navigateToVerify();
    cy.get('.shopping_cart_link').click();
    cy.location('pathname').should('contain', '/cart.html');
    cy.get('.cart_desc_label').should('be.visible');
    cy.get('.cart_item').should('have.length', 3);
    cy.get('[data-test="checkout"]').click();
  });

  it('verify checkout button and page', () => {
    navigateToVerify();
    cy.get('.shopping_cart_link').click();
    cy.get('[data-test="checkout"]').click();
    cy.location('pathname').should('contain', '/checkout-step-one.html');
    cy.get('.title').should('be.visible').and('contain', 'Checkout: Your Information');
  });

  it('verify checkout firstname, lastname, and postcode', () => {
    navigateToVerify();
    cy.get('.shopping_cart_link').click();
    cy.get('[data-test="checkout"]').click();
    cy.location('pathname').should('contain', '/checkout-step-one.html');
    cy.get('[data-test="firstName"]').type('Juskie');
    cy.get('[data-test="lastName"]').type('Ben');
    cy.get('[data-test="postalCode"]').type('53662');
    cy.get('[data-test="continue"]').click();
  });

  it('verify checkout confirmation details and success page', () => {
    navigateToVerify();
    cy.get('.shopping_cart_link').click();
    cy.get('[data-test="checkout"]').click();
    cy.location('pathname').should('contain', '/checkout-step-one.html');
    cy.get('[data-test="firstName"]').type('Juskie');
    cy.get('[data-test="lastName"]').type('Ben');
    cy.get('[data-test="postalCode"]').type('53662');
    cy.get('[data-test="continue"]').click();
    cy.location('pathname').should('contain', '/checkout-step-two.html');
    cy.get('.title').should('be.visible').and('contain', 'Checkout: Overview');
    cy.get('.summary_info').should('be.visible');
    cy.get('[data-test="finish"]').click();
    cy.location('pathname').should('contain', '/checkout-complete.html');
    cy.get('.complete-header').should('be.visible').and('contain', 'Thank you for your order!');
  });