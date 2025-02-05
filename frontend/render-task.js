const createTaskBtnEl = document.querySelector('.create-task-btn');
createTaskBtnEl.addEventListener('click', () => window.location.href = 'create-task.html');

const tableBodyEl = document.querySelector('.table-body');
const thEls = [...document.querySelectorAll('th')];
const message = document.querySelector('.message');

const renderTask = task => {
    const tr = document.createElement('tr');

    thEls.forEach((thEl, index) => {
        const td = document.createElement('td');

        if (index === 0) {
            const input = document.createElement('input');
            input.type = 'checkbox';
            input.classList.add('checkbox');

            tr.append(td);
            td.append(input);

        } else {
            const key = thEl.dataset.id;

            if (key === 'startDate') {
                td.innerText = `${task.startDate} ${task.startTime}`;
                tr.append(td);

            } else if (key === 'endDate') {
                td.innerText = `${task.endDate} ${task.endTime}`;
                tr.append(td);

            } else {
                td.innerText = task[key];
                tr.append(td);
            }
        }
    });
    tableBodyEl.append(tr);
};
const task = JSON.parse(localStorage.getItem('tasks'));

const getTask = () => {
    if (task === null) {
        message.classList.remove('hidden');
        return;
    }
    message.classList.add('hidden');

    task.forEach(task => renderTask(task));
};
getTask();