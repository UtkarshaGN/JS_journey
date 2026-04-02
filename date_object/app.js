//Date object
//List of methods
//Date() - to get current date and time
//getFullYear()
//getFullMonth()
//getDate()
//getHours()
//getMinutes()
//getSeconds()
//getMilliseconds()
//getTime()
//getDay()

let currentDate = new Date()
console.log(currentDate);
console.log(currentDate.getFullYear())
console.log(currentDate.getMonth())

let hours = (currentDate.getHours())
let finalOutput = (hours>12) ? hours-12 : hours;
console.log(hours)

console.log(currentDate.getMinutes())
console.log(currentDate.getSeconds())
console.log(currentDate.getMilliseconds())

let allMilliSec = currentDate.getTime()/1000
console.log(allMilliSec)

console.log(currentDate.getDay())

let futureDate = new Date("02 April 2026 10:38:48 GMT+1000")
console.log(futureDate.getTime()/1000)

