//object is collection of properties
xit('FAQS creations', async () => {
let person = {

    firstName:'Tim',
    lastName : 'Joe',
        age : 24,
    fullName : function()
    {
        console.log(this.firstName+this.lastName)
    }

}
//console.log(person.fullName())
console.log(person.lastName)
// console.log(person['lastName'])
// person.firstName = 'Tim Dane'
// console.log(person.firstName)
// person.gender = 'male'
// console.log(person)
// delete person.gender
// console.log(person)
// console.log('gender' in person)
// //print all the values of the javascript object
// for(let key in person)
// {
//     console.log(person[key])
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
let val =newQuote.indexOf("day",5) //defaultly it shows the 4 but asking to search from index 5
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