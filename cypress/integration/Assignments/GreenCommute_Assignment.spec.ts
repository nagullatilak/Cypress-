import {RobotEyes,RobotHands,Dependencies } from '../../robots/wikipedia/GreenCommute_Robot';

context('Search Test', () => {
const robotEyes = new RobotEyes();
const robotHands = new RobotHands();
const dependencies = new Dependencies()

    describe('Search the required information', ()=>{
           before(()=>{
            dependencies.visitWikipedia(Cypress.env('url'));
           })
        it('Enter the Location', () => {
             robotEyes.checkTheHeading()  
             robotHands.clickOnNextButton(':nth-child(1) > [data-testid=button] > .MuiButton-label')
             cy.on('window.alert',(txt)=>{
              expect(txt).to.contains('please enter the location')
             })
             
             robotHands.clickOnSerchbox('#root > div > div > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-7 > div > div.jss3 > div.jss7 > div > div > div > div')
             robotHands.enterTheLocation(`root > div > div > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-7 > div > div.jss3 > div.jss7 > div > div`,"Hyderabad")
             cy.get('#root > div > div > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-7 > div > div.jss3 > div.jss7 > div > div > div > div').type('{downarrow}{enter}')
             cy.get('#root > div > div > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-7 > div > div.jss3 > div.jss7 > div > div > div > div> input').should('have.value','Hyderabad, Telangana, India')
             robotHands.clickOnNextButton(':nth-child(1) > [data-testid=button] > .MuiButton-label')
            });
            it('Enter Job location',() =>{
                robotHands.clickOnJobLocation('#root > div > div > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-7 > div > div.jss3 > div.jss7 > div > div > div > div >')
                robotHands.enterTheJobLocation(`root > div > div > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-7 > div > div.jss3 > div.jss7 > div > div`,"Hydera")
                cy.get('#root > div > div > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-7 > div > div.jss3 > div.jss7 > div > div > div > div').type('{downarrow}{enter}')
                cy.get('#root > div > div > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-7 > div > div.jss3 > div.jss7 > div > div > div > div> input').should('have.value','Hyderabad, Telangana, India')
                robotHands.clickOnNextButton(':nth-child(1) > [data-testid=button] > .MuiButton-label')
            })
            it('Enter the Skills',()=>{
                robotHands.clickOnSerchbox('#root > div > div > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-7 > div > div.jss3 > div.jss7 > div > div > div > div')
                var skills = ["Java","Javascript","Ui"]
                for(let i =0;i<skills.length;i++){
                    robotHands.enterTheSkils(skills[i])
                }
                robotEyes.checkTheSkills()
                robotHands.clickOnNextButton(':nth-child(1) > [data-testid=button] > .MuiButton-label')    
                robotEyes.urlChecking('/findJobs')
                robotEyes.locationCheckInHomePage('[data-testid=location-placeholder] > .MuiTypography-root','Hyderabad, Telangana, India')    
            })
            it('Click on Filter button',() =>{
                robotHands.clickOnFilter('[data-testid=filterButton')
               // cy.get('body > div.MuiDialog-root > div.MuiDialog-container.MuiDialog-scrollPaper > div > div > div.MuiGrid-root.jss112.MuiGrid-container.MuiGrid-spacing-xs-4 > div:nth-child(1) > div > div:nth-child(2) > div > label > span.MuiButtonBase-root.MuiIconButton-root.jss119.MuiCheckbox-root.jss117 > span.MuiIconButton-label > input.jss122').check()
                //cy.get(':nth-child(1) > [data-testid=filter-type] > :nth-child(2) > .jss97').click()
                robotEyes.checkTheCheckBox1(':nth-child(1) > [data-testid=filter-type] > :nth-child(2) > .jss97','0-10 kms')
                robotEyes.checkTheCheckBox2(':nth-child(4) > [data-testid=filter-type] > :nth-child(2) > .jss97','Full Time')
                robotHands.clickOnApplyButton(':nth-child(2) > [data-testid=button]')
            })
           it('Click on Clear All',() =>{
                    robotEyes.checkTheClearAllText('jss87 > .MuiGrid-container > .MuiGrid-grid-xs-2','clear all') 
                    robotHands.clickOnClearAll()
            })
            it('Click On Job Post',()=>{
                robotHands.clickOnJobPost(':nth-child(3) > .jss139 > [data-testid=jobCard-placeholder]')
            })   
            it('Save the Job',() =>{
                robotHands.clickOnSaveButton('.MuiGrid-root > .MuiButton-outlined')
                
                 robotEyes.checkTheText('MuiAlert-message','Job saved for future reference.')
            })
            it('Go to Saved Jobs',()=>{
               robotHands.clickOnSavedjobs(':nth-child(3) > .MuiListItemText-root > .MuiTypography-root')
               robotEyes.urlChecking('/savedJobs') 
            })
            it('Click on saved job',()=>{
                robotHands.selectSavedJobs(':nth-child(1) > .jss178 > [data-testid=jobCard-placeholder]')
            })
            it('Remove the Job',()=>{
                robotHands.clickonRemoveButton('.MuiButton-outlined')
                robotEyes.checkTheText('MuiAlert-message','Job removed from saved jobs.')
            })
    });
   

});