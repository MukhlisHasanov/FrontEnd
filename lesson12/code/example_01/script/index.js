// Выделяем (находим) нужный нам элемент
const mainHeaderOfDoc = document.querySelector('.main-header');
console.log(mainHeaderOfDoc);

const textElement = document.querySelector('.text'); // находит только первый
// textElement.textContent = "Test of text";
const textElementAll = document.querySelectorAll('.text'); // находит все, создает NodeList (массив с урезанной функциональностью)
console.log([...textElementAll]); // превращаем в обычный массив спред оператором
console.log(textElementAll.length);



// Изменяем элемент //
mainHeaderOfDoc.textContent = "DOM - Document Object Model"; // для одного элемента текстовое содержимое

// а здесь для списка элементов (нод)
for (let i = 0; i < textElementAll.length; i++) {
    textElementAll[i].textContent = "Работаем в цикле";
}

// добавляем удаляем классы
mainHeaderOfDoc.classList.add('add-font-color');
mainHeaderOfDoc.classList.remove('main-header');

// Добавляем элементы
const testLinkElement = document.createElement('a');
testLinkElement.href = 'http://google.com';
testLinkElement.textContent = 'Cсылка на Гугл';
textElement.append(testLinkElement);


// Удаляем элемент
// mainHeaderOfDoc.remove(); // удаляем полностью
// textElement.textContent = '';

// Работаем с кнопкой
const buttonElement = document.querySelector('#test-button');

// input тоже используем
const inputElement = document.querySelector('#test-input');


const btnClickHandler = () => {
    console.log('Button Click!!!');
    const textFromInput = inputElement.value;
    mainHeaderOfDoc.textContent = `Мы ввели в инпут ${textFromInput}`;
}

buttonElement.addEventListener('click', btnClickHandler);
