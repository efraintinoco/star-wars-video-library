const url = "https://swapi.dev/api/films/"
const url1 = "http://img.omdbapi.com/?apikey=[3a0a823c]&"
const main = document.querySelector("main")
const revenge = "http://www.omdbapi.com/?t=revenge+of+the+sith&apikey=3a0a823c"


function addMoviesListings(movie) {
    const div = document.createElement("div")
    div.innerHTML = `
    
    <a href="swapi.dev?film=${movie.title}">${movie.title}</a>
    <time>${movie.release_date}</time>
    `
    main.append(div)
}

fetch(url)
    .then(response => {
        return response.json()
    }).then(parsedResponse => {
        const urls = parsedResponse.results.map(result => result.url)
        const fetches = urls.map(url => fetch(url).then(response => response.json()))
        return Promise.all(fetches)
    }).then(responses => {
        responses.forEach(response => {
            addMoviesListings(response)
        })
    })

fetch(url1)
    .then(response => {
        return response.json()
    }).then(parsedResponse => {
        const urls = parsedResponse.results.map(result => result.url1)
        const fetches = urls.map(url => fetch(url).then(response => response.json()))
        return Promise.all(fetches)
    }).then(responses => {
        responses.forEach(response => {
            addMoviesListings(response)
        })
    })