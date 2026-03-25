//addEventListener()- It is used to listen for an event (like click, hover, keypress).

//What is event?
//event is an object automatically given by JavaScript
//It contains all details about the event
//Example:
//which element was clicked
//mouse position
//type of event (click, keydown, etc.)


//What is event.target?
//target = actual element that was clicked
// let mainElement = document.querySelector(".main")

// mainElement.addEventListener("click", (e)=>{
//     e.target.style.color = "red"

// }

// )

let mainElement = document.querySelector(".main")

let btn = document.querySelector(".main button")

mainElement.addEventListener("click", (event)=>{
    event.target.style.color = "red"
//
}

)

btn.addEventListener("click", (e) =>{
    e.stopPropagation() // stop parent event or cancel
    alert("btn clicked!!")
})



//Event bubbling means:

//Event starts from the clicked element and goes up to parent elements

//What is stopPropagation()

//event.stopPropagation() is used to stop the event from bubbling up to parent elements
// simple meaning- Don’t go to parent — stop here


//Real example
button.addEventListener("click", (e) => {
  e.stopPropagation()
  console.log("delete item")
})

//Clicking card → opens details
//Clicking delete → should ONLY delete, not open card