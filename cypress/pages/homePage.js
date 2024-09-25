 export class homePage{

    webLocators={

        searchInput:".form-control.input-lg",
        clickSearchIcon:".btn.btn-default.btn-lg",
        product:"img[title='MacBook']",
        clickAddToCart:'Add to Cart',
        successMessage:"div.alert.alert-success.alert-dismissable"

    }


    OpenURL(){
        cy.visit(Cypress.e2e('baseURL'))
    }

    product(productName){
        cy.get(this.webLocators.product).type(productName)
    }

    clickSearchIcon(){
        cy.get(this.webLocators.clickSearchIcon).click()
    }

    clickAddToCart(){
        cy.contains(this.webLocators.clickAddToCart).first().click()
    }

    successMessage(){
        return cy.get(this.webLocators.successMessage)
    }
 }