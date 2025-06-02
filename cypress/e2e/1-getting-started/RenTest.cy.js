/// <reference types="cypress" />

it('User can login successfully', () => {

    //User can sign in
  cy
    .visit('https://renweb-staging-v3.renmoney.com/')
    .get('.nav__actions > :nth-child(1)').click()
    .get('#email').type('Anthonyolaniyan146@gmail.com')
    .get('.btn').click()
    
    .get('#change-password-type-trigger').click()
    .get('#password').type('P@ssword222333')
    .get('#change-password-type-trigger').click()
    .get('.btn').click()

    //Verify user is on the dashboard
  //cy.get('.mb-3').contains('Hello')

    //Verify user is on Tier 3
  cy.get('app-sidebar > [title="More"]').dblclick()
    .get('[routerlink="/p/more/manage-account-tier"] > .menu__item__left').click()
    .get('.card-body').should('contain', 'TIER 3')

    //User can send money
   cy.get('app-sidebar > [title="Home"] > .menu-title').click()
     .get('[href="/p/transactions/transfer"]').click()
     .get('#bankType').select('Transfer To Other Banks')
     .get('.ant-select-selection-search-input').type('FCMB', {force: true})
     .get(':nth-child(1) > .ant-select-item-option-content').click()
     .get('#accountNumber').type('6879676019')
     .get('#accountName').should('not.be.empty')
     .get('.transfer-form__btn').click()
     .get('.mb-3 > .form-control').should('not.be.null')
     .get('.mb-3 > .form-control').type(2000)
     .get('.mb-3 > .form-control').should('have.value', '₦2,000')
     .get('#transfer__narration').type('narration')
     .get('.transfer-form__btn').click()
     .get('[name="1"]').type(5)
     .get('[name="2"]').type(6)
     .get('[name="3"]').type(1)
     .get('[name="4"]').type(3)
})