const mainHeader = document.createElement('h1');
mainHeader.textContent = 'Расчет идеального веса через Индекс Массы Тела (ИМТ)';
document.body.appendChild(mainHeader);

const paragraph1 = document.createElement('p');
document.body.appendChild(paragraph1);
paragraph1.textContent = 'На данной странице с помощью калькулятора ИМТ вы можете рассчитать свой показатель. Достаточно ввести вес и рост в поля ниже.'

const inputHeight = document.createElement('input');
const inputWeight = document.createElement('input');
inputHeight.setAttribute('type', 'number');
inputWeight.setAttribute('type', 'number');
inputHeight.setAttribute('id', 'height');
inputWeight.setAttribute('id', 'weight');
inputHeight.placeholder = 'Рост (сантиметры)';
inputWeight.placeholder = 'Вес (сантиметры)';
document.body.appendChild(inputHeight);
document.body.appendChild(inputWeight);

const buttonCalculate = document.createElement('button');
buttonCalculate.textContent = 'Рассчитать';
buttonCalculate.addEventListener('click', calculateBMI);
document.body.appendChild(buttonCalculate);

const paragraph2 = document.createElement('p');
paragraph2.innerHTML = 'Расчёт индекса массы тела определяет в каком соотношении находятся вес и рост, калькулятор подходит для взрослых мужчин и женщин.<br><br>В таблице ниже можно посмотреть разъяснение показателей согласно рекомендациям Всемирной Организации Здравоохранения (ВОЗ):'
document.body.appendChild(paragraph2);

const data = [
    ['16 и менее', 'Выраженный дефицит массы тела'],
    ['16-18,5', 'Недостаточная (дефицит) масса тела'],
    ['18,5-24,9', 'Норма'],
    ['25-30', 'Избыточная масса тела (предожирение)'],
    ['30-35', 'Ожирение первой степени'],
    ['35-40', 'Ожирение второй степени'],
    ['40 и более', 'Ожирение третьей степени (морбидное)']
]
const bmiTable = createTable(data);
document.body.appendChild(bmiTable);

const imageBodyFit = document.createElement('img');
imageBodyFit.setAttribute('src', './images/scale_2400.jpg');
imageBodyFit.setAttribute('alt', 'Изображение ИМТ');
imageBodyFit.style.width = '100%';
imageBodyFit.style.maxWidth = '600px';
document.body.appendChild(imageBodyFit);

const paragraph3 = document.createElement('p');
paragraph3.textContent = 'В частности, результат ИМТ является одним из факторов для выполнения бариатрической операции. Но стоит помнить, что результат носит рекомендательный характер. Перед принятием решения необходима консультация бариатрического хирурга. Для этого Вы можете оставить заявку или позвонить по телефону, указанному на сайте.'
document.body.appendChild(paragraph3);

const resultElement = document.createElement('div');
document.body.appendChild(resultElement);
resultElement.setAttribute('id', 'result');
resultElement.innerHTML = 'Тут будет результат: <br></br>';

function createTable(data) {
    const table = document.createElement('table');
    table.setAttribute('border', '1');

    data.forEach((row, index) => {
        const tr = document.createElement('tr');
        row.forEach(cell => {
            const tag = index === 0 ? 'th' : 'td';
            const td = document.createElement(tag);
            td.textContent = cell;
            tr.appendChild(td);
        });
        table.appendChild(tr);
    });
    return table;
}
// document.body.appendChild(createTable(data));


function calculateBMI() {
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);

    if (isNaN(weight) || isNaN(height)) {
        alert('Пожалуйста, введите рост и вес');
        return;
    }

    // Сантиметров в метры
    const heightMeters = height / 100;

    // Вычисляем ИМТ
    const bmi = weight / (heightMeters * heightMeters);

    // Округляем ИМТ до двух знаков после запятой
    const bmiRounded = bmi.toFixed(2);


    let bmiCategory;
    if (bmi < 16) {
      bmiCategory = 'Выраженный дефицит массы тела';
    } else if (bmi >= 16 && bmi < 18.5) {
      bmiCategory = 'Недостаточная (дефицит) масса тела';
    } else if (bmi >= 18.5 && bmi < 25) {
      bmiCategory = 'Норма';
    } else if (bmi >= 25 && bmi < 30) {
      bmiCategory = 'Избыточная масса тела (предожирение)';
    } else if (bmi >= 30 && bmi < 35) {
      bmiCategory = 'Ожирение первой степени';
    } else if (bmi >= 35 && bmi < 40) {
      bmiCategory = 'Ожирение второй степени';
    } else {
      bmiCategory = 'Ожирение третьей степени (морбидное)';
    }

    resultElement.innerHTML = `<h3>Ваш ИМТ: ${bmiRounded}</h3><p>Оценка состояния: ${bmiCategory}</p>`;
}



