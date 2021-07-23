import { BaseHands, BaseEyes, BaseDependencies } from '../BaseRobot';


export class Dependencies extends BaseDependencies {
   
    visitWikipedia(url : string){
        this.accessUrl(url);
    }
}
export class RobotHands extends BaseHands{
     clickOnSerchbox(id : string){
         this.clickOnDomElement(id)
     }
    enterTheLocation(id : string , location : string){
        this.typeTextonId(id,location)
    }
    clickOnNextButton(element : string){
        this.clickOnDomElement(element)
    }
    clickOnJobLocation(element : string){        
        this.clickOnDomElement(element)
    }
    enterTheJobLocation(id : string , jobLocation : string){
        this.typeTextonId(id,jobLocation)
    }
    enterTheSkils(skill : string){
        this.typeTextonId(`root > div > div > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-7 > div > div.jss3 > div.jss7 > div > div`,skill)
        cy.get('#root > div > div > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-7 > div > div.jss3 > div.jss7 > div > div > div > div').type('{downarrow}{enter}')
    }
    clickOnFilter(filter : string){
        this.clickOnDomElement(filter)
        this.clickOnDomElement(':nth-child(1) > [data-testid=filter-type] > :nth-child(2) > .jss97')  
        this.clickOnDomElement(':nth-child(4) > [data-testid=filter-type] > :nth-child(2) > .jss97') 
    }
    clickOnApplyButton(element : string){
        this.clickOnDomElement(element) 
    }
    clickOnClearAll(){
        this.clickOnDomElement('.jss87 > .MuiGrid-container > .MuiGrid-grid-xs-2')
    }
    clickOnJobPost(jobPost : string){
        this.clickOnDomElement(jobPost)
    }
    clickOnSaveButton(saveButton : string){
        this.clickOnDomElement(saveButton)
    }
    clickOnSavedjobs(savedJobs : string){
        this.clickOnDomElement(savedJobs)
    }
    selectSavedJobs(savedJob : string){
        this.clickOnDomElement(savedJob)
    }
    clickonRemoveButton(removeButton : string){
        this.clickOnDomElement(removeButton)
    }

}
export class RobotEyes extends BaseEyes{
    checkTheHeading(){
        this.seesDomContainText('[data-testid=heading-text] > .MuiTypography-root','More than 2000 people are using Green Commute ')
    }
    urlChecking(url : string){
        this.seesPathNameInUrl(url)
    }
    locationCheckInHomePage(locator : string , text : string){
        this.seesDomContainText(locator,text)
    }
    checkTheLocationText(){
        this.seesDomContainText(`root > div > div > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-7 > div > div.jss3 > div.jss7 > div > div > div > div>input`,'Hyderabad, Telangana, India')
    }
    checkTheSkills(){
        this.seesTextWithId(`root > div > div > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-7 > div > div.jss3 > div.jss7 > div > div > div > div > div:nth-child(2) > span > h4`,'JAVA_DEVELOPER')
        this.seesTextWithId(`root > div > div > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-7 > div > div.jss3 > div.jss7 > div > div > div > div > div:nth-child(3) > span > h4`,'JAVASCRIPT_DEVELOPER')
        this.seesTextWithId(`root > div > div > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-7 > div > div.jss3 > div.jss7 > div > div > div > div > div:nth-child(4) > span > h4`,'UI_DEVELOPER')
    }
    checkTheCheckBox1(element : string,value1:string){
    this.seesDomContainText(element,value1)
    }
    checkTheCheckBox2(element : string ,value2 : string){
           this.seesDomContainText(element,value2)
     }
     checkTheClearAllText(id : string ,text : string){
         this.seesTextWithClass(id ,text)
     }
     checkTheText(locator : string ,name : string){
         this.seesTextWithClass(locator,name)
     }
     
}