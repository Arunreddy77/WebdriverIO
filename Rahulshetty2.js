describe('sanity test', () => {
    it('To perform split lines in cell.', async () => {

        const tcell = await $("(//table[@id='product'])[2]//tr//td")
        const trow = await $("(//table[@id='product'])[2]//tr")

        await browser.url("https://rahulshettyacademy.com/AutomationPractice/")
        await browser.pause(2000)
        //await $("//legend[.='Web Table Fixed header']").scrollIntoView()
        await browser.pause(5000)
        var string = "Smith"


        await $("//legend[.='Web Table Fixed header']").scrollIntoView()
        var Rtext = await $$("(//table[@id='product'])[2]//tr")
        const celltext = await $$("((//table[@id='product'])[2]//tr)//td[1]")

        console.log(Rtext.length)
        for (var i = 0; i < Rtext.length-1; i++) {
            //console.log(await celltext[i].getText())
            if (string.includes(await celltext[i].getText())) {
                console.log(await Rtext[i+1].getText())           
            }
        }
    })
})