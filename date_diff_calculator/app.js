//date differce calculator
//1. target/select elements
let formDate = document.querySelector("#fromDate")
let toDate = document.querySelector("#toDate")
let btn = document.querySelector("button")

//2.

btn.addEventListener("click", function(){
    //alert("hello")
 let formDateObject = new Date(formDate.value)
 let toDateObject  = new Date(toDate.value)
 
 let formDateObjectMilSec = formDateObject.getTime()
 let toDateObjectMilSec = toDateObject.getTime()

 let diff = (toDateObjectMilSec - formDateObjectMilSec)/1000
 console.log(diff) //output in millsec


 let oneMin = 60; //sec
 let oneHour = oneMin*60; //sec
 let oneDaySec = oneHour*24 
console.log(oneMin, oneHour, oneDaySec)

let finalDays = Math.floor(diff/oneDaySec)
console.log("Days", finalDays)

let remainsec = diff% oneDaySec
let finalHours = Math.floor(remainsec/oneHour)
console.log("Hours", finalHours)

})
