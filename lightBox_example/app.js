// lightbox means - click- img zoom

//first remove the overlay cross 
let lightBoxOverLayEle = document.querySelector(".lightBoxOverLay")//main
let lightBoxMidClose = document.querySelector(".lightBoxMid span")// cross btn
let lightBoxMidIMG = document.querySelector(".lightBoxMid img")//main img tag

lightBoxMidClose.addEventListener("click", () => {
    lightBoxOverLayEle.classList.remove("lightBoxOverOpen")
})


//access the img src 
let mainElement = document.querySelector(".main")
let btn = document.querySelector(".main button")

mainElement.addEventListener("click", (e) => {
    //console.log(e.target.src) // source of img
    let clickedSrc = e.target.src
    //work on just img src, not on white space click
    if (clickedSrc) {
//console.log(clickedSrc)
        //img open afert click
        lightBoxOverLayEle.classList.add("lightBoxOverOpen")

        //exack img open when we click
        lightBoxMidIMG.src = clickedSrc
        
    }

}

)