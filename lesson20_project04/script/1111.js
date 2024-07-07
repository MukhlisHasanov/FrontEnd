const fetchResult = async () => {
    const fetchParams = {
        method: 'GET',
        headers: {
            'X-API-KEY': '12d6b032-42f0-4b24-84bd-877453b84865',
            'Content-Type': 'application/json',
        },
    };

    try {

        const response = await fetch(
            'https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_250_BEST_FILMS&page=1',
            fetchParams
        );
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const bodyData = await response.json();
        const films = bodyData.films;


        const filmIds = films.map(film => film.filmId);

        const filmUrls = filmIds.map(id => `https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}`);

        const filmRequests = filmUrls.map(url =>
            fetch(url, fetchParams).then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
        );

        const filmDetails = await Promise.all(filmRequests);

        const mainDiv = document.querySelector('.main');
        mainDiv.innerHTML = '';

        filmDetails.forEach(film => {
            const filmElement = document.createElement('div');
            filmElement.classList.add('film');

            const nameElement = document.createElement('h2');
            nameElement.classList.add('name');
            nameElement.textContent = film.nameOriginal || 'Name undefined';
            filmElement.appendChild(nameElement);

            const genreElement = document.createElement('p');
            nameElement.classList.add('genre');
            genreElement.textContent = `Genre: ${film.genres.map(g => g.genre).join(', ') || 'Undefined'}`;
            filmElement.appendChild(genreElement);

            const yearElement = document.createElement('p');
            nameElement.classList.add('year');
            yearElement.textContent = `Year: ${film.year || 'Undefined'}`;
            filmElement.appendChild(yearElement);

            const descriptionElement = document.createElement('p');
            nameElement.classList.add('description');
            descriptionElement.textContent = film.shortDescription || 'Description is not have';
            filmElement.appendChild(descriptionElement);

            mainDiv.appendChild(filmElement);
        });

    } catch (error) {
        console.error('Error fetching film data:', error);
    }
}

fetchResult();


// function displayFilms(films) {
//     const mainDiv = document.querySelector('.main');
//     mainDiv.innerHTML = '';

// films.map(id => kinopoiskId);

// }

