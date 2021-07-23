import { BaseHands, BaseEyes, BaseDependencies } from '../BaseRobot';


export class Dependencies extends BaseDependencies {
   
    visitWebsite(url : string){
        this.accessUrl(url);
    }
    
}
export class RobotHands extends BaseHands{
    amazonSignIn(){
        cy.get('#nav-signin-tooltip > .nav-action-button > .nav-action-inner').click({force : true})
        cy.get('#ap_email').type(Cypress.env('mobileNo'))
        cy.get('.a-button-inner > #continue').click()
        cy.get('#ap_password').type(Cypress.env('password'))
        cy.get('#signInSubmit').click()
    }
    clickOnSignInButton(id : string){
        this.clickOnId(id)
    }
    enterUserEmail(id: string , email : string){
        this.typeTextonId(id,email)
    }
   clickOnContinueButton(locator : string){
       this.clickOnDomElement(locator)
    }
    enterUserPassword(id : string,password : string){
                this.typeTextonId(id,password)
    }
    clickOnSubmit(submit : string){
        this.clickOnId(submit)
    }
    clickOnTodaysDeals(element : string){
        this.clickOnContainElement(element)

    }
    clickOnThirdProduct(element : string){
        this.clickOnDomElement(element)
    }
    clickOnAddToCart(id : string){
        this.clickOnId(id)
    }
    clickOnCart(id : string){
        this.clickOnId(id)
    }
    clickOnMobiles(id : string){
        this.clickOnId(id)
    }
    clickOnPrimeCheckBox(element : string){
        this.clickOnDomElement(element)
    }
    getDeliveryDate(id : string){
        this.getTextFromId(id)
    }
    clickOnLeftNavigationMenu(id : string){
        this.clickOnId(id)
    }
    clickMobiles(locator : string){
        this.clickOnDomElement(locator)
    }
    goBack(id : string){
        this.clickOnId(id)
    }
    waitSomeTime(time : number){
        this.wait(time)
    }
    clickOnYourOrders(id : string){
        this.clickOnId(id)
    }
    clickOnSerchbox(){
        this.typeTextonId('twotabsearchtextbox','Todays Deals')
        cy.get('#twotabsearchtextbox').type('{downarrow}{enter}')
        //[data-asin="B075KKZ6DG"] > .sg-col-inner > .celwidget > .s-expand-height > .a-spacing-medium > [data-component-type="s-product-image"] > .a-link-normal > .a-section > .s-image
        //[data-asin="B0719BDVB2"] > .sg-col-inner > .celwidget > [data-component-type="s-impression-logger"] > .rush-component.s-expand-height > .s-expand-height > .a-spacing-medium > .rush-component > .a-link-normal > .a-section > .s-image
    }
    selectThirdItem(){
        this.clickOnId(`search > div.s-desktop-width-max.s-opposite-dir > div > div.s-matching-dir.sg-col-16-of-20.sg-col.sg-col-8-of-12.sg-col-12-of-16 > div > span:nth-child(4) > div.s-main-slot.s-result-list.s-search-results.sg-row > div:nth-child(6) > div > span > div > div > div > div > span > a > div > img`)
    }
    clickOnAddCart(id : string){
        this.clickOnId(id)
    }
    clickOnOrdersPlaced(id : string){
        this.clickOnId(id)
    }
    selectYear(id : string){
        this.clickOnId(id)
    }
    getUsersName(id : string){
        const name =this.getTextFromId(id)
        return name
    }
    mouseOverOnSignIn(id : string){
        this.mouseOverWithId(id)
    }
    clickOnAddress(id : string){
        this.clickOnId(id)
    }
    clickOnAddAddressOrPickUpPoint(id : string){
        this.clickOnId(id)
    }
    clickOnYourAccount(element : string){
        this.clickOnDomElement(element)
    }
   clickOnYourAddresses(element : string){
       this.clickOnDomElement(element)
   }
   clickOnAddAddress(id : string){
       this.clickOnId(id)
   }
   enterNewAddress(id : string,name : string){
       this.typeTextonId(id , name)
   }
   clickOnStateDropDown(id: string){
       cy.get(`#${id}`).click().type('{enter}')
   }
   addressType(id : string){
       this.clickOnId(id)
   }
   selectHomeAddress(id : string){
       this.clickOnId(id)
   }
   clickOnAddAddressButton(id : string){
       this.clickOnDomElement(id)
   }
   clickOnPaymentOptions(id : string){
       this.clickOnId(id)
   }
   clickOnSavedCards(element : string){
       this.clickOnDomElement(element)
   }
}
export class RobotEyes extends BaseEyes{
    accountCheck(id : string,text : string){
        this.seesTextWithId(id,text)
    }
    checkTheCart(id : string,text : string){
        this.seesTextWithId(id,text)
    }
    checkTheProductIsAddedToCart(id : string , text : string){
         this.seesTextWithId(id,text)
    }
    checkTheState(id : string,state : string){
        this.seesTextWithId(id,state)
    }
    addressSavedCheck(id : string,text : string){
        this.seesTextWithId(id,text)
    }
    checkTheUserName(id : string,text : string){
        this.seesTextWithId(id,text)
    }
    urlCheck(path : string){
        this.seesPathNameInUrl(path)
    }
    todaysDealsCheck(locator:string,text : string){
        this.seesTextWithId(locator,text)
    }
    urlShould(text : string){
        this.seesUrlShould(text)
    }
    checkTheYear(id : string ,year : string){
        this.seesTextWithId(id ,year)
    }
    checkTheTitle(id : string , title : string){
        this.seesTextWithId(id,title)
    }
    checkTheproductTitle(id : string , text : string){
        this.seesTextWithId(id,text)
    }
    atmNumberCheck(element : string,text : string){
        this.seesTextWithClass(element,text)
    }
}