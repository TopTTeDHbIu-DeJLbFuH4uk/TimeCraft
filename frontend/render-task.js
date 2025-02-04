const createTaskBtnEl = document.querySelector('.create-task-btn');
createTaskBtnEl.addEventListener('click', () => window.location.href = 'create-task.html');

const tableBodyEl = document.querySelector('.table-body');
const thEls = [...document.querySelectorAll('.table-header > th')];

const renderTask = () => {
    const task = JSON.parse(localStorage.getItem('tasks'));

    const tr = document.createElement('tr');
    tableBodyEl.append(tr);

    thEls.forEach((thEl, index) => {
        if (thEl[index] === 0) {
            const th = document.createElement('th');
            const input = document.createElement('input');
        }
        const th = document.createElement('th');
        tr.append(th)
    });

};
renderTask();