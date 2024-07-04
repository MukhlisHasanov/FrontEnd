
// let promise = fetch(
//     'https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_250_BEST_FILMS&page=1',
//     fetchParams
// );

// const fetchParams = {
//     method: 'GET',
//     headers: {
//         'X-API-KEY': '7c04814c-1b1b-48eb-bf10-e55c16764006',
//         'Content-Type': 'application/json',
//     },
// };


// const fetchResult = async () => {
//     try {
//         const bodyData = await response.json();
//     }
// }

// // function localtime(local_date) {
// //     const date = new Date(local_date.split(' ')[0]);
// //     const options = { weekday: 'long', month: 'long', day: '2-digit' };
// //     const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);
// //     return formattedDate;
// // }

// // const fetchResult = async () => {
// //     try {
// //         const response = await fetch('http://api.weatherapi.com/v1/forecast.json?key=e462a74ae043481191f171850240107&q=Antananarivo&days=7&aqi=no&alerts=no')
// //         const bodyData = await response.json();

// //         const cityElement = document.querySelector('.city-text');
// //         const dateElement = document.querySelector('.date-text');
// //         const bigIconElement = document.querySelector('.icon-big');
// //         const weatherElement = document.querySelector('#weather');
// //         const tempNowElement = document.querySelector('.temperature-now-text');


// //         cityElement.textContent = bodyData.location.name;
// //         dateElement.textContent = localtime(bodyData.location.localtime);
// //         bigIconElement.style.backgroundImage = `url(${bodyData.current.condition.icon})`;
// //         weatherElement.innerHTML = bodyData.current.condition.text;
// //         tempNowElement.textContent = bodyData.current.temp_c + "°";

// //         const nextDay = bodyData.forecast.forecastday.slice(1, 7);
// //         const foreCastDay = nextDay.map(day => {
// //             return {
// //                 dayOfWeek: day.date,
// //                 maxTemp: day.day.maxtemp_c,
// //                 minTemp: day.day.mintemp_c,
// //                 icon: day.day.condition.icon
// //             };
// //         });
// //         core(foreCastDay);

// //     } catch (error) {
// //         console.error('Error fetching weather data:', error);
// //     }
// // }
// // fetchResult();
// // setInterval(fetchResult, 60000);



// // const core = (forecastData) => {
// //     const weekDayBlock = document.querySelector('.weekDay-block');
// //     weekDayBlock.innerHTML = '';

// //     forecastData.forEach(day => {
// //         const dayDiv = document.createElement('div');
// //         dayDiv.className = 'day';

// //         const iconDiv = document.createElement('div');
// //         iconDiv.className = 'icon-small';
// //         const img = document.createElement('img');
// //         img.src = day.icon;
// //         img.alt = '';
// //         img.height = 50;
// //         iconDiv.append(img);

// //         // Day of week
// //         const weekDayDiv = document.createElement('div');
// //         weekDayDiv.className = 'weekDay';
// //         const weekDayP = document.createElement('p');
// //         weekDayP.className = 'text-weekDay';
// //         weekDayP.textContent = new Date(day.dayOfWeek).toLocaleDateString('en-US', { weekday: 'short' });
// //         weekDayDiv.append(weekDayP);

// //         // max temperatur
// //         const tempMaxDiv = document.createElement('div');
// //         tempMaxDiv.className = 'temperature-max';
// //         const tempMaxP = document.createElement('p');
// //         tempMaxP.className = 'temperature-max-text';
// //         tempMaxP.textContent = day.maxTemp + "°";
// //         tempMaxDiv.append(tempMaxP);

// //         // min temperatur
// //         const tempMinDiv = document.createElement('div');
// //         tempMinDiv.className = 'temperature-min';
// //         const tempMinP = document.createElement('p');
// //         tempMinP.className = 'text-weekDay';
// //         tempMinP.textContent = day.minTemp + "°";
// //         tempMinDiv.append(tempMinP);

// //         dayDiv.append(iconDiv, weekDayDiv, tempMaxDiv, tempMinDiv);
// //         weekDayBlock.append(dayDiv);
// //     });
// // };
