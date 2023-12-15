import contactuslocator from "../pageobject/contactuslovcators.js"
import mshlogolocators from '../pageobject/mshlogolocators.js'
import applyLogo from '../pageobject/mshlogolocators.js'
import grevaince from "../pageobject/grevaincelocators.js"
import challengelocatorscreate from "../pageobject/challengelocatorscreate.js"
import { expect as expectChai } from 'chai'
let logincredentails = JSON.parse(fs.readFileSync('test/testdata/logindata.json'))
let challenge = JSON.parse(fs.readFileSync('test/testdata/challengesuite.json'))
import blogs from "../pageobject/blogsLocators.js"
import Homepage from '../pageobject/homepage.js'
import gallerylocators from "../pageobject/gallerylocators.js"
import { Key } from "webdriverio"
import adminincubators from "../pageobject/adminincubators.js"
import Login from "../pageobject/Login.js";
import locatorss from "../pageobject/Login.js";
import connectionslocators from "../pageobject/connectionslocators.js";
import startupLocators from '../pageobject/stratlocators.js'
import fs from 'fs'
import grantlocators from "../pageobject/grantlocators.js"
import randomstring from 'randomstring'
import locators from "../pageobject/labslocators.js";
import moment from 'moment'
import labandfacilities from "../pageobject/labandfacilities.js"
import Forms from './forms.js';
import Reports from "../pageobject/report.js"
import stratlocators from "../pageobject/stratlocators.js"
import faqLocator from "../pageobject/faqLocator.js";
import newslocators from "../pageobject/newslocators.js";
import presslocators from "../pageobject/presslocators.js";
import querylocators from "../pageobject/querylocators.js";
import feedbackLocators from "../pageobject/feedbackLocators.js";
import jobsncareerlocators from "../pageobject/jobsncareerlocators.js";
import subscribelocators from "../pageobject/subscribelocators.js";
import usefullinks from "../pageobject/usefullinks.js";
import chabot from "../pageobject/chabot.js";
import uploaddocs from "../pageobject/uploaddocs.js";
import changepasswordlocators from "../pageobject/changepasswordlocators.js"
import challengelocators from "../pageobject/challengelocators.js"
import marketlocators from "../pageobject/marketlocators.js"
import changemailLocators from "../pageobject/changemailLocators.js"
import forgotpasswordlocators from "../pageobject/forgotpasswordlocators.js"
import networkfilterlocators from "../pageobject/networkfilterlocators.js"
import admindashboard from "../pageobject/admindashboard.js"
var incubatornames;
var startupnames;
var emailexcel;
var Email;
var Email1;
var namee;
var formname;
const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
let regiscredentails = JSON.parse(fs.readFileSync('test/testdata/registraiondata.json'))
const newcreden = []
const startupNewEmail = []
const startupNewUsername = []
const incuCredEmail = []
const incuCredUsername = []

