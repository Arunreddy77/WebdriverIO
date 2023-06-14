import regularsupport from '../pageobject/regularsupport.js'
import mainpage from '../pageobject/mainpage.js'
import LoginPage from '../pageobject/loginpage.js'
import Newmeity from '../pageobject/newmeity.js'
import Incubator from '../pageobject/incubator.js'
import Registration from '../pageobject/registration.js'
import newmap from '../pageobject/homepage.js/index.js.js'
import startup from '../pageobject/startup.js'
import fs from 'fs'
import viewprofile from '../pageobject/viewprofile.js'
import diffmodules from '../pageobject/diffmodules.js'
import myconnections from '../pageobject/myconnections.js'
import profileaddconnection from '../pageobject/profileaddconnection.js'
import HeadLess from '../pageobject/headlesslogin.js'
import Accelarator from '../pageobject/accelarator.js'
import mentor from '../pageobject/mentor.js'
import profile from '../pageobject/profile.js'
import newexcel from '../pageobject/newexcel.js'
import writeexcel from '../pageobject/writeexcel.js'
var incubatoremail = "yenofok421@v3dev.com"
var startupemail = "yenofok421@v3dev.com"
var loginemail = "yenofok421@v3dev.com"
let credentails = JSON.parse(fs.readFileSync('test/testdata/samplers.json'))
describe('Meity project', () => {
  xit('New User Registration', async () => {
    await Registration.register("vamsi", email, "9963140403", "Vamsisurya@143")

  })
  credentails.forEach(({ Username, Password }) => {
    xit('should login with incubator', async () => {
      await browser.url("https://www.startupindia.gov.in/")
      await browser.maximizeWindow()
      await LoginPage.login(Username, Password)
      const test = await LoginPage.val2
      console.log(test)
      if (test === false) {
        await Incubator.incu()
      }
      //await browser.pause(10000)
    })
  })
  credentails.forEach(({ Username, Password }) => {
    xit('should login with startup', async () => {
      await browser.url("https://www.startupindia.gov.in")
      await browser.maximizeWindow()
      //await $("div[class='default-user-icon'] div[class='circle-profile-pic']").moveTo()
      await LoginPage.login(Username, Password)
      const test = await LoginPage.val2
      console.log(test)
      if (test === false) {
        await startup.Start()
      }

      // await browser.pause(10000)
    })
  })
  credentails.forEach(({ Username, Password }) => {
    xit('should login with valid credentials', async function () {
      // this.retries(2)
      await browser.url("https://www.startupindia.gov.in/")
      await browser.maximizeWindow()
      await LoginPage.login(Username, Password)
     // await writeexcel.writeToExcel()

      //await browser.pause(5000)
    })
  })
  
  credentails.forEach(({ Username, Password }) => {
    xit('should login with negative case incubator', async () => {
      await browser.url("https://www.startupindia.gov.in/")
      await browser.maximizeWindow()
      await LoginPage.login(Username, Password)
    })
  })
  xit('meity sanity', async () => {
    await browser.url("http://10.0.53.134/")
    await browser.maximizeWindow()
    await Newmeity.meity()


  })
  credentails.forEach(({ Username, Password }) => {
    xit('should login with valid credentials', async function () {
      // this.retries(2)
      await browser.url("https://www.startupindia.gov.in/")
      await browser.maximizeWindow()
      await HeadLess.login(Username, Password)

      //await browser.pause(5000)
    })
  })
  credentails.forEach(({ Username, Password }) => {
    xit('should login with accelator', async function () {
      // this.retries(2)
      await browser.url("https://www.startupindia.gov.in/")
      await browser.maximizeWindow()
      await LoginPage.login(Username, Password)
     await Accelarator.accelator(Username)

      //await browser.pause(5000)
    })
  })

  credentails.forEach(({ Username, Password }) => {
    xit('should login with diffmodules', async function () {
      // this.retries(2)
      await browser.url("https://www.startupindia.gov.in/")
      await browser.maximizeWindow()
      await LoginPage.login(Username, Password)
     await diffmodules.diff()

      //await browser.pause(5000)
    })
  })

  credentails.forEach(({ Username, Password }) => {
    xit('should login with viewprofile', async function () {
      // this.retries(2)
      await browser.url("https://www.startupindia.gov.in/")
      await browser.maximizeWindow()
      await LoginPage.login(Username, Password)
     await viewprofile.view()

      //await browser.pause(5000)
    })
  })
  
  credentails.forEach(({ Username, Password }) => {
    xit('should login with mentor', async function () {
      // this.retries(2)
      await browser.url("https://www.startupindia.gov.in/")
      await browser.maximizeWindow()
      await LoginPage.login(Username, Password)
     await mentor.ment()

      //await browser.pause(5000)
    })
  })
  xit('should login with excel', async function () {
    // this.retries(2)
    console.log("test1")
   
//await writeexcel.writeToExcel()
    //await browser.pause(5000)
  })
  it('should login with mentor', async function () {
    // this.retries(2)
   
  })
  xit('should login with excel test', async function () {
    // this.retries(2)
    await browser.url("https://www.startupindia.gov.in/")
    await browser.maximizeWindow()
    const pop = await $("div[id='covid-popup'] span[aria-hidden='true']").isDisplayed()
    console.log(pop)
    //const newpopup = $("div[id='covid-popup'] span[aria-hidden='true']")
    await browser.waitUntil(async ()=>await $("div[id='covid-popup'] span[aria-hidden='true']").isDisplayed(),{ timeout: 10000, timeoutMsg: 'popup not displayed' })
    if (pop === true) {
      await $("div[id='covid-popup'] span[aria-hidden='true']").click()
    }
    else {
      await $("div[id='covid-popup'] span[aria-hidden='true']").waitForDisplayed({ timeout: 10000 });
      await $("div[id='covid-popup'] span[aria-hidden='true']").click()
    }
    await newexcel.excelfun()
//await writeexcel.writeToExcel()
    //await browser.pause(5000)
  })
  xit('main page', async function () {
    // this.retries(2)
    await browser.url("https://www.startupindia.gov.in/")
    await browser.maximizeWindow()
    await $("div[id='covid-popup'] span[aria-hidden='true']").waitForClickable()
    await $("div[id='covid-popup'] span[aria-hidden='true']").click()
     await mainpage.mainpage()
    //await browser.pause(5000)
  })
  xit('regular page', async function () {
    // this.retries(2)
    await browser.url("https://www.startupindia.gov.in/content/sih/en/startupgov/regulatory_updates.html")
    await browser.maximizeWindow()
    await regularsupport.regular()
    //await browser.pause(5000)
  })
  credentails.forEach(({ Username, Password }) => {
    xit('profile page', async () => {
      await browser.url("https://www.startupindia.gov.in")
      await browser.maximizeWindow()
      //await $("div[class='default-user-icon'] div[class='circle-profile-pic']").moveTo()
      await LoginPage.login(Username, Password)
      const test = await LoginPage.val2
      console.log(test)
      if (test === true) {
        await profile.profile()
        console.log("passssss")
      }
      else
      {
        console.log("pasfail")
      }

      // await browser.pause(10000)
    })
  })
  credentails.forEach(({ Username, Password }) => {
    xit('my connections page', async () => {
      await browser.url("https://www.startupindia.gov.in")
      await browser.maximizeWindow()
      //await $("div[class='default-user-icon'] div[class='circle-profile-pic']").moveTo()
      await LoginPage.login(Username, Password)
      const test = await LoginPage.val2
      console.log(test)
      if (test === true) {
        await myconnections.myconnections()
        console.log("passssss")
      }
      else
      {
        console.log("pasfail")
      }

      // await browser.pause(10000)
    })
  })
  credentails.forEach(({ Username, Password }) => {
    xit('add connection profile page', async () => {
      await browser.url("https://www.startupindia.gov.in")
      await browser.maximizeWindow()
      //await $("div[class='default-user-icon'] div[class='circle-profile-pic']").moveTo()
      await LoginPage.login(Username, Password)
      const test = await LoginPage.val2
      console.log(test)
      if (test === true) {
        await profileaddconnection.addconnection()
        console.log("passssss")
      }
      else
      {
        console.log("pasfail")
      }

      // await browser.pause(10000)
    })
  })
})