const fetchResult = async () => {
    const response = await fetch('http://api.weatherapi.com/v1/forecast.json?key=e462a74ae043481191f171850240107&q=Antananarivo&days=7&aqi=no&alerts=no');
    const bodyData = await response.json();

    const cityElement = document.querySelector('.city-text');
    const dateElement = document.querySelector('.date-text');
    const bigIconElement = document.querySelector('.icon-big');
    const weatherElement = document.querySelector('#weather');
    const tempNowElement = document.querySelector('.temperature-now-text');


    for (let n = 1; n < 7; n++) {

        const smallImg1 = document.querySelector(`#icon${n}`);
        smallImg1.src = bodyData.forecast.forecastday[n].day.condition.icon;

        const tempMax = document.querySelector(`#temp-max${n}`);
        tempMax.textContent = bodyData.forecast.forecastday[n].maxtemp_c;

        const tempMin = document.querySelector(`#temp-min${n}`);
        tempMin.textContent = bodyData.forecast.forecastday[n].mintemp_c;

        const weekDay = document.querySelector(`#day${n}`);
        weekDay.textContent = weekDayName(bodyData.forecast.forecastday[n].date);
    }

    function weekDayName(localWeekDay) {
        const date = new Date(dateStr.replace(' ', 'T'));
        const options = { weekday: 'long' };
        const longWeekdayName = new Intl.DateTimeFormat('en-US', options).format(date);
        const shortWeekdayName = longWeekdayName.substring(0, 3);
        return shortWeekdayName;
    }

    cityElement.textContent = bodyData.location.name;
    dateElement.textContent = localtime(bodyData.location.localtime);
    bigIconElement.style.backgroundImage = `url(${bodyData.current.condition.icon})`;
    weatherElement.innerHTML = bodyData.current.condition.text;
    tempNowElement.textContent = bodyData.current.temp_c + "°";

    console.log(bodyData.location.name);
    const v1 = bodyData.map(list => {

    })
    core(v1);

    function localtime(local_date) {
        const date = new Date(local_date.replace(' ', 'T'));
        const options = { weekday: 'long', month: 'long', day: '2-digit' };
        const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);
        return formattedDate;
    }

    const nextDay = bodyData.forecast.forecastday[1]
    const foreCastDay = day.map(day => {

    })

    for (let i = 0; i < 7; i++) {



    }

}
fetchResult();

// Обновлять страницу каждые 10 секунд (10000 миллисекунд)
setInterval(() => {
    location.reload();
}, 10000000);