//startupNewEmail(0)
describe('auto incubator approve', () => {
  it('To verify logout', async () => {
    await locatorss.logoutCred()
  })
  it('To verify challenge count ', async () => {
    await locatorss.adminCred()
    await admindashboard.adminDashboard.click()
    await browser.pause(2000)
    await admindashboard.Challenges.click()
    await browser.pause(3000)
    const check = await admindashboard.challengesPage.isExisting()
    expectChai(check).to.equal(true)
  })

  it('To verify admin dashboard pending', async () => {
    await locatorss.adminCred()
    await admindashboard.adminDashboard.click()
    await browser.pause(5000)
    for (var i = 0; i < 6; i++) {
      if (i == 0) {
        await admindashboard.adminPending[i].click()
        await browser.pause(4000)
        if (await admindashboard.startupPending.length >= 1) {
          for (var j = 0; j < await admindashboard.startupPending.length; j++) {
            expectChai(await admindashboard.startupPending[0].getText()).to.equal("PENDING")
          }
        }
        await admindashboard.adminDashboard.click()
        await browser.pause(2000)
      }
      await admindashboard.adminDashboard.click()
      if (i == 1) {
        await admindashboard.adminPending[i].click()
        await browser.pause(4000)
        if (await admindashboard.startupApproved.length >= 1) {
          for (var j = 0; j < await admindashboard.startupApproved.length; j++) {

            expectChai(await admindashboard.startupApproved[0].getText()).to.equal("PENDING")
          }
        }
        await admindashboard.adminDashboard.click()
        await browser.pause(2000)
      }
      await admindashboard.adminDashboard.click()
      if (i == 2 || i == 3 || i == 4 || i == 5) {
        await admindashboard.adminPending[i].click()
        await browser.pause(4000)
        if (await admindashboard.startupPendings.length >= 1) {
          for (var j = 0; j < await admindashboard.startupPendings.length; j++) {
            expectChai(await admindashboard.startupPendings[0].getText()).to.equal("PENDING")
          }
        }

        await admindashboard.adminDashboard.click()
        await browser.pause(2000)
      }

      await admindashboard.adminDashboard.click()
    }

  })
  it('To verify admin dashboard approved', async () => {
    await locatorss.adminCred()
    await admindashboard.adminDashboard.click()
    await browser.pause(5000)

    for (var i = 0; i < 7; i++) {
      if (i == 0) {
        await admindashboard.Approved[i].click()
        await browser.pause(4000)
        if (await admindashboard.startupPending.length >= 1) {
          for (var j = 0; j < await admindashboard.startupPending.length; j++) {
            expectChai(await admindashboard.startupPending[0].getText()).to.equal("APPROVED")
          }
        }

        await admindashboard.adminDashboard.click()
        await browser.pause(2000)
      }
      await admindashboard.adminDashboard.click()
      if (i == 1) {
        await admindashboard.Approved[i].click()
        await browser.pause(4000)
        if (await admindashboard.startupApproved.length >= 1) {
          for (var j = 0; j < await admindashboard.startupApproved.length; j++) {
            expectChai(await admindashboard.startupApproved[0].getText()).to.equal("APPROVED")
          }
        }

        await admindashboard.adminDashboard.click()
        await browser.pause(2000)
      }
      await admindashboard.adminDashboard.click()
      if (i == 3 || i == 4 || i == 5 || i == 6) {
        await admindashboard.Approved[i].click()
        await browser.pause(4000)
        if (await admindashboard.startupPendings.length >= 1) {
          for (var j = 0; j < await admindashboard.startupPendings.length; j++) {
            expectChai(await admindashboard.startupPendings[0].getText()).to.equal("APPROVED")
          }
        }
        await admindashboard.adminDashboard.click()
        await browser.pause(2000)
      }

      await admindashboard.adminDashboard.click()
    }

  })
  it('To verify admin dashboard rejected', async () => {
    await locatorss.adminCred()
    await admindashboard.adminDashboard.click()
    await browser.pause(5000)

    for (var i = 0; i < 7; i++) {
      if (i == 0) {
        await admindashboard.Rejected[i].click()
        await browser.pause(4000)
        if (await admindashboard.startupPending.length >= 1) {
          for (var j = 0; j < await admindashboard.startupPending.length; j++) {
            expectChai(await admindashboard.startupPending[0].getText()).to.equal("REJECTED")
          }
        }


        await admindashboard.adminDashboard.click()
        await browser.pause(2000)
      }
      await admindashboard.adminDashboard.click()
      if (i == 1) {
        if (await admindashboard.startupApproved.length >= 1) {
          for (var j = 0; j < await admindashboard.startupApproved.length; j++) {
            expectChai(await admindashboard.startupApproved[0].getText()).to.equal("REJECTED")
          }
        }
        await browser.pause(2000)
      }
      await admindashboard.adminDashboard.click()
      if (i == 3 || i == 4 || i == 5 || i == 6) {
        await admindashboard.Rejected[i].click()
        await browser.pause(4000)
        if (await admindashboard.startupPendings.length >= 1) {
          for (var j = 0; j < await admindashboard.startupPendings.length; j++) {
            expectChai(await admindashboard.startupPendings[0].getText()).to.equal("DECLINED")
          }
        }

        await admindashboard.adminDashboard.click()
        await browser.pause(2000)
      }

      await admindashboard.adminDashboard.click()
    }

  })

  const totalRun = 2; // Number of times you want to run the test case
  for (let r = 0; r < totalRun; r++) {
    regiscredentails.forEach(({ firstname, lastname }) => {
      it('To verify incubator registration.', async () => {

        let variable = "Hello";

        console.log(`The value of the variable is: ${variable}`);




        await browser.pause(2000)

        // const popup = await startupLocators.popclose.isDisplayed()

        // if (popup === true) {

        //   await startupLocators.popclose.click()

        // }
        // await startupLocators.incubator.scrollIntoView()

        // await browser.pause(1000)

        // await startupLocators.incubator.waitForClickable()

        // await startupLocators.incubator.moveTo()

        // const registerwait = await startupLocators.register.waitForClickable()
        // await startupLocators.register.click()
        await browser.url("/" + "register/incubator") //http://13.233.29.114/register/incubator

        await startupLocators.firstname.waitForDisplayed()

        let first = randomstring.generate(6);




        await startupLocators.firstname.setValue(first)

        let second = randomstring.generate(6);

        await startupLocators.lastname.setValue(second)




        const MobileNum = randomstring.generate({

          length: 10,

          charset: 'numeric'

        });

        await startupLocators.Mobile.setValue(MobileNum)

        Email = randomstring.generate({

          length: 5,

          charset: 'numeric'

        });

        await startupLocators.email.setValue("meityincubator" + Email + "@uatmsh.meity.gov.in")

        await startupLocators.password.setValue("Meityincubator@123")

        await startupLocators.cPassword.setValue("Meityincubator@123")

        await browser.switchToFrame(await startupLocators.iframelogin)

        await startupLocators.recaptchacheckbox.click()
        await browser.pause(5000)
        const cbox = await locatorss.checkbox
        const checked = await locatorss.checkbox.getAttribute("aria-checked")
        console.log(checked)
        console.log("!!!!!!!!!!!!!!!!!!!")
        console.log(await $("//span[@id='recaptcha-anchor']").getAttribute("aria-checked"))
        await cbox.waitUntil(async () => await $("//span[@id='recaptcha-anchor']").getAttribute("aria-checked") === "true", {
          timeout: 100000,
          timeoutMsg: 'recaptch timeout'
        })
        await browser.switchToParentFrame()
        // for (var m = 0; m < 100; m++) {
        //   await browser.keys(Key.ArrowDown)
        //   const g = await startupLocators.Registerbutton.isDisplayedInViewport()
        //   if (g === true) {
        //     break
        //   }
        // }
        await startupLocators.Registerbutton.scrollIntoView()
        await startupLocators.Registerbutton.isDisplayedInViewport({ timeout: 10000 })
        await startupLocators.Registerbutton.waitForClickable({ timeout: 10000 })
        await startupLocators.Registerbutton.click()
        await browser.pause(2000)

        await startupLocators.OTP.waitForDisplayed()
        await browser.pause(2000)
        await startupLocators.OTP.setValue("14081947")


        await startupLocators.submit.click()
        await browser.pause(2000)
        await startupLocators.lemail.waitForDisplayed()

        await startupLocators.lemail.setValue("meityincubator" + Email + "@uatmsh.meity.gov.in")

        await startupLocators.lpassword.setValue("Meityincubator@123")

        await browser.switchToFrame(await startupLocators.iframelogin)

        await startupLocators.recaptchacheckbox.click()

        await browser.switchToParentFrame()

        await browser.pause(2000)

        await startupLocators.login.click()
        await startupLocators.incubatorName.waitForExist()
        await startupLocators.incubatorName.waitForDisplayed()
        // await locatorss.loginCred("meityincubator" + Email + "@uatmsh.meity.gov.in", "Meityincubator@123")
        await browser.pause(2000)
        const incubatorname = randomstring.generate({

          length: 5,

          charset: 'numeric'

        });

        await startupLocators.incubatorName.setValue("Aaincubator" + Email)

        await startupLocators.Affiliate.setValue("Affiliate")

        await startupLocators.domainArrow.click()

        await startupLocators.domainInput.setValue("Art" + "\n")

        await startupLocators.sectorArrow.click()

        await startupLocators.sectorInput.setValue("Art" + "\n")

        const fileInput = await startupLocators.file

        const filePath = 'images/test.png'

        const remoteFilePath = await browser.uploadFile(filePath)

        await fileInput.setValue(remoteFilePath)

        await startupLocators.Next1.waitForClickable()

        await startupLocators.Next1.click()
        await startupLocators.countryArrow.waitForExist()

        await startupLocators.countryArrow.waitForClickable()

        await startupLocators.countryArrow.click()

        await startupLocators.countryArrow.setValue("India" + "\n")

        await startupLocators.stateInput.setValue("Assam" + "\n")

        await startupLocators.cityName.setValue("Panaji")

        await startupLocators.websiteurl.setValue("www.gmail.com")

        await startupLocators.Zipcode.setValue("567656")

        await startupLocators.Next2.waitForClickable()

        await startupLocators.Next2.click()
        await startupLocators.firstName1.waitForExist()

        await startupLocators.firstName1.waitForClickable()

        await startupLocators.firstName1.setValue("meity")

        await startupLocators.LastName1.setValue("tester")

        await startupLocators.phoneNumber1.setValue("9876543021")

        await startupLocators.Email1.setValue("ceo@gmail.com")

        await startupLocators.firstName2.setValue("First")

        await startupLocators.LastName2.setValue("Last")

        await startupLocators.phoneNumber2.setValue("8787678765")

        await startupLocators.Email2.setValue("team@gmail.com")

        await startupLocators.Next3.waitForClickable()

        await startupLocators.Next3.click()

        await startupLocators.FacebookUrl.waitForClickable()

        await startupLocators.FacebookUrl.setValue("https://www.facebook.com/")

        await startupLocators.TwitterUrl.setValue("https://www.twitter.com/")

        await startupLocators.linkedinUrl.setValue("https://www.linkedin.com/")

        await startupLocators.InstagramUrl.setValue("https://www.instagram.com/")

        await startupLocators.KooUrl.setValue("https://www.kooapp.com/")

        await startupLocators.YoutubeUrl.setValue("https://www.youtube.com/")

        await startupLocators.save.scrollIntoView()

        await startupLocators.checkbox.click()

        await startupLocators.save.waitForClickable()

        await startupLocators.save.click()

        await stratlocators.profilepic.waitForClickable()

        await stratlocators.profilepic.click()

        await stratlocators.startuplogout.waitForClickable()

        await startupLocators.startuplogout.click()

        // const workbook = new Excel.Workbook();

        // // add a new sheet to the workbook

        // const sheet = workbook.addWorksheet('My Sheet');

        emailexcel = "meityincubator" + Email + "@uatmsh.meity.gov.in"

        incubatornames = "Aaincubator" + Email

        // console.log(emailexcel)

        // console.log(incubatornames)

        // const data = [["EMAIL", "FIRSTNAME", "LASTNAME", "INCUBATORNAME"], [emailexcel, first, second, incubatornames]];

        // data.push()

        newcreden.push(["EMAIL", "FIRSTNAME", "LASTNAME", "USERNAME", "PASSWORD"])

        newcreden.push([emailexcel, first, second, incubatornames, "Meityincubator@123"])
        incuCredEmail.push([emailexcel])
        incuCredUsername.push([incubatornames])
        console.log("*****************ONLY INCUBATOR CREDENTAILS******************")
        console.log(newcreden)

        // sheet.addRows(data);

        // await workbook.xlsx.writeFile('/home/vamsivinayjampana/incubatordetails.xlsx');

        // console.log('Data written successfully!');

        await browser.newWindow("/" + "meityadmin/")

        await browser.switchWindow("/" + "meityadmin/")

        await browser.refresh()

        await startupLocators.adminemail.setValue("superadmin@gmail.com")

        await startupLocators.adminpassword.setValue("Flower123#")

        await startupLocators.adminloginbutton.click()
        //await locatorss.adminCred()
        await startupLocators.adminincubator.waitForExist();
        await startupLocators.adminincubator.waitForDisplayed();
        await startupLocators.adminincubator.click()

        //   for(var j=0;j<30;j++){

        await browser.pause(2000)

        // await startupLocators.pagination3.waitForClickable()




        for (var j = 0; j < 35; j++) {

          var r = 0;

          for (var i = 0; i < 25; i++) {

            await startupLocators.name[i].waitForClickable()

            var name = await startupLocators.name[i].getText()

            if (name === incubatornames) {




              await adminincubators.ticmark[i].waitForClickable()

              await adminincubators.ticmark[i].click()
              await browser.pause(2000)
              await startupLocators.yes.waitForClickable()
              await startupLocators.yes.click()
              await browser.pause(4000)
              const status = await grantlocators.incubatorstatus[i].getText()

              expectChai(status).to.include("APPROVED")

              r = 1

              break;

            }

          }

          if (r === 1) {

            break;

          }

          await adminincubators.next.click()

          await browser.pause(500)

        }

        await browser.refresh()

        await startupLocators.admingrant.click()

        await startupLocators.adminmapscheme.click()

        await browser.pause(2000)

        await startupLocators.incubatorselect.click()

        // await startupLocators.incubatorsearch.click()

        const rest = await startupLocators.incubatorlistsearch.length

        for (var i = 0; i < rest; i++) {

          var text = await startupLocators.incubatorlistsearch[i].getText()

          if (text === incubatornames) {

            await startupLocators.incubatorlistsearch[i].click()

            //await startupLocators.incubatorselect.click()

            break;

          }




        }

        await startupLocators.admintide.click()

        await startupLocators.adminselectgroup.selectByVisibleText("G1")

        await startupLocators.adminsave.click()

        // const incuarray = [[emailexcel, first, second, incubatornames]]

        // console.log(incuarray)











      })


    })
  }

  const totalRuns = 2; // Number of times you want to run the test case

  for (let r = 0; r < totalRuns; r++) {

    it('To verify startup registration ', async () => {

      await browser.url("/" + "register/startup")

      await browser.pause(2000)

      // const popup = await startupLocators.popclose.isDisplayed()

      // if (popup === true) {

      //   await startupLocators.popclose.click()

      // }

      // await startupLocators.startup.scrollIntoView()

      // await startupLocators.startup.waitForClickable()




      // await startupLocators.startup.moveTo()

      // const registerwait = await startupLocators.sregister.waitForDisplayed()

      //   await startupLocators.sregister.waitForClickable()


      // await startupLocators.sregister.click()

      await startupLocators.firstname.waitForDisplayed()

      let first = randomstring.generate(6);

      await startupLocators.firstname.setValue(first)




      let second = randomstring.generate(6);

      await startupLocators.lastname.setValue(second)

      const MobileNum = randomstring.generate({

        length: 5,

        charset: 'numeric'

      });

      await startupLocators.Mobile.setValue("99112" + MobileNum)

      Email1 = randomstring.generate({

        length: 5,

        charset: 'numeric'

      });

      await startupLocators.email.setValue("meitystartup" + Email1 + "@uatmsh.meity.gov.in")

      await startupLocators.password.setValue("Meitystartup@123")

      await startupLocators.cPassword.setValue("Meitystartup@123")

      await browser.switchToFrame(await startupLocators.iframelogin)

      await startupLocators.recaptchacheckbox.click()

      await browser.switchToParentFrame()

      await browser.pause(2000)

      await $("//a[@title='Terms & Conditions']").scrollIntoView()
      await $("//a[@title='Terms & Conditions']").isDisplayedInViewport()
      await startupLocators.Registerbutton.waitForClickable()
      await startupLocators.Registerbutton.click()
      await browser.pause(2000)
      await startupLocators.OTP.waitForDisplayed()
      await browser.pause(2000)
      await startupLocators.OTP.setValue("14081947")

      await startupLocators.submit.click()
      await startupLocators.lemail.waitForExist()
      await startupLocators.lemail.waitForDisplayed()
      await startupLocators.lemail.setValue("meitystartup" + Email1 + "@uatmsh.meity.gov.in")

      await startupLocators.lpassword.setValue("Meitystartup@123")

      await browser.switchToFrame(await startupLocators.iframelogin)

      await startupLocators.recaptchacheckbox.click()

      await browser.switchToParentFrame()

      await browser.pause(2000)

      await startupLocators.login.click()

      // await locatorss.loginCred("meitystartup" + Email1 + "@uatmsh.meity.gov.in", "Meitystartup@123")
      const startupname = randomstring.generate({

        length: 5,

        charset: 'numeric'

      });

      await startupLocators.startupname.setValue("Aastartup" + Email1)




      await startupLocators.startbrief.setValue("testing")

      const fileInput = await startupLocators.startlogo

      // const screenshotPath = 'test/testdata/test.png';

      // browser.saveScreenshot(screenshotPath);

      const filePath = 'images/test.png'

      const remoteFilePath = await browser.uploadFile(filePath)

      await fileInput.setValue(remoteFilePath)

      await startupLocators.startupincubatorselect.click()

      await startupLocators.startupincubatorselect.setValue(incuCredUsername[r] + "\n")
      await startupLocators.startUpWebsite.setValue("https://www.google.co.in/")

      await startupLocators.startupDomain.click()

     
      await startupLocators.startupDomain.setValue("Art" + "\n")

      await startupLocators.startupSector.click()

      await startupLocators.startupSector.setValue("Art" + "\n")

      await startupLocators.Next1.click()




      await startupLocators.Fname.waitForDisplayed()




      await startupLocators.Fname.setValue(first)

      await startupLocators.countryArrow.waitForClickable()




      await startupLocators.countryArrow.click()




      await startupLocators.countryArrow.setValue("India" + "\n")

      await startupLocators.startupstatearrow.waitForClickable()

      await startupLocators.startupstatearrow.click()

      await startupLocators.startstateInput.click()

      await startupLocators.startstateInput.setValue("Goa" + "\n")




      await startupLocators.cName.setValue("Panaji")




      await startupLocators.Zcode.setValue("567656")




      await startupLocators.Next2.click()




      await startupLocators.teamName.waitForDisplayed()




      await startupLocators.teamName.setValue("test")




      await startupLocators.experience.setValue("3")




      await startupLocators.emailAddress.setValue("test@gmail.com")




      await startupLocators.designation.setValue("tester")




      await startupLocators.linkedinprofile.setValue("https://www.linkedin.com/")




      await startupLocators.mobileNumber.setValue("8877667678")




      await startupLocators.Next3.click()




      await startupLocators.FbUrl.waitForClickable()

      await browser.pause(2000)

      await startupLocators.FbUrl.setValue("https://www.facebook.com/")




      await startupLocators.TUrl.setValue("https://www.twitter.com/")




      await startupLocators.linUrl.setValue("https://www.linkedin.com/")




      await startupLocators.InstaUrl.setValue("https://www.instagram.com/")




      await startupLocators.KoUrl.setValue("https://www.kooapp.com/")




      await startupLocators.YtubeUrl.setValue("https://www.youtube.com/")

      await startupLocators.submit.scrollIntoView()

      await startupLocators.checkbox.click()

      await startupLocators.submit.click()
      

      await stratlocators.profilepic.waitForClickable()

      await stratlocators.profilepic.click()



      await stratlocators.startuplogout.waitForClickable()

      await startupLocators.startuplogout.click()

      // const workbook = new Excel.Workbook();

      // // add a new sheet to the workbook

      // const sheet = workbook.addWorksheet('My Sheet');

      const emailexcel = "meitystartup" + Email1 + "@uatmsh.meity.gov.in"

      startupnames = "Aastartup" + Email1

      // console.log(emailexcel)

      // console.log(incubatornames)

      // const data = [["EMAIL", "FIRSTNAME", "LASTNAME", "STARTUPNAME"], [emailexcel, first, second, startupnames]];

      // data.push()

      //sheet.addRows(data);

      newcreden.push([emailexcel, first, second, startupnames, "Meitystartup@123"])
      startupNewEmail.push(emailexcel)
      startupNewUsername.push(startupnames)


      // await workbook.xlsx.writeFile(`/home/vamsivinayjampana/startupdetails${r}.xlsx`);

      // const incuarray = [[emailexcel, first, second, startupnames]]

      // console.log(incuarray)

      console.log("*****************ssCREDENTAILS******************")

      console.log(newcreden)
      console.log(startupNewEmail)





      //}








    })




  }
  it('To verify startup Approve.', async () => {

    await browser.url("/" + "meityadmin")
    await startupLocators.adminemail.setValue("superadmin@gmail.com")

    await startupLocators.adminpassword.setValue("Flower123#")

    await startupLocators.adminloginbutton.click()

    //await locatorss.adminCred()

    for (var k = 0; k < 2; k++) {
      await startupLocators.startups.click()
      await browser.refresh()
      await browser.pause(7000)
      await startupLocators.name[1].waitForExist({timeout : 10000})
      var r = 0;
      for (var j = 0; j < 40; j++) {
        console.log(await startupLocators.name.length + " length &*&")
        for (var i = 0; i < 25; i++) {

          var name = await startupLocators.name[i].getText()

          if (name === startupNewUsername[k]) {
            await adminincubators.approve[i].waitForClickable()

            await adminincubators.approve[i].click()
            await browser.pause(2000)
            await startupLocators.yes.waitForClickable()
            await startupLocators.yes.click()
            await browser.pause(5000)
            const status = await grantlocators.incubatorstatus1[i].getText()
            expectChai(status).to.include("APPROVED")
            r = 1
            break;
          }

        }
        if (r === 1) {

          break;

        }

        await adminincubators.next.click()
        await browser.pause(500)

      }

    }
    await browser.pause(5000)


  })

it('To verify coe login and update', async () => {
    await locatorss.loginCred("anudeep.gadde.333@gmail.com", "Meitycoe@123")//123456@Ayz
    await locatorss.profilepic.waitForClickable()

    await locatorss.profilepic.click()

    await $("//button[normalize-space()='Edit Profile']").click()
    Email = randomstring.generate({

      length: 5,

      charset: 'numeric'

    });

    await $("//input[@placeholder='Please enter Name of the COE']").setValue("test"+Email)
    await $("//button[@id='submit']").scrollIntoView()
    await $("//button[@id='submit']").click()
    await browser.pause(1000)
    const test=await $("(//div[@class='col-md-6 mobile-responsive']/p)[1]").getText()
   expectChai(test).to.be.includes(Email)


  })
  xit('To verify challenge creation', async () => {
    await locatorss.adminCred()
    await challengelocatorscreate.challengeText.waitForClickable()
    await challengelocatorscreate.challengeText.click();
    await browser.pause(2000)
    await challengelocatorscreate.internalChallenges.click();
    await browser.pause(2000)
    await challengelocatorscreate.challengeCreationButton.waitForClickable()
    await challengelocatorscreate.challengeCreationButton.click();
    await browser.pause(2000)
    namee = randomstring.generate({

      length: 5,

      charset: 'alphabetic'

    });

    await challengelocatorscreate.challengeCreationName.setValue(namee);
    await challengelocatorscreate.challengeCreationDescription.setValue(namee);
    await browser.pause(2000)
    await challengelocatorscreate.challengeCreationSubmit.click();
    await browser.pause(2000)
    await challengelocatorscreate.challengeNameSelect.selectByVisibleText(namee)

    await challengelocatorscreate.edtionchallengeCreationSubmit.click();
    await browser.pause(2000)
    await challengelocatorscreate.edtionchallengeCreationName.setValue(namee);
    await challengelocatorscreate.editionchallengeCreationDescription.setValue(namee);
    var currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + 1);
    // Extract the individual components of the date
    var year1 = currentDate.getFullYear();
    var month1 = currentDate.getMonth() + 1; // Months are zero-based
    var day1 = currentDate.getDate();
    var formattedtommorrowDate = (day1 < 10 ? '0' : '') + day1 + '-' + (month1 < 10 ? '0' : '') + month1 + '-' + year1;
    await challengelocatorscreate.editionStartDate.setValue(formattedtommorrowDate);
    var today = new Date();
    today.setDate(today.getDate() + 2);
    today.setDate(today.getDate() + 2);
    var day = today.getDate();
    var month = today.getMonth() + 1; // Months are zero-based
    var year = today.getFullYear();
    var currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + 1);
    // Extract t
    var formattedDate = (day < 10 ? '0' + day : day) + '-' + (month < 10 ? '0' + month : month) + '-' + year;
    await challengelocatorscreate.editionEndDate.setValue(formattedDate);
    const fileInput = await challengelocatorscreate.uploadFile

    // const screenshotPath = 'test/testdata/test.png';

    // browser.saveScreenshot(screenshotPath);

    const filePath = 'images/test.png'

    const remoteFilePath = await browser.uploadFile(filePath)
    await browser.pause(2000)
    await challengelocatorscreate.uploadFile.setValue(remoteFilePath);
    await challengelocatorscreate.edtionchallengeCreationButton.click();
    await browser.pause(5000)
    await challengelocatorscreate.challengeNameSelect.selectByVisibleText(namee)
    await browser.pause(2000)
    await challengelocatorscreate.challengeEditionSelect.selectByVisibleText(namee)
    await browser.pause(2000)
    await challengelocatorscreate.challengeACtionsButton.click();
    await challengelocatorscreate.challengeCreateForm.click();
    await browser.pause(2000)
    await challengelocatorscreate.challengeRegion.selectByVisibleText("Global")
    await challengelocatorscreate.ChallengeTimeZone.selectByVisibleText("GMT")
    await challengelocatorscreate.challengeIndustry.click();
    await challengelocatorscreate.challengeIndustrySelect.click();
    await challengelocatorscreate.challengeIndustry.click();
    await challengelocatorscreate.challengeSector.click();
    await challengelocatorscreate.challengeSectorSelect.click();
    await challengelocatorscreate.challengeSector.click();
    await challengelocatorscreate.challengeDEscription.setValue(namee);
    await challengelocatorscreate.challengeKeyword.setValue(namee);
    await challengelocatorscreate.challengeEligibility.setValue(namee);
    const fileInputs = await challengelocatorscreate.challengeAdditionalDocument

    // const screenshotPath = 'test/testdata/test.png';

    // browser.saveScreenshot(screenshotPath);

    const filePaths = 'images/BHUMI – BSF.docx'

    const remoteFilePaths = await browser.uploadFile(filePaths)
    await challengelocatorscreate.challengeAdditionalDocument.setValue(remoteFilePaths);
    await challengelocatorscreate.challengeNext.click();
    for (var a = 0; a < 24; a++) {
      await challengelocatorscreate.challengeEnableButtons[a].click();
    }

    await challengelocatorscreate.challengeNext2.click();
    await challengelocatorscreate.challengeAdditionSection.waitForExist()
    await challengelocatorscreate.challengeAdditionSection.scrollIntoView()
    await challengelocatorscreate.challengeAdditionSection.waitForClickable()
    await challengelocatorscreate.challengeAdditionSection.click();
    await challengelocatorscreate.challengeNext3.click();
    await challengelocatorscreate.challengeAddQuestionButton.waitForExist()
    await challengelocatorscreate.challengeAddQuestionButton.click();
    await challengelocatorscreate.ChallengeAddquestioTextBox.click();
    await challengelocatorscreate.ChallengeAddquestioTextBox.setValue("what is your name");
    await challengelocatorscreate.ChallengeAddquestioTextBox.setValue("what is");
    await challengelocatorscreate.ChallengeAddquestioTextBox.setValue("what is your name");
    await challengelocatorscreate.ChallengeAddquestioTextBox.setValue("what is your name");
    await challengelocatorscreate.ChallengeAddquestioTextBox.setValue("what is youys name");


    await challengelocatorscreate.ChallengeAddquestioTextBox.click();
    (await challengelocatorscreate.challengeSelectQuestionType).selectByVisibleText("Long Answer");
    await browser.pause(2000);
    await challengelocatorscreate.challengeNext4.click();
    await browser.pause(2000);
    await challengelocatorscreate.challengeNext5.click();
    await browser.pause(6000);
    await locatorss.adminprofilepic.waitForClickable()
    await locatorss.adminprofilepic.click()
    await locatorss.adminLogout.waitForClickable()
    await locatorss.adminLogout.click()
  })
  xit('To challenge apply', async () => {
    var startUpnew
    var pass
    if (startupNewEmail.length === 2) {
      startUpnew = `${startupNewEmail[0]}`
      pass = "Meitystartup@123"
    }
    else {
      startUpnew = "meitystartup84950@uatmsh.meity.gov.in"
      pass = "Meitystartup@123"
    }
    await locatorss.loginCred(startUpnew, pass)
    await $("//button[.=' Dashboard ']").click()

    await browser.pause(2000)



    var name = `${namee}`

    const challenge = await $$("(//div[@class='card-item'])[1]//div[@class='card-body pt-0 pb-0 align-top eventdetails-top']/h6")

    console.log(challenge.length)

    for (var i = 0; i < challenge.length; i++) {

      await challenge[i].scrollIntoView()

      const ctext = await challenge[i].getText()

      console.log(ctext)





      if (ctext === name) {

        // await ctext[i].scrollIntoView()

        console.log("!!!!!!!!!!!!!!")

        await challenge[i].scrollIntoView()

        await challenge[i].waitForClickable()

        await challenge[i].click()

        break;

      }



    }



    await $("//a[.='APPLY NOW']").click()

    await browser.pause(5000)

    const url = "https://www.google.com"



    const fields = await $$("//input[@required='true']")

    console.log(fields.length)

    for (var j = 0; j < await fields.length - 2; j++) {

      console.log(fields.length)

      await fields[j].scrollIntoView()

      await fields[j].setValue(url)

    }

    await browser.pause(10000)

    //    const next =  await $("(//button[.='Next'])[1]")

    //    await next.scrollIntoView()



    // const { remote } = require('webdriverio');



    // const browser = remote({

    //     // WebDriver configuration options

    // });



    browser.execute(() => {

      window.scrollTo(0, 0);

    });





    await browser.pause(2000)

    const country = await $("//select[@id='country']")



    await country.selectByIndex(1)



    const state = await $("//select[@id='state']")

    await state.selectByIndex(4)


    const fileInput = await $("(//input[@type='file'])[1]")

    // const screenshotPath = 'test/testdata/test.png';

    // browser.saveScreenshot(screenshotPath);

    const filePath = 'images/test.png'

    const remoteFilePath = await browser.uploadFile(filePath)
    await $("(//input[@type='file'])[1]").setValue(remoteFilePath);

    const yearfield = await $("//input[@id='year']")

    await yearfield.clearValue();

    await yearfield.setValue("2023")

    await $("//input[@id='website']").setValue("https://chat.openai.com/")

    await $("//textarea[@id='description']").scrollIntoView()

    await $("//textarea[@id='description']").setValue("test")



    const gender = await $("//select[@id='gender']")

    await gender.selectByIndex(1)

    const file2 = await $("(//input[@type='file'])[2]")

   
    await $("(//input[@type='file'])[2]").setValue(remoteFilePath);
    const email = await $("//input[@id='email']")

    await email.clearValue();

    await email.setValue("test@gmail.com")



    const entity = await $("//select[@id='entitytype']")

    await entity.selectByIndex(1)

    const team = await $("//select[@id='teamsize']")

    await team.selectByIndex(1)

    const currency = await $("//select[@id='principalcurrency']")

    await currency.selectByIndex(1)

    const next = await $("(//button[.='Next'])[1]")

    await next.scrollIntoView()

    await next.click()

    await $("//*[@id='step3']//*[@type='text']").scrollIntoView()

    await $("//*[@id='step3']//*[@type='text']").setValue("test opportunity")

    await browser.pause(1000)

    browser.execute(() => {

      window.scrollTo(0, 0);

    });

    const next1 = await $("(//button[.='Next'])[2]")



    await next1.click()

    browser.execute(() => {

      window.scrollTo(0, 0);

    });



    await $("//*[@id='step4']//*[@id='input_0']").setValue("Arun Reddy")

    await $("//button[.='Submit']").click()





  })
  it('To verify Grant management.', async () => {


    await browser.url("http://13.233.29.114/meityadmin/")

    //await browser.switchWindow("/"+"meityadmin/")

    await browser.refresh()

    await startupLocators.adminemail.setValue("financemanager@yopmail.com")

    await startupLocators.adminpassword.setValue("123456")

    await startupLocators.adminloginbutton.click()

    await grantlocators.pending.click()
    await grantlocators.assignfund.click()
    const centre = await grantlocators.centertype
    await centre.selectByIndex(1)
    await browser.pause(2000)
    const centrename = await grantlocators.nameofcentre
    // await centrename.selectByIndex(4)

    console.log(incubatornames + "  incubator name")
    var incunae = `${incuCredUsername[0]}`
    await centrename.click()
    await centrename.selectByVisibleText(incunae)  // incubatorname variable
    await grantlocators.startupsfinalised.setValue("1")
    const tenure = await grantlocators.tenure
    await tenure.selectByIndex(1)

    await grantlocators.fundingsource.setValue("Govt of India")
    await grantlocators.Ssubmit.click()
    //  await grantlocators.eye.click()
    await browser.pause(2000)
    await grantlocators.projectfinancials.click()
    await browser.pause(2000)
    const startupname = await grantlocators.nameofstartup

    console.log(startupnames + "  incubator name *(*&^%$@#$%^&*(*&^%$$%^&*()")
    var startna = `${startupNewUsername[0]}`
    await startupname.selectByVisibleText(startna)         //Startupname variable
    const eir = await grantlocators.EirGrant
    await eir.selectByIndex(1)
    await grantlocators.Approvedamount.setValue("100000")
    await grantlocators.Q1Amount.setValue("25000")
    await grantlocators.dateofsanction1.setValue("01/09/2023")
    await grantlocators.Q2Amount.setValue("25000")
    await grantlocators.dateofsanction2.setValue("02/09/2023")
    await grantlocators.Q3Amount.setValue("25000")
    await grantlocators.dateofsanction3.setValue("03/09/2023")
    await grantlocators.Q4Amount.setValue("25000")
    await grantlocators.dateofsanction4.setValue("04/09/2023")
    await grantlocators.submit2.click()
    await grantlocators.FundsUtilization.click()
    await browser.pause(2000)
    await grantlocators.EIR.setValue("12500")
    await grantlocators.managementcostEIR.setValue("12500")
    await grantlocators.GrantApproved.setValue("12500")
    await grantlocators.managemnetcostGrant.setValue("12500")
    await grantlocators.Hackathon.setValue("12500")
    await grantlocators.challengeGrant.setValue("12500")
    await grantlocators.DeepEngagement.setValue("12500")
    await grantlocators.workshop.setValue("12500")
    await grantlocators.submit3.click()
    await grantlocators.bankdetails.click()
    await browser.pause(2000)
    await grantlocators.AccountHoldername.setValue("meity startuphub test")
    await grantlocators.bankname.setValue("Punjab nationl bank")
    await grantlocators.bankAddress.setValue("Gachibowli")
    await grantlocators.Accountnumber.setValue("9197000100007897")
    const accountType = await grantlocators.Accounttype
    await accountType.selectByIndex(1)
    await grantlocators.IFSCcode.setValue("CNRB0003055")
    await grantlocators.Submit4.click()


    await browser.pause(5000)

    await browser.newWindow("/" + "login")
    //var Email = "meityincubator5820@uatmsh.meity.gov.in"
    var maill
    if (incuCredEmail.length === 2) {
      maill = `${incuCredEmail[0]}`
    }
    else {
      maill = "meityincubator41581@uatmsh.meity.gov.in"
    }

    var Pswdd = "Meityincubator@123"
    console.log("##############" + maill)
    console.log("##############" + Pswdd)
    // await locatorss.loginCred(incuCredEmail[0],Pswdd)
    await browser.pause(2000)
    await locatorss.loginCred(maill, Pswdd)
    await grantlocators.dashboard.click()
    await grantlocators.Funding.click()
    await grantlocators.pending2.click()
    await grantlocators.projectfinancials.click()
    await browser.pause(2000)
    await grantlocators.dateofreceive1.setValue("05/09/2023")
    await grantlocators.dateofreceive2.setValue("06/09/2023")
    await grantlocators.dateofreceive3.setValue("07/09/2023")
    await grantlocators.dateofreceive4.setValue("08/09/2023")
    await grantlocators.submit2.click()
    await grantlocators.FundsUtilization.scrollIntoView()
    await grantlocators.FundsUtilization.waitForClickable()
    await grantlocators.FundsUtilization.click()
    await browser.pause(2000)
    const amountenter = await grantlocators.EnterAmount
    console.log("amount fields ####   " + amountenter.length)
    for (var i = 0; i < amountenter.length; i++) {
      await amountenter[i].setValue("3125")
    }
    await grantlocators.submit3.click()
    await grantlocators.Documents.scrollIntoView()
    await grantlocators.Documents.waitForClickable()
    await grantlocators.Documents.click()
    await browser.pause(2000)
    const durat = await grantlocators.duration
    const uploadDoc = await grantlocators.uploadDocuments
    const submitDoc = await grantlocators.submitdoc
    for (var j = 0; j < durat.length; j++) {
      await durat[j].setValue("5")

      const image = await uploadDoc[j]
      const filePath = 'images/BHUMI – BSF.docx'
      const remoteFilePath = await browser.uploadFile(filePath)
      await image.setValue(remoteFilePath)

      await submitDoc[j].click()
      await browser.pause(2000)
    }

    await browser.switchWindow("http://13.233.29.114/meityadmin/admin/grant-management/")
    await browser.refresh()
    await grantlocators.viewdocumnets.click()
    await browser.pause(1000)
    const accpet = await grantlocators.Accept
    for (var k = 0; k < accpet.length; k++) {
      await accpet[k].click()
      // const alert = await browser.switchToAlert();
      await browser.acceptAlert()
      await browser.pause(1000)
    }

    await browser.switchWindow("http://13.233.29.114/incubators/funding/grantManagement")
    await browser.refresh()
    await grantlocators.Documents.scrollIntoView()
    await grantlocators.Documents.waitForClickable()
    await grantlocators.Documents.click()
    const textaccept = await grantlocators.acceptedtext
    for (var l = 0; l < textaccept.length; l++) {
      const text = await textaccept[l].getText()
      console.log(text)

      expectChai(text).to.include("ACCEPTED")

    }
    await browser.pause(5000)




  })


  console.log(newcreden)




  it('To verify connections rejection and network filter.', async () => {


    //incubator login
    // var maill = "meityincubator" + Email + "@uatmsh.meity.gov.in"
    var maill
    if (incuCredEmail.length === 2) {
      maill = `${incuCredEmail[0]}`
    }
    else {
      maill = "meityincubator41581@uatmsh.meity.gov.in"
    }

    var Pswdd = "Meityincubator@123"
    console.log("##############" + maill)
    console.log("##############" + Pswdd)
    // await locatorss.loginCred(incuCredEmail[0],Pswdd)
    await browser.url("/" + "login")
    await browser.pause(2000)
    await locatorss.loginCred(maill, Pswdd)

    await browser.pause(2000)
    await connectionslocators.Network.moveTo()
    await connectionslocators.startup.click()
    await browser.pause(2000)

    await networkfilterlocators.scheme.click()
    await networkfilterlocators.Tide2O.waitForClickable({ timeout: 5000 })
    await networkfilterlocators.Tide2O.click()
    await browser.pause(2000)
    await networkfilterlocators.Tide2O.click()
    await networkfilterlocators.Industry.click()
    await networkfilterlocators.advertising.click()
    await browser.pause(2000)
    await networkfilterlocators.advertising.click()
    await networkfilterlocators.sector.click()
    await networkfilterlocators.scroll.moveTo()
    await browser.pause(2000)
    await networkfilterlocators.Art.scrollIntoView()
    await networkfilterlocators.Art.waitForDisplayed({ timeout: 10000 })
    await networkfilterlocators.Art.click()
    await browser.pause(2000)
    await networkfilterlocators.Art.click()
    await networkfilterlocators.state.click()
    await networkfilterlocators.AndhraPradesh.click()
    await browser.pause(2000)
    await networkfilterlocators.AndhraPradesh.click()
    await browser.refresh()
    await browser.pause(2000)

    await connectionslocators.search.setValue(startupNewUsername[0])
    await browser.pause(2000)
    await connectionslocators.profile.click()
    await connectionslocators.connect.click()
    await browser.acceptAlert()
    await stratlocators.profilepic.waitForClickable()
    await stratlocators.profilepic.click()
    await stratlocators.startuplogout.waitForClickable()
    await startupLocators.startuplogout.click()
    //startup login
    var startUpnew = `${startupNewEmail[0]}`
    //var Emai = "meitystartup" + Email1 + "@uatmsh.meity.gov.in"

    var Psw = "Meitystartup@123"
    await locatorss.loginCred(startUpnew, Psw)



    await browser.pause(2000)
    await connectionslocators.Notification.waitForDisplayed({ timeout: 10000 });
    await connectionslocators.Notification.waitForClickable({ timeout: 10000 });
    await connectionslocators.Notification.click()
    await browser.pause(2000)
    const message = await connectionslocators.Notificationmessage.getText()
    console.log(message + "  Notification message")
    await stratlocators.profilepic.waitForClickable()
    await stratlocators.profilepic.click()
    await connectionslocators.connectionNetwork.click()
    await browser.pause(2000)
    await connectionslocators.networkprofile.click()
    await connectionslocators.RejectRequest.click()
    await browser.acceptAlert()
    await browser.pause(2000)
    const rtext = await connectionslocators.Rejectedtext.getText()
    console.log(rtext)
    expectChai(rtext).to.include("Rejected")




  })


  it('To verify connections Accepted.', async () => {


    await browser.url("/" + "login")
    //user1 login - send request
    // var mail1 = "meityincubator" + Email + "@uatmsh.meity.gov.in"
    var incunew = `${incuCredEmail[1]}`
    var Pswd1 = "Meityincubator@123"
    await browser.url("/" + "login")
    await browser.pause(2000)
    await locatorss.loginCred(incunew, Pswd1)
    // await stratlocators.profilepic.waitForClickable()
    // await stratlocators.profilepic.click()
    // await stratlocators.startuplogout.waitForClickable()
    // await startupLocators.startuplogout.click()
    // await browser.pause(1000)
    // await locatorss.email.setValue(incuCredEmail[1])
    // await locatorss.password.setValue(Pswd1)
    // const iframe = await locatorss.frame
    // await browser.switchToFrame(iframe)
    // await browser.pause(2000)
    // await locatorss.reCaptch.click()
    // await browser.pause(5000)
    // const cbox = await locatorss.checkbox
    // const checked = await locatorss.checkbox.getAttribute("aria-checked")
    // console.log(checked)
    // console.log("!!!!!!!!!!!!!!!!!!!")
    // console.log(await $("//span[@id='recaptcha-anchor']").getAttribute("aria-checked"))
    // await cbox.waitUntil(async () => await $("//span[@id='recaptcha-anchor']").getAttribute("aria-checked") === "true", {
    //   timeout: 100000,
    //   timeoutMsg: 'recaptch timeout'
    // })
    // await browser.switchToParentFrame()
    // await locatorss.login.click()
    await browser.pause(2000)
    await connectionslocators.Network.moveTo()
    await connectionslocators.startup.click()
    await browser.pause(2000)
    // await connectionslocators.incubator.click()
    var startnew = `${startupNewUsername[1]}`
    await connectionslocators.search.setValue(startnew)
    await browser.pause(2000)
    await connectionslocators.profile.click()
    await connectionslocators.connect.click()
    await browser.acceptAlert()
    await stratlocators.profilepic.waitForClickable()
    await stratlocators.profilepic.click()
    await stratlocators.startuplogout.waitForClickable()
    await startupLocators.startuplogout.click()

    //user2 login - Accept Request

    var mail2 = `${startupNewEmail[1]}`
    var Pswd2 = "Meitystartup@123"
    await browser.url("/" + "login")
    await browser.pause(2000)
    await locatorss.loginCred(mail2, Pswd2)
    // await locatorss.email.setValue(startupNewEmail[1])
    // await locatorss.password.setValue(Pswd2)
    // const iframee = await locatorss.frame
    // await browser.switchToFrame(iframee)
    // await browser.pause(2000)
    // await locatorss.reCaptch.click()
    // await browser.pause(5000)
    // // const cbox = await locatorss.checkbox   -  no need
    // const checkedd = await locatorss.checkbox.getAttribute("aria-checked")
    // console.log(checkedd)
    // console.log("!!!!!!!!!!!!!!!!!!!")
    // console.log(await $("//span[@id='recaptcha-anchor']").getAttribute("aria-checked"))
    // await cbox.waitUntil(async () => await $("//span[@id='recaptcha-anchor']").getAttribute("aria-checked") === "true", {
    //   timeout: 100000,
    //   timeoutMsg: 'recaptch timeout'
    // })
    // await browser.switchToParentFrame()
    // await locatorss.login.click()
    await browser.pause(2000)
    await connectionslocators.Notification.waitForDisplayed({ timeout: 10000 });
    await connectionslocators.Notification.waitForClickable({ timeout: 10000 });
    await connectionslocators.Notification.click()
    await browser.pause(2000)
    const message = await connectionslocators.Notificationmessage.getText()
    console.log(message + "  Notification message")
    await stratlocators.profilepic.waitForClickable()
    await stratlocators.profilepic.click()
    await connectionslocators.connectionNetwork.click()
    await browser.pause(2000)

    // await connectionslocators.connectionApproved.click()          //delete later
    // await connectionslocators.networkprofilelast.click()          //delete later

    await connectionslocators.networkprofile.click()
    await connectionslocators.Acceptrequest.click()
    await browser.acceptAlert()
    await browser.pause(2000)
    const msgtxt = await connectionslocators.Message.isDisplayed()
    expectChai(msgtxt).to.equal(true)


    //user 2 - Messege send

    await connectionslocators.Message.click()
    var mtext = "Hello"
    var mtext1 = "Hiii"
    await connectionslocators.messagefield.setValue(mtext)
    await connectionslocators.sendmessage.click()
    await browser.refresh()
    const sentmessage = await connectionslocators.messagesent.getText()
    console.log(sentmessage)
    expectChai(sentmessage).to.include(mtext)
    await stratlocators.profilepic.waitForClickable()
    await stratlocators.profilepic.click()
    await stratlocators.startuplogout.waitForClickable()
    await startupLocators.startuplogout.click()

    //user login 1 again to check message received

    await browser.url("/" + "login")
    await browser.pause(2000)
    await locatorss.loginCred(incunew, Pswd1)
    await browser.pause(2000)
    await stratlocators.profilepic.click()
    await connectionslocators.connectionNetwork.click()
    await browser.pause(2000)
    await connectionslocators.connectionApproved.click()
    await browser.pause(2000)
    // const bool = await connectionslocators.Approvedprofile.isDisplayed()      -     no need
    const bool = await connectionslocators.Approvedprofile1.isDisplayed()
    console.log(bool)
    expectChai(bool).to.equal(true)
    await connectionslocators.Approvedprofile.click()
    //user1 verify received message
    await connectionslocators.Message.click()
    await browser.pause(2000)
    const mreceived = await connectionslocators.receivedmessage.getText()
    expectChai(mreceived).to.include(mtext)
    //user1 send message
    await connectionslocators.messagefield.setValue(mtext1)
    await connectionslocators.sendmessage.click()
    await browser.refresh()
    const sentmessage1 = await connectionslocators.messagesent.getText()
    console.log(sentmessage1)
    expectChai(sentmessage1).to.include(mtext1)
    //   //logout
    await stratlocators.profilepic.waitForClickable()
    await stratlocators.profilepic.click()
    await stratlocators.startuplogout.waitForClickable()
    await startupLocators.startuplogout.click()
    //user2 login to receive message

    await locatorss.loginCred(mail2, Pswd2)
    await browser.pause(2000)
    await stratlocators.profilepic.click()
    await connectionslocators.connectionNetwork.click()
    await browser.pause(2000)
    await connectionslocators.connectionApproved.click()
    await browser.pause(2000)
    const xyz = await connectionslocators.Approvedprofile.isDisplayed()
    console.log(xyz)
    expectChai(xyz).to.equal(true)
    await connectionslocators.Approvedprofile.click()
    //user2 verify received message
    await connectionslocators.Message.click()
    await browser.pause(2000)
    const mreceived1 = await connectionslocators.receivedmessage.getText()
    expectChai(mreceived1).to.include(mtext1)
  })
  it('To verify Lab creation.', async () => {
    await browser.url("/" + "login")
    await locatorss.open()
    var maill
    if (incuCredEmail.length === 2) {
      maill = `${incuCredEmail[0]}`
    }
    else {
      maill = "meityincubator41581@uatmsh.meity.gov.in"
    }

    await locatorss.loginCred(maill, "Meityincubator@123")
    await browser.pause(2000)
    await locators.dashboard.waitForClickable({ timeout: 10000 });
    await locators.dashboard.click()
    await locatorss.darkMode.moveTo()
    await browser.pause(2000)
    await locatorss.darkmodeA.click()
    await locators.resourcebooking.click()
    const emaillab = randomstring.generate({
      length: 4,
      charset: 'numeric'
    })
    await locators.LabTitle.setValue(`000AaLab${emaillab}`)
    await locators.LabInfo.setValue("test")
    await locators.Website.setValue("http://13.233.29.114/accelerator/facilities")
    const image = await locators.image1
    const filePath = 'images/test.png'
    const remoteFilePath = await browser.uploadFile(filePath)
    await image.setValue(remoteFilePath)
    await locators.Address1.setValue("hyderabad")
    const states = await locators.State
    await states.selectByIndex(3)
    await locators.city.setValue("hyderabad")
    await locators.zipcode.setValue("123456")
    await locators.inchargeName.setValue("incharge")
    await locators.contactNumber.setValue("9988776655")
    await locators.designation.setValue("test")
    const email = randomstring.generate({
      length: 4,
      charset: 'numeric'
    })
    await locators.InchargeEmail.setValue(`test${email}@gmail.com`)
    await locators.benefits.setValue("test")
    await locators.Eligibility.setValue("test")
    await locators.submit.scrollIntoView()
    await locators.submit.waitForClickable({ timeout: 10000 });
    await browser.pause(2000)
    await locators.submit.click()
    await locators.successMessage.waitUntil(async () => await locators.successMessage.isDisplayed() === true, {
      timeout: 5000,
      timeoutMsg: 'labs not created'
    })
    await browser.pause(3000)
    for (var m = 0; m < 100; m++) {
      await browser.keys(Key.ArrowDown)
      const g = await locators.emailText[0].isDisplayedInViewport()
      if (g === true) {
        break
      }
    }
    expectChai(await locators.emailText[0].getText()).to.equal(`test${email}@gmail.com`);
    await startupLocators.profilepic.waitForClickable({ timeout: 10000 });
    await startupLocators.profilepic.click()
    await startupLocators.startuplogout.waitForClickable({ timeout: 10000 });
    await startupLocators.startuplogout.click()
    await browser.newWindow("/" + "meityadmin/")
    await browser.switchWindow("/" + "meityadmin/")
    await browser.refresh()
    await locatorss.adminCred()
    await locators.labAdmin.click()
    await browser.pause(1000);
    await locators.labsAdmin.waitForExist()
    await locators.labsAdmin.waitForClickable()
    await locators.labsAdmin.click()
    await locators.emailText[0].waitForExist()
    await browser.pause(2000)
    for (var m = 0; m < 100; m++) {
      await browser.keys(Key.ArrowDown)
      const g = await locators.emailText[0].isDisplayedInViewport()
      if (g === true) {
        break
      }
    }
    await locators.ticMArk[0].waitForClickable({ timeout: 10000 });
    await locators.ticMArk[0].click()
    await locators.yesButton.click()
    //startupL
    await browser.switchWindow("/" + "login")
    await browser.refresh()
    var startUpnew
    var pass
    if (startupNewEmail.length === 2) {
      startUpnew = `${startupNewEmail[0]}`
      pass = "Meitystartup@123"
    }
    else {
      startUpnew = "meitystartup84950@uatmsh.meity.gov.in"
      pass = "Meitystartup@123"
    }
    await locatorss.loginCred(startUpnew, pass)
    await locators.homepageResources.moveTo()
    await locators.homepagelab.click()
    await browser.pause(5000)
    await locatorss.labReadmore.isDisplayedInViewport({
      timeout: 10000,
      timeoutMsg: 'login_master_icon button not found'
    })
    await labandfacilities.readMorelabs.click()
    await browser.pause(2000)
    await labandfacilities.readmoreclose.click()
    await locatorss.labReadmore.isDisplayedInViewport({
      timeout: 10000,
      timeoutMsg: 'login_master_icon button not found'
    })
    await browser.pause(2000)
    var k = false
    for (var j = 0; j < 29; j++) {
      k = false
      var cc = await locators.homepageEmail[j].getText()
      if (cc.includes(`test${email}@gmail.com`)) {
        k = true
        expectChai(await locators.homepageEmail[j].getText()).to.includes(`test${email}@gmail.com`)
        await locators.homepageBook[j].click()
        break;
      }
    }
    expectChai(k).to.equal(true);
    // expectChai(await locators.homepageEmail[0].getText()).to.includes("test8754@gmail.com"); 

    await locators.homepagename.setValue("test")
    await locators.homepageNumber.setValue("1234567890")
    const num = randomstring.generate({
      length: 2,
      charset: 'numeric'
    })
    const desc = randomstring.generate({
      length: 2,
      charset: 'numeric'
    })
    await locators.bookingorganisation.setValue("test")
    await locators.homepagselect.selectByIndex(1)
    await locators.homepagDesignation.setValue("test")
    const currentDate = moment().format('DD-MM-YYYY');
    const tomorrowDate = moment().add(1, 'days').format('DD-MM-YYYY');
    // Print the date
    console.log('Present Date:', currentDate);
    await locators.homepagstartDate.setValue(currentDate)
    await locators.homepagendDate.setValue(tomorrowDate)
    await locators.bookingdesc.setValue(desc)
    await locators.homepagSubmitBooking.click()
    await locators.homepageLabSuccessmessage.waitUntil(async () => await locators.homepageLabSuccessmessage.isDisplayed() === true, {
      timeout: 5000,
      timeoutMsg: 'labs not booked'
    })
    await browser.switchWindow("/" + "meityadmin/admin/facilities")
    await browser.pause(2000)
    await locators.bokkingText.waitForClickable({ timeout: 10000 });
    await locators.bokkingText.click()
    await browser.pause(2000)
    expectChai(await locators.approveBookingNumber[0].getText()).to.includes(desc)
    await locators.approveBookingTicMArk[0].click();
    await browser.pause(2000)
    await locators.yesButtonBoking.click()
    await browser.switchWindow("/" + "booking/lab")
    await startupLocators.profilepic.waitForClickable({ timeout: 10000 });
    await startupLocators.profilepic.click()
    await locators.dashboard.waitForClickable({ timeout: 10000 });
    await locators.dashboard.click()
    await locators.myBookings.click()
    await browser.pause(2000)
    var kk = false
    for (var j = 0; j < await locators.approveBookingNumber.length; j++) {
      kk = false
      var ccc = await locators.approveBookingNumber[j].getText()
      if (ccc.includes(desc)) {
        kk = true
        expectChai(await locators.approveBookingNumber[j].getText()).to.includes(desc)
        expectChai(await locators.status[j].getText()).to.includes("Confirmed")
        break;
      }
    }
    expectChai(kk).to.equal(true);
    await browser.switchWindow("/" + "meityadmin/admin/resource-booking?facility=lab")
    await locators.labAdmin.click()
    await locators.labsAdmin.click()
    await browser.pause(2000)
    await $("//*[@class='btn btn-primary float-right mb-2 text-white mr-4 ml-5']").click()
    await browser.pause(2000)
    // for (var m = 0; m < 100; m++) {
    //   await browser.keys(Key.ArrowDown)
    //   const g = await locators.emailText[0].isDisplayedInViewport()
    //   if (g === true) {
    //     break
    //   }
    // }
    for (var i = 0; i < 1; i++) {
      await locators.intomarkcheck[i].scrollIntoView()
      await locators.intomarkcheck[i].waitForClickable()
      await locators.intomarkcheck[i].click()
      await browser.pause(2000)
      await locators.yesButton.click()
      await browser.pause(2000)
    }

    // await locators.powerButton.moveTo()
    // await locators.logoutADminButton.waitForClickable({ timeout: 10000 });
    // await locators.logoutADminButton.click()
    await browser.closeWindow()
    await browser.switchWindow("http://13.233.29.114/startups/myresourcebookings")
    await startupLocators.profilepic.waitForClickable({ timeout: 10000 });

    await startupLocators.profilepic.click()

    await startupLocators.startuplogout.waitForClickable({ timeout: 10000 });

    await startupLocators.startuplogout.click()

  })
  xit('To verify venuee creation', async () => {
    await browser.url("/" + "login")
    await browser.pause(2000)
    var maill
    if (incuCredEmail.length === 2) {
      maill = `${incuCredEmail[0]}`
    }
    else {
      maill = "meityincubator41581@uatmsh.meity.gov.in"
    }


    await locatorss.loginCred(maill, "Meityincubator@123")
    await locators.dashboard.waitForClickable({ timeout: 10000 });
    await locators.dashboard.click()
    await locatorss.darkMode.moveTo()
    await browser.pause(2000)
    await locatorss.darkmodeA.click()
    await locators.resourcebooking.click()
    await labandfacilities.venuebookingHeader.click()
    await labandfacilities.venuebookingAdd.waitForDisplayed({
      timeout: 5000,
      timeoutMsg: 'name button not found'
    })
    await labandfacilities.venuebookingAdd.click()
    await browser.pause(2000)
    await labandfacilities.venueSelect.click()
    await browser.pause(2000)
    await labandfacilities.venueSelect.selectByIndex(3)
    const image = await labandfacilities.venueImage
    const filePath = 'images/test.png'
    const remoteFilePath = await browser.uploadFile(filePath)
    await image.setValue(remoteFilePath)
    const emails = randomstring.generate({
      length: 4,
      charset: 'numeric'
    })
    await labandfacilities.venuewNameVenue.setValue(`00venue${emails}`)
    await labandfacilities.venueNoOfRooms.setValue("3")
    await labandfacilities.venuueAddress.setValue("test")

    await labandfacilities.venueZip.setValue("500049")
    await labandfacilities.venueCharge1.setValue("12345")
    await labandfacilities.venueCharge2.setValue("12345")
    await labandfacilities.venueCharge3.setValue("12345")
    await labandfacilities.venueCharge4.setValue("123456")
    await labandfacilities.venueCity.setValue("testing")
    await labandfacilities.venueDesignatyion.setValue("test")
    const email = randomstring.generate({
      length: 4,
      charset: 'numeric'
    })
    await labandfacilities.venueEmail.setValue(`test${email}@gmail.com`)
    await labandfacilities.venueName.setValue("test")
    await labandfacilities.venueNumber.setValue("9292929292")
    await labandfacilities.venueOtherSecond.setValue("test")
    await labandfacilities.venueothers.setValue("test")

    await locators.submit.scrollIntoView()
    await locators.submit.waitForClickable({ timeout: 10000 });
    await locators.submit.click()
    await labandfacilities.successMessage.waitUntil(async () => await labandfacilities.successMessage.isDisplayed() === true, {
      timeout: 5000,
      timeoutMsg: 'Resource not created'
    })
    await browser.pause(3000)
    for (var m = 0; m < 100; m++) {
      await browser.keys(Key.ArrowDown)
      const g = await locators.emailText[0].isDisplayedInViewport()
      if (g === true) {
        break
      }
    }
    expectChai(await labandfacilities.emailText[0].getText()).to.equal(`00venue${emails}`);
    await startupLocators.profilepic.waitForClickable({ timeout: 10000 });
    await startupLocators.profilepic.click()
    await startupLocators.startuplogout.waitForClickable({ timeout: 10000 });
    await startupLocators.startuplogout.click()
    await browser.newWindow("/" + "meityadmin/")
    await browser.switchWindow("/" + "meityadmin/")
    await browser.refresh()
    await locatorss.adminCred()
    await locators.labAdmin.click()
    await locators.labsAdmin.waitForExist()
    await locators.labsAdmin.waitForClickable()
    await locators.labsAdmin.click()
    await labandfacilities.venuebookingAdmin.click()
    await locators.emailText[0].waitForExist()
    
    await browser.pause(2000)
    for (var m = 0; m < 100; m++) {
      await browser.keys(Key.ArrowDown)
      const g = await labandfacilities.emailText[0].isDisplayedInViewport()
      if (g === true) {
        break
      }
    }
    await locators.ticMArk[0].waitForClickable({ timeout: 10000 });
    await locators.ticMArk[0].click()
    await locators.yesButton.click()
    await browser.switchWindow("/" + "login")
    await browser.refresh()
    var startUpnew
    var pass
    if (startupNewEmail.length === 2) {
      startUpnew = `${startupNewEmail[0]}`
      pass = "Meitystartup@123"
    }
    else {
      startUpnew = "meitystartup84950@uatmsh.meity.gov.in"
      pass = "Meitystartup@123"
    }
    await locatorss.loginCred(startUpnew, pass)
    await locators.homepageResources.moveTo()
    await locators.homepageResourc.click()
    await browser.pause(5000)
    await locatorss.labReadmore.isDisplayedInViewport({
      timeout: 10000,
      timeoutMsg: 'login_master_icon button not found'
    })
    await labandfacilities.readMorelabs.click()
    await browser.pause(2000)
    await labandfacilities.readmoreclose.click()
    await locatorss.labReadmore.isDisplayedInViewport({
      timeout: 10000,
      timeoutMsg: 'login_master_icon button not found'
    })
    var k = false
    for (var j = 0; j < 10; j++) {
      k = false
      var cc = await locators.homepageEmail[j].getText()
      if (cc.includes(`test${email}@gmail.com`)) {
        k = true
        expectChai(await locators.homepageEmail[j].getText()).to.includes(`test${email}@gmail.com`)
        await locators.homepageBook[j].click()
        break;
      }
    }
    expectChai(k).to.equal(true);
    // expectChai(await locators.homepageEmail[0].getText()).to.includes("test8754@gmail.com"); 

    await locators.homepagename.setValue("test")
    await locators.homepageTravel.setValue("travel")
    await locators.homepageNumber.setValue("1234567890")
    const num = randomstring.generate({
      length: 2,
      charset: 'numeric'
    })
    await locators.homepagAccompanying.setValue(desc)
    await locators.homepagTravelling.setValue("test")
    await locators.homepagselect.selectByIndex(1)
    await locators.homepagDesignation.setValue("test")
    const currentDate = moment().format('DD-MM-YYYY');
    const tomorrowDate = currentDate.add(1, 'days').format('DD-MM-YYYY');

    // Print the date
    console.log('Present Date:', currentDate);
    await locators.homepagstartDate.setValue(currentDate)
    await locators.homepagendDate.setValue(tomorrowDate)
    await locators.homepagSubmitBooking.click()
    await locators.homepageLabSuccessmessage.waitUntil(async () => await locators.homepageLabSuccessmessage.isDisplayed() === true, {
      timeout: 5000,
      timeoutMsg: 'Resource bookinng not booked'
    })
    await browser.switchWindow("/" + "meityadmin/admin/facilities")
    await browser.pause(2000)
    await locators.bokkingText.waitForClickable({ timeout: 10000 });
    await locators.bokkingText.click()
    await browser.pause(4000)
    expectChai(await locators.approveBookingNumber[0].getText()).to.includes(desc)
    await locators.approveBookingTicMArk[0].click();
    await browser.pause(2000)
    await locators.yesButtonBoking.click()
    await browser.switchWindow("/" + "booking/guesthouse")
    await startupLocators.profilepic.waitForClickable({ timeout: 10000 });
    await startupLocators.profilepic.click()
    await locators.dashboard.waitForClickable({ timeout: 10000 });
    await locators.dashboard.click()
    await locators.myBookings.click()
    await browser.pause(3000)
    var kk = false
    for (var j = 0; j < await locators.approveBookingNumber.length; j++) {
      kk = false
      var ccc = await locators.approveBookingNumber[j].getText()
      if (ccc.includes(desc)) {
        kk = true
        expectChai(await locators.approveBookingNumber[j].getText()).to.includes(desc)
        expectChai(await locators.status[j].getText()).to.includes("Confirmed")
        break;
      }
    }
    expectChai(kk).to.equal(true);
    await browser.switchWindow("/" + "meityadmin/admin/resource-booking?facility=guesthouse")
    await locators.labAdmin.click()
    await labandfacilities.venuebookingAdmin.click()
    await browser.pause(2000)
    for (var m = 0; m < 100; m++) {
      await browser.keys(Key.ArrowDown)
      const g = await locators.emailText[0].isDisplayedInViewport()
      if (g === true) {
        break
      }
    }

    for (var i = 0; i < 1; i++) {
      await locators.intomarkcheckvenue[i].scrollIntoView()
      await locators.intomarkcheckvenue[i].waitForClickable()
      await locators.intomarkcheckvenue[i].click()
      await browser.pause(2000)
      await locators.yesButton.click()
      await browser.pause(2000)
    }
    // await locators.powerButton.moveTo()
    // await locators.logoutADminButton.waitForClickable({ timeout: 10000 });
    // await locators.logoutADminButton.click()
    await browser.closeWindow()
    await browser.switchWindow("http://13.233.29.114/startups/myresourcebookings")
    await startupLocators.profilepic.waitForClickable({ timeout: 10000 });

    await startupLocators.profilepic.click()

    await startupLocators.startuplogout.waitForClickable({ timeout: 10000 });

    await startupLocators.startuplogout.click()
    await browser.pause(3000)
  })
  it('To verify co-working creation', async () => {
    await browser.url("/" + "login")
    await browser.pause(2000)
    var maill
    if (incuCredEmail.length === 2) {
      maill = `${incuCredEmail[0]}`
    }
    else {
      maill = "meityincubator41581@uatmsh.meity.gov.in"
    }


    await locatorss.loginCred(maill, "Meityincubator@123")
    await locators.dashboard.waitForClickable({ timeout: 10000 });
    await locators.dashboard.click()
    await locatorss.darkMode.moveTo()
    await browser.pause(2000)
    await locatorss.darkmodeA.click()
    await locators.resourcebooking.click()
    await labandfacilities.coworkingSpaceHeader.click()
    await labandfacilities.venuebookingAdd.waitForDisplayed({
      timeout: 5000,
      timeoutMsg: 'name button not found'
    })
    await labandfacilities.venuebookingAdd.click()
    await browser.pause(2000)
    const image = await labandfacilities.coworkingImage
    const filePath = 'images/test.png'
    const remoteFilePath = await browser.uploadFile(filePath)
    await image.setValue(remoteFilePath)
    const emails = randomstring.generate({
      length: 4,
      charset: 'numeric'
    })
    await labandfacilities.nameOfSpace.setValue(`00co-working${emails}`)
    await labandfacilities.selectType.click()
    await labandfacilities.selectType.selectByIndex(1)
    await labandfacilities.enterOtherFacitiles.setValue("test")
    await labandfacilities.coworkingAccomadation.setValue("23")
    await labandfacilities.coworkingAnyCharge.click()
    await labandfacilities.coworkingAnyCharge.selectByIndex(1)
    await labandfacilities.coworkingAddress.setValue("test")
    await labandfacilities.coworkingIncharge.setValue("test")
    await labandfacilities.cowrkingCity.setValue("test")
    await labandfacilities.coworkingZipcode.setValue("500049")
    await labandfacilities.coworkingState.selectByIndex(1)
    const email = randomstring.generate({
      length: 4,
      charset: 'numeric'
    })
    await labandfacilities.coworkingEmail.setValue(`test${email}@gmail.com`)
    await labandfacilities.coworkingInstructions.setValue("test")
    await labandfacilities.coworkingContact.setValue("9876543210")
    await labandfacilities.coworkingDesignation.setValue("test")
    await locators.submit.scrollIntoView()
    await locators.submit.waitForClickable({ timeout: 10000 });
    await locators.submit.click()
    await labandfacilities.cowrkingsuccessMessage.waitUntil(async () => await labandfacilities.cowrkingsuccessMessage.isDisplayed() === true, {
      timeout: 5000,
      timeoutMsg: 'coworking not created'
    })
    await browser.pause(3000)
    for (var m = 0; m < 100; m++) {
      await browser.keys(Key.ArrowDown)
      const g = await labandfacilities.emailText[0].isDisplayedInViewport()
      if (g === true) {
        break
      }
    }
    expectChai(await labandfacilities.emailText[0].getText()).to.equal(`00co-working${emails}`);
    await startupLocators.profilepic.waitForClickable({ timeout: 10000 });
    await startupLocators.profilepic.click()
    await startupLocators.startuplogout.waitForClickable({ timeout: 10000 });
    await startupLocators.startuplogout.click()
    await browser.newWindow("/" + "meityadmin/")
    await browser.switchWindow("/" + "meityadmin/")
    await browser.refresh()
    await locatorss.adminCred()
    await locators.labAdmin.click()
    await locators.labsAdmin.click()
    await labandfacilities.coworkingSPaceAdmin.waitForExist();
    await labandfacilities.coworkingSPaceAdmin.waitForClickable();
    await labandfacilities.coworkingSPaceAdmin.click();
        await browser.pause(2000)
    for (var m = 0; m < 100; m++) {
      await browser.keys(Key.ArrowDown)
      const g = await labandfacilities.emailText[0].isDisplayedInViewport()
      if (g === true) {
        break
      }
    }
    await locators.ticMArk[0].waitForClickable({ timeout: 10000 });
    await locators.ticMArk[0].click()
    await locators.yesButton.click()
    await browser.switchWindow("/" + "login")
    await browser.refresh()
    var startUpnew
    var pass
    if (startupNewEmail.length === 2) {
      startUpnew = `${startupNewEmail[0]}`
      pass = "Meitystartup@123"
    }
    else {
      startUpnew = "meitystartup84950@uatmsh.meity.gov.in"
      pass = "Meitystartup@123"
    }
    await locatorss.loginCred(startUpnew, pass)
    await locators.homepageResources.moveTo()
    await labandfacilities.CowrkingWebsite.click()
    await browser.refresh();
    await browser.pause(5000)
    await locatorss.labReadmore.isDisplayedInViewport({
      timeout: 10000,
      timeoutMsg: 'login_master_icon button not found'
    })
    await labandfacilities.readMorelabs.click()
    await browser.pause(2000)
    await labandfacilities.readmoreclose.click()
    await locators.homepageEmail[0].waitForExist();
    (await locators.homepageEmail[0]).waitForClickable();
    var k = false
    for (var j = 0; j < 30; j++) {
      k = false
      var cc = await locators.homepageEmail[j].getText()
      console.log("EMAIL"+cc)
      console.log("EMAIL"+`test${email}@gmail.com`)

      if (cc.includes(`test${email}@gmail.com`)) {
        k = true
        expectChai(await locators.homepageEmail[j].getText()).to.includes(`test${email}@gmail.com`)
        await locators.homepageBook[j].click()
        break;
      }
    }
    expectChai(k).to.equal(true);
    // expectChai(await locators.homepageEmail[0].getText()).to.includes("test8754@gmail.com"); 

    await locators.homepagename.setValue("test")
    await locators.homepageNumber.setValue("1234567890")
    const num = randomstring.generate({
      length: 2,
      charset: 'numeric'
    })
    const desc = randomstring.generate({
      length: 2,
      charset: 'numeric'
    })
    await locators.bookingorganisation.setValue("test")
    await locators.homepagselect.selectByIndex(1)
    await locators.homepagDesignation.setValue("test")
    const currentDate = moment().format('DD-MM-YYYY');
    const tomorrowDate = moment().add(1, 'days').format('DD-MM-YYYY');
    // Print the date
    console.log('Present Date:', currentDate);
    await locators.homepagstartDate.setValue(currentDate)
    await locators.homepagendDate.setValue(tomorrowDate);
   
    (await locators.numberof).setValue("12");
    await locators.bookingdesc.setValue(desc);
    await locators.homepagSubmitBooking.click()
    await browser.pause(1000)
    await locators.homepageLabSuccessmessage.waitUntil(async () => await locators.homepageLabSuccessmessage.isDisplayed() === true, {
      timeout: 5000,
      timeoutMsg: 'cowrking bookinng not booked'
    })
    await browser.switchWindow("/" + "meityadmin/admin/facilities")
    await browser.pause(2000)
    await locators.bokkingText.waitForClickable({ timeout: 10000 });
    await locators.bokkingText.click()
    await browser.pause(4000)
    expectChai(await locators.approveBookingNumber[0].getText()).to.includes(desc)
    await locators.approveBookingTicMArk[0].click();
    await browser.pause(2000)
    await locators.yesButtonBoking.click()
    await browser.switchWindow("/" + "booking/coworking")
    await startupLocators.profilepic.waitForClickable({ timeout: 10000 });
    await startupLocators.profilepic.click()
    await locators.dashboard.waitForClickable({ timeout: 10000 });
    await locators.dashboard.click()
    await locators.myBookings.waitForExist({ timeout: 10000 })
    await locators.myBookings.waitForClickable()
    await locators.myBookings.click()
    await browser.pause(3000)
    var kk = false
    for (var j = 0; j < await locators.approveBookingNumber.length; j++) {
      kk = false
      var ccc = await locators.approveBookingNumber[j].getText()
      if (ccc.includes(desc)) {
        kk = true
        expectChai(await locators.approveBookingNumber[j].getText()).to.includes(desc)
        expectChai(await locators.status[j].getText()).to.includes("Confirmed")
        break;
      }
    }
    expectChai(kk).to.equal(true);
    await browser.switchWindow("/" + "meityadmin/admin/resource-booking?facility=coworking")
    await locators.labAdmin.click()
    await labandfacilities.coworkingSPaceAdmin.click()
    await browser.pause(2000)
    for (var m = 0; m < 100; m++) {
      await browser.keys(Key.ArrowDown)
      const g = await locators.emailText[0].isDisplayedInViewport()
      if (g === true) {
        break
      }
    }

    for (var i = 0; i < 1; i++) {
      await locators.intomarkcheckvenue[i].scrollIntoView()
      await locators.intomarkcheckvenue[i].waitForClickable()
      await locators.intomarkcheckvenue[i].click()
      await browser.pause(2000)
      await locators.yesButton.click()
      await browser.pause(2000)
    }
    // await locat
    // await locators.powerButton.moveTo()
    // await locators.logoutADminButton.waitForClickable({ timeout: 10000 });
    // await locators.logoutADminButton.click()
    await browser.closeWindow()
    await browser.switchWindow("http://13.233.29.114/startups/myresourcebookings")
    await startupLocators.profilepic.waitForClickable({ timeout: 10000 });

    await startupLocators.profilepic.click()

    await startupLocators.startuplogout.waitForClickable({ timeout: 10000 });

    await startupLocators.startuplogout.click()
    await browser.pause(3000)
  })
  xit('To verify equipment creation', async () => {
    await browser.url("/" + "login")
    await browser.pause(2000)
    var maill
    if (incuCredEmail.length === 2) {
      maill = `${incuCredEmail[0]}`
    }
    else {
      maill = "meityincubator41581@uatmsh.meity.gov.in"
    }


    await locatorss.loginCred(maill, "Meityincubator@123")
    await locators.dashboard.waitForClickable({ timeout: 10000 });
    await locators.dashboard.click()
    await locatorss.darkMode.moveTo()
    await browser.pause(2000)
    await locatorss.darkmodeA.click()
    await locators.resourcebooking.click()
    await labandfacilities.equipmeheader.click()
    await labandfacilities.venuebookingAdd.waitForDisplayed({
      timeout: 5000,
      timeoutMsg: 'name button not found'
    })
    await labandfacilities.venuebookingAdd.click()
    await browser.pause(2000)
    const image = await labandfacilities.coworkingImage
    const filePath = 'images/test.png'
    const remoteFilePath = await browser.uploadFile(filePath)
    await image.setValue(remoteFilePath)
    const emails = randomstring.generate({
      length: 4,
      charset: 'numeric'
    })

    await labandfacilities.equipmentName.setValue(`00equipment${emails}`)
    await labandfacilities.equipmentDetails.setValue("test")
    await labandfacilities.equipmentAddress.setValue("test")
    await labandfacilities.coworkingIncharge.setValue("test")
    await labandfacilities.cowrkingCity.setValue("test")
    await labandfacilities.coworkingZipcode.setValue("500049")
    await labandfacilities.coworkingState.selectByIndex(1)
    const email = randomstring.generate({
      length: 4,
      charset: 'numeric'
    })
    await labandfacilities.coworkingEmail.setValue(`test${email}@gmail.com`)
    await labandfacilities.equimentContact.setValue("9876543210")
    await labandfacilities.EquipmentDesignation.setValue("test")
    await locators.submit.scrollIntoView()
    await locators.submit.waitForClickable({ timeout: 10000 });
    await locators.submit.click()
    await labandfacilities.equipmentsuccessMessage.waitUntil(async () => await labandfacilities.equipmentsuccessMessage.isDisplayed() === true, {
      timeout: 5000,
      timeoutMsg: 'equipment not created'
    })
    await browser.pause(3000)
    for (var m = 0; m < 100; m++) {
      await browser.keys(Key.ArrowDown)
      const g = await labandfacilities.emailText[0].isDisplayedInViewport()
      if (g === true) {
        break
      }
    }
    expectChai(await labandfacilities.emailText[0].getText()).to.equal(`00equipment${emails}`);
    await startupLocators.profilepic.waitForClickable({ timeout: 10000 });
    await startupLocators.profilepic.click()
    await startupLocators.startuplogout.waitForClickable({ timeout: 10000 });
    await startupLocators.startuplogout.click()
    await browser.newWindow("/" + "meityadmin/")
    await browser.switchWindow("/" + "meityadmin/")
    await browser.refresh()
    await locatorss.adminCred()
    await locators.labsAdmin.waitForExist()
    await locators.labsAdmin.waitForClickable()
    await locators.labsAdmin.click()
    await labandfacilities.equipmentAdminHeader.click()
    await locators.emailText[0].waitForExist()
   
    await browser.pause(2000)
    for (var m = 0; m < 100; m++) {
      await browser.keys(Key.ArrowDown)
      const g = await labandfacilities.emailText[0].isDisplayedInViewport()
      if (g === true) {
        break
      }
    }
    await locators.ticMArk[0].waitForClickable({ timeout: 10000 });
    await locators.ticMArk[0].click()
    await locators.yesButton.click()
    await browser.switchWindow("/" + "login")
    await browser.refresh()
    var startUpnew
    var pass
    if (startupNewEmail.length === 2) {
      startUpnew = `${startupNewEmail[0]}`
      pass = "Meitystartup@123"
    }
    else {
      startUpnew = "meitystartup84950@uatmsh.meity.gov.in"
      pass = "Meitystartup@123"
    }
    await locatorss.loginCred(startUpnew, pass)
    await locators.homepageResources.moveTo()
    await labandfacilities.equipmentWebsiteHeader.click()
    await browser.pause(5000)
    await locatorss.labReadmore.isDisplayedInViewport({
      timeout: 10000,
      timeoutMsg: 'login_master_icon button not found'
    })
    await labandfacilities.readMorelabs.click()
    await browser.pause(2000)
    await labandfacilities.readmoreclose.click()
    await locatorss.labReadmore.isDisplayedInViewport({
      timeout: 10000,
      timeoutMsg: 'login_master_icon button not found'
    })
    var k = false
    for (var j = 0; j < 10; j++) {
      k = false
      var cc = await locators.homepageEmail[j].getText()
      if (cc.includes(`test${email}@gmail.com`)) {
        k = true
        expectChai(await locators.homepageEmail[j].getText()).to.includes(`test${email}@gmail.com`)
        await locators.homepageBook[j].click()
        break;
      }
    }
    expectChai(k).to.equal(true);
    // expectChai(await locators.homepageEmail[0].getText()).to.includes("test8754@gmail.com"); 

    await locators.homepagename.setValue("test")
    await locators.homepageNumber.setValue("1234567890")
    const num = randomstring.generate({
      length: 2,
      charset: 'numeric'
    })
    const desc = randomstring.generate({
      length: 2,
      charset: 'numeric'
    })
    await locators.bookingorganisation.setValue("test")
    await locators.homepagselect.selectByIndex(1)
    await locators.homepagDesignation.setValue("test")
    const currentDate = moment().format('DD-MM-YYYY');
    const tomorrowDate = moment().add(1, 'days').format('DD-MM-YYYY');
    // Print the date
    console.log('Present Date:', currentDate);
    await locators.homepagstartDate.setValue(currentDate)
    await locators.homepagendDate.setValue(tomorrowDate)
    await locators.numberof.setValue("23")
    await locators.bookingdesc.setValue(desc)
    await locators.homepagSubmitBooking.click()
    await locators.homepageLabSuccessmessage.waitUntil(async () => await locators.homepageLabSuccessmessage.isDisplayed() === true, {
      timeout: 5000,
      timeoutMsg: 'equipment bookinng not booked'
    })
    await browser.switchWindow("/" + "meityadmin/admin/facilities")
    await browser.pause(2000)
    await locators.bokkingText.waitForClickable({ timeout: 10000 });
    await locators.bokkingText.click()
    await browser.pause(4000)
    expectChai(await locators.approveBookingNumber[0].getText()).to.includes(desc)
    await locators.approveBookingTicMArk[0].click();
    await browser.pause(2000)
    await locators.yesButtonBoking.click()
    await browser.switchWindow("/" + "booking/equipment")
    await startupLocators.profilepic.waitForClickable({ timeout: 10000 });
    await startupLocators.profilepic.click()
    await locators.dashboard.waitForClickable({ timeout: 10000 });
    await locators.dashboard.click()
    await locators.myBookings.click()
    await browser.pause(3000)
    var kk = false
    for (var j = 0; j < await locators.approveBookingNumber.length; j++) {
      kk = false
      var ccc = await locators.approveBookingNumber[j].getText()
      if (ccc.includes(desc)) {
        kk = true
        expectChai(await locators.approveBookingNumber[j].getText()).to.includes(desc)
        expectChai(await locators.status[j].getText()).to.includes("Confirmed")
        break;
      }
    }
    expectChai(kk).to.equal(true);
    await browser.switchWindow("/" + "meityadmin/admin/resource-booking?facility=equipment")
    await locators.labAdmin.click()
    await labandfacilities.equipmentAdminHeader.click()
    await browser.pause(2000)
    for (var m = 0; m < 100; m++) {
      await browser.keys(Key.ArrowDown)
      const g = await locators.equipmentemailText[0].isDisplayedInViewport()
      if (g === true) {
        break
      }
    }

    for (var i = 0; i < await locators.intomarkcheckequipment.length; i++) {
      await locators.intomarkcheckequipment[i].scrollIntoView()
      await locators.intomarkcheckequipment[i].waitForClickable()
      await locators.intomarkcheckequipment[i].click()
      await browser.pause(2000)
      await locators.yesButton.click()
      await browser.pause(2000)
    }
    // await locat
    // await locators.powerButton.moveTo()
    // await locators.logoutADminButton.waitForClickable({ timeout: 10000 });
    // await locators.logoutADminButton.click()
    await browser.closeWindow()
    await browser.switchWindow("http://13.233.29.114/startups/myresourcebookings")
    await startupLocators.profilepic.waitForClickable({ timeout: 10000 });

    await startupLocators.profilepic.click()

    await startupLocators.startuplogout.waitForClickable({ timeout: 10000 });

    await startupLocators.startuplogout.click()
    await browser.pause(3000)
  })
  //Forms TestCase
  xit('To verify forms creation', async () => {
    await browser.url("/" + "meityadmin/")
    await locatorss.adminCred();
    await Forms.adminFormsMenuText.scrollIntoView()
    await Forms.adminFormsMenuText.waitForClickable({ timeout: 10000 })
    await Forms.adminFormsMenuText.click()
    await Forms.adminFormsCreateForm.click()
    await Forms.adminFormsStartups.waitForClickable({ timeout: 10000 })
    await Forms.adminFormsStartups.click()
    await browser.pause(3000)
    // Extract the individual components of the date
    var today = new Date();
    today.setDate(today.getDate() + 2);
    var day = today.getDate();
    var month = today.getMonth() + 1; // Months are zero-based
    var year = today.getFullYear();
    var currentDate = new Date();

    // Add one day to the current date
    currentDate.setDate(currentDate.getDate() + 1);

    var year1 = currentDate.getFullYear();
    var month1 = currentDate.getMonth() + 1; // Months are zero-based
    var day1 = currentDate.getDate();
    const currentTime = new Date();
    const options = { hour: '2-digit', minute: '2-digit' };
    const formattedTime = currentTime.toLocaleTimeString(undefined, options);
    // Format the date as desired (e.g., "YYYY-MM-DD")
    var formattedTodayDate = (day1 < 10 ? '0' : '') + day1 + '/' + (month1 < 10 ? '0' : '') + month1 + '/' + "00" + year1 + formattedTime
    var formattedTommorrowDate = (day < 10 ? '0' + day : day) + '/' + (month < 10 ? '0' + month : month) + '/' + "00" + year + formattedTime
    await Forms.adminFromDate.setValue(formattedTodayDate)
    await browser.pause(2000);
    await Forms.adminToDate.setValue(formattedTommorrowDate)
    await browser.pause(2000);
    await Forms.adminAddMoreFields.waitForClickable()
    await Forms.adminAddMoreFields.click()
    await Forms.adminAddmoreTextfield.waitForClickable()
    await Forms.adminAddmoreTextfield.setValue("test")
    await Forms.addmoreFieldsSelect.selectByVisibleText("Enter Number")
    await Forms.addmoreFieldsSave.click()
    await browser.pause(2000)
    await Forms.adminFormsSave.scrollIntoView()
    await Forms.adminFormsSave.waitForClickable({ timeout: 10000 })
    await Forms.adminFormsSave.click()
    await browser.pause(5000)
   // await Forms.startDate.waitForDisplayed({ timeout: 10000 })
    const date = await Forms.formsStartDateValidation[0].getText();
    const currentDates = new Date();
    // Calculate tomorrow's date
    const tomorrowDates = new Date(currentDates);
    tomorrowDates.setDate(currentDates.getDate() + 1);
    // Format the date as "MMM D" (e.g., "Sep 1")
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const formattedDates = `${months[tomorrowDates.getMonth()]} ${tomorrowDates.getDate()}`;
    expectChai(date).to.include(formattedDates)
    await browser.newWindow("/" + "login")
    await browser.switchWindow("/" + "login")
    var startUpnew
    var pass
    if (startupNewEmail.length === 2) {
      startUpnew = `${startupNewEmail[0]}`
      pass = "Meitystartup@123"
    }
    else {
      startUpnew = "meitystartup84950@uatmsh.meity.gov.in"
      pass = "Meitystartup@123"
    }
    await locatorss.loginCred(startUpnew, pass)
    await browser.refresh()
    await browser.pause(3000)
    await locators.dashboard.waitForClickable({ timeout: 10000 });
    await locators.dashboard.click()
    await Forms.formsWebsiteFormsHeader.click()
    await browser.pause(5000)
    await Forms.formsDisplayFromWebsite.waitForExist({ timeout: 10000 })
    await Forms.formsDisplayFromWebsite.waitForDisplayed({ timeout: 10000 })
    const dates = await Forms.formsStartDateValidation[0].getText();
    expectChai(dates).to.include(formattedDates)
    await Forms.formsView[0].click()
    formname = randomstring.generate({
      length: 4,
      charset: 'numeric'
    })
    await Forms.formsWebsiteStartupInputFeild.setValue(`00forms${formname}`)
    await Forms.formsstateSelect.selectByVisibleText("Andhra Pradesh")
    await Forms.formsNewFeild.scrollIntoView()
    await Forms.formstextfieldWebsite.setValue("10")
    await Forms.formsWebsiteSubmitField.scrollIntoView()
    await Forms.formsWebsiteSubmitField.click()
  })
  xit('To verify reports creation', async () => {
    await browser.url("/" + "meityadmin/")
    await locatorss.adminCred()
    await Reports.reportAdminSideName.click()
    await Reports.reportAdminStartup.click()
    await browser.pause(3000)
    await Reports.reportAdminStateSelect.waitForDisplayed()
    await Reports.reportAdminStateSelect.click()
    await browser.pause(3000)
    await Reports.reportAdminStateSelect.selectByVisibleText("Andhra Pradesh")
    await Reports.reportAdminApply.click()
    await browser.pause(2000)
    const centerListawait = await Reports.reportAdminCenter
    await centerListawait[0].scrollIntoView()
    console.log("^^^^^^^" + centerListawait.length)
    const centerlist = []
    let check = 0
    for (var i = 0; i < centerListawait.length; i++) {
      await centerListawait[i].scrollIntoView()
      centerlist.push(await centerListawait[i].getText())
      if (centerlist[i] === `00forms${formname}`) {
        console.log("@@@@@@@@@@@" + centerlist[i])
        check = 1
        break
      }
    }
    expectChai(check).to.equal(1)
    const newfield = await Reports.reportAdminnewfield
    const newfieldcount = await Reports.reportnewFiledCount
    const namelist = []
    var newfieldc;
    await newfield[1].scrollIntoView()
    for (var i = 0; i < newfield.length; i++) {
      await newfield[i].scrollIntoView()
      namelist.push(await newfield[i].getText())
      if (namelist[i] === "test") {
        newfieldc = await newfieldcount[i].getText()
        await newfield[i].click()
        check = 1
        break
      }
    }
    const valiDateCount = await Reports.reportnewvalidcount
    await Reports.reportnewvalidcount[i]
    console.log("########" + valiDateCount.length)
    var totalData = 0;
    for (var i = 0; i < await valiDateCount.length; i++) {
      await valiDateCount[i].scrollIntoView()
      var te = await valiDateCount[i].getText() * 1
      totalData = totalData + te
      // const element = await Reports.reportnewvalidcount[i]

      // // Highlight the text using JavaScript
      // await browser.execute('arguments[0].style.backgroundColor = "green";', element);
    }
    console.log(totalData)
    console.log("########" + valiDateCount.length)
    expectChai(totalData).to.equal(newfieldc * 1)
  })
  xit('To perform Faqs create.', async () => {
    await browser.url("http://13.233.29.114/meityadmin/auth")
    await browser.refresh()
    await locatorss.adminCred()
    await browser.pause(2000)
    await faqLocator.faq.click()


    const num = randomstring.generate({

      length: 4,

      charset: 'numeric'

    })
    const ques = `what is Automation testing?${num}`

    //   await locators.InchargeEmail.setValue(`test${email}@gmail.com`)
    await faqLocator.question.setValue(ques)
    await faqLocator.Answer.setValue("Automated testing is a software testing technique that automates the process of validating the functionality of software and ensures it meets requirements before being released into production. With automated testing, an organization can run specific software tests at a faster pace without human testers.")
    await faqLocator.create.click()
    await browser.pause(2000)
    await browser.refresh()
    await browser.pause(2000)

    const qname = await faqLocator.qcell
    console.log(qname.length)
    console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@")

    for (var i = 0; i < qname.length; i++) {
      await qname[i].scrollIntoView()
      var qn = await qname[i].getText()
      console.log(qn)
      //var approved = await locatorss.approve[i]

      if (qn.includes(ques)) {
        console.log("question created   " + qn)
        await browser.pause(3000)
        await faqLocator.approve[i].click()
        await browser.pause(1000)
        await faqLocator.yes.click()
        await browser.pause(6000)
        break;
      }



    }
    await browser.navigateTo("http://13.233.29.114/about/faqs")
    await browser.pause(1000)

    await browser.refresh()
    await browser.pause(10000)
    const name = await faqLocator.faqname
    console.log(name.length)

    var k = false
    for (var j = 0; j < name.length; j++) {
      k = false
      const name = await faqLocator.faqname[j].getText()
      const names = name.split("+")[1].split("\n")[1]
      console.log("test  " + names)

      if (names.includes(ques)) {
        k = true;
        expectChai(names).to.includes(ques);
        break;

      }

    }
    // expectChai(k).to.equal(true);

    await browser.pause(3000)
  })

  xit('To perform news create.', async () => {
    await browser.url("http://13.233.29.114//meityadmin/auth")
    await browser.refresh()
    await locatorss.adminCred()
    await browser.pause(2000)
    await newslocators.news.click()
    const num = randomstring.generate({

      length: 4,

      charset: 'numeric'

    })
    const name = `News${num}`
    await newslocators.Title.setValue(name)
    await newslocators.Link.setValue("https://www.facebook.com/login/")
    const file = await newslocators.file
    const filePath = 'images/test.png'
    const remoteFilePath = await browser.uploadFile(filePath)
    await file.setValue(remoteFilePath)
    await newslocators.description.setValue("Join us for the #G20DigitalInnovationAlliance outreach Program organized by MeitY Startup Hub in partnership with Headstart Network Foundation.")
    await newslocators.create.click()
    await browser.pause(3000)
    await browser.refresh()
    await browser.pause(2000)
    const tname = await newslocators.tcell
    console.log(tname.length)
    for (var i = 0; i < tname.length; i++) {
      await tname[i].scrollIntoView()
      var tiname = await tname[i].getText()
      console.log(tiname)
      console.log(tiname[i] + "  " + name)

      if (tiname.includes(name)) {
        console.log("news created    " + tiname)
        await browser.pause(3000)
        await newslocators.approve[i].waitForClickable()
        await newslocators.approve[i].click()
        await newslocators.yes.click()
        break;

      }
    }

    await browser.newWindow("http://13.233.29.114/media/allnews")


    await browser.pause(2000)
    const title = await newslocators.newstitle
    console.log(title.length)
    for (var j = 0; j < title.length; j++) {
      const text = await title[j].getText()
      console.log(text)
      if ((await title[j].getText()).includes("News41"))
        expectChai(await title[j].getText()).to.equal("News41");
      break;
    }


    await browser.pause(3000)


  })

  xit('To perform pressrelease create.', async () => {
    await browser.url("http://13.233.29.114/meityadmin/auth")
    await browser.refresh()
    await locatorss.adminCred()
    await browser.pause(2000)
    await presslocators.press.scrollIntoView()
    await presslocators.press.click()
    const num = randomstring.generate({

      length: 4,

      charset: 'numeric'

    })
    const ques = `Press Release Test ${num}`
    await presslocators.title.setValue(ques)
    await presslocators.link.setValue("https://www.facebook.com/login/")
    await presslocators.date.setValue("Jul 13, 2023")
    await presslocators.description.setValue("Over 150 startups from various sectors participate")
    await presslocators.create.click()
    await browser.pause(3000)
    await browser.refresh()
    await browser.pause(2000)
    const tname = await presslocators.tcell
    console.log(tname.length)
    for (var i = 0; i < tname.length; i++) {
      await tname[i].scrollIntoView()
      var tiname = await tname[i].getText()
      console.log(tiname)
      console.log(tiname[i] + "  " + ques)

      if (tiname.includes(ques)) {
        console.log("news created    " + tiname)
        await browser.pause(3000)
        await presslocators.approve[i].waitForClickable()
        await presslocators.approve[i].click()
        await presslocators.yes.click()
        break;

      }
    }


    await browser.pause(3000)
  })


  it('To perform query handling', async () => {

    await browser.url("http://13.233.29.114/login")
    // var maill = "meityincubator" + Email + "@uatmsh.meity.gov.in"
    // var Pswdd = "Meityincubator@123"
    var maill
    if (incuCredEmail.length === 2) {
      maill = `${incuCredEmail[0]}`
    }
    else {
      maill = "meityincubator41581@uatmsh.meity.gov.in"
    }

    var Pswdd = "Meityincubator@123"
    await locatorss.loginCred(maill, Pswdd)

    await browser.pause(2000)
    await stratlocators.profilepic.waitForClickable()
    await stratlocators.profilepic.click()
    await querylocators.queryhandling.click()
    await browser.pause(1000)
    const ddown = await querylocators.caretgorydd
    await ddown.selectByIndex(1)
    var descript = "My startup credentials are not working"
    await querylocators.description.setValue(descript)
    await querylocators.SubmitQ.click()
    await querylocators.eye.waitForDisplayed({ timeout: 10000 })
    await querylocators.eye.click()
    await browser.pause(2000)
    await browser.newWindow("http://13.233.29.114/meityadmin/auth")
    await locatorss.adminCred()
    await browser.pause(1000)
    await querylocators.querhyhandling1.waitForDisplayed({ timeout: 10000 })
    await querylocators.querhyhandling1.click()
    await querylocators.eye1.click()
    const wtext = await querylocators.rmessage1.getText()
    expectChai(wtext).to.include(descript)
    var descript2 = "please check your credentials"
    await querylocators.reply.setValue(descript2)
    await querylocators.clicktoreply.click()
    await querylocators.close.click()
    await browser.switchWindow("http://13.233.29.114/incubators/query")
    await browser.refresh()
    await querylocators.eye.waitForDisplayed({ timeout: 10000 })
    var Restext = await querylocators.resolvedtext.getText()
    expectChai(Restext).to.include("RESOLVED")
    await querylocators.eye.click()
    await querylocators.Rmessage2.waitForDisplayed({ timeout: 10000 })
    var message2 = await querylocators.Rmessage2.getText()
    expectChai(message2).to.include(descript2)
    const Reopen = await querylocators.Ropen.getText()
    expectChai(Reopen).to.include("Reopen")


  })

  xit('To perform blogs.', async () => {
    await locatorss.adminCred()
    await blogs.adminloginbutton.click();
    (await blogs.blogsadmin).click();
    await browser.pause(3000)
    const lengtha = await blogs.delete.length
    for (var g = 0; g < lengtha; g++) {
      await blogs.delete[g].scrollIntoView()

      await blogs.delete[g].isDisplayedInViewport()
      await browser.pause(2000)
      await blogs.delete[g].click()
      await browser.pause(2000)
      await blogs.yes.click()
    }
    const Email = randomstring.generate({
      length: 4,
      charset: 'numeric'
    })
    await blogs.titile.setValue("Testing" + Email)
    await blogs.description.click()
    await blogs.description.setValue("Desscro")
    await blogs.body.click()
    await blogs.body.setValue("Desscro")

    const fileInput = await blogs.file
    const filePath = 'images/test.png'
    const remoteFilePath = await browser.uploadFile(filePath)
    await blogs.file.setValue(remoteFilePath)
    await blogs.create.click()
    await browser.pause(5000)
    await browser.refresh()
    await browser.pause(2000)
    expectChai(await blogs.titlecheck[0].getText()).to.include("Testing" + Email)
    await browser.url("/")
    await browser.pause(3000)
    await blogs.blog.scrollIntoView()
    await browser.pause(2000)
    await blogs.blog.click()
    await browser.pause(3000)
    const page = await blogs.pagenation.length
    for (var i = 1; i < page - 1; i++) {
      var k = true;
      await blogs.pagenation[i].scrollIntoView()
      await blogs.pagenation[i].isDisplayedInViewport()
      await blogs.pagenation[i].waitForClickable({ timeout: 10000 })
      await blogs.pagenation[i].click()
      await browser.pause(3000)
      // for (var m = 0; m < 100; m++) {
      //   await browser.keys(Key.ArrowDown)
      //   const g = await $("//i[@class='fa-solid fa-circle-arrow-up scroll-to-top']").isDisplayedInViewport()
      //   if (g === true) {
      //     break
      //   }
      // }
      await $("//i[@class='fa-solid fa-circle-arrow-up scroll-to-top']").scrollIntoView()
      await $("//i[@class='fa-solid fa-circle-arrow-up scroll-to-top']").isDisplayedInViewport()
      await $("//i[@class='fa-solid fa-circle-arrow-up scroll-to-top']").waitForClickable({ timeout: 10000 })
      await $("//i[@class='fa-solid fa-circle-arrow-up scroll-to-top']").click()
      await browser.pause(2000)
      console.log("%%%%%%%%%%%%%%%%%" + await blogs.uiTitle.length)
      for (var j = 0; j < await blogs.uiTitle.length; j++) {
        if (await blogs.uiTitle[j].getText() === "Testing" + Email) {
          // for (var m = 0; m < 100; m++) {
          //   await browser.keys(Key.ArrowDown)
          //   const g = await blogs.uiTitle[j].isDisplayedInViewport()
          //   if (g === true) {
          //     break
          //   }

          // }
          await browser.pause(2000)
          await blogs.uiTitle[j].scrollIntoView()
          await blogs.uiTitle[j].isDisplayedInViewport()
          await blogs.uiTitle[j].waitForClickable()
          await blogs.uiTitle[j].click()
          k = false
          break;

        }
      }
      if (k === false) {
        break
      }
    }

  })
  xit('To verify grevaince creation', async () => {

    await browser.url("/" + "grievance")

    for (var i = 0; i < 2; i++) {

      await grevaince.select[i].selectByIndex(1)

    }
    for (var i = 0; i < 4; i++) {
      if (i == 0) {
        await grevaince.input[i].setValue("test")
      }
      if (i == 1) {
        await grevaince.input[i].setValue("test@gmail.com")
      }
      if (i == 2) {
        await grevaince.input[i].setValue("9876543210")
      }
      if (i == 3) {
        await grevaince.input[i].setValue("test")
      }
    }
    await grevaince.desc.setValue("test")
    await grevaince.button.click()
    await browser.pause(2000)
    const text = await grevaince.successText.isExisting()
    console.log(text)
    //await this.waitcheck.click()
    await grevaince.successText.waitUntil(async () => await grevaince.successText.isExisting() === true, {
      timeout: 5000,
      timeoutMsg: 'grievance creation is not working'
    })
    await browser.newWindow("/" + "meityadmin/")

    await browser.switchWindow("/" + "meityadmin/")

    await browser.refresh()

    await locatorss.adminCred()
    await browser.pause(2000)
    await contactuslocator.others.click()
    await grevaince.grievanceAdmin.click()
    await browser.pause(2000)

    expectChai(await grevaince.mobileText[0].getText()).to.include('9876543210')


  })
  xit('To verify msh logo apply', async () => {
    var maill
    if (incuCredEmail.length === 2) {
      maill = `${incuCredEmail[0]}`
    }
    else {
      maill = "meityincubator41581@uatmsh.meity.gov.in"
    }

    var Pswdd = "Meityincubator@123"
    console.log("##############" + maill)
    console.log("##############" + Pswdd)
    // await locatorss.loginCred(incuCredEmail[0],Pswdd)
    const windowHandles = await browser.getWindowHandles();
    for (var i = 1; i < await windowHandles.length; i++) {
      const newTabHandle = windowHandles[i];
      await browser.switchToWindow(newTabHandle);
      await browser.closeWindow()
      await browser.switchToWindow(windowHandles[0]);
    }
    await browser.url("/" + "login")
    await browser.pause(2000)
    await locatorss.loginCred(maill, Pswdd)
    await applyLogo.aboutL.moveTo()
    await applyLogo.applyLogo.click()
    await browser.pause(2000)
    console.log(await applyLogo.applyInputText.length)
    for (var i = 0; i < await applyLogo.applyInputText.length; i++) {
      console.log("$$$$$$$$$$$$$$$$$$$$$" + i)
      var MobileNum = randomstring.generate({
        charset: 'numeric'
      });
      if (i == 0 || i == 14 || i == 12) {
        await applyLogo.applyInputText[i].setValue("test")
      } else {
        await applyLogo.applyInputText[i].setValue(MobileNum)
      }
    }
    for (var i = 0; i < await applyLogo.applyTextArea.length; i++) {
      console.log("$$$$$$$$$$$$$$$$$$$$$" + i)
      var MobileNum = randomstring.generate({
        length: 4,
        charset: 'numeric'
      });
      await applyLogo.applyTextArea[i].setValue(MobileNum)
    }
    await mshlogolocators.someWebsite.setValue("website")
    for (var i = 0; i < 6; i++) {
      console.log("$$$$$$$$$$$$$$$$$$$$$" + i)
      await applyLogo.applyLogoSelect[i].selectByIndex(1)
    }
    const currentDate = new Date();

    // Get the day from the current date
    const day = String(currentDate.getDate()).padStart(2, '0');
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const year = currentDate.getFullYear();

    // Print the day
    console.log(`Today's date is: ${day}/${month}/${year}`);
    for (var i = 0; i < await applyLogo.applyLogoDate.length; i++) {
      await applyLogo.applyLogoDate[i].setValue(day + "/" + month + "/" + year);
    }
    await applyLogo.newOther.clearValue()
    await applyLogo.newOther.setValue("test")

    await applyLogo.buttonSubmit.click()
    const text = await applyLogo.successText.isExisting()
    console.log(text)
    //await this.waitcheck.click()
    await applyLogo.successText.waitUntil(async () => await applyLogo.successText.isExisting() === true, {
      timeout: 5000,
      timeoutMsg: 'logo creation is not working'
    })
    await browser.newWindow("/" + "meityadmin/")

    await browser.switchWindow("/" + "meityadmin/")

    await browser.refresh()

    await startupLocators.adminemail.setValue("superadmin@gmail.com")

    await startupLocators.adminpassword.setValue("Flower123#")

    await startupLocators.adminloginbutton.click();

    (await contactuslocator.others).click()
    await applyLogo.logoAdmin.click()
    await applyLogo.downloadButton.waitUntil(async () => await $("//button[@class='btn btn-success mb-2 ng-star-inserted']").isDisplayed() === true, {
      timeout: 30000,
      timeoutMsg: 'data not loaded'
    })

    expectChai(await applyLogo.adminEmail[0].getText()).to.include('test')
  })
  xit('To verify contactus creation', async () => {
    await browser.url("/" + "about/contactus")
    await contactuslocator.email.setValue("testcontactinfo@gmail.com")
    await contactuslocator.name.setValue("tes")
    await contactuslocator.message.setValue("test")
    await contactuslocator.submit.click()
    await browser.newWindow("/" + "meityadmin/")
    await browser.switchWindow("/" + "meityadmin/")
    await browser.refresh()
    await locatorss.adminCred()
    await browser.pause(2000)
    await contactuslocator.others.click()
    await contactuslocator.contactUs.click();
    await browser.pause(2000)
    expectChai(await contactuslocator.emailText[0].getText()).to.include('testcontactinfo@gmail.com')

  })
  xit('To perform feedback received', async () => {

    await browser.url("/")
    await feedbackLocators.feedback1.scrollIntoView()
    await feedbackLocators.feedback1.click()
    await browser.execute(() => {
      window.scrollTo(0, 0);
    });
    await feedbackLocators.name.setValue("Arun")

    const num = randomstring.generate({
      length: 4,
      charset: 'numeric'
    })
    const mail = `feedback${num}@gmail.com`
    console.log(mail + "   email")

    await feedbackLocators.email.setValue(mail)
    var msg = "i want to know aboout startup"
    await feedbackLocators.message.setValue(msg)
    await feedbackLocators.submit.waitForClickable({ timeout: 10000 })
    await feedbackLocators.submit.click()
    await browser.execute(() => {
      window.scrollTo(0, 0);
    });
    await browser.newWindow("http://13.233.29.114/meityadmin/auth")
    await browser.switchWindow("http://13.233.29.114/meityadmin/auth")
    await locatorss.adminCred()
    await feedbackLocators.others.scrollIntoView()
    await feedbackLocators.others.click()
    await feedbackLocators.feedbackreceived.click()
    var etext = await feedbackLocators.emailtext.getText()
    var msgg = await feedbackLocators.message1.getText()

    expectChai(etext).to.include(mail)
    expectChai(msgg).to.include(msg)

  })

  xit('To perform jobscreate', async () => {
    await browser.url("/" + "meityadmin")
    await locatorss.adminCred()
    await jobsncareerlocators.jobs.scrollIntoView()
    await jobsncareerlocators.jobs.click()
    await jobsncareerlocators.createjob.click()
    const num = randomstring.generate({
      length: 4,
      charset: 'numeric'
    })
    const job = `jobs${num}`
    console.log(job + " job title")

    await jobsncareerlocators.title.setValue(job);
    (await jobsncareerlocators.category).setValue("category");
    (await jobsncareerlocators.project).setValue("test project");
    (await jobsncareerlocators.division).setValue("test division");
    const int = "12";
    const intege = parseInt(int);
    console.log(typeof (intege) + "   is type of");
    (await jobsncareerlocators.noofpositions).setValue(intege);
    (await jobsncareerlocators.description).setValue("test description");
    const fileInput = await jobsncareerlocators.file
    const filePath = 'images/BHUMI – BSF.docx'
    const remoteFilePath = await browser.uploadFile(filePath)
    await fileInput.setValue(remoteFilePath)

    await browser.pause(2000)
    await jobsncareerlocators.submit.click()
    await browser.newWindow("http://13.233.29.114/career")
    await browser.switchWindow("http://13.233.29.114/career")
    //await jobsncareerlocators.jobtitletext.waitForDisplayed({timeout : 10000})
    await browser.pause(3000)
    const text = await jobsncareerlocators.jobtitletext.getText()
    expectChai(text).to.include(job)
    await jobsncareerlocators.clickhere.click()
    await browser.pause(2000)
    await jobsncareerlocators.name.waitForClickable({ timeout: 10000 })
    await jobsncareerlocators.name.setValue("Arun")
    var mailId = "testcareer1@gmail.com"
    await jobsncareerlocators.email.setValue(mailId)
    await jobsncareerlocators.mobile.setValue("9876578987")
    await jobsncareerlocators.address.setValue("Hyderabad")
    await jobsncareerlocators.skills.setValue("technical")
    const fileInput1 = await jobsncareerlocators.file
    const filePath1 = 'images/BHUMI – BSF.docx'
    const remoteFilePath1 = await browser.uploadFile(filePath1)
    await fileInput1.setValue(remoteFilePath1)
    await jobsncareerlocators.Apply.click()
    await browser.switchWindow("http://13.233.29.114/meityadmin/")
    await feedbackLocators.others.scrollIntoView()
    await feedbackLocators.others.click()
    await jobsncareerlocators.emailtext.waitForDisplayed({ timeout: 10000 })
    const etext1 = await jobsncareerlocators.emailtext.getText()
    console.log(etext1)
    expectChai(etext1).to.include(mailId)
    await browser.closeWindow()
    await browser.switchWindow("http://13.233.29.114/career")


    await browser.pause(2000)




  })

  xit('To perform subscribe', async () => {
    await browser.url("/")
    const num = randomstring.generate({
      length: 4,
      charset: 'numeric'
    })
    const mail = `test${num}@subscribe.com`
    await subscribelocators.semail.scrollIntoView()
    await subscribelocators.semail.setValue(mail)
    await subscribelocators.subscribe.click()
    await subscribelocators.stayconnected.scrollIntoView({ timeout: 10000 })
    await browser.pause(1000)
    // const stext = await subscribelocators.subscribed.getText()
    // expectChai(stext).to.include(" Subscribed ")
    await browser.newWindow("http://13.233.29.114/meityadmin/auth")
    await browser.switchWindow("http://13.233.29.114/meityadmin/auth")
    await locatorss.adminCred()
    await feedbackLocators.others.scrollIntoView()
    await feedbackLocators.others.click()
    await subscribelocators.subscriberlist.click()
    const stext1 = await subscribelocators.emailtext.getText()
    expectChai(stext1).to.include(mail)


  })



  xit('To perform jinnie chatbot', async () => {
    await browser.url("/")
    await chabot.jinnie.click()
    const frame = await chabot.iframe
    await browser.switchToFrame(frame)
    await chabot.viewmore.click()
    await browser.pause(1000)
    const QR = await chabot.quickreply
    console.log(QR.length + " qr length")
    for (var i = 0; i < QR.length; i++) {
      await QR[i].scrollIntoView()
      await QR[i].click()
      await browser.pause(2000)

    }
    await browser.pause(4000)


  })

  xit('To perform upload documents', async () => {
    await browser.url("/" + "login")
    var startUpnew = `${startupNewEmail[0]}`
    //var Emai = "meitystartup" + Email1 + "@uatmsh.meity.gov.in"

    var Psw = "Meitystartup@123"
    await locatorss.loginCred(startUpnew, Psw)
    await browser.refresh()
    await browser.pause(1000)
    await uploaddocs.doctext.scrollIntoView()
    const drdwn = await uploaddocs.ddown
    await drdwn.selectByIndex(1)
    const fileInput = await uploaddocs.docfile
    const filePath = 'images/BHUMI – BSF.docx'
    const remoteFilePath = await browser.uploadFile(filePath)
    await fileInput.setValue(remoteFilePath)
    const text = await uploaddocs.COI.getText()
    console.log(text + " selecetd ddown")
    await uploaddocs.uploadDoc.click()
    await uploaddocs.view.waitForDisplayed({ timeout: 10000 })
    await uploaddocs.view.waitForClickable({ timeout: 10000 })
    await uploaddocs.view.click()
    await browser.pause(5000)
  })
  xit('To perform  Goto market', async () => {
    await browser.url("/" + "login")
    var startUpnew
    var pass
    if (startupNewEmail.length === 2) {
      startUpnew = `${startupNewEmail[0]}`
      pass = "Meitystartup@123"
    }
    else {
      startUpnew = "meitystartup84950@uatmsh.meity.gov.in"
      pass = "Meitystartup@123"
    }
    await locatorss.loginCred(startUpnew, pass)
    console.log(startUpnew + "startup email")
    await marketlocators.socialAccounts.waitForExist()
    await marketlocators.socialAccounts.scrollIntoView()
    await marketlocators.productname.setValue("Test Product")
    await marketlocators.cancel1.click()
    await marketlocators.productname.setValue("Test Product")
    await marketlocators.productdetails.setValue("test details")
    await marketlocators.CIN.setValue("AKRJS1234")
    await marketlocators.Add1.click()
    await browser.pause(1000)
    await marketlocators.Remove.click()
    await marketlocators.save1.click()
    await marketlocators.pntext.waitForDisplayed({ timeout: 10000 })
    const pntext = await marketlocators.pntext.getText()
    expectChai(pntext).to.include("Test Product")
    await marketlocators.delete.click()

    await marketlocators.Opportunity.click();
    (await marketlocators.opportunityName).setValue("test opportunity");
    (await marketlocators.cancel2).click();
    (await marketlocators.opportunityName).setValue("test opportunity");
    (await marketlocators.Odetails).setValue("test details");
    (await marketlocators.Add2).click();
    await browser.pause(1000);
    (await marketlocators.Remove).click();
    (await marketlocators.save2).waitForClickable();
    (await marketlocators.save2).click();
    await marketlocators.pntext.waitForDisplayed({ timeout: 10000 });
    const pntext1 = await marketlocators.pntext.getText();
    expectChai(pntext1).to.include("test opportunity");
    await marketlocators.delete.click();

    (await marketlocators.FundingRounds).click();
    (await marketlocators.date).setValue("05/09/2023");
    // (await marketlocators.cancel3).click();
    // (await marketlocators.date).setValue("05/09/2023");
    (await marketlocators.roundamount).setValue("2345");
    (await marketlocators.Rounddetails).setValue("test details");
    (await marketlocators.Roundvaluation).setValue("testvaluation");
    (await marketlocators.Add3).click();
    (await marketlocators.Remove).click();
    (await marketlocators.save3).waitForClickable({ timeout: 10000 });
    (await marketlocators.save3).click();
    await marketlocators.Fundingtxt.waitForDisplayed({ timeout: 10000 });
    const pntext3 = await marketlocators.Fundingtxt.getText();
    expectChai(pntext3).to.include("2345");
    await marketlocators.delete.click();

    (await marketlocators.IntellectualProperty).click();
    (await marketlocators.patents).setValue("test patent");
    (await marketlocators.TradeMarks).setValue("test trademark");
    (await marketlocators.copyrights).setValue("test copyrights");
    (await marketlocators.tradesecrets).setValue("test tradesecrets");
    (await marketlocators.save4).waitForClickable({ timeout: 10000 });
    (await marketlocators.save4).click();
    (await marketlocators.patentsText).waitForDisplayed({ timeout: 10000 });
    const ptext = (await marketlocators.patentsText).getText();
    console.log(await ptext + "patent text");
    expectChai(await ptext).to.include("test patent");
    (await marketlocators.delete).click();

    await browser.pause(2000)
  })
  xit('To verify external challenge creation login', async () => {
    await browser.url("/" + "meityadmin/")
    await locatorss.adminCred()
    await challengelocators.challengetic.click()
    await challengelocators.externalchallenge.waitForClickable()
    await challengelocators.externalchallenge.click()
  })
  challenge.forEach(({ url, image }) => {
    xit('To verify external challenge creation', async () => {
      var today = new Date();
      today.setDate(today.getDate() + 2);
      var day = today.getDate();
      var month = today.getMonth() + 1; // Months are zero-based
      var year = today.getFullYear();
      var currentDate = new Date();
      currentDate.setDate(currentDate.getDate() + 1);
      // Extract the individual components of the date
      var year1 = currentDate.getFullYear();
      var month1 = currentDate.getMonth() + 1; // Months are zero-based
      var day1 = currentDate.getDate();
      // Format the date as desired (e.g., "YYYY-MM-DD")
      var formattedtommorrowDate = (day1 < 10 ? '0' : '') + day1 + '-' + (month1 < 10 ? '0' : '') + month1 + '-' + year1;
      await challengelocators.addExternal.waitForClickable()
      await challengelocators.addExternal.click()
      await challengelocators.Challengedat.waitForClickable()
      const num = randomstring.generate({
        length: 4,
        charset: 'numeric'
      });
      const num1 = randomstring.generate({
        length: 4,
        charset: 'alphabetic'
      });

      await browser.pause(1000)
      const fileInput = await challengelocators.imageupload
      const remoteFilePath = await browser.uploadFile(image)
      await fileInput.setValue(remoteFilePath)
      var formattedDate = (day < 10 ? '0' + day : day) + '/' + (month < 10 ? '0' + month : month) + '/' + year;
      console.log("#######################################3");
      console.log(formattedDate);
      await challengelocators.Challengedat.setValue(formattedtommorrowDate)
      await browser.pause(1000)
      await challengelocators.challengeEnd.setValue(formattedDate)
      await browser.pause(1000)
      await challengelocators.challengeName.setValue(num)
      await browser.pause(1000)
      await challengelocators.challengeDescription.setValue(num1)
      await browser.pause(1000)
      await challengelocators.challnegeUrl.setValue(url)
      await browser.pause(1000)
      await challengelocators.save.click()
      await browser.pause(2000)
      expectChai(await challengelocators.challengeNameValidation[0].getText()).to.equal(num);
      // await browser.newWindow("/")
      // await browser.switchWindow("/")
      // (await challengelocators.challengeDelete[0]).click();
      // (await challengelocators.yesButton).click();
      await browser.pause(5000)
    })
  })
  xit('To verify on  numberscroll displaying on startup,incubators,mentors,freelancers,fund deployed.', async () => {
    await browser.url("/")
    const response = await fetch(await Homepage.homeApi);
    var data = await response.json();

    var test = data.entity_counts
    var startupcount = test.startups
    var incubatorcount = test.incubators
    const countarray = [startupcount, incubatorcount]
    console.log(countarray)
    for (var i = 0; i < 2; i++) {
      var stringconvrt = countarray[i].toString()
      const attributeValue = await Homepage.modulecount[i].getAttribute('ng-reflect-number');

      expectChai(attributeValue).to.equal(stringconvrt)
    }
  })

  xit('To verify home page map functionality ', async () => {
    await browser.url("/")
    await Homepage.chart.scrollIntoView()
    var popuparray = []
    var popcomparearry = []
    var mapstaename = []
    var j = 0
    await browser.pause(2000)
    await $("//img[@src='assets/img/starupicons/coe.png']").scrollIntoView()
    for (var i = 0; i < await Homepage.path.length; i++) {
      var u = await Homepage.path[i].isClickable()
      if (u === true) {
        await Homepage.path[i].click()
        await browser.pause(1000)
        var usercountstatewise = await Homepage.userCountStatewise.getText()
        var statenamesplit = []
        statenamesplit = usercountstatewise.split("\n")
        //for (var k = 1; k < 6; k++) {
        console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%" + statenamesplit[0])
        mapstaename.push(statenamesplit[0])
        console.log(mapstaename)
      }
      j++
    }
    popcomparearry.length = 0
    popuparray.length = 0
    // await browser.pause(50)


    console.log(mapstaename)

  })
  xit('To perform gallery', async () => {
    var mail2 = `${startupNewEmail[1]}`
    var Pswd2 = "Meitystartup@123"
    await browser.url("/" + "login")
    await browser.pause(2000)
    await locatorss.loginCred(mail2, Pswd2)
    await gallerylocators.gallery.click();
    (await gallerylocators.Addgallery).click();
    const ddown = await gallerylocators.eventType
    await ddown.selectByIndex(2);
    (await gallerylocators.eventname).setValue("test event");
    (await gallerylocators.shortdescp).setValue("test description");
    (await gallerylocators.venue).setValue("test venue");
    await gallerylocators.dates.setValue("19/12/2023")

    const fileInput = await gallerylocators.image1
    const filePath = 'images/MeityStartup-Preview.png'
    const remoteFilePath = await browser.uploadFile(filePath)
    await fileInput.setValue(remoteFilePath)

    const fileInput1 = await gallerylocators.image2
    const filePath1 = 'images/g20newbanner.png'
    const remoteFilePath1 = await browser.uploadFile(filePath1)
    await fileInput1.setValue(remoteFilePath1)

    const text = await gallerylocators.NoteText.getText()
    console.log(text)
    expectChai(text).to.include("Note: Please upload PNG/JPEG/JPG. Maximum size of the file is 2MB.")

    await gallerylocators.save.click()
    await gallerylocators.card.waitForDisplayed({ timeout: 10000 })
    await gallerylocators.testevent.moveTo()
    await gallerylocators.testevent.click()
    await gallerylocators.evetnametext.waitForDisplayed({ timeout: 5000 })
    const text1 = await gallerylocators.evetnametext.getText()
    const text2 = await text1.split(":")[1]
    console.log(text2)
    expectChai(text2).to.include("test event")
    await gallerylocators.rightarrow.click()
    await gallerylocators.img2.waitForDisplayed({ timeout: 5000 })
    await gallerylocators.delete.click()
    await browser.acceptAlert()


    await browser.pause(2000)
  })

  xit('To perform useful and social media links', async () => {
    const windowHandles = await browser.getWindowHandles();
    for (var i = 1; i < await windowHandles.length; i++) {
      const newTabHandle = windowHandles[i];
      await browser.switchToWindow(newTabHandle);
      await browser.closeWindow()
      await browser.switchToWindow(windowHandles[0]);
    }
    await browser.url("/" + "about/faqs")
    await subscribelocators.stayconnected.scrollIntoView()
    await browser.pause(1000)
    const ulink = await usefullinks.usefulLinks
    console.log(ulink.length + "useful links length")
    const slink = await usefullinks.sociallinks
    console.log(slink.length + " social links length")

    var data = [];
    var data1 = ['https://www.mygov.in/', 'https://www.meity.gov.in/', 'https://meity.dashboard.nic.in/portal/errorpage.aspx', 'https://dic.gov.in/', 'https://data.gov.in/', 'https://negd.gov.in/', 'https://ism.gov.in/', 'https://www.bhashini.gov.in/en/', 'https://www.startupindia.gov.in/', 'https://niti.gov.in/'];

    for (var i = 0; i < await ulink.length; i++) {
      await ulink[i].click()
      const windowHandles = await browser.getWindowHandles();
      console.log(windowHandles.length + " useful windows length  " + i)
      const newTabHandle = windowHandles[1];
      await browser.switchToWindow(newTabHandle);
      await browser.pause(2000)
      var url = await browser.getUrl()
      console.log(url + "current url" + i)
      await browser.closeWindow()
      await browser.switchWindow("/" + "about/faqs")
      console.log(url + data1[i] + "assertion url " + i)
      expectChai(url).to.include(data1[i])

      data.push(url)
    }
    console.log(data)


    var data2 = [];
    var data3 = ['https://twitter.com/MSH_Meity', 'https://www.instagram.com/meitystartup_hub/?hl=en', 'https://www.facebook.com/meitystartuphub.in/', 'https://www.linkedin.com/company/meity-startup-hub/', 'https://www.youtube.com/@meitystartuphubmshstartups2061'];

    for (var j = 0; j < slink.length; j++) {
      await slink[j].click()
      const windowHandles = await browser.getWindowHandles();
      console.log(windowHandles.length + " social windows length")
      const newTabHandle = windowHandles[1];
      await browser.switchToWindow(newTabHandle);
      await browser.pause(1000)
      var url1 = await browser.getUrl()
      console.log(url1 + "current url" + j)
      await browser.closeWindow()
      await browser.switchWindow("/" + "about/faqs")
      console.log(url1 + data3[j] + "assertion url " + j)
      expectChai(url1).to.include(data3[j])

      data2.push(url1)

    }

  })
  xit('To perform change password', async () => {
    await browser.url("/" + "login")
    if (startupNewEmail.length === 2) {
      var startUpnew = `${startupNewEmail[0]}`
    }
    await locatorss.loginCred(startUpnew, "Meitystartup@123")
    await stratlocators.profilepic.waitForClickable()
    await stratlocators.profilepic.click()
    await changepasswordlocators.changepassword.click()

    //old password new password cannot be the same
    const password1 = "Meitystartup@123"
    await changepasswordlocators.oldpassword.setValue(password1)
    await changepasswordlocators.newpassword.setValue(password1)
    await changepasswordlocators.cnewpassword.setValue(password1)
    await changepasswordlocators.opnptext.waitForDisplayed({ timeout: 10000 })
    const opnptext = await changepasswordlocators.opnptext.getText()
    expectChai(opnptext).to.include("Old and new passwords cannot be the same.")
    await browser.refresh()

    //invalid old password
    const password2 = "Meitystartup@12"
    await changepasswordlocators.oldpassword.setValue(password2)
    await changepasswordlocators.newpassword.setValue(password1)
    await changepasswordlocators.cnewpassword.setValue(password1)
    await changepasswordlocators.update.click()
    await changepasswordlocators.Alertoldpaswd.waitForDisplayed({ timeout: 10000 })
    const alert = await changepasswordlocators.Alertoldpaswd.getText()
    expectChai(alert).to.include("Old password is incorrect")
    await browser.refresh()

    //password must conatins
    const password3 = "Meitystartu"
    await changepasswordlocators.oldpassword.setValue(password1)
    await changepasswordlocators.newpassword.setValue(password3)
    await changepasswordlocators.cnewpassword.setValue(password3)
    await changepasswordlocators.passwordvalidation1.waitForDisplayed({ timeout: 10000 })
    const pswdvalidate = await changepasswordlocators.passwordvalidation1.getText()
    expectChai(pswdvalidate).to.include("Password must contain a combination of characters, numbers, and special characters.")
    await browser.refresh()

    //passwords do not match

    await changepasswordlocators.oldpassword.setValue(password1)
    await changepasswordlocators.newpassword.setValue(password2)
    await changepasswordlocators.cnewpassword.setValue(password3)

    const eye = await changepasswordlocators.eye

    for (var i = 0; i < eye.length; i++) {
      await eye[i].click()
    }
    await changepasswordlocators.passwordDNM.waitForDisplayed({ timeout: 10000 })
    const passwordDNM = await changepasswordlocators.passwordDNM.getText()
    expectChai(passwordDNM).to.include("Passwords do not match")
    await browser.refresh()

    //successful password change

    const password4 = "Meitystartup@1234"
    await changepasswordlocators.oldpassword.setValue(password1)
    await changepasswordlocators.newpassword.setValue(password4)
    await changepasswordlocators.cnewpassword.setValue(password4)
    await changepasswordlocators.update.click()
    await changepasswordlocators.passwordSMsg.waitForDisplayed({ timeout: 10000 })
    const passwordSMsg = await changepasswordlocators.passwordSMsg.getText()
    console.log(passwordSMsg + "success message")
    expectChai(passwordSMsg).to.include("You have successfully changed Password. Please login with new credientials.")
    await locatorss.loginCred(startUpnew, "Meitystartup@1234")
    await stratlocators.profilepic.waitForClickable()
    await stratlocators.profilepic.click()
    await changepasswordlocators.changepassword.click()
    await changepasswordlocators.oldpassword.setValue(password4)
    await changepasswordlocators.newpassword.setValue(password1)
    await changepasswordlocators.cnewpassword.setValue(password1)
    await changepasswordlocators.update.click()



    await browser.pause(5000)

  })




  xit('To perform change email', async () => {
    await browser.url("/" + "login")
    await locatorss.loginCred("meityincubator41581@uatmsh.meity.gov.in", "Meityincubator@123")
    await stratlocators.profilepic.waitForClickable()
    await stratlocators.profilepic.click()
    await changemailLocators.changeEmail.click()

    //invalid email
    await changemailLocators.currentPassword.setValue("Meityincubator@123")
    await changemailLocators.newEmail.setValue("decbdhsdjddjb23")
    const mailtxt = await changemailLocators.invalidemailtxt.getText()
    expectChai(mailtxt).to.include("Please enter a valid email address.")
    await browser.refresh()

    //invalid password
    await changemailLocators.currentPassword.setValue("Meity@123")
    await changemailLocators.newEmail.setValue("meityincubator41581@uatmsh.meity.gov.in")
    await changemailLocators.submit.click()
    const pswdtxt = await changemailLocators.alertxt.getText()
    expectChai(pswdtxt).to.include("Invalid details provided")
    await browser.refresh()

    //successful email change
    await changemailLocators.currentPassword.setValue("Meityincubator@123")
    await changemailLocators.newEmail.setValue("meityincubator41581@uatmsh.meity.gov.in")
    await changemailLocators.submit.click()
    await changemailLocators.successfulmsg.waitForDisplayed({ timeout: 5000 })
    const sftext = await changemailLocators.successfulmsg.getText()
    console.log(sftext)
    expectChai(sftext).to.include("You have successfully changed Email. Please login with new email.")
    await locatorss.loginCred("meityincubator41581@uatmsh.meity.gov.in", "Meityincubator@123")
    await browser.pause(2000)






  })


  xit('To perform forgot password', async () => {
    await browser.url("/" + "login")
    await browser.pause(2000)
    await forgotpasswordlocators.forgotPassword.waitForDisplayed({ timeout: 10000 })
    await forgotpasswordlocators.forgotPassword.click()
    await forgotpasswordlocators.email.setValue("wrf@gmail.com")
    await forgotpasswordlocators.requestOTP.click()
    const invemial = await forgotpasswordlocators.alert.getText()
    expectChai(invemial).to.include("Invalid details provided")
    var emial = "meityincubator41581@uatmsh.meity.gov.in"
    await forgotpasswordlocators.email.setValue(emial)
    await forgotpasswordlocators.requestOTP.click()

    await browser.newWindow('https://yopmail.com/');
    await browser.switchWindow('https://yopmail.com/');
    await startupLocators.yoptextfield.setValue(emial)
    await startupLocators.yoparrow.click()
    if (await startupLocators.yopmailcapcha.isDisplayed() === true) {
      console.log("enter captcha manually for this time and try runnning script again")
    }

    await browser.pause(5000)
    await startupLocators.refresh.waitForClickable()
    await startupLocators.refresh.click()
    await browser.pause(1000)
    const farmecheck = await startupLocators.frames.waitForDisplayed()
    var yopotptext;
    if (farmecheck === true) {
      const frame = await startupLocators.frames
      await browser.switchToFrame(frame)
      await startupLocators.yopcode.waitForDisplayed()
      yopotptext = await startupLocators.yopcode.getText()
      await browser.switchToParentFrame()
      await startupLocators.yopmailhome.click()
      console.log(yopotptext + "otp code")
      await browser.switchWindow("/" + "forgetpassword");
    }

    //invalid otp
    await forgotpasswordlocators.otp.setValue("837dcdf")
    const cpswd = "Meityincubator@123"
    await forgotpasswordlocators.newpassword.setValue(cpswd)
    await forgotpasswordlocators.cnewpassword.setValue(cpswd)
    await forgotpasswordlocators.submit.click()
    await forgotpasswordlocators.invalidotp.waitForDisplayed({ timeout: 5000 })
    const Iotptxt = await forgotpasswordlocators.invalidotp.getText()
    expectChai(Iotptxt).to.include("Invalid OTP,Try again")
    await browser.refresh()

    //password contains
    const cpswd1 = "fgyejdsdhfukj"
    await forgotpasswordlocators.otp.setValue(yopotptext)
    await forgotpasswordlocators.newpassword.setValue(cpswd1)
    await forgotpasswordlocators.cnewpassword.setValue(cpswd1)
    await changepasswordlocators.passwordvalidation.waitForDisplayed({ timeout: 10000 })
    const pswdvalidate = await changepasswordlocators.passwordvalidation.getText()
    expectChai(pswdvalidate).to.include("Password must contain a combination of characters, numbers, and special characters.")
    await browser.refresh()


    //forgot password successful
    await forgotpasswordlocators.otp.setValue(yopotptext)
    await forgotpasswordlocators.newpassword.setValue(cpswd)
    await forgotpasswordlocators.cnewpassword.setValue(cpswd)
    await forgotpasswordlocators.submit.click()
    await locatorss.loginCred(emial, "Meityincubator@123")

    await browser.pause(3000)


  })

})
