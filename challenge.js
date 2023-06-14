import challengelocators from "../pageobject/challengelocators.js"
describe('challenge suite', () => {

  xit('To verify challenge creation', async () => {

    await browser.url("http://43.205.193.210/meityadmin/admin/incubator")
    await browser.refresh()
    await challengelocators.adminEmail.setValue("superadmin@gmail.com")
    await challengelocators.adminPassword.setValue("Flower123#")
    await challengelocators.AdminLogin.click()
    await challengelocators.challengetic.click()
    await challengelocators.externalchallenge.waitForClickable()
    await challengelocators.externalchallenge.click()
    await challengelocators.addExternal.click()
    await challengelocators.Challengedat.waitForClickable()
    const otp = await startupLocators.OTP
    // const name = await promptly.prompt('entered otp: ');
    // await console.log(name)
    // await this.otp.setValue(name)
    const tests = await $("//div[@class='col-md-6 bg-white']/p").getText()
    console.log(tests)
    console.log("55555555555555555555555555555555555555555555555645334536475865")
    await otp.waitUntil(async () => await $("//div[@class='col-md-6 bg-white']/p").getText() === 'OTP not received resend button will be enabled in 0 secs', {
      timeout: 100000,
      timeoutMsg: 'hhh button not found'
    })

    const fileInput = await startupLocators.file
    await console.log(add)
    const filePath = await promptly.prompt('entered otp: ');
    const remoteFilePath = await browser.uploadFile(filePath)
    await fileInput.setValue(remoteFilePath)
    await challengelocators.Challengedat.setValue("26/05/2023")
    await challengelocators.challengeEnd.setValue("31/05/2023")
    await browser.pause(10000)


  })


  describe('sanity test', () => {
    it('To perform drag and drop.', async () => {

      await browser.url("http://43.205.193.210/meityadmin/auth")
      await browser.refresh()
      await $("//input[@id='input-email']").setValue("superadmin@gmail.com")
      await $("//input[@id='input-password']").setValue("Flower123#")
      await $("//button[.=' Log In ']").click()
      await $("//span[.='Challenge']").click()
      await $("//span[.='External Challenges']").click()
      await browser.pause(1000)
      await $("//button[.='Add External Challenge']").click()
      await $("(//input[@placeholder='Enter Name'])[1]").setValue("Arun Reddy ch")
      await $("(//input[@name='description'])[1]").setValue("description test 1")
      await $("(//input[@name='url'])[1]").setValue("https://www.facebook.com/meitystartuphub.in/")
      await $("//input[@formcontrolname='startRange_ext']").setValue("09/06/2023")

      await $("//input[@formcontrolname='endRange_ext']").setValue("15/06/2023")

      const file = await $("//input[@id='customFile']")
      await browser.pause(2000)
      await file.setValue("/home/arunkumarrchintha/Pictures/MeityStartup-Preview.png")
      await $("//button[.='Save']").click()
      await browser.pause(3000)

    })
  })


})