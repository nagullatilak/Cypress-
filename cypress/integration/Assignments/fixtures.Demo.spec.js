/// <reference types = "cypress"/>
describe('Fixtures Demo',() =>{
    beforeEach(function(){
      cy.fixture('example').then(function(data){
          this.data = data
      })
    })
    it('Enter the details',function(){
        cy.visit('http://demo.automationtesting.in/Register.html')
        //cy.get('.container center.h2').should('have.value','Register')
        cy.get(':nth-child(1) > :nth-child(2) > .form-control').type(this.data.name)
        cy.get(':nth-child(1) > :nth-child(3) > .form-control').type(this.data.lastName)
        cy.get('.col-md-8 > .form-control').type(this.data.address)
        cy.get('#eid > .form-control').type(this.data.email)
        cy.get(':nth-child(4) > .col-md-4 > .form-control').type(this.data.phoneNo)
        cy.get('[type="radio"]').should('have.length',2).first().check()
        //cy.get('#checkbox1').check().should('be.checked').and('have.value','Cricket')
        //cy.get('#checkbox2').check().should('be.checked').and('have.value','Movies')
        //cy.get('#checkbox3').check().should('be.checked').and('have.value','Hockey')
        //cy.get('#checkbox3').uncheck().should('not.be.checked').and('have.value','Hockey')
        cy.get('input[type="checkbox"]').check(['Cricket','Hockey'])
        cy.get('#Skills').scrollIntoView().select('AutoCAD').should('have.value','AutoCAD')
        cy.get('#countries').select('India').should('have.value','India')
        cy.get('#msdd').click()
        cy.get('a.ui-corner-all').contains('English').click()
        cy.get('a.ui-corner-all').contains('Japanese').click()
        cy.get('[role="combobox"]').click({force : true})
        cy.get('.select2-search__field').type('Ind')
        cy.get('.select2-search__field').type('{enter}')
        cy.get('#yearbox').select(this.data.DOB[0],{force : true}).should('have.value','1998')
        cy.get(':nth-child(11) > :nth-child(3) > .form-control').select(this.data.DOB[1]).should('have.value','June')
        cy.get('#daybox').select(this.data.DOB[2]).should('have.value','7')
        cy.get('#firstpassword').clear().type(this.data.pass1)
        cy.get('#secondpassword').clear().type(this.data.pass2)
        cy.screenshot('my-image')
        cy.get('#submitbtn').click()
    })
   
})