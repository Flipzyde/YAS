/// <reference types="cypress"/>

describe('Automation Exercise Testing', () =>{
  beforeEach(() => {
    
     cy.visit('https://www.automationexercise.com/')
    
  });

    it('Verify text and image in page is visible', () => {
      cy.get('.active > :nth-child(1) > h1').should('have.text','AutomationExercise')
        .get('a > img').should('be.visible')
   });

     it('Verify user can sign up successfully', () => {
      cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
        .get('[data-qa="signup-name"]').type('Yorkshire')
        .get('[data-qa="signup-email"]').type('MeetingRoom8@gmail.com')
        .get('[data-qa="signup-button"]').click()
        .get('#id_gender1').click()
        .get('[data-qa="password"]').type('ABC')
        .get('[data-qa="days"]').select(2)
        .get('[data-qa="months"]').select('January')
        .get('[data-qa="years"]').select('2019')
        .get('[data-qa="first_name"]').type('Yorkshire')
        .get('[data-qa="last_name"]').type('Ambulance')
        .get('[data-qa="company"]').type('Yorkshire Ambulance Service')
        .get('[data-qa="address"]').type('Brindley way')
        .get('[data-qa="country"]').select('Canada')
        .get('[data-qa="state"]').type('Wakefield')
        .get('[data-qa="city"]').type('Wakey')
        .get('[data-qa="zipcode"]').type('WF2 ')
        .get('[data-qa="mobile_number"]').type('0748845621')
        .get('[data-qa="create-account"]').click()
        .get('[data-qa="continue-button"]').click()
        .get(':nth-child(10) > a').should('contain',' Logged in')

        // Delete the account created
        .get('.shop-menu > .nav > :nth-child(5) > a').click()
        


   });


});