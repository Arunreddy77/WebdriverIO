import alert from "alert"

describe('sanity test', () => {
    xit('To perform drag and drop.', async () => {

        await browser.url("http://43.205.193.210/meityadmin/auth")
        await $("//input[@id='input-email']").setValue("superadmin@gmail.com")
        await $("//input[@id='input-password']").setValue("Flower123#")
        await $("//button[.=' Log In ']").click()
        await $("//a[@title='FAQs']").click()
        await $("//span[.='Drag&Drop']").click()
        const sourceelem = await $("//div[.=' What is meity startup hub?']")
        const targetelem = await $("//div[.=' Can I provide two mobile numbers in the registration form?']")

        await sourceelem.dragAndDrop(targetelem)

        await browser.pause(5000)




    })


    xit('To perform drag and drop.', async () => {

        await browser.url("http://43.205.193.210/meityadmin/auth")
        await $("//input[@id='input-email']").setValue("superadmin@gmail.com")
        await $("//input[@id='input-password']").setValue("Flower123#")
        await $("//button[.=' Log In ']").click()
        await browser.newWindow("https://webdriver.io/docs/api/element/dragAndDrop")
        await browser.pause(2000)
        await browser.newWindow("https://www.linkedin.com")
        await browser.pause(2000)
        await browser.newWindow("https://www.facebook.com")
        await browser.pause(2000)
        await browser.newWindow("https://www.gmail.com")
        await browser.pause(2000)
        await browser.newWindow("https://www.koo.com")
        await browser.pause(2000)


        const winhandles = await browser.getWindowHandles()
        await browser.switchToWindow(winhandles[1])




    })


    xit('To perform drag and drop.', async () => {

        await browser.url("http://43.205.193.210/meityadmin/auth")
        await browser.pause(2000)
        await browser.newWindow("https://www.linkedin.com")
        await browser.pause(2000)
        await browser.newWindow("https://www.facebook.com")
        await browser.pause(2000)
        await browser.newWindow("https://www.gmail.com")
        await browser.pause(2000)
        await browser.newWindow("https://www.koo.com")
        await browser.pause(2000)


        const winhandles = await browser.getWindowHandles()
        await browser.switchToWindow(winhandles[1])




    })

    it('To perform drag and drop.', async () => {

        await browser.url("https://www.globalsqa.com/demo-site/draganddrop/")

        await browser.pause(3000)
        const iframe = await $("//iframe[@class='demo-frame lazyloaded']")
        await browser.switchToFrame(iframe);
        await browser.pause(2000)

        const sourceelem = await $("(//li[@class='ui-widget-content ui-corner-tr ui-draggable ui-draggable-handle'])[4]")
        const targetelem = await $("//div[@id='trash']")

        await sourceelem.dragAndDrop(targetelem)
        await browser.pause(2000)
        // var text = "hello Arun, Drag and drop completed";
        // await browser.sendAlertText(text)
        alert("validate recaptcha manually to continue suite")

        await browser.pause(5000)





    })



})