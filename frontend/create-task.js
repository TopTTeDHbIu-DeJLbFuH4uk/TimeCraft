const inputEls = [...document.querySelectorAll('.input')];

const btnSaveEl = document.querySelector('.btn-save');
const btnCancelEl = document.querySelector('.btn-cancel');

const startDateEl = document.querySelector('.start-date');
const startTimeEl = document.querySelector('.start-time');

startDateEl.valueAsDate = new Date();
const now = new Date();
const hours = now.getHours().toString().padStart(2, '0');
const minutes = now.getMinutes().toString().padStart(2, '0');
startTimeEl.value = `${hours}:${minutes}`;

// localStorage.clear();

const clickHandlerCreateTask = task => {

    return new Promise((resolve) => {
        setTimeout(() => {
            const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

            task = {
                ...task,
                id: tasks.length + 1,
                creationDatetime: new Date().toISOString(),
            };

            tasks.push(task);

            localStorage.setItem('tasks', JSON.stringify(tasks));

            resolve({id: task.id, creationDatetime: task.creationDatetime});
        }, 200);
    });

};

btnSaveEl.addEventListener('click', () => {
    const task = {};

    inputEls.forEach(inputEl => {
        task[inputEl.id] = inputEl.value;
    });

    clickHandlerCreateTask(task).then(() => window.location.href = 'list-of-tasks.html');
});

btnCancelEl.addEventListener('click', () => history.back());