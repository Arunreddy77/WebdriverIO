
import XLSX from 'xlsx'
import Excel from 'exceljs'
import startup from '../pageobject/startupindia/startup.js'
describe('admin suite', () => {

    xit('FAQS creations', async () => {

        const filepath = '/home/arunkumarrchintha/Downloads/Incu.xlsx'
        const workbook = XLSX.readFile(filepath)
        // Get the worksheet by name or index
        const worksheet = workbook.Sheets['My Sheet'];
        // Get the value of a specific cell
        // const cellValue = worksheet['A1'].v; // returns the value of cell A1
        // console.log(cellValue)
        var cellValueA
        var cellValueB
        const data = []
        var cellValueC
        for (let i = 1; i < 12; i++) {
            cellValueA = worksheet['A' + i].v;
            cellValueB = worksheet['B' + i].v;
            cellValueC = worksheet['C' + i].v;
            data.push([cellValueA, cellValueB, cellValueC])
            //      // returns the value of cell A1
            // console.log(cellValueA)
            // console.log(cellValueB)
            // console.log(cellValueC)
        }
        const workbooks = new Excel.Workbook();
        // add a new sheet to the workbook
        const sheet = workbooks.addWorksheet('My Sheet');
      
       
       
        sheet.addRows(data);
        await workbooks.xlsx.writeFile('/home/arunkumarrchintha/Downloads/arun.xlsx');
        console.log('Data written successfully!');






    })

    xit('FAQS creations', async () => {
        // var test=""
        // for(let i=0; i<10; i++){
        //     test += "* "
        // }
        // console.log(test)
        var test=""
        var fruits = ["apple", "banana", "orange"];
        for(let i=0; i<fruits.length; i++){
            test += fruits[i]+" + "
        
        

        }
        console.log(test)
        
    })
    it('FAQS creations', async () => {
        // let i = 10
        // while(i){
        //     i++
        //     console.log(i)
        // }
        
        let day = 'tuesday '
        console.log(day.length)  //8
        let subDay = day.slice(0,4)
        console.log(subDay)
        console.log(day[1]) //u
        //tue   day 
        let splitDay =day.split("s")
        console.log(splitDay[1].length)
        console.log(splitDay[1].trim().length)
        
        
        let date = '23'
        let nextDate = '27'
        let diff = parseInt(nextDate) - parseInt(date)
        console.log(diff)
        diff.toString()

        let newQuote =day+ "is Funday day"
        console.log(newQuote)
        let val =newQuote.indexOf("day",5)
        console.log(val)
        //tuesday is Funday  
        let count = 0
        let value =newQuote.indexOf("day")
        while(value!== -1)
        {
            count++ //2
            value =newQuote.indexOf("day",value+1)
        
        }
        console.log(count)
    
    })

})