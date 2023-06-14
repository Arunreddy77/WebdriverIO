import { Key } from "webdriverio"


describe('sanity test', () => {
    it('To run makemytrip dynamic.', async () => {

        await browser.url("https://www.makemytrip.com/")
        await browser.pause(2000)

        const iframe = await $("//iframe[contains(@title,'notification-frame')]")
        await browser.switchToFrame(iframe)
        await $("//a[@class='close']").click()

        await $("//span[@class='ic_circularclose_grey']").click()

        const radio = "Round Trip"
        const from = "Bangkok, Thailand"
        const to = "Goa - Dabolim Airport, India"
        const tmonth = "November2023"
        const ddate = ""
        const rdate = ""

        await browser.pause(2000)

        const radiobtn = await $$("//ul[@class='fswTabs latoRegular darkGreyText ']/li/span")

        // await $("//li[.='One Way']")
        const text = await $$("//ul[@class='fswTabs latoRegular darkGreyText ']/li")


        for (var i = 0; i < text.length; i++) {

            const textname = await text[i].getText()
            console.log(textname)

            if (textname.includes(radio)) {
                await radiobtn[i].click()

            }

        }
        await $("//input[@id='fromCity']").click()
        await browser.pause(2000)
        const fromplace = await $$("//p[@class='font14 appendBottom5 blackText']")

        //const data = []
        const placeclick = await $$("//li[contains(@id,'react-autowhatever')]")
        for (var j = 0; j < fromplace.length; j++) {
            const frmoplacetxt = await fromplace[j].getText()
            console.log(frmoplacetxt)
            // const placetext = frmoplacetxt.split(",")
            // const ptext = placetext[0]

            // console.log(ptext)

            if (frmoplacetxt.includes(from)) {
                await placeclick[j].click()
                break;
            }

        }
        await $("//input[@id='toCity']").click()
        const toplace = await $$("//p[@class='font14 appendBottom5 blackText']")


        for (var k = 0; k < toplace.length; k++) {
            const toplacetext = await toplace[k].getText()
            console.log(toplacetext)

            if (toplacetext.includes(to)) {
                await toplace[k].click()
                break;
            }
        }
        await browser.pause(3000)

        const nextmonth = await $("//span[@aria-label='Next Month']")
        const cmonth = await $("//div[@class='datePickerContainer']//div[@class='DayPicker Selectable Range']//div[1]/div[2]/div[1]/div[1]/div[1]")
        for (var l = 0; l < 13; l++) {

            //const cyear = await $("(//span[text()='2023'])[1]").getText()
            const cmonthtext = await cmonth.getText()
            console.log(cmonth)
            if (cmonthtext === tmonth) {
                console.log("year matched")
                break;
            }
            else {
                await nextmonth.click()
            }

        }
        //  //div[@class='datePickerContainer']//div[@class='DayPicker Selectable Range']//div[1]/div[2]/div[1]/div[@class='DayPicker-Body']/div[1]/div[1]//div[1]
        //date get text
        await browser.pause(2000)
        var a = 14
        var b = 19

        await $(`(//p[text()='${a}'])[1]`).click()
        await $(`(//p[text()='${b}'])[2]`).click()

        await $("//a[.='Search']").click()

        await $("//span[@class='bgProperties icon20 overlayCrossIcon']").click()

        const range = await $("(//div[@class='rangeslider__handle'])[1]")
        await range.scrollIntoView()
        // await browser.buttonDown(range)
        const actions = browser.actions();
        // actions.move({ origin: range }).buttonDown().perform();
        // browser.pause(1000); // Optional: Pause for a specific duration to hold the click
        // actions.buttonUp().perform();

        await range.waitForClickable()
        await range.click()
        await browser.pause(5000)

        for (var m = 0; m < 100; m++) {
            await browser.keys(Key.ArrowLeft)


        }
        //await $("(//span[@class='appendBottom2 checkBlockIcon'])[2]").click()
        //await $("(//input[@id='listingFilterCheckbox'])[1]").click()
        await $("//p[.='Fastest']").click()
        await browser.pause(2000)

        const price = await $$("//div[@class='blackText fontSize18 blackFont white-space-no-wrap']")
        console.log(price.length)
        console.log("##################################")
         
        const data = []
        for (var n = 0; n < price.length; n++) {
            const viewoptions = await $$("//b[.='VIEW OPTIONS']")
            console.log(viewoptions.length+"$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$"+n)
        if(viewoptions.length>0){
            const view = await viewoptions[0].isDisplayed()
        
            
            if(view===true){
                 await viewoptions[0].waitForClickable()
             await viewoptions[0].click()
            }}
            await price[n].scrollIntoView()
            
            //  if(viewoptions.length==0){
            //     break;
            //  }

        }
        for (var o = 0; o < price.length; o++) {

            const pricetext = await price[o].getText()
            // console.log(price.length)
            const ptext = pricetext.split(" ")
            const prate = ptext[1]
            //console.log(prate)
            const rate = prate.split("\n")
            let cost = rate[0]
            cost = cost.replace(/,/g , "")
            cost=parseInt(cost)


            // prices = prices.map(price => price.replace(",", ""));


            data.push(cost)
        }
        console.log(data)
       // const data1 = parseInt(data)
        
     const costing = data.sort(function(a, b) {
        return a - b;
    });
     console.log(costing)
     for(var q=0; q<costing.length; q++){
        costing[q] = "₹ " + costing[q].toLocaleString('en-IN');
    }
     
     console.log(costing)



     for(var p=0; p<price.length; p++){
        const  details = await $$("//span[.='View Flight Details']")
        const pricetext = await price[p].getText()
        if(pricetext.includes(costing[0])){
            await details[p].scrollIntoView()
            await details[p].waitForClickable()
            await details[p].click()
        }
     }


        await browser.pause(2000)



    })

    describe('sanity test', () => {
        xit('To run makemytrip dynamic.', async () => {
            var num = "12317612"
            var nums = parseInt(num)
            var num1 = "234456"
            var nums1 = parseInt(num1)
            let numbers = [nums, nums1, 8, 4,9, 6,5,8]
          //  const number = numbers[0].replace(/,/g , "")
            console.log(typeof num)
            const nu = numbers.sort(function(a, b) {
                return a - b;
            });
            console.log(nu)
              


        })
    })
})