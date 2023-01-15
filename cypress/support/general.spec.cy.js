
Cypress.Commands.add('visitPage',()=>{
    cy.visit('/')
})

Cypress.Commands.add('inputUserName',()=>{
    cy.get('input[name="username"]').type('barbora.dilska@yahoo.com')
})

Cypress.Commands.add('inputPassword',()=>{
    cy.get('input[name="password"]').type('Test1234')
})

Cypress.Commands.add('signInButton',()=>{
    cy.get('button[type="submit"]').click()
})

Cypress.Commands.add('signOutButton',()=>{
    cy.wait(2000)
    cy.get('button[data-test="sign-out-button"]').click()
})








/*export class Mail{

    variables:any
    
    buttonGetSignIn(){
        return cy.get('.zgh-utilities > .zgh-accounts > .zgh-login')
    }

    visitPage(){
        return cy.visit('/')
    }
}*/



