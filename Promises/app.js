//synchronous and asynchronous

//synchronous js - execute code line by line

console.log("Task1")
console.log("task2")
console.log("task3")

//asynchronous js- Asynchronous JavaScript allows tasks to run in the background without blocking the main code.
//inapi calls, timers
console.log("task1")

setTimeout(() => {
    console.log("task2")
}, 1000)

console.log("task3")

//promises-A Promise is an object that handles asynchronous operations
//API, database handling, file handling
//promise state- fullfilled, rejected, pending
//e.g weather app, movie search app

let loginStatus = false;

let loginPromise = new Promise((resolve, reject) => {
    if (loginStatus) {
        resolve({
            status: true,
            message: "Login done",
        })
    }
    else {
        reject({
            status: false,
            message: "not done",
        })
    }


})


//method2- async and await - use try catch statement here

let checkLogin = async () => {

    try {
        let data = await loginPromise// await - it handle success result 
        console.log(data)

    } catch (error) {
        console.log(error)
    }

}
checkLogin()
//Method1 - to get data from promise
// loginPromise
// .then((suceessRes)=>{
//     console.log(suceessRes)
// })
// .catch((error)=>{
//     console.log(error)
// })

