const titleEl = document.getElementById('title');
const descriptionEl = document.getElementById('description');

const startDateEl = document.getElementById('start-date');
const startTimeEl = document.getElementById('start-time');

const endDateEl = document.getElementById('end-date');
const endTimeEl = document.getElementById('end-time');

const inputEls = [...document.querySelectorAll('.input')];

const btnSaveEl = document.querySelector('.btn-save');
const btnCancelEl = document.querySelector('.btn-cancel');

const createTask = () => {

    const task = {
        name: '',
        description: '',
        startDate: '',
        startTime: '',
        endDate: '',
        endTime: '',
    };

    const inputValues = inputEls.map(inputEl => {
        return inputEl.value;
    });

    Object.keys(task).forEach((key, index) => {
        task[key] = inputValues[index];
    });
    database.push(task);
    console.log(database);


    resetInputs();
};

btnSaveEl.addEventListener('click', () => {
    const checkInputValue = inputEls.every(el => el.value);

    if (checkInputValue) {
        createTask();
    }
});

const resetInputs = () => {
    inputEls.forEach(inputEl => inputEl.value = '');
};

startDateEl.valueAsDate = new Date();
const now = new Date();
const hours = now.getHours().toString().padStart(2, '0');
const minutes = now.getMinutes().toString().padStart(2, '0');
startTimeEl.value = `${hours}:${minutes}`;