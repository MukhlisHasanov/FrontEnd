// /**  Сделать страничку-таймер обратного отсчета. 
//  * На страничке должно быть поле для ввода времени в секундах, 
//  * кнопка "старт" и обратный отсчет должен начаться при нажатии на кнопку. 
//  * Отсчет должен быть виден на страничке и обновляться каждую секунду. 
//  * По окончании отсчета должен появиться тест "время вышло", или звуковое оповещение, таймер при этом должен остановиться. 
//  */

const timer = document.createElement('h1');
timer.innerHTML = 'Таймер обратного отсчета';
const mainHead = document.querySelector('.mainHead')
mainHead.appendChild(timer);

const inputTime = document.createElement('input');
inputTime.setAttribute('type', 'number');
inputTime.setAttribute('id', 'time');
inputTime.placeholder = 'Введите время в секундах';
const container = document.querySelector('.container')
container.appendChild(inputTime);

const outputError = document.createElement('div');
outputError.setAttribute('id', 'outError');
const errorText = document.querySelector('.error')
errorText.appendChild(outputError);

const box = document.querySelector('.box')
const timerTime = document.querySelector('.timer')
const outputTime = document.createElement('div','<br>');
outputTime.setAttribute('id', 'outTime');
timerTime.appendChild(outputTime);

// const bomb = document.createElement('img');
// bomb.setAttribute('src', "./photo/bomb.png");
// bomb.setAttribute('id', "photoBomb");
// document.body.appendChild(bomb);

const buttonStart = document.createElement('button');
buttonStart.textContent = 'Старт';
buttonStart.setAttribute('id', 'btnStart');
buttonStart.addEventListener('click', startBomb); // Write a fucntion
box.appendChild(buttonStart);

const buttonStop = document.createElement('button');
buttonStop.textContent = 'Стоп';
buttonStop.setAttribute('id', 'btnStop');
buttonStop.addEventListener('click', stopBomb); // Write a fucntion
box.appendChild(buttonStop);

const button1 = document.createElement('button');
button1.textContent = '1 мин';
button1.setAttribute('id', 'btn1');
button1.addEventListener('click', bomb1min); // Write a fucntion
box.appendChild(button1);

const button2 = document.createElement('button');
button2.textContent = '2 мин';
button2.setAttribute('id', 'btn2');
button2.addEventListener('click', bomb2min); // Write a fucntion
box.appendChild(button2);

const button3 = document.createElement('button');
button3.textContent = '3 мин';
button3.setAttribute('id', 'btn3');
button3.addEventListener('click', bomb3min); // Write a fucntion
box.appendChild(button3);

const buttonReset = document.createElement('button');
buttonReset.textContent = 'Сбросить';
buttonReset.setAttribute('id', 'btnReset');
buttonReset.addEventListener('click', resetBomb); // Write a fucntion
box.appendChild(buttonReset);

const buttonUp = document.createElement('button');
buttonUp.textContent = '+10 сек';
buttonUp.setAttribute('id', 'btnUp');
buttonUp.addEventListener('click', bombTimeUp); // Write a fucntion
box.appendChild(buttonUp);

const buttonDown = document.createElement('button');
buttonDown.textContent = '-10 сек';
buttonDown.setAttribute('id', 'btnDown');
buttonDown.addEventListener('click', bombTimeDown); // Write a fucntion
box.appendChild(buttonDown);

let countdownTimer;
let isRunning = false;
let remainingSeconds = 0;

function startBomb() {
    // if (inputTime.value === '') {
    //     outputError.textContent = 'Enter correct time'
    // } else
     if (!isRunning) {
        outputError.textContent = '';
            isRunning = true;
            if (remainingSeconds === 0) {
                remainingSeconds = parseInt(inputTime.value);
            }
            countdownTimer = setInterval(() => {
                remainingSeconds--;
                outputTime.innerHTML = remainingSeconds;
                if (remainingSeconds < 0) {
                    clearInterval(countdownTimer);
                    isRunning = false;
                    remainingSeconds = 0;
                    outputTime.innerHTML = 'Time is OVER!!!'
                }
            }, 1000);
        }
        inputTime.value = '';
}

function stopBomb() {
    clearInterval(countdownTimer);
    isRunning = false;
}

function resetBomb() {
    clearInterval(countdownTimer);
    inputTime.value = '';
    outputTime.innerHTML = '';
    isRunning = false;
    remainingSeconds = 0;
}

function bomb1min() {
    clearInterval(countdownTimer);
    inputTime.value = '';
    outputTime.innerHTML = '';
    isRunning = false;
    remainingSeconds = 0;

    remainingSeconds = parseInt(inputTime.value = 60);
    outputTime.innerHTML = remainingSeconds;
}

function bomb2min() {
    clearInterval(countdownTimer);
    inputTime.value = '';
    outputTime.innerHTML = '';
    isRunning = false;
    remainingSeconds = 0;

    remainingSeconds = parseInt(inputTime.value = 120);
    outputTime.innerHTML = remainingSeconds;
}

function bomb3min() {
    clearInterval(countdownTimer);
    inputTime.value = '';
    outputTime.innerHTML = '';
    isRunning = false;
    remainingSeconds = 0;

    remainingSeconds = parseInt(inputTime.value = 180);
    outputTime.innerHTML = remainingSeconds;
}

function bombTimeUp() {
    remainingSeconds += 11; // не знаю почему теряется 1
    remainingSeconds--;
    outputTime.innerHTML = remainingSeconds;
}

function bombTimeDown() {
    remainingSeconds -= 9; // не знаю почему теряется 1
    remainingSeconds--;
    outputTime.innerHTML = remainingSeconds;
}