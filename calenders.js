describe('calenders', () => {

    xit('to verify calender date pick format 1', async () => {
        await browser.url("https://demo.automationtesting.in/Datepicker.html")

        await $("//input[@id='datepicker1']").click()
        await browser.pause(3000)

        var TMonth = "December"
        var TYear = "2035"




        // for(let i=0; i<10; i++){

        while (true) {
            const Next = await $("//span[.='Next']")

            var CYear = await $("//span[@class='ui-datepicker-year']").getText()
            var CMonth = await $("//span[@class='ui-datepicker-month']").getText()

            if (TMonth === CMonth && TYear === CYear) {

                console.log("Target month and year reached" + TMonth + "  " + TYear)
                break;

            }
            else {
                await Next.click()

            }
        }
        await $("//a[.='18']").click()
        await browser.pause(3000)

    })

    it('to verify calender date pick format 2', async () => {

        await browser.url("https://demo.automationtesting.in/Datepicker.html")

        var TMonth = "December"
        var TYear = "2030"
        var Month = "July"
        var Date = await $("//a[.='18']")


        for (let i = 0; i < 100; i++) {
            await $("//input[@id='datepicker2']").click()
            await $("//select[@title='Change the year']").selectByIndex(12)
            var CYear = await $("(//option[@selected='selected'])[2]").getText()
            console.log(CYear)


            await browser.pause(1000)
            console.log("target year reached")
            if (CYear === TYear) {
                break;
                console.log("test")
            }

        }
        await browser.pause(2000)
        await $("//select[@title='Change the month']").selectByVisibleText(Month)
        await Date.click()
        await browser.pause(2000)


    })


})