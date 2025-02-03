// document.addEventListener('DOMContentLoaded', () => {
//     const nameTaskFieldEl = document.querySelector('.name-task-field');
//     const descriptionFieldEl = document.querySelector('.description-field');
//
//     const startDateEl = document.querySelector('.start-date');
//     const startTimeEl = document.querySelector('.start-time');
//
//     const endDateEl = document.querySelector('.end-date');
//     const endTimeEl = document.querySelector('.end-time');
//
//     const contentInInputsEls = [...document.querySelectorAll('.content-in-input')];
//
//     const btnSaveEl = document.querySelector('.btn-save');
//     const btnCancelEl = document.querySelector('.btn-cancel');
//
//     const tableBodyEl = document.querySelector('.table-body');
//     console.log(tableBodyEl); // null
//
//     const currentDate = document.querySelector('.start-date');
//     currentDate.valueAsDate = new Date();
//
//     const currentTime = document.querySelector('.start-time');
//     const now = new Date();
//     const hours = now.getHours().toString().padStart(2, '0');
//     const minutes = now.getMinutes().toString().padStart(2, '0');
//     currentTime.value = `${hours}:${minutes}`;
//
//     const createTask = () => {
//         const nameTask = nameTaskFieldEl.value;
//         const description = descriptionFieldEl.value;
//         const startDate = startDateEl.value;
//         const endDate = endDateEl.value;
//
//         const tr = document.createElement('tr');
//         const th = document.createElement('th');
//         const input = document.createElement('input');
//
//         // tableBodyEl.append(tr);
//         // tr.append(th);
//
//         console.log('sdf')
//     };
//
//
//     btnSaveEl.addEventListener('click', () => {
//
//         const checkInputValue = contentInInputsEls.every(el => el.value);
//
//         if (checkInputValue) {
//             createTask();
//         }
//     });
// });


