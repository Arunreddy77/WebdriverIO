describe('sanity test', () => {
    xit('compare get text with  the given input using equals.', async () => {



        await browser.url("https://rahulshettyacademy.com/seleniumPractise/#/")
        await browser.pause(5000)
        const ProductName = await $$("//h4[@class='product-name']")
        const increment = await $$("//a[@class='increment']")
        var string = "Beetroot - 1 Kg"
        console.log(await $("(//h4[@class='product-name'])[1]").getText())

        console.log(await ProductName.length)
        console.log("##############################")
        for (var i = 0; i < ProductName.length; i++) {
            var key = await ProductName[i].getText()
            console.log(key)
            //     //console.log(await ProductName[i].getText())
            if (string === key) {
                console.log("#$%^&^%$#@#$%^&*&^%$#@#$%")
                var j=0
                while(j<20){
                await increment[i].click()
                j++
                }
            }
            
        }
        await browser.pause(3000)
    })


    xit('compare get text with  the given input using Include', async () => {



        await browser.url("https://rahulshettyacademy.com/seleniumPractise/#/")
        await browser.pause(5000)
        const ProductName = await $$("//h4[@class='product-name']")
        const increment = await $$("//a[@class='increment']")
        var string = "Beetroot"
        console.log(await $("(//h4[@class='product-name'])[1]").getText())

        console.log(await ProductName.length)
        console.log("##############################")
        for (var i = 0; i < ProductName.length; i++) {
            var key = await ProductName[i].getText()
            console.log(key)
            //     //console.log(await ProductName[i].getText())
            if (key.includes(string)) {
                //Always compare get text with  the given input,    actual with expect
                console.log("#$%^&^%$#@#$%^&*&^%$#@#$%")
                var j=0
                while(j<20){
                await increment[i].click()
                j++
                }
            }
            
        }
        await browser.pause(3000)
    })




    it('compare get text with  the given input using Include', async () => {



        await browser.url("https://rahulshettyacademy.com/seleniumPractise/#/")
        await browser.pause(5000)
        const ProductName = await $$("//h4[@class='product-name']")
        const increment = await $$("//a[@class='increment']")
        var string1 = "Beetroot"
        var string2 = "Carrot"
        console.log(await $("(//h4[@class='product-name'])[1]").getText())

        console.log(await ProductName.length)
        console.log("##############################")
        for (var i = 0; i < ProductName.length; i++) {
            var key = await ProductName[i].getText()
            console.log(key)
            //     //console.log(await ProductName[i].getText())
            if (key.includes(string1) || key.includes(string2)) {
                //Always compare get text with  the given input,    actual with expect
                console.log("#$%^&^%$#@#$%^&*&^%$#@#$%")
                var j=0
                while(j<20){
                await increment[i].click()
                j++
                }
            }
            
        }
        await browser.pause(3000)
    })
})