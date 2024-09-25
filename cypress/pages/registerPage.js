export class registerPage
{

    webLocators={
        firstName: "#input-firstname",
        lastName: "#input-lastname",
        email: "#input-email",
        telephone: "#input-telephone",
        password:"#input-password",
        confirmPassword:"#input-confirm",
        subscribeRadioButton:".radio-inline",
        policyCheckBox:"input[type='checkbox']",
        continueButton:".btn.btn-primary"
    }

    OpenURL(){
        cy.visit(Cypress.env('URL'))
    }

    enterFirstName(FName){
        cy.get(this.webLocators.firstName).type("FName")
    }

    enterLastName(LName){
        cy.get(this.webLocators.lastName).type(LName)
    }    

    enterEmail(EMail){
        cy.get(this.webLocators.email).type(EMail)
    }

    enterTelephone(phoneNumber){
        cy.get(this.webLocators.telephone).type(phoneNumber)
    }

    enterPassword(Password){
        cy.get(this.webLocators.password).type(Password)
    }

    enterConfirmPassword(CPassword){
        cy.get(this.webLocators.confirmPassword).type(CPassword)
    }

    clickSubscribeRadioButton(){
        cy.get(this.webLocators.subscribeRadioButton).eq(1)
    }

    checkPolicyCheckBox(){
        cy.get(this.webLocators.policyCheckBox).check()
    }

    clickContinueButton(){
        cy.get(this.webLocators.continueButton).click()
    }
    }

