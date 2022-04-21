//  this tests cannot be made with best practices, best practice would be to have independent cypress attributes which are not subject to CSS or JS changes
//  if we had more complex project to handle instead of the one webpage, we could create functions per page (page-objects) and reuse them as functions in seperate tests

describe('Login to the local step Step instance and clicking on all tabs', () => {

    beforeEach(() => {
        cy.visit('/plans/list')
    })

    it('goes to Step login page and validates login by looking up for an element', () => {
        cy.get('[name="username"]')
            .clear()
            .type('admin')
        cy.get('[name="password"]')
            .clear()
            .type('init')
        cy.contains('Login')
            .click()
        cy.contains('New plan')
            .should('be.visible')
    })

    it('goes to Step login page and validates login by looking up for an element', () => {
        cy.get('[name="username"]')
            .clear()
            .type('admin')
        cy.get('[name="password"]')
            .clear()
            .type('init')
        cy.contains('Login')
            .click()
        cy.contains('New plan')
            .should('be.visible')

        cy.contains('Keywords') //Keywords tab
            .click()
        cy.contains('New keyword')
            .should('be.visible')

        cy.contains('Parameters') //Parameters tab
            .click()
        cy.contains('New parameter')
            .should('be.visible')

        cy.contains('Executions') //Executions tab
            .click()
        cy.contains('Execution list')
            .should('be.visible')

        cy.contains('Scheduler') //Scheduler tab
            .click()
        cy.contains('New task')
            .should('be.visible')

        cy.contains('Grid') //Grid tab
            .click()
        cy.contains('Token states')
            .should('be.visible')

        cy.contains('Admin') //Admin tab
            .click()
        cy.contains('Add user')
            .should('be.visible')

        cy.get('[id="dropdownMenuHelp"]') //Help button
            .click()
        cy.contains('Documentation')
            .should('be.visible')
        cy.contains('REST API')
            .should('be.visible')
        cy.contains('About')
            .should('be.visible')

        cy.get('[class="glyphicon glyphicon-menu-hamburger"]') //Hamburger button
            .click()
        cy.contains('Resources')
            .should('be.visible')
        cy.contains('Current Operations')
            .should('be.visible')
        cy.contains('Keyword packages')
            .should('be.visible')
        
        cy.visit('/resources') //Resources page inside the hamburger menu
        cy.contains('New resource')
            .should('be.visible')
        
        cy.visit('/operations') //Current Operations page inside the hamburger menu
        cy.contains('Current operations')
            .should('be.visible')
        
        cy.visit('/functionPackages') //Current Keyword packages page inside the hamburger menu
        cy.contains('New Keyword Package')
            .should('be.visible')
    })

})