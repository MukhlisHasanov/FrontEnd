let todoList = [
];

const testItemInLocalStorage = localStorage.getItem("toDoItems");

if(testItemInLocalStorage) {
    todoList.push({ task: testItemInLocalStorage, done: false })
}

function core(arrList) {
    // выводим список объктов массива
    const list = document.querySelector('.list');

    list.innerHTML = ''; // очищаем старый массив

    const createElem = arrList.map(list => {
        const listItem = document.createElement('li');
        listItem.textContent = list.task;
        listItem.classList.add('list-item');
        if (list.done == true) {
            listItem.classList.add('list-item_done');
        }
        listItem.addEventListener('click', () => {
            if (list.done == false) {
                listItem.classList.add('list-item_done');
                list.done = true;
            } else if (list.done == true) {
                listItem.classList.remove('list-item_done');
                list.done = false;
            }
        });
        return listItem;
    });

    createElem.forEach(listItem => {
        list.appendChild(listItem);
    });
};
core(todoList);



// кнопка "Создать"
const btnCreate = document.querySelector('#create');
const inputTask = document.querySelector('.task-input');

const btnClickCreate = (evt) => {
    evt.preventDefault();
    console.log(evt.target);
    if(evt.target.classList[0] === 'btn') {
        console.log("Мы нашли кнопку с классом btn");
    }
    if(evt.target.textContent === 'Создать') {
        console.log("Мы нашли кнопку с текстом Создать");
    }
    const textFromInput = inputTask.value;
    todoList.unshift({ task: textFromInput, done: false });
    core(todoList);
    localStorage.setItem("toDoItems", inputTask.value);
}
btnCreate.addEventListener('click', btnClickCreate);




// Фильтры
const filter = document.querySelector('.status');

// Фильтр "все"
const btnAll = document.querySelector('#all');

const btnClickAll = () => {
    core(todoList);
}
btnAll.addEventListener('click', btnClickAll);


// Фильтр "выполненные"
const btnCompleted = document.querySelector('#completed');

const btnClickCompleted = () => {
    const filterCompleted = todoList.filter(task => task.done == true);
    core(filterCompleted);
}
btnCompleted.addEventListener('click', btnClickCompleted);



// Фильтр "невыполненные"
const btnUnCompleted = document.querySelector('#uncompleted');

const btnClickUCompleted = () => {
    const filterUnCompleted = todoList.filter(task => task.done == false);
    core(filterUnCompleted);
}
btnUnCompleted.addEventListener('click', btnClickUCompleted);

// switcher
