import {Given, When, Then} from '@badeball/cypress-cucumber-preprocessor'
import '../../support/commands'

Given('lauch site',() =>{
    cy.visitPage()
})

Then('insert username',() =>{
    cy.inputUserName()
})

Then('insert password',() =>{
    cy.inputPassword()
})

Then('click on sign in button',() =>{
    cy.signInButton()
})

Then('Click on sign out button',() =>{
    cy.signOutButton()
})






