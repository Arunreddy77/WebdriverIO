import excelnewcode from "../pageobject/startupindia/excelnewcode.js"
import newexcel from "../pageobject/startupindia/newexcel.js"
import adminincubators from "../pageobject/adminincubators.js"
import { createArrayCsvWriter } from 'csv-writer';
import Excel from 'exceljs'
import { expect as expectChai } from 'chai'
import XLSX from 'xlsx'
describe('admin suite', () => {
  it('FAQS creations', async () => {
    //const filepath = '/home/vamsivinayjampana/Documents/test.xlsx'
    //const sheetName = 'Sheet1'
    const filepath = '/home/vamsivinayjampana/Documents/test.csv'
    const sheetName = 'Sheet1'
    const colNum = 1
    var rows
    var array = []
    var workbook = new Excel.Workbook();
    workbook.csv.readFile(filepath).then(async function () {
      var columnData
      var worksheet = workbook.getWorksheet(1)

      rows = worksheet.rowCount;
      var column = worksheet.columnCount;
      console.log("rows count" + rows)
      console.log("cloumn count" + column)

      for (var i = 1; i <= rows; i++) {
        var row = worksheet.getRow(i);
        columnData = row.getCell(colNum).value;
        //columnData2 = row.getCell(2).value;
        console.log(columnData)
        array.push(columnData)
      }
      console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%")
      console.log(array)
    })

    await browser.url("http://43.205.193.210/meityadmin/admin/incubator")
    await browser.refresh()
    await adminincubators.email.setValue("superadmin@gmail.com")
    await adminincubators.passsword.setValue("123456")
    await adminincubators.loginbutton.click()
    await adminincubators.incubatortext.click()
    await browser.pause(1000)
    const name = []
    const y = []
    for (var k = 0; k < array.length; k++) {
      var c = false
      for (var j = 0; j < 2; j++) {

        for (var i = 0; i < 10; i++) {
          await adminincubators.name[i].waitForClickable({
            timeout: 5000,
            timeoutMsg: 'name button not found'
          })
          const element = await adminincubators.name[i]

          // Highlight the text using JavaScript
          browser.execute('arguments[0].style.backgroundColor = "red";', element);
          await browser.pause(3000)
          var tt = await adminincubators.name[i].getText()
          console.log(tt)
          if ("incubator" === tt) {
            //   await adminincubators.groupicon[i].waitForClickable({
            //     timeout: 5000,
            //     timeoutMsg: 'group icon button not found'
            // })
            const element = await adminincubators.name[i]

            // Highlight the text using JavaScript
            await browser.execute('arguments[0].style.backgroundColor = "green";', element);
            await browser.pause(3000)
            await adminincubators.groupicon[i].click()
            //   await adminincubators.gottoincubator.waitForClickable({
            //     timeout: 5000,
            //     timeoutMsg: 'gotoincubator button not found'
            // })
            await browser.pause(1000)
            await adminincubators.gottoincubator.click()
            c = true
            break
          }
          if (c === true) {
            break
          }
        }
        await adminincubators.next.click()
        await browser.pause(3000)

      }
      y.push(c)
      name.push(array[k])
      const workbooks = new Excel.Workbook();
      const data = [["Group1", "STATUS"]];
      // add a new sheet to the workbook
      const sheets = workbooks.addWorksheet('My Sheet');

      for (var l = 0; l < array.length; l++) {
        data.push([array[l], [c]])
      }
      sheets.addRows(data);
      await workbooks.xlsx.writeFile('/home/vamsivinayjampana/Documents/groupstatus.xlsx');
      await browser.refresh()
      await browser.pause(5000)
      console.log("OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO")
      console.log(y)
      console.log(name)
    }
    await browser.pause(10000)







  })


})
