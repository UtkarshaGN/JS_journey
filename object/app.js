//arrow function 
//without return function

// let addData = (num1, num2) => num1 + num2;

// console.log( addData(10, 20))

//with return function
// let sum = (num1, num2) =>{
//     return num1 + num2;
// }

// console.log(sum(10, 80))

//callback function

// let sumData=(num1, num2)=>{
//     return num1+num2
// }

// let outPut = (callbackFunction) =>{
//     return callbackFunction(2, 40)
// }

// console.log(outPut(sumData))

//map - higher order function - working on array methods
let l = [10, 20, 30, 40, 50]
//console.log(l)


//with anonymous function
let newArray = l.map(function(value, index){
    return value + index
    //return value + 5
})
//console.log(newArray)

//arrow function and callback function
let newA = l.map((value, index) => value+ 5)
console.log(newA)
//map() method with 

//filter method 
let m = [22, 45, 67, 78, 99, 56]
let newArrays= m.filter((value)=> value%2==0)
console.log(newArrays)

//forEach method

let b = [22, 56, 67, 89, 44, 66, 90]

b.forEach((v, i)=>{
    if(v%2==0)
        console.log(v)
})

//Object 

let obj = {
    name : "John",
    age: 20,
    city: "Brisbane",
    phone : "45098765",
    name : "Radha"
}

console.log(obj)
console.log(obj['name'])
console.log(obj['name'])

//update object

obj.gender = "Female"
console.log(obj)

obj.city = "Sydney"
console.log(obj)

delete obj['age']
console.log(obj)

//for in loop

for(let key in obj ){
    console.log(key, obj[key])
}


//example1 

let s = "welcometowsiiphello"


let obj = { }
for(let v of s){
    //console.log(v)
    obj[v] =(obj[v] ?? 0)+1
    console.log(v)
}

//obj['w'] = 0+1 {w:1}
//obj['e'] = 0+1 { w:1, e:1}
//obj['l'] = 0+1 {w:1, e:1, l:1}
//obj['c'] = 0+1 { w:1, e:1, l:1, c:1}

