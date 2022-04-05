const main = document.querySelector('main')



function createMovie(movie) {
    main.innerHTML = `
        <a href = 'starwars.html?episode_id=${movie.episode_id}'>${movie.title}</a>
        <time>${movie.release_date}</time>
        <p>${movie.opening_crawl}</p>
        <h2>Characters</h2>
    `
}

function createCharacter(movie) {
    const ul = document.createElement('ul')
    ul.classList.add('.characters')
    main.append(ul)
    Promise.all(movie.characters
        .map(url => fetch(url)
            .then(response => response.json())))
        .then(responses => responses.forEach(response => {
            const li = document.createElement('li')
            li.textContent = `${response.name}`
            ul.append(li)
        }))
}

const url = new URL(window.location)
const queryString = new URLSearchParams(url.search)
fetch(`https://swapi.dev/api/films/${queryString.get('episode_id')}`)
    .then(response => response.json())
    .then(movie => {
        createMovie(movie)
        createCharacter(movie)
        console.log(movie)
    })