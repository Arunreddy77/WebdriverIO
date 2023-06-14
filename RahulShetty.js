describe('calenders', () => {

    it('to verify task', async () => {

        await browser.url("https://rahulshettyacademy.com/AutomationPractice/")
        await browser.pause(2000)
       
        let i = 2
        var check = await $(`(//input[@type='checkbox'])[${i}]`)
        var CText = await $(`(//div[@id='checkbox-example']//label)[${i}]`).getText()
        await check.click()
        await browser.pause(3000)
        console.log(CText)
        await $("//input[@id='name']").setValue(CText)
        await $("//input[@value='Alert']").click()
        await browser.pause(3000)
       // const alert = await browser.switchToAlert();
        const alertText = await browser.getAlertText()
        console.log(alertText)
        await browser.pause(1000)
        const splitText = alertText.split(',');
        console.log(splitText);
        const Text = splitText[0].split(' ');
        console.log(Text)
        const Option = Text[1]
        console.log(Option)

        

    })
})