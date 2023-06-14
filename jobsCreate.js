describe('sanity test', () => {
    it('To perform drag and drop.', async () => {

        await browser.url("http://43.205.193.210/meityadmin/auth")
        await $("//input[@id='input-email']").setValue("superadmin@gmail.com")
        await $("//input[@id='input-password']").setValue("Flower123#")
        await $("//button[.=' Log In ']").click()
        await $("//span[.='Job Posting List']").click()
        await $("//button[.='Create Job']").click()
        await $("//input[@id='title']").setValue("Central railway")
        await $("//input[@id='category']").setValue("Test1")
        await $("//input[@id='project']").setValue("meity")
        await $("//input[@id='division']").setValue("div")
        await $("//input[@id='no_of_positions']").setValue("7")
        await $("//textarea[@id='description']").setValue("this is govt job")
        const file = await $("//input[@type='file']")
        await file.setValue("/home/arunkumarrchintha/Downloads/VIVATECH 2022.pdf")
        await $("//button[@type='submit']").click()

        await browser.navigateTo("http://43.205.193.210/career")
        await $("(//a[.='CLICK HERE'])[1]").click()
        await $("//input[@formcontrolname='name']").setValue("Arun Reddy")
        await $("#email").setValue("arun@gmail.com")
        await $("#mobile").setValue("9876543456")
        await $("#address").setValue("Kondapur")
        await $("#skills").setValue("gamer")
        const fileinput = await $("//input[@type='file']")
        await fileinput.setValue("/home/arunkumarrchintha/Downloads/bc67140b-40c7-4d57-ab74-258ca8159f21.docx")
        await $("//button[.='Apply']").click()




        await browser.pause(3000)


    })
})