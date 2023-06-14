describe('sanity test', () => {
    xit('To perform drag and drop.', async () => {

        await browser.url("http://43.205.193.210/meityadmin/auth")
        await browser.refresh()
        await $("//input[@id='input-email']").setValue("superadmin@gmail.com")
        await $("//input[@id='input-password']").setValue("Flower123#")
        await $("//button[.=' Log In ']").click()
        await $("//span[.='User Management']").click()
        await $("//span[.='Roles']").click()

        var rolename = "Social Manager"

        const role = await $("//select[@id='input-name']")
        await role.selectByVisibleText(rolename)
        await $("//input[@formcontrolname='roleCode']").setValue("SM001")
        await $("//input[@formcontrolname='description']").setValue("he can access to social related options")
        const checkbox = await $$("//table[@class='table']//tr[@class='ng-star-inserted']/td[1]/input")

        for (var i = 0; i < checkbox.length; i++) {

            if (i % 2 === 0) {
                await checkbox[i].click()
                //console.log("@#$%^&*(*&^%$#@#$%")

            }
        }
        await $("//button[.='Save']").click()
        await browser.pause(1000)

        await $("//span[.='Admin Users']").click()
        await $("//input[@name='fname']").setValue("Arun")
        await $("//input[@name='lname']").setValue("Reddy")
        await $("#input-email").setValue("socialmanager1@gmail.com")
        await $("//input[@placeholder='Mobile Number']").setValue("9876756456")

        const ddown = await $("//select[@formcontrolname='role']")
        await ddown.selectByVisibleText(rolename)
        await $("//button[.='Create']").click()

        await browser.pause(3000)
        await $("//span[.='Admin Users']").click()
        const email = await $("(//table[@class='table table-bordered']//tr)[3]/td[3]").getText()

        console.log(email)

        await $("#dropdownMenuButton").moveTo()
        await browser.pause(2000)
        await $("//a[.='Logout']").click()
        await $("//input[@id='input-email']").setValue(email)
        await $("//input[@id='input-password']").setValue("123456")
        await $("//button[.=' Log In ']").click()
        await browser.pause(3000)



    })

    it('To perform drag and drop.', async () => {

        await browser.url("http://43.205.193.210/meityadmin/auth")
        await browser.refresh()
        await $("//input[@id='input-email']").setValue("superadmin@gmail.com")
        await $("//input[@id='input-password']").setValue("Flower123#")
        await $("//button[.=' Log In ']").click()
        await $("//span[.='User Management']").click()
        await $("//span[.='Roles']").click()
        await $("(//span[@class='fa fa-edit'])[2]").scrollIntoView()
        await $("(//span[@class='fa fa-edit'])[2]").click()
        await $("//h3[.='Permissions']").scrollIntoView()

        const module = await $$("//table[@class='table']/tbody/tr/td[3]")
        // console.log(module.length)
        const data = []



        for (var i = 0; i < module.length; i++) {

            if (i % 2 != 0) {
                const data1 = await module[i].getText()
                // console.log(data1)
                data.push(data1)
            }

        }
        console.log("Actual data from checkbox")
        console.log(data)
        await browser.pause(3000)
        //logout
        await $("#dropdownMenuButton").moveTo()
        await browser.pause(2000)
        await $("//a[.='Logout']").click()
        //login
        await $("//input[@id='input-email']").setValue("socialmanager1@gmail.com")
        await $("//input[@id='input-password']").setValue("123456")
        await $("//button[.=' Log In ']").click()
        await $("//span[.='User Management']").click()
        await $("//span[.='Challenge']").click()
        //totles text
        const titles = await $$("//*[@class='menu-items']/li")

        const dataa = []

        for (var j = 0; j < titles.length; j++) {

            const dataa1 = await titles[j].getText()
            const datasplit = dataa1.split("\n")
            const spliteddata = datasplit[0]

            console.log(spliteddata)

            dataa.push(spliteddata)

        }
        console.log("titles data")
        console.log(data)
        console.log(dataa)

        var a=false;
        const tat = [];
        await browser.pause(3000)

        for (var k = 0; k < data.length; k++) {
            a=false
            for (var l = 0; l < dataa.length; l++) {
                // console.log(data[k] + "equals" + dataa[l])
                if (data[k] == dataa[l]) {
                    a=true
                }


            }
            if (a == false) {
                console.log(data[k])
                tat.push(data[k])

            }
        }
        console.log("@@@@@@@@@@@@@@@@@@@@@@@@")
        console.log(tat)

    })
})