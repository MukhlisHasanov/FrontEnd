const mainHeader = document.createElement('h1');
mainHeader.textContent = 'Расчет идеального веса через Индекс Массы Тела (ИМТ)';
document.body.appendChild(mainHeader);

const paragraph1 = document.createElement('p');
document.body.appendChild(paragraph1);
paragraph1.textContent = 'На данной странице с помощью калькулятора ИМТ вы можете рассчитать свой показатель. Достаточно ввести вес и рост в поля ниже.'

const inputHeight = document.createElement('input');
const inputWeight = document.createElement('input');
document.body.appendChild(inputHeight);
document.body.appendChild(inputWeight);
inputHeight.placeholder = 'Рост (сантиметры)';
inputWeight.placeholder = 'Вес (сантиметры)';

const buttonСalculate = document.createElement('button');
document.body.appendChild(buttonСalculate);
buttonСalculate.textContent = 'Рассчитать';


const paragraph2 = document.createElement('p');
document.body.appendChild(paragraph2);
paragraph2.innerHTML = 'Расчёт индекса массы тела определяет в каком соотношении находятся вес и рост, калькулятор подходит для взрослых мужчин и женщин.<br><br>В таблице ниже можно посмотреть разъяснение показателей согласно рекомендациям Всемирной Организации Здравоохранения (ВОЗ):'

const data = [
    ['16 и менее', 'Выраженный дефицит массы тела'],
    ['16-18,5', 'Недостаточная (дефицит) масса тела'],
    ['18,5-24,9', 'Норма'],
    ['25-30', 'Избыточная масса тела (предожирение)'],
    ['30-35', 'Ожирение первой степени'],
    ['35-40', 'Ожирение второй степени'],
    ['40 и более', 'Ожирение третьей степени (морбидное)']
]

function createTable(data) {
    const table = document.createElement('table');
    table.border = '1';

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
document.body.appendChild(createTable(data));

const imageBodyFit = document.createElement('img');
imageBodyFit.setAttribute('src', './images/scale_2400.jpg');
document.body.appendChild(imageBodyFit);

const paragraph3 = document.createElement('p');
document.body.appendChild(paragraph3);
paragraph3.textContent = 'В частности, результат ИМТ является одним из факторов для выполнения бариатрической операции. Но стоит помнить, что результат носит рекомендательный характер. Перед принятием решения необходима консультация бариатрического хирурга. Для этого Вы можете оставить заявку или позвонить по телефону, указанному на сайте.'