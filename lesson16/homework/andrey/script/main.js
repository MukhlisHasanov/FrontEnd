const ourButton = document.querySelector('#start');
const messageElement = document.querySelector('#message');
ourButton.addEventListener('click', startCountDown);
const audio = new Audio("./sound/lesson16_timers_homework_sounds_timer-bell.mp3");

const inputELement = document.querySelector('#time');
let countdown;

function startCountDown() {
    messageElement.textContent = '';
    clearInterval(countdown);
    let time = parseInt(inputELement.value);

    if (isNaN(time) || time <= 0) {
        alert('Please enter a correct number');
        return;
    }

    countdown = setInterval(() => {
        time--;
        inputELement.value = time;
    
        if(time <= 0) {
            clearInterval(countdown);
            messageElement.textContent = 'Time over';
            audio.play();
        }
    }, 1000);
} 