const url = "https://swapi.dev/api/films/"
const main = document.querySelector("main")
const ul = document.querySelector('ul')
const movieNewHope = document.createElement('img')
const movieStrikes = document.createElement('img')
const movieReturn = document.createElement('img')
const moviePhantom = document.createElement('img')
const movieClones = document.createElement('img')
const movieRevenge = document.createElement('img')

function addMoviesListings(movie) {
    const div = document.createElement("div")
    div.innerHTML = `
    
    <a href="starwars.html?episode_id=${movie.episode_id}">${movie.title}</a>
    <time>${movie.release_date}</time>
    `
    console.log(movie);
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


movieNewHope.src = 'https://m.media-amazon.com/images/I/81RZipc6yOL._AC_SY879_.jpg'
movieStrikes.src = 'https://starwarsblog.starwars.com/wp-content/uploads/2020/06/the-empire-strikes-back-post-m-ferguson.jpg'
movieReturn.src = "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/f38cb38707f05dc86f483b07c215c7dd_a1fb33f9-f075-438f-bc49-2e8c2a2e2d02_500x.jpg?v=1573653657"
moviePhantom.src = "https://m.media-amazon.com/images/M/MV5BYTRhNjcwNWQtMGJmMi00NmQyLWE2YzItODVmMTdjNWI0ZDA2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg"
movieClones.src = "https://picfiles.alphacoders.com/124/124911.jpg"
movieRevenge.src = "https://m.media-amazon.com/images/M/MV5BNTc4MTc3NTQ5OF5BMl5BanBnXkFtZTcwOTg0NjI4NA@@._V1_.jpg"

ul.append(movieNewHope)
ul.append(movieStrikes)
ul.append(movieReturn)
ul.append(moviePhantom)
ul.append(movieClones)
ul.append(movieRevenge)