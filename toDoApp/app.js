let formElement = document.querySelector("form")
//lets assume
let userToDoList = []

formElement.addEventListener(
    "submit",
    (e) => {
        e.preventDefault() //page reload stop
        let textValue = e.target.userToDo.value // get input value
        //console.log(textValue)
        //now we are storing data in array . it will store data on browser. we can't store
        //console.log(e.target.userToDo.value)
        //console.log(e.target.password.value)

        //e - event submit//target - form //userToDo -  form input name

        let obj = {
            title: textValue,
            isStaus: true,
        }
        // console.log(obj);

        // check title - no repeat
        let checkMyTitle = userToDoList.find((obj) => obj.title == textValue)

        if (checkMyTitle) {
            alert("todo alraedy added")
        }
        else {
            userToDoList.push(obj)
            showAllToDo()
            e.target.reset()
        }
        //console.log(userToDoList)



    }
)

//show todo list
let ulElement = document.querySelector("#taskList")
let showAllToDo = () => {

    let list = ''
    userToDoList.forEach(
        (obj, index) => {

            list += `<li> <b>${obj.title} </b>  <span>&times;</span></li>`

        })
    ulElement.innerHTML = list
}





//logic
// let l= [
//     {
//         title : "HTML",
//         isstatus: true
//     },
//     {
//         title: "CSS",
//         isStaus: true
//     }
// ]
// let myTitle = "Js"
// let checkMyTitle = l.find((value) =>value.title==myTitle)
// //console.log(checkMyTitle)

// if(checkMyTitle){
//     console.log("data found")
// }
// else{
//     console.log("not exist")
// }

//filter() -> it will return array
//find() -> it will return object