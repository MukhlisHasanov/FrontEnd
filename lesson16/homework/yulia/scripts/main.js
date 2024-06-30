/*Сделать страничку-таймер обратного отсчета. На страничке должно быть поле для ввода времени в секундах, 
кнопка "старт" и обратный отсчет должен начаться при нажатии на кнопку.
 Отсчет должен быть виден на страничке и обновляться каждую секунду. 
 По окончании отсчета должен появиться тест "время вышло", или звуковое оповещение, 
 таймер при этом должен остановиться.
*/

const nameTimer = document.querySelector('.name-application');
nameTimer.textContent = 'Countdown Timer App';

const inputSeconds = document.querySelector('.time-input');

const buttonElement = document.querySelector('.btn');

const callBackFunction = () => {

    const inputTime = inputSeconds.value;

    const countdownElement = document.querySelector('#countdown');
    countdownElement.textContent = inputTime;

    const timeoutElement = document.querySelector('#time-out');
    timeoutElement.textContent = '';
    const alertSound = document.querySelector('#alert-sound');

    // Check for negative or zero input
    if (isNaN(inputTime) || inputTime <= 0) {
        timeoutElement.textContent = 'Please enter a valid positive number of seconds.';
        timeoutElement.classList.remove('hidden');
        countdownElement.textContent = '';
        return;
    }
    timeoutElement.classList.add('hidden');
    countdownElement.textContent = inputTime;

    const intervalQ = (num, callback) => {
        let counter = num;
        const callbackModified = () => {
            if (counter > 0) {
                callback(counter);
                counter--;
            } else {
                clearInterval(intervalID);
                callback(0);
                timeoutElement.textContent = 'Time is out!';
                alertSound.play(); // Play sound
                timeoutElement.classList.remove('hidden');//очищение интервала
            }
        };
        const intervalID = setInterval(callbackModified, 1000);
        callbackModified();//вызывается сразу после установки интервала, 
        //чтобы избежать первоначальной задержки в одну секунду.
    }
    
    intervalQ(inputTime, (time) => {
        countdownElement.textContent = time;

    });

}

buttonElement.addEventListener('click', callBackFunction);