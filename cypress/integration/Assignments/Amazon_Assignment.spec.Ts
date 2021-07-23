import {RobotEyes,RobotHands,Dependencies } from '../../robots/wikipedia/Amazon_Robot';

context('Search Test', () => {
const robotEyes = new RobotEyes();
const robotHands = new RobotHands();
const dependencies = new Dependencies()
  describe('Amazon Shoping',()=>{
        before(()=>{
            dependencies.visitWebsite(Cypress.env('AmazonUrl'))
        })
        it('Open Amazon',()=>{
                robotHands.mouseOverOnSignIn('nav-link-accountList')
                robotHands.clickOnSignInButton('nav-signin-tooltip > .nav-action-button > .nav-action-inner')
                robotEyes.urlCheck('/ap/signin')
                robotHands.enterUserEmail('ap_email',Cypress.env('mobileNo'))
                robotHands.clickOnContinueButton('.a-button-inner > #continue')
                robotHands.enterUserPassword('ap_password',Cypress.env('password'))
                robotHands.clickOnSubmit('signInSubmit')
                robotEyes.accountCheck('nav-link-accountList-nav-line-1','Hello, tilak')
        })
        it('Click on Todays Deals and Add to Cart' , ()=>{
                robotHands.clickOnTodaysDeals("Today's Deals")
                robotEyes.todaysDealsCheck('a-page > div.column-parent > div.column-1 > div > div > h1',"Today's Deals")
                robotEyes.checkTheCart('nav-cart-count','0')
                robotHands.clickOnThirdProduct(':nth-child(3) > [data-testid=deal-card] > :nth-child(1) > .a-link-normal > .a-image-container > img')
                cy.get('#search > div.s-desktop-width-max.s-opposite-dir > div > div.s-matching-dir.sg-col-16-of-20.sg-col.sg-col-8-of-12.sg-col-12-of-16 > div > span:nth-child(4) > div.s-main-slot.s-result-list.s-search-results.sg-row > div:nth-child(3) > div > span > div > div > span > a').then(function(l){
                //cy.get('#octopus-dlp-asin-stream > ul > li:nth-child(2) > span > div > div.a-section.a-spacing-base.a-text-center.octopus-dlp-image-section > a').then(function(l){
                const txt = l.prop('href');
                    // get the url in logs 
                    cy.log(txt);
                    // launch the url again
                    dependencies.visitWebsite(txt);
                 })
              robotHands.clickOnAddCart('add-to-cart-button')
              robotHands.waitSomeTime(8000)
              robotHands.clickOnCart('nav-cart')
              robotEyes.checkTheProductIsAddedToCart('a-autoid-0-announce > span.a-dropdown-prompt','1')
        })
        it('Search for mobiles',() =>{
                cy.get('#nav-search-bar-form > div.nav-fill').type('mobiles').type('{enter}')
                 cy.get('#search > div.s-desktop-width-max.s-opposite-dir > div > div.s-matching-dir.sg-col-16-of-20.sg-col.sg-col-8-of-12.sg-col-12-of-16 > div > span:nth-child(4) > div.s-main-slot.s-result-list.s-search-results.sg-row > div:nth-child(22) > div > span > div > div > div:nth-child(2) > div.sg-col.sg-col-4-of-12.sg-col-4-of-16.sg-col-4-of-20 > div > div > span > a').then(function(l){
                //cy.get('#octopus-dlp-asin-stream > ul > li:nth-child(2) > span > div > div.a-section.a-spacing-base.a-text-center.octopus-dlp-image-section > a').then(function(l){
                //cy.get('[data-image-index="21"]').click().then(function(l){
                const txt = l.prop('href');
                // get the url in logs
                cy.log(txt);
                // launch the url again
                robotEyes.urlShould('mobiles')
                cy.visit(txt)
                 dependencies.visitWebsite(txt)
                 robotHands.waitSomeTime(8000)
                })
               
             })
       it('Check Amazon prime checkbox',function(){
                robotHands.clickOnMobiles('nav-xshop > a:nth-child(4)')
                robotHands.clickOnPrimeCheckBox(':nth-child(3) > .a-unordered-list > .a-spacing-micro > .a-list-item > .a-link-normal > .a-checkbox > label > .a-icon')
                cy.get('#search > div.s-desktop-width-max.s-opposite-dir > div > div.s-matching-dir.sg-col-16-of-20.sg-col.sg-col-8-of-12.sg-col-12-of-16 > div > span:nth-child(4) > div.s-main-slot.s-result-list.s-search-results.sg-row > div:nth-child(2) > div > span > div > div > div > div > span > a').then(function(l){
                robotHands.waitSomeTime(6000)
                const txt = l.prop('href');
                // get the url in logs
                cy.log(txt);
                // launch the url again
                dependencies.visitWebsite(txt);
                robotHands.waitSomeTime(6000)

                })
                robotHands.getDeliveryDate('ddmDeliveryMessage > b')
            })
            
        it('Navigation from left navigation to main-manu',()=>{
                robotHands.mouseOverOnSignIn('nav-link-accountList')
                robotHands.clickOnSignInButton('nav-signin-tooltip > .nav-action-button > .nav-action-inner')
                robotEyes.urlCheck('/ap/signin')
                robotHands.enterUserEmail('ap_email',Cypress.env('mobileNo'))
                robotHands.clickOnContinueButton('.a-button-inner > #continue')
                robotHands.enterUserPassword('ap_password',Cypress.env('password'))
                robotHands.clickOnSubmit('signInSubmit')
                robotEyes.accountCheck('nav-link-accountList-nav-line-1','Hello, tilak')
                robotHands.clickOnLeftNavigationMenu('nav-hamburger-menu')
                robotHands.waitSomeTime(6000)
                robotEyes.accountCheck('hmenu-customer-name > b','Hello, tilak')
                robotHands.clickMobiles('.hmenu-visible > :nth-child(15) > .hmenu-item')
                robotHands.goBack('hmenu-content > ul.hmenu.hmenu-visible.hmenu-translateX > li:nth-child(1) > a')
                robotHands.waitSomeTime(6000)
                //robotEyes.checkTheTitle('hmenu-content > ul.hmenu.hmenu-visible.hmenu-translateX > li:nth-child(2) > div','mobiles, tablets & more')
                robotHands.goBack('hmenu-canvas-background > .nav-sprite')
          })
        it.skip('Go to orders select past one year orders',()=>{
                robotHands.clickOnYourOrders('nav-orders')
                robotHands.enterUserEmail('ap_email',Cypress.env('mobileNo'))
                robotHands.clickOnContinueButton('.a-button-inner > #continue')
                robotHands.enterUserPassword('ap_password',Cypress.env('password'))
                robotHands.clickOnSubmit('signInSubmit')
                robotHands.clickOnOrdersPlaced('a-autoid-1-announce')
                //robotEyes.checkTheTitle('yourOrdersContent > div.a-row > div:nth-child(1) > h1','\n Your Orders\n')
                robotHands.selectYear('orderFilter_4')
                robotHands.waitSomeTime(6000)
                //robotEyes.checkTheproductTitle('ordersContainer > div.a-box-group.a-spacing-base.order.js-order-card > div.a-box.shipment > div > div > div > div.a-fixed-right-grid-col.a-col-left > div > div > div > div.a-fixed-left-grid-col.a-col-right > div:nth-child(1) > a','\nStrontium Ammo 16GB 2.0 USB Pen Drive (Silver)\n')
                cy.go('back')
                cy.go('back')
            })
        it('Payment options',()=>{
                robotHands.mouseOverOnSignIn('nav-link-accountList')
                robotHands.clickOnYourAccount('[href="/gp/css/homepage.html?ref_=nav_AccountFlyout_ya"]')
                robotHands.clickOnPaymentOptions('a-page > div.a-container > div > div:nth-child(3) > div:nth-child(2) > a > div > div > div > div.a-column.a-span9.a-span-last')
                robotHands.enterUserEmail('ap_email',Cypress.env('mobileNo'))
                robotHands.clickOnContinueButton('.a-button-inner > #continue')
                robotHands.enterUserPassword('ap_password',Cypress.env('password'))
                robotHands.clickOnSubmit('signInSubmit')
                 cy.contains('Nagulla Srinivasa Rao')
                 robotHands.clickOnSavedCards('.a-expander-header > .a-icon')
          })
        it('Add new Delivery address and verify address is added',()=>{
              robotHands.mouseOverOnSignIn('nav-link-accountList')
              robotHands.clickOnYourAccount('[href="/gp/css/homepage.html?ref_=nav_AccountFlyout_ya"]')
              robotHands.clickOnYourAddresses(':nth-child(3) > :nth-child(1) > .ya-card__whole-card-link > .a-box > .a-box-inner')
              robotHands.enterUserEmail('ap_email',Cypress.env('mobileNo'))
              robotHands.clickOnContinueButton('.a-button-inner > #continue')
              robotHands.enterUserPassword('ap_password',Cypress.env('password'))
              robotHands.clickOnSubmit('signInSubmit')
              robotEyes.checkTheTitle('a-page > div.a-section > div > h1','Your Addresses')
              robotHands.clickOnAddAddress('ya-myab-address-add-link > .a-box')
              robotHands.enterNewAddress('address-ui-widgets-enterAddressFullName',Cypress.env('fullName'))
              robotHands.enterNewAddress('address-ui-widgets-enterAddressPhoneNumber',Cypress.env('mobileNo'))
              robotHands.enterNewAddress('address-ui-widgets-enterAddressPostalCode',Cypress.env('pinCode'))
              robotHands.enterNewAddress('address-ui-widgets-enterAddressLine1',Cypress.env('houseNo'))
              robotHands.enterNewAddress('address-ui-widgets-enterAddressLine2',Cypress.env('village'))
              robotHands.enterNewAddress('address-ui-widgets-landmark',Cypress.env('landMark'))
              robotHands.enterNewAddress('address-ui-widgets-enterAddressCity',Cypress.env('town'))
              robotEyes.checkTheState('address-ui-widgets-enterAddressStateOrRegion > span > span > span','ANDHRA PRADESH')
              robotHands.addressType('address-ui-widgets-addr-details-address-type-and-business-hours > .a-button-inner > .a-button-text')
              robotHands.selectHomeAddress('dropdown1_1')
              //robotHands.waitSomeTime(6000)
              robotHands.clickOnAddAddressButton('.a-button-input')
              robotEyes.addressSavedCheck('yaab-alert-box > div > h4','Address saved')
                
           })
      
  })
})


