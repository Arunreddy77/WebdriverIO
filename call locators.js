
import locators from "../pageobject/startupindia/locators.js";
import excelnewcode from "../pageobject/startupindia/excelnewcode.js"
import newexcel from "../pageobject/startupindia/newexcel.js"
import Excel from 'exceljs'
import { expect as expectChai } from 'chai'

describe('sanity test', () => {
    xit('To verify incubation pagination.', async () => {
        await browser.url("http://43.205.193.210/meityadmin/auth")
        await locators.email.setValue("superadmin@gmail.com")
        await locators.password.setValue("123456")
        await locators.signin.click()
        await locators.incubators.click()
        await browser.pause(5000)

        for (var i = 0; i < 29; i++) {
            for (var j = 0; j < 10; j++) {
                var text = await locators.Approve.length
                if (text > 0) {
                    await locators.Approve[0].click()
                    await locators.yes.click()
                    await browser.pause(2000)
                }

            }
            await locators.next.click()
            await browser.pause(2000)
        }
    })



    xit('To verify incubation pagination reject.', async () => {
        await browser.url("http://43.205.193.210/meityadmin/auth")
        await locators.email.setValue("superadmin@gmail.com")
        await locators.password.setValue("123456")
        await locators.signin.click()
        await locators.incubators.click()
        await browser.pause(5000)

        for (var i = 0; i < 29; i++) {
            for (var j = 0; j < 10; j++) {
                var text = await locators.reject.length
                console.log("*****************************" + text)
                if (text > 0) {
                    await locators.reject[0].click()
                    await locators.yes.click()
                    await browser.pause(2000)
                }

            }
            await locators.next.click()
            await browser.pause(2000)
        }
    })


    it('To verify incubation pagination reject.', async () => {

        const filepath = '/home/arunkumarrchintha/Downloads/Incubators list.csv'
        const colNum = 1
        var arrays = []
        var workbook = new Excel.Workbook()
        workbook.csv.readFile(filepath).then(async function () {
            var worksheet = workbook.getWorksheet(1)

            var rows = worksheet.rowCount
            var columns = worksheet.columnCount
            console.log("rows count " + rows)
            console.log("columns count " + columns)

            for (var i = 1; i <=rows; i++) {
                console.log("**************************************************")

                var row = worksheet.getRow(i)
                var columndata = row.getCell(colNum).value;
                console.log("column data" + columndata)
                arrays.push(columndata)
            }


            console.log(arrays)
        })
        await browser.url("http://43.205.193.210/meityadmin/auth")
        await locators.email.setValue("superadmin@gmail.com")
        await locators.password.setValue("123456")
        await locators.signin.click()
        await locators.incubators.click()
        await browser.pause(2000)
        for(let i=0; i<7; i++){
            for(let j=0; j<10; j++){
                
                var names = await locators.name[j].getText()
                console.log(names)
                if(arrays[0]===names){
                    await locators.edit[i].click()
                    await browser.pause(2000)
                }

            }
            await locators.next.click()
            await browser.pause(2000)
    }


    })

})