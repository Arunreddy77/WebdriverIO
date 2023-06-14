import { createArrayCsvWriter } from 'csv-writer';
import Excel from 'exceljs'
import XLSX from 'xlsx';

describe('admin suite', () => {
    it('FAQS creations', async () => {
        // Define the CSV headers
        const workbook = XLSX.readFile('/home/vamsivinayjampana/Documents/jmeteruserdetails.xlsx');

        // Get the worksheet by name or index
        const worksheet = workbook.Sheets['My Sheet'];
        
        // Get the value of a specific cell
        const cellValue = worksheet['A1'].v; // returns the value of cell A1
        console.log(cellValue)
        // Update the value of a specific cell
        // worksheet['A1'].v = 'new value';
        
        // // Write the updated workbook to a file
        // XLSX.writeFile(workbook, '/path/to/newWorkbook.xlsx');
    })
});
