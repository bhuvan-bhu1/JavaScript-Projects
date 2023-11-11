const repeat = (url,id,path) => {
    
    fetch(url)
    .then(response => response.json() )
    .then(data => {
        console.log(data.results)
        let element = document.querySelector(id)
        for (ele of data.results) {
            let  newimage = document.createElement("img")
            let source = ele[path]
            newimage.src = `https://image.tmdb.org/t/p/original${source}`
            // console.log(ele.backdrop_path)
            element.appendChild(newimage)
        }

    })
}

window.onload = () => {
// wishlist
repeat("https://api.themoviedb.org/3/discover/tv?api_key=19f84e11932abbc79e6d83f82d6d1045&with_networks=213","#wishlist","poster_path")


// Trending Now

repeat("https://api.themoviedb.org/3/trending/movie/week?api_key=19f84e11932abbc79e6d83f82d6d1045","#trending","backdrop_path")


// Top-Rated


repeat("https://api.themoviedb.org/3/movie/top_rated?api_key=19f84e11932abbc79e6d83f82d6d1045&language=en-US&page=1","#top_rated","backdrop_path")


}