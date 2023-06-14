import XLSX from 'xlsx'
import Excel from 'exceljs'

describe('sanity test', () => {
    xit('To perform split lines in cell.', async () => {

        const filepath = '/home/arunkumarrchintha/Downloads/arun.xlsx'
        const workbook = XLSX.readFile(filepath)
        const worksheet = workbook.Sheets['My Sheet'];
        const cellValue = worksheet['A1'].v;
        console.log(cellValue)

        var lines = cellValue.split('\n')

        console.log(lines[0])

        await browser.navigateTo("https://demo.platform.xbotapps.com/demo?botId=3385fc31-148f-48aa-8321-3465396d333c&instance=main%20instance")
        await browser.pause(2000)
        await $("//div[@id='flox-chat-img']").click()
        await browser.pause(2000)
        const iframe = await $("//iframe[@id='flox-chat-iframe']")
        await browser.switchToFrame(iframe);
        console.log("switched to frame")
        for (var i = 0; i < lines.length; i++) {
            await $("//input[@type='text']").setValue(lines[i] + "\n")
            await browser.pause(2000)

        }
        var Response = await $$("//div[@class='cs-text-response-latest']")
        console.log(Response.length)
        for (var i = 1; i < Response.length; i++) {
            console.log(await Response[i].getText())
        }


    })

    it('To perform split lines in 2 cells.', async () => {

        const filepath = '/home/arunkumarrchintha/Downloads/arun.xlsx'
        const workbook = XLSX.readFile(filepath)
        const worksheet = workbook.Sheets['My Sheet'];
        const cellValueA1 = worksheet['A1'].v;
        const cellValueA2 = worksheet['A2'].v;
        const cellValue = cellValueA1 + "\n" + cellValueA2
        console.log(cellValue)

        var lines = cellValue.split('\n')
        console.log(lines)

        console.log(lines.length)

        await browser.navigateTo("https://demo.platform.xbotapps.com/demo?botId=3385fc31-148f-48aa-8321-3465396d333c&instance=main%20instance")
        await browser.pause(2000)
        await $("//div[@id='flox-chat-img']").click()
        await browser.pause(2000)
        const iframe = await $("//iframe[@id='flox-chat-iframe']")
        await browser.switchToFrame(iframe);
        console.log("switched to frame")
        for (var i = 0; i < lines.length; i++) {
            await $("//input[@type='text']").setValue(lines[i] + "\n")
            await browser.pause(2000)
           

        }
        var Response = await $$("//div[@class='cs-text-response-latest']")
        console.log(Response.length)
        const data2 = [];
        for (var i = 1; i < Response.length; i++) {
            const data = await Response[i].getText()
            console.log(data)
            
            data2.push([data])
        }
        const data1 = [];
        
            data1.push([cellValue])
            
            const twoDimArrayList = [];
            twoDimArrayList.push([data1],[data2]);

        // var Answer = ""
        // Answer += twoDimArrayList
        const workbooks = new Excel.Workbook();
        // add a new sheet to the workbook
        const sheet = workbooks.addWorksheet('sheet1');
         sheet.addRows(twoDimArrayList);
        // sheet.addRows(data2)
        await workbooks.xlsx.writeFile('/home/arunkumarrchintha/Downloads/write.xlsx');
        console.log('Data written successfully!');


    })


    xit('To get cell values dynamically.', async () => {

        const filepath = '/home/arunkumarrchintha/Downloads/arun.xlsx'
        const workbook = XLSX.readFile(filepath)
        const worksheet = workbook.Sheets['My Sheet'];
        // Define the range of cells to read
        const range = worksheet['!ref'];
        // Convert range to an array of cell objects
        const cells = XLSX.utils.sheet_to_json(worksheet, { range });
        console.log(cells.length)
        console.log("#####################################################")

        // Iterate over the cell objects and extract the values
        const data = [];
        for (let i = 1; i <= cells.length+1; i++) {
            const cellValueA1 = worksheet['A'+i].v;
            console.log(cellValueA1);
            data.push([cellValueA1])

        }

        
        
        const workbooks = new Excel.Workbook();
        // add a new sheet to the workbook
        const sheet = workbooks.addWorksheet('sheet1');
        sheet.addRows(data);
        await workbooks.xlsx.writeFile('/home/arunkumarrchintha/Downloads/write.xlsx');
        console.log('Data written successfully!');

    })
})