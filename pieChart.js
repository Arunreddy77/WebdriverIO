import challengelocators from "../pageobject/challengelocators.js"
describe('challenge suite', () => {



  describe('sanity test', () => {
    xit('To perform drag and drop.', async () => {

      await browser.url("http://43.205.193.210/meityadmin/auth")
      await browser.refresh()
      await $("//input[@id='input-email']").setValue("superadmin@gmail.com")
      await $("//input[@id='input-password']").setValue("Flower123#")
      await $("//button[.=' Log In ']").click()
      await $("//a[@title='Reports']").scrollIntoView()
      await $("//a[@title='Reports']").click()
      await $("(//p[@class='text-white font-weight-bold text-center customsumfont'])[23]").scrollIntoView()
      const count = await $("(//p[@class='text-white font-weight-bold text-center customsumfont'])[23]").getText()
      console.log(count)
      console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&")
      await $("(//p[@class='text-white font-weight-bold text-center customsumfont'])[23]").click()
      await browser.pause(5000)
      const state = await $$("//*[contains(@class,'highcharts-point highcharts-color')]")
      const my_data = await $("//*[@filter='url(#highcharts-drop-shadow-1)']//*[@data-z-index='1']//*[@style='font-weight: bold;']")

      console.log(await state.length + "^^^^^^^^^^^^^^^^^^^^^^^")
      for (var i = 0; i < state.length; i++) {

        await state[i].moveTo()
        await browser.pause(2000)
        console.log(await my_data.getText())


      }




      await browser.pause(3000)

    })
  })


  describe('sanity test', () => {
    it('To perform drag and drop.', async () => {

      await browser.url("http://43.205.193.210/meityadmin/auth")
      await browser.refresh()
      await $("//input[@id='input-email']").setValue("superadmin@gmail.com")
      await $("//input[@id='input-password']").setValue("Flower123#")
      await $("//button[.=' Log In ']").click()
      await $("//a[@title='Reports']").scrollIntoView()
      await $("//a[@title='Reports']").click()
      await $("(//p[@class='text-white font-weight-bold text-center customsumfont'])[23]").scrollIntoView()
      const count = await $("(//p[@class='text-white font-weight-bold text-center customsumfont'])[23]").getText()
      console.log(count)
      console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&")
      await $("(//p[@class='text-white font-weight-bold text-center customsumfont'])[23]").click()
      await browser.pause(5000)
      const state = await $$("//*[contains(@class,'highcharts-point highcharts-color')]")
      const my_data = await $("//*[@filter='url(#highcharts-drop-shadow-1)']//*[@data-z-index='1']//*[@style='font-weight: bold;']")

      console.log(await state.length + "^^^^^^^^^^^^^^^^^^^^^^^")
      const data = []
      for (var i = 0; i < state.length; i++) {

        await state[i].moveTo()
        await browser.pause(2000)
        var data1 = await my_data.getText()
        data.push(data1)

        console.log(data)
        console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")


      }




      await browser.pause(3000)

    })
  })


})