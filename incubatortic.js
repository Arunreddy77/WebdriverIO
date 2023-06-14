import excelnewcode from "../pageobject/startupindia/excelnewcode.js"
import newexcel from "../pageobject/startupindia/newexcel.js"
import adminincubators from "../pageobject/adminincubators.js"
import { expect as expectChai } from 'chai'
import { config } from "../../wdio.conf.js"
import startupLocators from '../pageobject/stratlocators.js'
import promptly from 'promptly'
import fs from 'fs'
import Excel from 'exceljs'
var incubatornames;
import randomstring from 'randomstring'
import stratlocators from "../pageobject/stratlocators.js"
const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
let regiscredentails = JSON.parse(fs.readFileSync('test/testdata/registraiondata.json'))
const newcreden = []
describe('auto incubator approve', () => {
  regiscredentails.forEach(({ firstname, lastname }) => {
    it('To verify incubator registration.', async () => {
      await browser.url("http://43.205.193.210/")
      let variable = "Hello";
      console.log(`The value of the variable is: ${variable}`);

      await browser.pause(2000)
      const popup = await startupLocators.popclose.isDisplayed()
      if (popup === true) {
        await startupLocators.popclose.click()
      }
      await startupLocators.incubator.scrollIntoView()
      await browser.pause(1000)
      await startupLocators.incubator.waitForClickable()
      await startupLocators.incubator.moveTo()
      const registerwait = await startupLocators.register.waitForClickable()
      if (registerwait === true) {


        await startupLocators.register.click()
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
        const Email = randomstring.generate({
          length: 4,
          charset: 'numeric'
        });
        await startupLocators.email.setValue("meityincubator" + Email + "@yopmail.com")
        await startupLocators.password.setValue("meityincubator")
        await startupLocators.cPassword.setValue("meityincubator")
        await $("//a[@title='Terms & Conditions']").scrollIntoView()
        await startupLocators.Registerbutton.click()
        await startupLocators.OTP.waitForDisplayed()
        browser.newWindow('https://yopmail.com/');
        browser.switchWindow('https://yopmail.com/');
        await startupLocators.yoptextfield.setValue("meityincubator" + Email + "@yopmail.com")
        await startupLocators.yoparrow.click()
        if (await startupLocators.yopmailcapcha.isDisplayed() === true) {
          console.log("enter captcha manually for this time and try runnning script again")
        }
        else {
          // for (var k = 0; k < 10; k++) {
          //   const fark = await startupLocators.frames.isDisplayed()
          //   if (fark === true) {
          //     break;
          //   }
          //   else {
          await browser.pause(5000)
          await startupLocators.refresh.waitForClickable()
          await startupLocators.refresh.click()
          await browser.pause(1000)
          //  }
          //}
          const farmecheck = await startupLocators.frames.waitForDisplayed()
          if (farmecheck === true) {
            const frame = await startupLocators.frames
            await browser.switchToFrame(frame)
            await startupLocators.yopcode.waitForDisplayed()
            const yopotptext = await startupLocators.yopcode.getText()
            await browser.switchToParentFrame()
            await startupLocators.yopmailhome.click()
            browser.switchWindow('http://43.205.193.210/verify-user');
            await startupLocators.OTP.setValue(yopotptext)
            // const otp = await startupLocators.OTP
            // // const name = await promptly.prompt('entered otp: ');
            // // await console.log(name)
            // // await this.otp.setValue(name)
            // const tests = await $("//div[@class='col-md-6 bg-white']/p").getText()
            // console.log(tests)
            // console.log("55555555555555555555555555555555555555555555555645334536475865")
            // await otp.waitUntil(async () => await $("//div[@class='col-md-6 bg-white']/p").getText() === 'OTP not received resend button will be enabled in 0 secs', {
            //   timeout: 100000,
            //   timeoutMsg: 'hhh button not found'
            // })
            await startupLocators.submit.click()
            await startupLocators.lemail.waitForDisplayed()
            await startupLocators.lemail.setValue("meityincubator" + Email + "@yopmail.com")
            await startupLocators.lpassword.setValue("meityincubator")
            await startupLocators.login.click()
            const incubatorname = randomstring.generate({
              length: 4,
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
            await startupLocators.countryArrow.waitForClickable()
            await startupLocators.countryArrow.click()
            await startupLocators.countryArrow.setValue("India" + "\n")
            await startupLocators.stateInput.setValue("Assam" + "\n")
            await startupLocators.cityName.setValue("Panaji")
            await startupLocators.websiteurl.setValue("www.gmail.com")
            await startupLocators.Zipcode.setValue("567656")
            await startupLocators.Next2.waitForClickable()
            await startupLocators.Next2.click()
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
            const emailexcel = "meityincubator" + Email + "@yopmail.com"
            incubatornames = "Aaincubator" + Email
            // console.log(emailexcel)
            // console.log(incubatornames)
            // const data = [["EMAIL", "FIRSTNAME", "LASTNAME", "INCUBATORNAME"], [emailexcel, first, second, incubatornames]];
            // data.push()
            newcreden.push(["EMAIL", "FIRSTNAME", "LASTNAME", "USERNAME"])
            newcreden.push([emailexcel, first, second, incubatornames])
            console.log("*****************ONLY INCUBATOR CREDENTAILS******************")
            console.log(newcreden)
            // sheet.addRows(data);
            // await workbook.xlsx.writeFile('/home/vamsivinayjampana/incubatordetails.xlsx');
            // console.log('Data written successfully!');
            await browser.newWindow("http://43.205.193.210/meityadmin/")
            await browser.switchWindow("http://43.205.193.210/meityadmin/")
            await browser.refresh()
            await startupLocators.adminemail.setValue("superadmin@gmail.com")
            await startupLocators.adminpassword.setValue("Flower123#")
            await startupLocators.adminloginbutton.click()
            await startupLocators.adminincubator.click()
            //   for(var j=0;j<30;j++){
            await browser.pause(2000)
            // await startupLocators.pagination3.waitForClickable()

            for (var j = 0; j < 35; j++) {
              var r = 0;
              for (var i = 0; i < 10; i++) {
                await startupLocators.name[i].waitForClickable()
                var name = await startupLocators.name[i].getText()
                if (name === incubatornames) {

                  await adminincubators.ticmark[i].waitForClickable()
                  await adminincubators.ticmark[i].click()

                  await startupLocators.yes.click()
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
            await startupLocators.incubatorselect.click()
            await startupLocators.incubatorsearch.click()
            const rest = await startupLocators.incubatorlistsearch.length
            for (var i = 0; i < rest; i++) {
              var text = await startupLocators.incubatorlistsearch[i].getText()
              if (text === incubatornames) {
                await startupLocators.incubatorlistsearch[i].click()
                await startupLocators.incubatorselect.click()
                break;
              }

            }
            await startupLocators.admintide.click()
            await startupLocators.adminselectgroup.selectByVisibleText("G1")
            await startupLocators.adminsave.click()
            // const incuarray = [[emailexcel, first, second, incubatornames]]
            // console.log(incuarray)
          }
          else {
            console.log("THIS MESSAGE WONT COME EVERY TIME PLEASE MANUALLY CHECK RECAPTCHA ON YOPMAIL WEBSITE AND RUN SCRIPT AGAIN")
          }
        }
      }
      else {
        console.log("PLEASE LOGOUT AND RUN STRIPT AGAIN")
      }

    })
  })

  const totalRuns = 2; // Number of times you want to run the test case

  for (let r = 0; r < totalRuns; r++) {
    it(`To verify startup registration ${r}.`, async () => {


      await browser.url("http://43.205.193.210/")
      await browser.pause(2000)
      const popup = await startupLocators.popclose.isDisplayed()
      if (popup === true) {
        await startupLocators.popclose.click()
      }
      await startupLocators.startup.scrollIntoView()
      await startupLocators.startup.waitForClickable()

      await startupLocators.startup.moveTo()
      const registerwait = await startupLocators.sregister.waitForDisplayed()
      if (registerwait === true) {
        await startupLocators.sregister.waitForClickable()
        await startupLocators.sregister.click()
        await startupLocators.firstname.waitForDisplayed()
        let first = randomstring.generate(6);
        await startupLocators.firstname.setValue(first)

        let second = randomstring.generate(6);
        await startupLocators.lastname.setValue(second)
        const MobileNum = randomstring.generate({
          length: 4,
          charset: 'numeric'
        });
        await startupLocators.Mobile.setValue("999999"+MobileNum)
        const Email = randomstring.generate({
          length: 4,
          charset: 'numeric'
        });
        await startupLocators.email.setValue("meitystartup" + Email + "@yopmail.com")
        await startupLocators.password.setValue("meitystartup")
        await startupLocators.cPassword.setValue("meitystartup")
        await $("//a[@title='Terms & Conditions']").scrollIntoView()
        await startupLocators.Registerbutton.click()
        await startupLocators.OTP.waitForDisplayed()
        // Switch to the new tab
        browser.switchWindow('https://yopmail.com/');
        await startupLocators.yoptextfield.setValue("meitystartup" + Email + "@yopmail.com")
        await startupLocators.yoparrow.click()
        if (await startupLocators.yopmailcapcha.isDisplayed() === true) {
          console.log("enter captcha manually for this time and try runnning script again")
        } else {
          // for (var k = 0; k < 10; k++) {
          //   const fark = await startupLocators.frames.isDisplayed()
          //     if (fark === true) {
          //     break;
          //   }
          //   else {
          await browser.pause(5000)
          await startupLocators.refresh.waitForClickable()
          await startupLocators.refresh.click()
          await browser.pause(1000)
          // }
          // }
          const farmecheck = await startupLocators.frames.waitForDisplayed()
          if (farmecheck === true) {
            const frame = await startupLocators.frames
            await browser.switchToFrame(frame)
            await startupLocators.yopcode.waitForDisplayed()
            const yopotptext = await startupLocators.yopcode.getText()
            await browser.switchToParentFrame()
            await startupLocators.yopmailhome.click()
            browser.switchWindow('http://43.205.193.210/verify-user');
            await startupLocators.OTP.setValue(yopotptext)
            await startupLocators.submit.click()
            await startupLocators.lemail.setValue("meitystartup" + Email + "@yopmail.com")
            await startupLocators.lpassword.setValue("meitystartup")
            await startupLocators.login.click()
            const startupname = randomstring.generate({
              length: 4,
              charset: 'numeric'
            });
            await startupLocators.startupname.setValue("startup" + Email)

            await startupLocators.startbrief.setValue("testing")
            const fileInput = await startupLocators.startlogo
            // const screenshotPath = 'test/testdata/test.png';
            // browser.saveScreenshot(screenshotPath);
            const filePath = 'images/test.png'
            const remoteFilePath = await browser.uploadFile(filePath)
            await fileInput.setValue(remoteFilePath)
            await startupLocators.startupincubatorselect.click()
            await startupLocators.startupincubatorselect.setValue(incubatornames + "\n")
            await startupLocators.startupDomain.click()
            await startupLocators.startupDomain.setValue("Art" + "\n")
            await startupLocators.startupSector.click()
            await startupLocators.startupSector.setValue("Art" + "\n")
            await startupLocators.Next1.click()

            await startupLocators.Fname.waitForDisplayed()

            await startupLocators.Fname.setValue("startup")
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
            const emailexcel = "meitystartup" + Email + "@yopmail.com"
            const startupnames = "startup" + Email
            // console.log(emailexcel)
            // console.log(incubatornames)
            // const data = [["EMAIL", "FIRSTNAME", "LASTNAME", "STARTUPNAME"], [emailexcel, first, second, startupnames]];
            // data.push()
            //sheet.addRows(data);
            newcreden.push([emailexcel, first, second, startupnames])

            // await workbook.xlsx.writeFile(`/home/vamsivinayjampana/startupdetails${r}.xlsx`);
            // const incuarray = [[emailexcel, first, second, startupnames]]
            // console.log(incuarray)
            console.log("*****************CREDENTAILS******************")
            console.log(newcreden)

          }
          //}

        }
      }
    })

  }
  // xit('incubator tic', async () => {
  //   await browser.url("http://43.205.193.210/meityadmin/admin/incubator")
  //   await browser.refresh()
  //   await $("//input[@id='input-email']").setValue("superadmin@gmail.com")
  //   await $("//input[@id='input-password']").setValue("123456")
  //   await $("//*[@class='appearance-filled full-width size-large shape-rectangle status-primary nb-transition login-button']").click()
  //   await $("//*[text()='Incubators']").click()
  //   await browser.pause(3000)
  //   //   for(var j=0;j<30;j++){

  //   for (var j = 0; j < 35; j++) {
  //     for (var i = 0; i < 10; i++) {
  //       var text = await adminincubators.ticmark.length
  //       console.log(text)
  //       if (text > 0) {
  //         await adminincubators.ticmark[0].click()
  //         await startupLocators.yes.waitForClickable()
  //         await startupLocators.yes.click()
  //         await browser.pause(500)
  //       }
  //     }
  //     await adminincubators.next.click()
  //     await browser.pause(500)
  //   }
  //   // }
  //   //await browser.pause(10000)
  // })

})
