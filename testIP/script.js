// Функция для получения информации об IP-адресе
function getIPInfo() {
    fetch('https://ipinfo.io/json?token=<YOUR_ACCESS_TOKEN>')
        .then(response => response.json())
        .then(data => {
            document.getElementById('ip-info').innerHTML = `IP: ${data.ip} <br>
                                                            Location: ${data.city}, ${data.region}, ${data.country} <br>
                                                            ISP: ${data.org}`;
            // Вы можете записывать данные в базу данных или логировать их для дальнейшего анализа
            console.log(data);
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('ip-info').innerHTML = 'Error retrieving IP info';
        });
}

// Вызов функции
getIPInfo();
