describe('sanity test', () => {
    it('To perform get text from map tooltip', async () => {

        await browser.url("http://43.205.193.210/samridh")
        await browser.pause(2000)


        await $("//h4[.=' MSH Accelerator Center Statistics: ']").scrollIntoView()
        await browser.pause(3000)
        // await $("//h4[.='//button[@class='btn btn-primary btn-incubator-center']']").scrollIntoView()
        const state = await $$("//*[contains(@class, 'highcharts-point highcharts')]")
        const statename = await $("//*[@style='font-size: 16px; text-transform: capitalize; color: green; border-bottom: 2px solid rgb(116, 116, 116); line-height: 30px;']")
        const tooltip = await $("//*[@class='highcharts-legend highcharts-no-tooltip']")
        console.log(state.length + "state count")
        console.log("@@@@@@@@@")
        const data = []
        for (var i = 0; i < state.length; i++) {

            await state[i].moveTo()
            console.log("#@#$%^&*(*&^%$#@#$%^&*(*&^%$##$%^&")
            const data1 = await statename.getText()

            data.push(data1)
            console.log(data)
            console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")

            // console.log(await tooltip.getText())
        }


        await browser.pause(3000)


    })
})