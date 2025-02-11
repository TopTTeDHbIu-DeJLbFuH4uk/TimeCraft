import express from 'express';
import path from 'path';

// const {Client} = require('pg');
// const client = new Client({
//     user: 'TopTTeDHbIu-DeJLbFuH4uk',
//     host: 'localhost',
//     database: 'tasks',
//     password: 'qwerty321',
//     port: 5432,
// });
// client.connect();

const PORT = 3000;
const app = express();

app.use(express.static('public'));
app.use(express.json());
app.listen(PORT, () => console.log(`SERVER STARTED ON PORT ${PORT}`));

let tasks = [];
let taskIds = [];

app.get('/', (req, res) => {
    res.sendFile(path.resolve('public/tasks.html'));
});

app.get('/tasks', (req, res) => {
    res.json(tasks);
});

app.get('/task-create', (req, res) => {
    res.sendFile(path.resolve('public/task-create.html'));
});

app.post('/task-create', (req, res) => {
    const addTimeAndIdToTask = {
        creationDatetime: new Date().toISOString(),
        id: taskIds.length + 1,
    }

    const task = {
        ...req.body.task,
        ...addTimeAndIdToTask,
    }
    tasks.push(task);
    taskIds.push(null);

    res.status(200).json(addTimeAndIdToTask);
});

app.delete('/tasks', (req, res) => {
    const {selectedTaskIds} = req.body;

    selectedTaskIds.forEach(id => {
        const index = tasks.findIndex(task => task.id === id);
        if (index !== -1) {
            tasks.splice(index, 1);
        }
    });

    res.status(200).json();
});