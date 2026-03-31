//Movie app
let movieOuterDiv = document.querySelector(".movie-grid")
let getMovies = async(searchTitle)=>{
   let apiUrl;
   if(searchTitle){
        apiUrl = `https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=${searchTitle}`
   } else{
        apiUrl = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1`
   }

   let movieData =  await fetch(apiUrl)
   let data = await movieData.json()
   //console.log(data)

   let {results} = data
   console.log(results)

   let movieItem =''
 results.forEach((obj)=>{
    let{title, overview,release_date,poster_path
 } = obj
    movieItem+= ` <article class="movie-card">
                 
                <img  class = "card-poster" src="https://image.tmdb.org/t/p/w1280/${poster_path}" width= "100%"/>
                <div class="movie-info">
                    <h3>${title}</h3>
                    <p>${overview}</p>
                    <span>${release_date}</span>
                </div>
            </article>`

     

})

//console.log(movieItem)
movieOuterDiv.innerHTML = movieItem
}

let searchMovie = document.querySelector("input")

searchMovie.addEventListener("keyup", ()=>{
    getMovies(searchMovie.value)
})


getMovies()