const fetchResult = async () => {
    const response = await fetch('http://api.weatherapi.com/v1/forecast.json?key=e462a74ae043481191f171850240107&q=Antananarivo&days=7&aqi=no&alerts=no')
    const bodyData = await response.json();

    const cityElement = document.querySelector('.city-text');
    const dateElement = document.querySelector('.date-text');
    const bigIconElement = document.querySelector('.icon-big');
    const weatherElement = document.querySelector('#weather');
    const tempNowElement = document.querySelector('.temperature-now-text');


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

    for (let i = 0;  i < 7; i++) {
        
        
        
    }

}
fetchResult();