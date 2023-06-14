import { expect as expectChai } from 'chai'
import Homepage from '../pageobject/homepage.js'
import Loginpage from '../pageobject/loginpage.js'
import Registrationpage from '../pageobject/registration.js'
import fs from 'fs'
let logincredentails = JSON.parse(fs.readFileSync('test/testdata/logindata.json'))
let regiscredentails = JSON.parse(fs.readFileSync('test/testdata/registraiondata.json'))
let regisinvaliscredentails = JSON.parse(fs.readFileSync('test/testdata/registraioninvaliddata.json'))
const url = Homepage.homeApi
const domainurl = Homepage.domainApi
const response = await fetch(url);
const domainresponse = await fetch(domainurl);
var data = await response.json();
var domaindata = await domainresponse.json()
describe('sanity test', () => {
    it('To verify meity url is working by hitting it.', async () => {
        await Homepage.openurl()
        await browser.pause(1000)
        await Homepage.challengepop();
    })
    it('To verify scrolling banner with 5 images.', async () => {
        // locate the checkbox element using a CSS selector  
        // check that the checkbox has the "checked" attribute with a value of "true"
        await Homepage.login_master_icon.scrollIntoView({
            timeout: 3000,
            timeoutMsg: 'login_master_icon button not found'
        })
        await Homepage.login_master_icon.click()
        for (var i = 0; i < 5; i++) {
            const form = await Homepage.autobannerbutton[i];
            await form.waitUntil(async () => await form.getAttribute('class') === "active", {
                timeout: 10000,
                timeoutMsg: 'autobanner button not found' + i
            })
        }

    })
    it('To verify industries', async () => {
        var domain = domaindata.results

        await Homepage.industrieText.scrollIntoView()
        await browser.pause(500)
        for (var i = 1; i < domain.length; i++) {
            var domainfirstname = domain[i].name
            var domainDescription = domain[i].description
            var ret = await Homepage.industries_button[i].isClickable()
            if (ret === false) {
                console.log("********************************************************************")
                await Homepage.rightArrow.click()
            }
            await browser.pause(1000)

            var buttontext = await Homepage.industries_button[i].getText()
            var descriptiontext = await Homepage.industries_description.getText()
            await Homepage.industries_button[i].waitForClickable({
                timeout: 3000,
                timeoutMsg: '${buttontext} button not found'
            })
            await Homepage.industries_button[i].click()
            expectChai(domainfirstname).to.equal(buttontext)
            expectChai(domainDescription).to.equal(descriptiontext)
        }
        await browser.pause(5000)
    })
    it('To verify functionality of first name text field ', async () => {
        await Homepage.login_master_icon.scrollIntoView({
            timeout: 3000,
            timeoutMsg: 'login_master_icon button not found'
        })
        await Homepage.login_master_icon.click()
        await Homepage.serviceINCUBATORSView.scrollIntoView({
            timeout: 3000,
            timeoutMsg: 'incubator view in services is not displaying '
        })
        await browser.pause(1000)
        await Homepage.serviceINCUBATORSView.moveTo()
        await Homepage.registerButton[1].click()
        await Registrationpage.registerButton.click()
        await Registrationpage.firtsNameMandatory.waitForDisplayed({
            timeout: 3000,
            timeoutMsg: 'first name mandatory  mesasge is not displaying'
        })
        expectChai(await Registrationpage.firtsNameMandatory.getText()).to.equal("Firstname is mandatory")
        await Registrationpage.firstName.setValue("firstname")
        expectChai(await Registrationpage.firtsNameMandatory.isDisplayed()).to.equal(false)

    })
    it('To verify functionality of mobile text field ', async () => {
        await Homepage.login_master_icon.scrollIntoView({
            timeout: 3000,
            timeoutMsg: 'login_master_icon button not found'
        })
        await Homepage.login_master_icon.click()
        await Homepage.serviceINCUBATORSView.scrollIntoView({
            timeout: 3000,
            timeoutMsg: 'incubator view in services is not displaying '
        })
        await browser.pause(1000)
        await Homepage.serviceINCUBATORSView.moveTo()
        await Homepage.registerButton[1].click()
        await Registrationpage.registerButton.click()
        await Registrationpage.mobileNumbermandatory.waitForDisplayed({
            timeout: 3000,
            timeoutMsg: 'mobile number mandatory  mesasge is not displaying'
        })
        expectChai(await Registrationpage.mobileNumbermandatory.getText()).to.equal("Mobile number is mandatory")
        await Registrationpage.mobile.setValue("99643833838")
        expectChai(await Registrationpage.mobileNumbermandatory.isDisplayed()).to.equal(false)

    })
    it('To verify functionality of  password text field  ', async () => {
        await Homepage.login_master_icon.scrollIntoView({
            timeout: 3000,
            timeoutMsg: 'login_master_icon button not found'
        })
        await Homepage.login_master_icon.click()
        await Homepage.serviceINCUBATORSView.scrollIntoView({
            timeout: 3000,
            timeoutMsg: 'incubator view in services is not displaying '
        })
        await browser.pause(1000)
        await Homepage.serviceINCUBATORSView.moveTo()
        await Homepage.registerButton[1].click()
        await Registrationpage.registerButton.click()
        await Registrationpage.passwordMandatorya.waitForDisplayed({
            timeout: 3000,
            timeoutMsg: 'password mandatory  mesasge is not displaying'
        })
        expectChai(await Registrationpage.passwordMandatorya.getText()).to.equal("Password is required")
        await Registrationpage.password.setValue("password")
        expectChai(await Registrationpage.passwordMandatorya.isDisplayed()).to.equal(false)

    })
    it('To verify functionality of confirm password text field ', async () => {
        await Homepage.login_master_icon.scrollIntoView({
            timeout: 3000,
            timeoutMsg: 'login_master_icon button not found'
        })
        await Homepage.login_master_icon.click()
        await Homepage.serviceINCUBATORSView.scrollIntoView({
            timeout: 3000,
            timeoutMsg: 'incubator view in services is not displaying '
        })
        await browser.pause(1000)
        await Homepage.serviceINCUBATORSView.moveTo()
        await Homepage.registerButton[1].click()
        await Registrationpage.registerButton.click()
        await Registrationpage.confirmPasswordMandatory.waitForDisplayed({
            timeout: 3000,
            timeoutMsg: 'connfirm password mandatory  mesasge is not displaying'
        })
        expectChai(await Registrationpage.confirmPasswordMandatory.getText()).to.equal("Confirm password is required")
        await Registrationpage.confirmPassword.setValue("password")
        expectChai(await Registrationpage.confirmPasswordMandatory.isDisplayed()).to.equal(false)

    })
    it('To verify functionality of email text field ', async () => {
        await Homepage.login_master_icon.scrollIntoView({
            timeout: 3000,
            timeoutMsg: 'login_master_icon button not found'
        })
        await Homepage.login_master_icon.click()
        await Homepage.serviceINCUBATORSView.scrollIntoView({
            timeout: 3000,
            timeoutMsg: 'incubator view in services is not displaying '
        })
        await browser.pause(1000)
        await Homepage.serviceINCUBATORSView.moveTo()
        await Homepage.registerButton[1].click()
        await Registrationpage.registerButton.click()
        await Registrationpage.emailMandatory.waitForDisplayed({
            timeout: 3000,
            timeoutMsg: 'email mandatory  mesasge is not displaying'
        })
        expectChai(await Registrationpage.emailMandatory.getText()).to.equal("Email is mandatory")
        await Registrationpage.email.setValue("email@gmail.com")
        expectChai(await Registrationpage.emailMandatory.isDisplayed()).to.equal(false)

    })
    regiscredentails.forEach(({ firstname, lastname, mobilenumber, email, password, confirmpassword }) => {
        xit('To verify registration functionality with valids details', async () => {
            await Homepage.login_master_icon.scrollIntoView({
                timeout: 3000,
                timeoutMsg: 'login_master_icon button not found'
            })
            await Homepage.login_master_icon.click()
            await Homepage.serviceINCUBATORSView.scrollIntoView({
                timeout: 3000,
                timeoutMsg: 'incubator view in services is not displaying '
            })
            await browser.pause(1000)
            await Homepage.serviceINCUBATORSView.moveTo()
            await Homepage.registerButton[1].click()
            await Registrationpage.firstName.setValue(firstname)
            await Registrationpage.lastName.setValue(lastname)
            await Registrationpage.mobile.setValue(mobilenumber)
            await Registrationpage.email.setValue(email)
            await Registrationpage.password.setValue(password)
            await Registrationpage.confirmPassword.setValue(confirmpassword)
            await Registrationpage.registerButton.click()
            await Registrationpage.otppagecreateaccountname.waitForDisplayed({
                timeout: 3000,
                timeoutMsg: ' otp page is not displaying '
            })
            expectChai(await Registrationpage.otppagecreateaccountname.getText()).to.equal("Create An Account:")
        })
    })
    logincredentails.forEach(({ Username, Password }) => {
        it('To verify email or mobile text field functionality', async () => {
            await Homepage.login_master_icon.scrollIntoView({
                timeout: 3000,
                timeoutMsg: 'login_master_icon button not found'
            })
            await Homepage.login_master_icon.click()
            await Homepage.serviceINCUBATORSView.scrollIntoView({
                timeout: 3000,
                timeoutMsg: 'incubator view in services is not displaying '
            })
            await browser.pause(1000)
            await Homepage.serviceINCUBATORSView.moveTo()
            await Homepage.loginButton[1].click()
            await Homepage.logintext.scrollIntoView({
                timeout: 3000,
                timeoutMsg: 'login page is not opened so login option is not working '
            })
            await Loginpage.emailField.scrollIntoView({
                timeout: 3000,
                timeoutMsg: 'email text field  not found'
            })
            await Loginpage.emailField.setValue(Username)
            expectChai(await Loginpage.emailField.getValue()).to.equal(Username)
        })
    })
    logincredentails.forEach(({ Username, Password }) => {
        it('To verify password text field functionality', async () => {
            await Homepage.login_master_icon.scrollIntoView({
                timeout: 3000,
                timeoutMsg: 'login_master_icon button not found'
            })
            await Homepage.login_master_icon.click()
            await Homepage.serviceINCUBATORSView.scrollIntoView({
                timeout: 3000,
                timeoutMsg: 'incubator view in services is not displaying '
            })
            await browser.pause(1000)
            await Homepage.serviceINCUBATORSView.moveTo()
            await Homepage.loginButton[1].click()
            await Homepage.logintext.scrollIntoView({
                timeout: 3000,
                timeoutMsg: 'login page is not opened so login option is not working '
            })
            await Loginpage.passWord.scrollIntoView({
                timeout: 3000,
                timeoutMsg: 'email text field  not found'
            })
            await Loginpage.passWord.setValue(Password)
            expectChai(await Loginpage.passWord.getValue()).to.equal(Password)
        })
    })
    logincredentails.forEach(({ Username, Password }) => {
        it('To veify email or mobile and password fields are mandatory fields', async () => {
            var logintf = Loginpage.loginButton.isClickable()
            await Homepage.login_master_icon.scrollIntoView({
                timeout: 3000,
                timeoutMsg: 'login_master_icon button not found'
            })
            await Homepage.login_master_icon.click()
            await Homepage.serviceINCUBATORSView.scrollIntoView({
                timeout: 3000,
                timeoutMsg: 'incubator view in services is not displaying '
            })
            await browser.pause(1000)
            await Homepage.serviceINCUBATORSView.moveTo()
            await Homepage.loginButton[1].click()
            await Homepage.logintext.scrollIntoView({
                timeout: 3000,
                timeoutMsg: 'login page is not opened so login option is not working '
            })
            await Loginpage.loginButton.click()
            expectChai(await Loginpage.emaimandatort.isDisplayed()).to.equal(true)
            expectChai(await Loginpage.passWordmandatort.isDisplayed()).to.equal(true)
        })
    })
    logincredentails.forEach(({ Username, Password }) => {
        it('To verify register option functionality from login page.', async () => {
            await Homepage.login_master_icon.scrollIntoView({
                timeout: 3000,
                timeoutMsg: 'login_master_icon button not found'
            })
            await Homepage.login_master_icon.click()
            await Homepage.serviceINCUBATORSView.scrollIntoView({
                timeout: 3000,
                timeoutMsg: 'incubator view in services is not displaying '
            })
            await browser.pause(1000)
            await Homepage.serviceINCUBATORSView.moveTo()
            await Homepage.loginButton[1].click()
            await Homepage.logintext.scrollIntoView({
                timeout: 3000,
                timeoutMsg: 'login page is not opened so login option is not working '
            })
            await Loginpage.registerButton.scrollIntoView({
                timeout: 3000,
                timeoutMsg: 'register button not found '
            })
            await Loginpage.registerButton.click()
        })
    })
    logincredentails.forEach(({ Username, Password }) => {
        xit('To verify CTA login button.', async () => {
            await Homepage.login_master_icon.scrollIntoView({
                timeout: 3000,
                timeoutMsg: 'login_master_icon button not found'
            })
            await Homepage.login_master_icon.click()
            await Homepage.serviceINCUBATORSView.scrollIntoView({
                timeout: 3000,
                timeoutMsg: 'incubator view in services is not displaying '
            })
            await browser.pause(1000)
            await Homepage.serviceINCUBATORSView.moveTo()
            await Homepage.loginButton[1].click()
            await Homepage.logintext.scrollIntoView({
                timeout: 3000,
                timeoutMsg: 'login page is not opened so login option is not working '
            })
            await Loginpage.passWord.scrollIntoView({
                timeout: 3000,
                timeoutMsg: 'email text field  not found'
            })
            await Loginpage.passWord.setValue(Password)
            await Loginpage.emailField.setValue(Username)
            await Loginpage.loginButton.click()
            await browser.pause(1000)
            const invalid = await Loginpage.invalidCredentials.isDisplayed()
            if (invalid === true) {
                throw new Error('in valid credentials');
            }
            await Loginpage.loginbuttonworkingcheck.waitForDisplayed({
                timeout: 5000,
                timeoutMsg: 'login functionality is not working '
            })

        })
    })

    it('To veirfy menu bar displayed with Home,about,platform,Resources,media ,G20 dia, facilities,career,contact us, profile icon.', async () => {
        await Homepage.login_master_icon.scrollIntoView({
            timeout: 3000,
            timeoutMsg: 'login_master_icon button not found'
        })
        await Homepage.login_master_icon.click()
        await Homepage.aboutButton.scrollIntoView({
            timeout: 3000,
            timeoutMsg: 'About button not found'
        })
        await Homepage.platyformButton.scrollIntoView({
            timeout: 3000,
            timeoutMsg: 'platyformButton button not found'
        })
        await Homepage.resources_icon.scrollIntoView({
            timeout: 3000,
            timeoutMsg: 'resources_icon button not found'
        })
        await Homepage.mediaButton.scrollIntoView({
            timeout: 3000,
            timeoutMsg: 'mediaButton button not found'
        })
        await Homepage.g20giaButton.scrollIntoView({
            timeout: 3000,
            timeoutMsg: 'g20giaButton button not found'
        })
        await Homepage.facilitiesButton.scrollIntoView({
            timeout: 3000,
            timeoutMsg: 'facilitiesButton button not found'
        })
        await Homepage.careerButton.scrollIntoView({
            timeout: 3000,
            timeoutMsg: 'careerButton button not found'
        })
        await Homepage.contactUsButton.scrollIntoView({
            timeout: 3000,
            timeoutMsg: 'contactUsButton button not found'
        })
        await Homepage.login_master_icon.scrollIntoView({
            timeout: 3000,
            timeoutMsg: 'login_master_icon button not found'
        })
    })
    
    it('To veirfy by placing cursor on banner image.', async () => {
        await Homepage.login_master_icon.scrollIntoView({
            timeout: 3000,
            timeoutMsg: 'login_master_icon button not found'
        })
        await Homepage.login_master_icon.click()
        await Homepage.autobannerimage.waitForDisplayed({
            timeout: 10000,
            timeoutMsg: 'autobanner image button not found'
        })
        await Homepage.autobannerimage.moveTo()
        await browser.pause(10000)
        const newyorkdisplayed = await Homepage.newyorkBanner.isDisplayed()
        console.log("status" + newyorkdisplayed)
        expectChai(newyorkdisplayed).to.equal(false)
    })
    it('To verify on numberscroll displaying on startup,incubators,mentors,freelancers,fund deployed.', async () => {
        await browser.pause(3000)
        await Homepage.login_master_icon.scrollIntoView({
            timeout: 3000,
            timeoutMsg: 'login_master_icon button not found'
        })
        await Homepage.login_master_icon.click()
        const text = await $("(//h2[@class='numberscrollcount'])[1]").getText()
        console.log("number count" + text)

    })
    it('To verify whether the round wheel is displaying', async () => {

        await Homepage.login_master_icon.scrollIntoView({
            timeout: 3000,
            timeoutMsg: 'login_master_icon button not found'
        })
        await Homepage.login_master_icon.click()
        await Homepage.wheel.scrollIntoView({
            timeout: 3000,
            timeoutMsg: ' wheel not found'
        })

    })
    it('To verify plus icon is displaying on each question', async () => {
        await Homepage.login_master_icon.scrollIntoView({
            timeout: 3000,
            timeoutMsg: 'login_master_icon button not found'
        })
        await Homepage.login_master_icon.click()
        for (var i = 0; i < await Homepage.faqTotalquestions.length; i++) {
            await Homepage.plusIcone[i].scrollIntoView({
                timeout: 5000,
                timeoutMsg: 'plus icon not found+i'
            })
            // const tex = await Homepage.faqTotalquestions[i].getText()
            // console.log(tex+i)
        }

    })
    it('To verify tap action is working on plus icon', async () => {
        await Homepage.login_master_icon.scrollIntoView({
            timeout: 3000,
            timeoutMsg: 'login_master_icon button not found'
        })
        await Homepage.login_master_icon.click()
        for (var i = 0; i < await Homepage.faqTotalquestions.length; i++) {
            await Homepage.plusIcone[i].scrollIntoView({
                timeout: 5000,
                timeoutMsg: 'plus icon not found+i'

            })
            await Homepage.plusIcone[i].click()
            await browser.pause(100)
            await Homepage.minusIcon[0].scrollIntoView({
                timeout: 5000,
                timeoutMsg: 'plus icon tap actin is not working'
            })
            await Homepage.minusIcon[0].click()
            await browser.pause(100)
            await Homepage.plusIcone[i].scrollIntoView({
                timeout: 5000,
                timeoutMsg: 'minus icon tap action is not working'
            })
        }


    })
    it('To verify minus option is displaying and working', async () => {
        await Homepage.login_master_icon.scrollIntoView({
            timeout: 3000,
            timeoutMsg: 'login_master_icon button not found'
        })
        await Homepage.login_master_icon.click()
        for (var i = 0; i < await Homepage.faqTotalquestions.length; i++) {
            await Homepage.plusIcone[i].scrollIntoView({
                timeout: 5000,
                timeoutMsg: 'plus icon not found+i'

            })
            await Homepage.plusIcone[i].click()
            await browser.pause(100)
            await Homepage.minusIcon[0].scrollIntoView({
                timeout: 5000,
                timeoutMsg: 'plus icon tap actin is not working'
            })
            await Homepage.minusIcon[0].click()
            await browser.pause(100)
            await Homepage.plusIcone[i].scrollIntoView({
                timeout: 5000,
                timeoutMsg: 'minus icon tap action is not working'
            })
        }
    })
    it('To verify that few questions with anwsers are displaying in FAQS view', async () => {
        await Homepage.login_master_icon.scrollIntoView({
            timeout: 3000,
            timeoutMsg: 'login_master_icon button not found'
        })
        await Homepage.login_master_icon.click()
        for (var i = 0; i < await Homepage.faqTotalquestions.length; i++) {
            await Homepage.plusIcone[i].scrollIntoView({
                timeout: 5000,
                timeoutMsg: 'plus icon not found+i'

            })
            await Homepage.plusIcone[i].click()

            await browser.pause(100)
            await Homepage.faqText[i].waitForDisplayed({
                timeout: 5000,
                timeoutMsg: 'faq anwser is not displaying'
            })
            await Homepage.minusIcon[0].scrollIntoView({
                timeout: 5000,
                timeoutMsg: 'plus icon tap actin is not working'
            })
            await Homepage.minusIcon[0].click()
            await browser.pause(100)
            await Homepage.plusIcone[i].scrollIntoView({
                timeout: 5000,
                timeoutMsg: 'minus icon tap action is not working'
            })
        }
    })
    it('To verify MEITY STARTUP HUB header displaying', async () => {
        await Homepage.login_master_icon.scrollIntoView({
            timeout: 3000,
            timeoutMsg: 'login_master_icon button not found'
        })
        await Homepage.login_master_icon.click()
        await Homepage.meityheadertext.scrollIntoView({
            timeout: 3000,
            timeoutMsg: 'meity header text not found'
        })
    })
    it('To FAQs header displaying', async () => {
        await Homepage.login_master_icon.scrollIntoView({
            timeout: 3000,
            timeoutMsg: 'login_master_icon button not found'
        })
        await Homepage.login_master_icon.click()
        await Homepage.faqTexts.scrollIntoView({
            timeout: 3000,
            timeoutMsg: 'FAQS header text not found'
        })
    })
    it('To verify whether the readmore button is displaying and working', async () => {
        await Homepage.login_master_icon.scrollIntoView({
            timeout: 3000,
            timeoutMsg: 'login_master_icon button not found'
        })
        await Homepage.login_master_icon.click()
        await Homepage.meityStartupVewReadmorebutton.scrollIntoView({
            timeout: 3000,
            timeoutMsg: 'meityStartupVewReadmorebutton is not displaying '
        })
        await Homepage.meityStartupVewReadmorebutton.waitForClickable({
            timeout: 3000,
            timeoutMsg: 'meityStartupVewReadmorebutton is not clickable '
        })
        await Homepage.meityStartupVewReadmorebutton.click()
        await Homepage.readmoreneitypageimage.waitForDisplayed({
            timeout: 3000,
            timeoutMsg: 'Read more tap action meity section view is not working'
        })
        await Homepage.login_master_icon.scrollIntoView({
            timeout: 3000,
            timeoutMsg: 'login_master_icon button not found'
        })
        await Homepage.login_master_icon.click()
    })
    it('To verify registration and login functions are working through startup view', async () => {
        await Homepage.login_master_icon.scrollIntoView({
            timeout: 3000,
            timeoutMsg: 'login_master_icon button not found'
        })
        await Homepage.login_master_icon.click()

        await Homepage.serviceStartupView.scrollIntoView({
            timeout: 3000,
            timeoutMsg: 'startup view in services is not displaying '
        })
        await browser.pause(1000)
        await Homepage.serviceStartupView.moveTo()
        await Homepage.registerButton[0].click()
        await Homepage.registertext.scrollIntoView({
            timeout: 3000,
            timeoutMsg: 'registertext is not opened so register option is not working '
        })

        await Homepage.login_master_icon.scrollIntoView({
            timeout: 3000,
            timeoutMsg: 'login_master_icon button not found'
        })
        await Homepage.login_master_icon.click()
        await Homepage.serviceStartupView.scrollIntoView({
            timeout: 3000,
            timeoutMsg: 'startup view in services is not displaying '
        })
        await browser.pause(1000)
        await Homepage.serviceStartupView.moveTo()
        await Homepage.loginButton[0].click()
        await Homepage.logintext.scrollIntoView({
            timeout: 3000,
            timeoutMsg: 'login page is not opened so login option is not working '
        })
        await Homepage.login_master_icon.scrollIntoView({
            timeout: 3000,
            timeoutMsg: 'login_master_icon button not found'
        })
        await Homepage.login_master_icon.click()
    })
    xit('To verify registration and login functions are working through mentor view', async () => {
        await Homepage.login_master_icon.scrollIntoView({
            timeout: 3000,
            timeoutMsg: 'login_master_icon button not found'
        })
        await Homepage.login_master_icon.click()

        await Homepage.serviceMENTORSView.scrollIntoView({
            timeout: 3000,
            timeoutMsg: 'mentor view in services is not displaying '
        })
        await browser.pause(1000)
        await Homepage.serviceMENTORSView.moveTo()
        await Homepage.registerButton[2].click()
        await browser.pause(2000)
        var tt = await Homepage.notfoundpage.isDisplayed()
        console.log("*****************************")
        console.log("tt")
        if (tt === true) {
            await browser.back()
        } else {
            await Homepage.registertext.scrollIntoView({
                timeout: 3000,
                timeoutMsg: 'registertext is not opened so register option is not working '
            })

            await Homepage.login_master_icon.scrollIntoView({
                timeout: 3000,
                timeoutMsg: 'login_master_icon button not found'
            })
            await Homepage.login_master_icon.click()
            await Homepage.serviceMENTORSView.scrollIntoView({
                timeout: 3000,
                timeoutMsg: 'mentor view in services is not displaying '
            })
            await browser.pause(1000)
            await Homepage.serviceMENTORSView.moveTo()
            await Homepage.loginButton[2].click()
            await Homepage.logintext.scrollIntoView({
                timeout: 3000,
                timeoutMsg: 'login page is not opened so login option is not working '
            })
            await Homepage.login_master_icon.scrollIntoView({
                timeout: 3000,
                timeoutMsg: 'login_master_icon button not found'
            })
            await Homepage.login_master_icon.click()
        }
    })
    it('To verify registration and login functions are working through incubator view', async () => {
        await Homepage.login_master_icon.scrollIntoView({
            timeout: 3000,
            timeoutMsg: 'login_master_icon button not found'
        })
        await Homepage.login_master_icon.click()

        await Homepage.serviceINCUBATORSView.scrollIntoView({
            timeout: 3000,
            timeoutMsg: 'incubator view in services is not displaying '
        })
        await browser.pause(1000)
        await Homepage.serviceINCUBATORSView.moveTo()
        await Homepage.registerButton[1].click()
        await Homepage.registertext.scrollIntoView({
            timeout: 3000,
            timeoutMsg: 'registertext is not opened so register option is not working '
        })

        await Homepage.login_master_icon.scrollIntoView({
            timeout: 3000,
            timeoutMsg: 'login_master_icon button not found'
        })
        await Homepage.login_master_icon.click()
        await Homepage.serviceINCUBATORSView.scrollIntoView({
            timeout: 3000,
            timeoutMsg: 'incubator view in services is not displaying '
        })
        await browser.pause(1000)
        await Homepage.serviceINCUBATORSView.moveTo()
        await Homepage.loginButton[1].click()
        await Homepage.logintext.scrollIntoView({
            timeout: 3000,
            timeoutMsg: 'login page is not opened so login option is not working '
        })
        await Homepage.login_master_icon.scrollIntoView({
            timeout: 3000,
            timeoutMsg: 'login_master_icon button not found'
        })
        await Homepage.login_master_icon.click()
    })
    xit('To verify registration and login functions are working through freelancer view', async () => {
        await Homepage.login_master_icon.scrollIntoView({
            timeout: 3000,
            timeoutMsg: 'login_master_icon button not found'
        })
        await Homepage.login_master_icon.click()

        await Homepage.serviceFREELANCERSView.scrollIntoView({
            timeout: 3000,
            timeoutMsg: 'freelancer view in services is not displaying '
        })
        await browser.pause(1000)
        await Homepage.serviceFREELANCERSView.moveTo()
        await Homepage.registerButton[3].click()
        await Homepage.registertext.scrollIntoView({
            timeout: 3000,
            timeoutMsg: 'registertext is not opened so register option is not working '
        })


        await Homepage.login_master_icon.scrollIntoView({
            timeout: 3000,
            timeoutMsg: 'login_master_icon button not found'
        })
        await Homepage.login_master_icon.click()
        await Homepage.serviceFREELANCERSView.scrollIntoView({
            timeout: 3000,
            timeoutMsg: 'freelancer view in services is not displaying '
        })
        await browser.pause(1000)
        await Homepage.serviceFREELANCERSView.moveTo()
        await Homepage.loginButton[3].click()
        await Homepage.logintext.scrollIntoView({
            timeout: 3000,
            timeoutMsg: 'login page is not opened so login option is not working '
        })
        await Homepage.login_master_icon.scrollIntoView({
            timeout: 3000,
            timeoutMsg: 'login_master_icon button not found'
        })
        await Homepage.login_master_icon.click()
    })
    xit('To verify registration and login functions are working through accelator view', async () => {
        await Homepage.login_master_icon.scrollIntoView({
            timeout: 3000,
            timeoutMsg: 'login_master_icon button not found'
        })
        await Homepage.login_master_icon.click()

        await Homepage.serviceACCELERATORSView.scrollIntoView({
            timeout: 3000,
            timeoutMsg: 'accelator view in services is not displaying '
        })
        await browser.pause(1000)
        await Homepage.serviceACCELERATORSView.moveTo()
        await Homepage.registerButton[4].click()
        await Homepage.registertext.scrollIntoView({
            timeout: 3000,
            timeoutMsg: 'registertext is not opened so register option is not working '
        })


        await Homepage.login_master_icon.scrollIntoView({
            timeout: 3000,
            timeoutMsg: 'login_master_icon button not found'
        })
        await Homepage.login_master_icon.click()
        await Homepage.serviceACCELERATORSView.scrollIntoView({
            timeout: 3000,
            timeoutMsg: 'accelator view in services is not displaying '
        })
        await browser.pause(1000)
        await Homepage.serviceACCELERATORSView.moveTo()
        await Homepage.loginButton[4].click()
        await Homepage.logintext.scrollIntoView({
            timeout: 3000,
            timeoutMsg: 'login page is not opened so login option is not working '
        })
        await Homepage.login_master_icon.scrollIntoView({
            timeout: 3000,
            timeoutMsg: 'login_master_icon button not found'
        })
        await Homepage.login_master_icon.click()
    })
    xit('To verify registration and login functions are working through investor view', async () => {
        await Homepage.login_master_icon.scrollIntoView({
            timeout: 3000,
            timeoutMsg: 'login_master_icon button not found'
        })
        await Homepage.login_master_icon.click()

        await Homepage.serviceINVESTORSView.scrollIntoView({
            timeout: 3000,
            timeoutMsg: 'investor view in services is not displaying '
        })
        await browser.pause(1000)
        await Homepage.serviceINVESTORSView.moveTo()
        await Homepage.registerButton[5].click()
        await Homepage.registertext.scrollIntoView({
            timeout: 3000,
            timeoutMsg: 'registertext is not opened so register option is not working '
        })

        await Homepage.login_master_icon.scrollIntoView({
            timeout: 3000,
            timeoutMsg: 'login_master_icon button not found'
        })
        await Homepage.login_master_icon.click()
        await Homepage.serviceINVESTORSView.scrollIntoView({
            timeout: 3000,
            timeoutMsg: 'investor view in services is not displaying '
        })
        await browser.pause(1000)
        await Homepage.serviceINVESTORSView.moveTo()
        await Homepage.loginButton[5].click()
        await Homepage.logintext.scrollIntoView({
            timeout: 3000,
            timeoutMsg: 'login page is not opened so login option is not working '
        })
        await Homepage.login_master_icon.scrollIntoView({
            timeout: 3000,
            timeoutMsg: 'login_master_icon button not found'
        })
        await Homepage.login_master_icon.click()
    })
    it('To verify home page map functionality ', async () => {
        //await Homepage.openurl()
        await Homepage.login_master_icon.scrollIntoView({
            timeout: 3000,
            timeoutMsg: 'login_master_icon button not found'
        })
        await Homepage.login_master_icon.click()
        await Homepage.chart.scrollIntoView()
        var popuparray = []
        var popcomparearry = []
        var mapstaename = []
        var j = 0
        await browser.pause(2000)
        for (var i = 0; i < await Homepage.path.length; i++) {
            var u = await Homepage.path[i].isClickable()
            if (u===true) {
                await Homepage.path[i].click()
                await browser.pause(1000)
                        var usercountstatewise = await Homepage.userCountStatewise.getText()
                        var statenamesplit = []
                        statenamesplit = usercountstatewise.split("\n")
                        //for (var k = 1; k < 6; k++) {
                         console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%" + statenamesplit[0])
                         mapstaename.push(statenamesplit[0])
                         console.log(mapstaename)
                        // for (var l = 1; l < 6; l++) {
                        //     popuparray.push(await Homepage.moduletext[l].getText())
                        //     popcomparearry.push(await Homepage.counttocompare[l].getText())
                        //     console.log(popcomparearry)
                        //     console.log(popuparray)
                        //     expectChai(await Homepage.moduletext[l].getText()).to.includes(await Homepage.counttocompare[l].getText())
                       //  }

                    }
                    j++
                }
                popcomparearry.length = 0
                popuparray.length = 0
                // await browser.pause(50)

            
            console.log(mapstaename)

        })
    xit('To verify home page map functionality ', async () => {
        //await Homepage.openurl()
        await Homepage.login_master_icon.scrollIntoView({
            timeout: 3000,
            timeoutMsg: 'login_master_icon button not found'
        })
        await Homepage.login_master_icon.click()
        await Homepage.chart.scrollIntoView()
        await browser.pause(1000)
        // await Homepage.westBengalState.click({ x: 5 })
        for (var p = 0; p < 35; p++) {
            await Homepage.eachStatename.moveTo()
            console.log(await Homepage.statename.getText())
        }
        await browser.pause(10000)
    })
    it('verify challenge view on menu page', async () => {
        await Homepage.login_master_icon.scrollIntoView({
            timeout: 3000,
            timeoutMsg: 'login_master_icon button not found'
        })
        await Homepage.login_master_icon.click()
        await Homepage.resources_icon.scrollIntoView()
        await Homepage.resources_icon.waitForClickable({
            timeout: 3000,
            timeoutMsg: 'resources_icon not found'
        })
        await Homepage.resources_icon.moveTo()
        await Homepage.challenge_icon.click()
        await Homepage.ChallengeHeading.waitForDisplayed({
            timeout: 3000,
            timeoutMsg: 'challenge heading not found'
        })
        //  await Homepage.challenge_view_scroll[7].scrollIntoView()
        //   await Homepage.challenge_view_scroll[7].waitForDisplayed({
        //     timeout: 100000,
        //     timeoutMsg: 'challenge view scroll not visible'
        //   })
        //   await Homepage.challenge_view_scroll[7].moveTo()
        //   await Homepage.Challenge_participate_button.waitForDisplayed({
        //     timeout: 100000,
        //     timeoutMsg: 'participate button not visible'
        //   })
        //   await Homepage.Challenge_participate_button.click()
        // // await Homepage.login_master_icon.scrollIntoView()
        // // await homepage.login_master_icon.click()
        await browser.pause(10000)

    })

    //it('challengepbutton', async () => {

    //await Homepage.Challenge_participate_button.click()
    //await browser.pause(1000)
    // })

    it(' Media display', async () => {
        await Homepage.login_master_icon.scrollIntoView({
            timeout: 3000,
            timeoutMsg: 'login_master_icon button not found'
        })
        await Homepage.login_master_icon.click()
        await Homepage.media_display.waitForDisplayed({
            timeout: 3000,
            timeoutMsg: 'media_display not found'

        })
        // await Homepage.Service_display.waitForDisplayed({
        //   timeout: 3000,
        //   timeoutMsg: 'media_display not found'
        // })
        //     await Homepage.button_display.moveTo({
        //       timeout: 3000,
        //       timeoutMsg: 'button_display not found'
        //     })
    })
    it('To verify whether service view is displaying', async () => {
        await Homepage.login_master_icon.scrollIntoView({
            timeout: 3000,
            timeoutMsg: 'login_master_icon button not found'
        })
        await Homepage.login_master_icon.click()
        await Homepage.media_display.waitForDisplayed({
            timeout: 3000,
            timeoutMsg: 'media_display not found'
        })
    })

    it('press release', async () => {
        await Homepage.login_master_icon.scrollIntoView({
            timeout: 3000,
            timeoutMsg: 'login_master_icon button not found'
        })
        await Homepage.login_master_icon.click()
        await Homepage.release_view.waitForDisplayed({
            timeout: 3000,
            timeoutMsg: 'release_view not found'
        })

    })
    it('To verify whether News view is displaying', async () => {
        await Homepage.login_master_icon.scrollIntoView({
            timeout: 3000,
            timeoutMsg: 'login_master_icon button not found'
        })
        await Homepage.login_master_icon.click()
        await Homepage.News_view.waitForDisplayed(
            {
                timeout: 3000,
                timeoutMsg: 'News_view not found'
            }
        )
    })
    it('To verify news with date asdn readmore option is displaying in release view', async () => {
        await Homepage.login_master_icon.scrollIntoView({
            timeout: 3000,
            timeoutMsg: 'login_master_icon button not found'
        })
        await Homepage.login_master_icon.click()
        await Homepage.date_view.waitForDisplayed({
            timeout: 3000,
            timeoutMsg: 'date_view not found'
        })
        await Homepage.Readmore_view.waitForDisplayed({
            timeout: 3000,
            timeoutMsg: 'readmore_view not found'
        })
    })
    it('To verify tap action is working on read more option', async () => {
        await Homepage.login_master_icon.scrollIntoView({
            timeout: 3000,
            timeoutMsg: 'login_master_icon button not found'
        })
        await Homepage.login_master_icon.click()
        await Homepage.Readmore_view.click()
        await browser.pause(5000)
        var windows = await browser.getWindowHandles()
        console.log(windows)
        await browser.switchToWindow(windows[1])
        await browser.pause(5000)
        var url = await browser.getUrl()
        var expectedurl = "http://43.205.193.210/pressreleaseview"
        expectChai(url).to.equal(expectedurl)
        console.log("test data")
        console.log(url)
        await browser.switchToWindow(windows[0])
    })
    it('To verify news with pictures are displaying on news view', async () => {
        await Homepage.login_master_icon.scrollIntoView({
            timeout: 3000,
            timeoutMsg: 'login_master_icon button not found'
        })
        await Homepage.login_master_icon.click()
        await Homepage.imagesview_b.waitForDisplayed({
            timeout: 3000,
            timeoutMsg: 'imagesview_b not found'
        })
    })


    it('To verify whether the events view is displaying ', async () => {
        await Homepage.login_master_icon.scrollIntoView({
            timeout: 3000,
            timeoutMsg: 'login_master_icon button not found'
        })
        await Homepage.login_master_icon.click()
        await Homepage.events_view.waitForDisplayed({
            timeout: 3000,
            timeoutMsg: 'events_view not found'
        })
    })
    // it('To verify industries Automobilebutton cta action', async () => {

    //     await Homepage.Automobilebuttonvalidate.scrollIntoView({
    //         timeout: 3000,
    //         timeoutMsg: 'Automobilebutton button not found'
    //     })
    //     await Homepage.Automobilebuttonvalidate.click()

    //     expectChai(await Homepage.Automobilebuttonvalidate.isDisplayed()).to.equal(true)
    // })
    // it('To verify industries Bankingbutton cta actions', async () => {

    //     await Homepage.Bankingbutton.scrollIntoView({
    //         timeout: 3000,
    //         timeoutMsg: 'Bankingbutton button not found'
    //     })
    //     await Homepage.Bankingbutton.click()

    //     expectChai(await Homepage.Bankingbuttonvalidate.isDisplayed()).to.equal(true)
    // })
    // it('To verify industries Constructionbutton cta actions', async () => {

    //     await Homepage.Constructionbutton.scrollIntoView({
    //         timeout: 3000,
    //         timeoutMsg: 'Constructionbutton button not found'
    //     })
    //     await Homepage.Constructionbutton.click()

    //     expectChai(await Homepage.Constructionbuttonvalidate.isDisplayed()).to.equal(true)
    // })
    // it('To verify industries Education button cta actions', async () => {

    //     await Homepage.Educationbutton.scrollIntoView({
    //         timeout: 3000,
    //         timeoutMsg: 'Education button not found'
    //     })
    //     await Homepage.Educationbutton.click()

    //     expectChai(await Homepage.Educationbuttonvalidate.isDisplayed()).to.equal(true)
    // })
    // it('To verify industries HealthCarebutton cta actions', async () => {

    //     await Homepage.HealthCarebutton.scrollIntoView({
    //         timeout: 3000,
    //         timeoutMsg: 'Health Care button not found'
    //     })
    //     await Homepage.HealthCarebutton.click()

    //     expectChai(await Homepage.HealthCareuttonvalidate.isDisplayed()).to.equal(true)
    // })
    // it('To verify industries Media button cta actions', async () => {

    //     await Homepage.Mediabutton.scrollIntoView({
    //         timeout: 3000,
    //         timeoutMsg: 'Media button not found'
    //     })
    //     await Homepage.Mediabutton.click()

    //     expectChai(await Homepage.Mediabuttonvalidate.isDisplayed()).to.equal(true)
    // })
    // it('To verify industries Railway button cta actions', async () => {

    //     await Homepage.Railwaysbutton.scrollIntoView({
    //         timeout: 3000,
    //         timeoutMsg: 'Railway button not found'
    //     })
    //     await Homepage.Railwaysbutton.click()

    //     expectChai(await Homepage.Railwaysbuttonvalidate.isDisplayed()).to.equal(true)
    // })

    // it('To verify particular button content is visible, if user performs CTA on button.', async () => {

    //     await Homepage.Automobilebutton.scrollIntoView({
    //         timeout: 3000,
    //         timeoutMsg: 'Automobilebutton button not found'
    //     })
    //     await Homepage.Automobilebutton.click()

    //     expectChai(await Homepage.Automobilebuttonvalidate.isDisplayed()).to.equal(true)
    //     expectChai(await Homepage.automobiletext.getText()).to.equal("Automobile")

    // })
    // it('To verify particular button content is visible, if user performs CTA on button.', async () => {

    //     await Homepage.Bankingbutton.scrollIntoView({
    //         timeout: 3000,
    //         timeoutMsg: 'Bankingbutton button not found'
    //     })
    //     await Homepage.Bankingbutton.click()

    //     expectChai(await Homepage.Bankingbuttonvalidate.isDisplayed()).to.equal(true)
    //     expectChai(await Homepage.Bankingtext.getText()).to.equal("Banking")
    // })
    // it('To verify particular button content is visible, if user performs CTA on button.', async () => {

    //     await Homepage.Constructionbutton.scrollIntoView({
    //         timeout: 3000,
    //         timeoutMsg: 'Constructionbutton button not found'
    //     })
    //     await Homepage.Constructionbutton.click()

    //     expectChai(await Homepage.Constructionbuttonvalidate.isDisplayed()).to.equal(true)
    //     expectChai(await Homepage.Constructiontext.getText()).to.equal("Construction")
    // })
    // it('To verify particular button content is visible, if user performs CTA on button.', async () => {

    //     await Homepage.Educationbutton.scrollIntoView({
    //         timeout: 3000,
    //         timeoutMsg: 'Education button not found'
    //     })
    //     await Homepage.Educationbutton.click()

    //     expectChai(await Homepage.Educationbuttonvalidate.isDisplayed()).to.equal(true)
    //     expectChai(await Homepage.Educationtext.getText()).to.equal("Education")
    // })
    // it('To verify particular button content is visible, if user performs CTA on button.', async () => {

    //     await Homepage.HealthCarebutton.scrollIntoView({
    //         timeout: 3000,
    //         timeoutMsg: 'Health Care button not found'
    //     })
    //     await Homepage.HealthCarebutton.click()

    //     expectChai(await Homepage.HealthCareuttonvalidate.isDisplayed()).to.equal(true)
    //     expectChai(await Homepage.HealthCaretext.getText()).to.equal("Health Care")
    // })
    // it('To verify particular button content is visible, if user performs CTA on button.', async () => {

    //     await Homepage.Mediabutton.scrollIntoView({
    //         timeout: 3000,
    //         timeoutMsg: 'Media button not found'
    //     })
    //     await Homepage.Mediabutton.click()
    //     expectChai(await Homepage.Mediabuttonvalidate.isDisplayed()).to.equal(true)
    //     expectChai(await Homepage.Mediatext.getText()).to.equal("Media")
    // })
    // it('To verify particular button content is visible, if user performs CTA on button.', async () => {

    //     await Homepage.Railwaysbutton.scrollIntoView({
    //         timeout: 3000,
    //         timeoutMsg: 'Railway button not found'
    //     })
    //     await Homepage.Railwaysbutton.click()
    //     expectChai(await Homepage.Railwaysbuttonvalidate.isDisplayed()).to.equal(true)
    //     expectChai(await Homepage.Railwaystext.getText()).to.equal("Railways")
    // })
    // it('To verify data in each modules.', async () => {

    //     var test = data.entity_counts_by_domain
    //     await Homepage.Railwaysbutton.scrollIntoView({
    //         timeout: 3000,
    //         timeoutMsg: 'Railway button not found'
    //     })
    //     await Homepage.Railwaysbutton.click()
    //     for (var i = 0; i < await Homepage.eachmodulecount.length; i++) {
    //         var t = await Homepage.eachmodulecount[i].getText()
    //         console.log("***************************************************************" + t)
    //     }

    // })
    //inprogress
    it('To verify challenge view ', async () => {
        await Homepage.login_master_icon.scrollIntoView({
            timeout: 3000,
            timeoutMsg: 'login_master_icon button not found'
        })
        await Homepage.login_master_icon.click()
        await Homepage.challenge_img[0].scrollIntoView()
        await browser.pause(3000)
        for (var i = 0; i < await Homepage.challenge_img.length; i++) {

            await Homepage.challenge_img[i].isDisplayedInViewport()

            await Homepage.challenge_img[i].moveTo()

            // await Homepage.Challenge_participate_button[4].click()
            // var windows = await browser.getWindowHandles()
            // expectChai(await windows.length).to.equal(2)
            // await browser.switchToWindow(windows[1])
            // await browser.pause(1000)
            // await browser.closeWindow()
            //await browser.switchToWindow(windows[0])

        }
    })

    it('To verify on  numberscroll displaying on startup,incubators,mentors,freelancers,fund deployed.', async () => {
        var test = data.entity_counts
        var startupcount = test.startups
        var incubatorcount = test.incubators
        const countarray = [startupcount, incubatorcount]
        await Homepage.login_master_icon.scrollIntoView({
            timeout: 3000,
            timeoutMsg: 'login_master_icon button not found'
        })
        await Homepage.login_master_icon.click()
        await Homepage.countname[0].scrollIntoView()
        await browser.pause(5000)
        for (var i = 0; i < 2; i++) {
            var stringconvrt = countarray[i].toString()
            expectChai(await Homepage.modulecount[i].getText()).to.equal(stringconvrt)
        }
    })



    it('To verify whether success stories view is displaying', async () => {
        await Homepage.login_master_icon.scrollIntoView({
            timeout: 3000,
            timeoutMsg: 'login_master_icon button not found'
        })
        await Homepage.login_master_icon.click()
        await Homepage.Successstories_view.scrollIntoView({
            timeout: 3000,
            timeoutMsg: 'Successstories_view not found'
        })
        await Homepage.Successstories_view.click()
    })
    // it('To verify view more option is displaying and working in events view', async () => {
    //     await Homepage.login_master_icon.scrollIntoView({
    //         timeout: 3000,
    //         timeoutMsg: 'login_master_icon button not found'
    //     })
    //     await Homepage.login_master_icon.click()
    //     await Homepage.event_viewmore.scrollIntoView({
    //         timeout: 3000,
    //         timeoutMsg: 'event_viewmore not found'
    //     })
    //     await Homepage.event_viewmore.click()
    // })
    it('To verify whether the events are displaying with dates in events view', async () => {
        await Homepage.login_master_icon.scrollIntoView({
            timeout: 3000,
            timeoutMsg: 'login_master_icon button not found'
        })
        await Homepage.login_master_icon.click()
        await Homepage.events_display.waitForDisplayed({
            timeout: 3000,
            timeoutMsg: 'events_display not found'
        })
    })
    it('To verify list of succes stories are displaying with read option ', async () => {
        await Homepage.login_master_icon.scrollIntoView({
            timeout: 3000,
            timeoutMsg: 'login_master_icon button not found'
        })
        await Homepage.login_master_icon.click()
        await Homepage.success_display.waitForDisplayed({
            timeout: 3000,
            timeoutMsg: 'success_display not found'
        })
    })

})