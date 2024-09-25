import { registerPage } from "../../pages/registerPage"
import registerData from "../../fixtures/registerData.json"
const registerObj = new registerPage()

describe("Test Autom", ()=>{

    it('register flow', function(){

        registerObj.OpenURL()
        registerObj.enterFirstName(registerData.firstName)
        registerObj.enterLastName(registerData.lastName)
        registerObj.enterEmail(registerData.email)
        registerObj.enterTelephone(registerData.phoneNumber)
        registerObj.enterPassword(registerData.password)
        registerObj.enterConfirmPassword(registerData.confirmPassword)
        registerObj.clickSubscribeRadioButton()
        registerObj.checkPolicyCheckBox()
        registerObj.clickContinueButton()
    })
})