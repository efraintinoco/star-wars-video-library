const url = "https://swapi.dev/api/films/"






fetch(url)
    .then(response => {
        return response.json()
    })
    console.log(response)