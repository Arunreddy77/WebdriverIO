import { expect as expectChai } from 'chai'


describe('sanity test', () => {
    it('To perform split lines in cell.', async () => {

        await browser.url("http://43.205.193.210/")
        await browser.pause(2000)
        var count = ""
        for (var i = 1; i < 5; i++) {
            const text = await $(`(//span[@class='odometer-value'])[${i}]`).getText()

            //to get value in single line 
            count += text
            console.log(count)
        }
        await $("//span[.='NETWORK']").moveTo()

        await $("//a[.='Startups']").click()
        await browser.pause(2000)
        const text1 = await $('//strong[@style="color: #fff;"]').getText()
        console.log(text1)

        var result = expectChai(count).to.contains("2166")
        console.log(result)

    })
})