

describe('sanity test', () => {
    it('compare get text with  the given input using equals.', async () => {

        await browser.url("http://43.205.193.210/meityadmin/auth")
        await $("//input[@id='input-email']").setValue("superadmin@gmail.com")
        await $("//input[@id='input-password']").setValue("Flower123#")
        await $("//button[.=' Log In ']").click()
        await $("//a[@title='Reports']").scrollIntoView()
        await $("//a[@title='Reports']").click()
        await $("(//p[@class='text-white font-weight-bold text-center customsumfont'])[23]").scrollIntoView()
        const count = await $("(//p[@class='text-white font-weight-bold text-center customsumfont'])[23]").getText()
        console.log(count)
        console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&")

        const dropdown = await $("(//select[@class='form-control custominputborder'])[1]")
        await dropdown.selectByIndex(1)

        await $("//button[.=' Apply ']").click()
        await browser.pause(2000)
        const count1 = await $("(//p[@class='text-white font-weight-bold text-center customsumfont'])[23]").getText()
        console.log(count1)
        console.log("#########################################")
        const countA = await $("(//table[@id='tbl_exporttable_to_xls']//td[@class='border border-dark ng-star-inserted'])[27]").getText()
        const countB = await $("(//table[@id='tbl_exporttable_to_xls']//td[@class='border border-dark ng-star-inserted'])[56]").getText()
        const countC = await $("(//table[@id='tbl_exporttable_to_xls']//td[@class='border border-dark ng-star-inserted'])[85]").getText()

        const countAA = parseInt(countA)
        const countBB = parseInt(countB)
        const countCC = parseInt(countC)
        const count2 = countAA + countBB + countCC;
        console.log(count2)
        await browser.pause(3000)


    })
})