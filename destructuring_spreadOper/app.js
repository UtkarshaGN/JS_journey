//1. Object Creation & Access
//An object stores data in key–value pairs.
//2.Nested Object -Object inside another object.Store complex structured data (like API response, user profile)
//3. Object Destructuring
//Extract values from object into variables.
//Destructuring allows you to pull data out of objects easily.
//Use:Cleaner code,Used heavily in React & APIs

//   let email = "abc@gnail.com"

//         let obj ={
//             name: "Ram",
//             gender: "male",
//             email,
//             age: 30,
//             city: "Pune",
//             address:{
//                  state: "Maharastra",
//                  country: "India",
//                  pincode: 123456
//             }
//         }

        //console.log(obj)
         //console.log(obj.age)
        //console.log(obj.address.state)

       // console.log(obj['address']['country'])
     //console.log(obj['address']['state'])

     //destructuring
     //let{address} = obj
     //console.log(address)
     //console.log(address.state)

     //let{address: {country}} = obj
     //console.log(country)


//4. Array of Objects
     //example2

    //  let user =[
    //     {
    //         name: "Radha",
    //         salary: 3000,
    //         city:"Pune"

    //     },
    //      {
    //         name: "Ram",
    //         salary: 5000,
    //         city:"Pune"

    //     },
    //      {
    //         name: "Raksha",
    //         salary: 7000,
    //         city:"Pune"

    //     },
    //      {
    //         name: "Ramna",
    //         salary: 8000,
    //         city:"Pune"

    //     }
    //  ]

    //5. map(), forEach(), for...of
    //Different ways to loop arrays.
    //map() -Creates new array
    //forEach() - No return → just loops
    //for...of -simple loop
    
    //method1 - using map()
    //  let newUser = user.map((obj) =>{
    //     obj.salary = obj.salary+5000
    //     return(obj)
    //  })

    //  console.log(newUser)

    //method 2 - using forEach()
    // let n =[]
    // user.forEach((obj) =>{
    //  obj.salary = obj.salary+5000
    //  n.push(obj)
    // })
    // console.log(n)

    //Method3
    //using for_of loop

    // let n= []

    // for(let obj of user){
    //     obj.salary = obj.salary+5000
    //     n.push(obj)
    // }

    // console.log(n)


    //Shallow copy

    let m =[10, 20, 30, 40, 50]

    //let n = m //shallow copy

    let n  =[...m] //deep copy
    //console.log(m)
    //console.log(n)

    //shallow copy copy
    m.push(99)
    console.log(m)
    console.log(n)


    let obj ={
        name: "ram",
        age: 30,
        city: "Pune"
    }
let newObj = {...obj}
console.log(newObj)

newObj.phone = "123456"
console.log(newObj)
console.log(obj)
