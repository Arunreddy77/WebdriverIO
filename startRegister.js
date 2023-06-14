//mport { password } from "promptly";
import startupLocators from "../pageobject/startupindia/startupLocators.js";
import alert from "alert";
describe('sanity test', () => {
    it('To verify incubator registration.', async () => {

        const MobileNum = "9987869778"
        const Email = "testmeityincubator@yopmail.com"
        const Pswd = "meityincubator"

        await browser.url("http://43.205.193.210/")
        await startupLocators.popclose.click()
        await browser.pause(2000)
        await startupLocators.Register.click()
        await startupLocators.viewmore.scrollIntoView()
        await browser.pause(1000)
        await startupLocators.incubator.moveTo()
        await startupLocators.register.click()
        await browser.pause(2000)
        await startupLocators.firstname.setValue("Arun Reddy")
        await startupLocators.lastname.setValue("chintha")
        await startupLocators.Mobile.setValue(MobileNum)
        await startupLocators.email.setValue(Email)
        await startupLocators.password.setValue(Pswd)
        await startupLocators.cPassword.setValue(Pswd)
        await startupLocators.Registerbutton.scrollIntoView()
        await startupLocators.Registerbutton.click()
        await browser.pause(2000)
        await alert('enter otp')
        const otp = await startupLocators.OTP
        const tests = await $("//div[@class='col-md-6 bg-white']/p").getText()
        console.log(tests)
        console.log("55555555555555555555555555555555555555555555555645334536475865")
        await otp.waitUntil(async () => await $("//div[@class='col-md-6 bg-white']/p").getText() === 'OTP not received resend button will be enabled in 0 secs', {
            timeout: 100000,
            timeoutMsg: 'hhh button not found'
        })
        await startupLocators.submit.click()

        await browser.pause(3000)
        await startupLocators.lemail.setValue(Email)
        await startupLocators.lpassword.setValue(Pswd)
        await startupLocators.login.click()
        await startupLocators.incubatorName.setValue("AMeityIncubator")
        await startupLocators.Affiliate.setValue("Affiliate")
        await startupLocators.domainArrow.click()
        await startupLocators.domainInput.setValue("Art" + "\n")
        await startupLocators.sectorArrow.click()
        await startupLocators.sectorInput.setValue("Art" + "\n")
        const fileInput = await startupLocators.file
        await browser.pause(2000)
        await fileInput.setValue("/home/arunkumarrchintha/Pictures/MeityStartup-Preview.png")
        await startupLocators.Next1.click()
        await browser.pause(2000)
        await startupLocators.countryArrow.click()
        await startupLocators.countryInput.setValue("India" + "\n")
        await startupLocators.stateArrow.click()
        await startupLocators.stateInput.setValue("Assam" + "\n")
        await startupLocators.cityName.setValue("Panaji")
        await startupLocators.Zipcode.setValue("567656")
        await startupLocators.Next2.click()
        await startupLocators.firstName1.setValue("Arun")
        await startupLocators.LastName1.setValue("Reddy")
        await startupLocators.phoneNumber1.setValue("7766556676")
        await startupLocators.Email1.setValue("ceo@gmail.com")
        await startupLocators.firstName2.setValue("First")
        await startupLocators.LastName2.setValue("Last")
        await startupLocators.phoneNumber2.setValue("8787678765")
        await startupLocators.Email2.setValue("team@gmail.com")
        await startupLocators.Next3.click()
        await startupLocators.FacebookUrl.setValue("https://www.facebook.com/")
        await startupLocators.TwitterUrl.setValue("https://www.twitter.com/")
        await startupLocators.linkedinUrl.setValue("https://www.linkedin.com/")
        await startupLocators.InstagramUrl.setValue("https://www.instagram.com/")
        await startupLocators.KooUrl.setValue("https://www.kooapp.com/")
        await startupLocators.YoutubeUrl.setValue("https://www.youtube.com/")

        await browser.pause("2000")
        await startupLocators.save.scrollIntoView()
        await browser.pause(2000)
        await startupLocators.checkbox.click()
        await startupLocators.save.click()
        await browser.pause("3000")

    })



    



    xit('To verify startup registration with others.', async () => {

        const mobileNum = "9988778978"
        const email = "meitystartuptest@yopmail.com"
        const pswd = "meitystartup"


        await browser.url("http://43.205.193.210/")
        await startupLocators.popclose.click()
        await startupLocators.Register.click()
        await startupLocators.viewmore.scrollIntoView
        await browser.pause(1000)
        await startupLocators.startup.moveTo()
        await startupLocators.sregister.click()
        await browser.pause(2000)
        await startupLocators.firstname.setValue("Arun Reddy")
        await startupLocators.lastname.setValue("chintha")
        await startupLocators.Mobile.setValue(mobileNum)
        await startupLocators.email.setValue(email)
        
        await startupLocators.password.setValue(pswd)
        await startupLocators.cPassword.setValue(pswd)
        await startupLocators.Registerbutton.scrollIntoView()
        await startupLocators.Registerbutton.click()
        await browser.pause(2000)
        await alert("enter otp")
        const otp = await startupLocators.OTP
        const tests = await $("//div[@class='col-md-6 bg-white']/p").getText()
        console.log(tests)
        console.log("55555555555555555555555555555555555555555555555645334536475865")
        await otp.waitUntil(async () => await $("//div[@class='col-md-6 bg-white']/p").getText() === 'OTP not received resend button will be enabled in 0 secs', {
            timeout: 100000,
            timeoutMsg: 'hhh button not found'
        })
        await startupLocators.submit.click()

        await browser.pause(4000)
        await startupLocators.lemail.setValue(email)
        await startupLocators.lpassword.setValue(pswd)
        await startupLocators.login.click()
        await browser.pause(2000)
        await startupLocators.startupname.setValue("Startup")
        await startupLocators.startbrief.setValue("brief")
        await startupLocators.othersradio.click()
        await startupLocators.others.setValue("others")
        await startupLocators.domainArrow.click()
        await startupLocators.dinput.setValue("Art" + "\n")
        await startupLocators.sector.click()
        await startupLocators.Sinput.setValue("Art" + "\n")
        const fileInput = await startupLocators.startlogo
        await browser.pause(2000)
        await fileInput.setValue("/home/arunkumarrchintha/Pictures/MeityStartup-Preview.png")
        await startupLocators.Next1.click()
        await browser.pause(1000)
        await startupLocators.Fname.setValue("Arun")
        await startupLocators.countryArrow.click()
        await startupLocators.countryInput.setValue("India" + "\n")
        await startupLocators.stateArrow.click()
        await startupLocators.stateInput.setValue("Goa" + "\n")
        await startupLocators.cName.setValue("Panaji")
        await startupLocators.Zcode.setValue("567656")
        await startupLocators.Next2.click()
        await startupLocators.teamName.setValue("Arun")
        await startupLocators.experience.setValue("3")
        await startupLocators.emailAddress.setValue("arun@gmail.com")
        await startupLocators.designation.setValue("tester")
        await startupLocators.linkedinprofile.setValue("https://www.linkedin.com/")
        await startupLocators.mobileNumber.setValue("8877667678")
        await startupLocators.Next3.click()
        await startupLocators.FbUrl.setValue("https://www.facebook.com/")
        await startupLocators.TUrl.setValue("https://www.twitter.com/")
        await startupLocators.linUrl.setValue("https://www.linkedin.com/")
        await startupLocators.InstaUrl.setValue("https://www.instagram.com/")
        await startupLocators.KoUrl.setValue("https://www.kooapp.com/")
        await startupLocators.YtubeUrl.setValue("https://www.youtube.com/")

        await browser.pause("2000")
        await startupLocators.submit.scrollIntoView()
        await browser.pause(2000)
        await startupLocators.checkbox.click()
        await startupLocators.submit.click()
        await browser.pause("3000")

        await browser.pause(10000)

    })

    
    xit('To verify startup registration.', async () => {

        const mobileNum = "9988778978"
        const email = "meitystartuptest@yopmail.com"
        const pswd = "meitystartup"


        await browser.url("http://43.205.193.210/")
        await startupLocators.popclose.click()
        await startupLocators.Register.click()
        await startupLocators.viewmore.scrollIntoView
        await browser.pause(1000)
        await startupLocators.startup.moveTo()
        await startupLocators.sregister.click()
        await browser.pause(2000)
        await startupLocators.firstname.setValue("Arun Reddy")
        await startupLocators.lastname.setValue("chintha")
        await startupLocators.Mobile.setValue(mobileNum)
        await startupLocators.email.setValue(email)
        
        await startupLocators.password.setValue(pswd)
        await startupLocators.cPassword.setValue(pswd)
        await startupLocators.Registerbutton.scrollIntoView()
        await startupLocators.Registerbutton.click()
        await browser.pause(2000)
        await alert("enter otp")
        const otp = await startupLocators.OTP
        const tests = await $("//div[@class='col-md-6 bg-white']/p").getText()
        console.log(tests)
        console.log("55555555555555555555555555555555555555555555555645334536475865")
        await otp.waitUntil(async () => await $("//div[@class='col-md-6 bg-white']/p").getText() === 'OTP not received resend button will be enabled in 0 secs', {
            timeout: 100000,
            timeoutMsg: 'hhh button not found'
        })
        await startupLocators.submit.click()

        await browser.pause(4000)
        await startupLocators.lemail.setValue(email)
        await startupLocators.lpassword.setValue(pswd)
        await startupLocators.login.click()
        await browser.pause(2000)
        await startupLocators.startupname.setValue("Startup")
        await startupLocators.startbrief.setValue("brief")
        await startupLocators.othersradio.click()
        await startupLocators.others.setValue("others")
        await startupLocators.domainArrow.click()
        await startupLocators.dinput.setValue("Art" + "\n")
        await startupLocators.sector.click()
        await startupLocators.Sinput.setValue("Art" + "\n")
        const fileInput = await startupLocators.startlogo
        await browser.pause(2000)
        await fileInput.setValue("/home/arunkumarrchintha/Pictures/MeityStartup-Preview.png")
        await startupLocators.Next1.click()
        await browser.pause(1000)
        await startupLocators.Fname.setValue("Arun")
        await startupLocators.countryArrow.click()
        await startupLocators.countryInput.setValue("India" + "\n")
        await startupLocators.stateArrow.click()
        await startupLocators.stateInput.setValue("Goa" + "\n")
        await startupLocators.cName.setValue("Panaji")
        await startupLocators.Zcode.setValue("567656")
        await startupLocators.Next2.click()
        await startupLocators.teamName.setValue("Arun")
        await startupLocators.experience.setValue("3")
        await startupLocators.emailAddress.setValue("arun@gmail.com")
        await startupLocators.designation.setValue("tester")
        await startupLocators.linkedinprofile.setValue("https://www.linkedin.com/")
        await startupLocators.mobileNumber.setValue("8877667678")
        await startupLocators.Next3.click()
        await startupLocators.FbUrl.setValue("https://www.facebook.com/")
        await startupLocators.TUrl.setValue("https://www.twitter.com/")
        await startupLocators.linUrl.setValue("https://www.linkedin.com/")
        await startupLocators.InstaUrl.setValue("https://www.instagram.com/")
        await startupLocators.KoUrl.setValue("https://www.kooapp.com/")
        await startupLocators.YtubeUrl.setValue("https://www.youtube.com/")

        await browser.pause("2000")
        await startupLocators.submit.scrollIntoView()
        await browser.pause(2000)
        await startupLocators.checkbox.click()
        await startupLocators.submit.click()
        await browser.pause("3000")

        await browser.pause(10000)

    })
    


})
