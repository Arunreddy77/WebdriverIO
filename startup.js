import { expect as expectChai } from 'chai'
import startupregistration from '../pageobject/startupregistration.js'
import Homepage from '../pageobject/homepage.js'
import Loginpage from '../pageobject/loginpage.js'
import Registrationpage from '../pageobject/registration.js'
import fs from 'fs'
describe('sanity test', () => {
    it('To verify meity url is working by hitting it.', async () => {
        await Homepage.openurl()
        await browser.pause(1000)
        await Homepage.challengepop();
    })
    it('To verify startup registration', async () => {
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
            await Loginpage.emailField.setValue("jampanavamsivinay@gmail.com")
            await Loginpage.passWord.setValue("Test@1234")
            await Loginpage.loginButton.click();
           
            (await startupregistration.StartupName).setValue("starup");
            (await startupregistration.BriefAboutStartup).setValue("Send a sequence of key strokes to an element after the input has been cleared before. If th ")
           
            const filePath = '/home/vamsivinayjampana/Pictures/Screenshots/Screenshot from 2023-03-21 14-29-04.png'
        const remoteFilePath = await browser.uploadFile(filePath)
      await startupregistration.profilePicUpload.setValue(remoteFilePath);
      await startupregistration.NameOfTheIncubator.scrollIntoView()
      await startupregistration.NameOfTheIncubator.click()
      await startupregistration.NameOfTheIncubator.selectByVisibleText('testincubator')
        await browser.pause(5000);
    })

})