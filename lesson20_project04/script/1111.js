const fetchResult = async () => {
    const fetchParams = {
        method: 'GET',
        headers: {
            'X-API-KEY': '7c04814c-1b1b-48eb-bf10-e55c16764006',
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

        filmDetails.forEach(film => console.log(film));

    } catch (error) {
        console.error('Error fetching film data:', error);
    }
}

fetchResult();
