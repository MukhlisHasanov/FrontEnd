const fetchResult = async () => {
    const fetchParams = {
        method: 'GET',
        headers: {
            'X-API-KEY': '06e18a20-37d9-462b-af98-7c5eaf44c844',
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

        filmDetails.forEach((film, index) => {
            const filmElement = document.createElement('article');
            filmElement.classList.add('article', `film${index + 1}`);

            const nameElement = document.createElement('div');
            nameElement.classList.add('name');
            nameElement.textContent = film.nameOriginal || 'Name undefined';
            filmElement.appendChild(nameElement);

            const iconDiv = document.createElement('div');
            iconDiv.classList.add('movieIcon');
            iconDiv.style.backgroundImage = `url(${film.posterUrl})`;
            filmElement.appendChild(iconDiv);
            // const imgElement = document.createElement('img');
            // imgElement.src = film.icon;
            // imgElement.alt = '';
            // iconDiv.append(imgElement);
            

            const genreElement = document.createElement('div');
            genreElement.classList.add('genre');
            genreElement.textContent = film.genres.map(g => g.genre).join(', ') || 'Undefined';
            filmElement.appendChild(genreElement);

            const filmInfoElement = document.createElement('div');
            filmInfoElement.classList.add('film-info');

            const yearElement = document.createElement('div');
            yearElement.classList.add('year');
            yearElement.textContent = film.year || 'Undefined';
            filmElement.appendChild(yearElement);

            const descriptionElement = document.createElement('p');
            descriptionElement.classList.add('description');
            descriptionElement.textContent = film.shortDescription || 'Description is not have';
            filmElement.appendChild(descriptionElement);

            filmElement.appendChild(filmInfoElement);
            mainDiv.appendChild(filmElement);
        });

    } catch (error) {
        console.error('Error fetching film data:', error);
    }
}

fetchResult();



// Обновлять страницу каждые 10 секунд (10000 миллисекунд)
setInterval(() => {
    location.reload();
}, 10000000);