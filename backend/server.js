import express from 'express';
import path from 'path';

const PORT = 3000;
const app = express();

app.use(express.static('public'));
app.use(express.json());

const tasks = [];

app.get('/', (req, res) => {
    res.sendFile(path.resolve('public/tasks.html'));
});

app.get('/tasks', (req, res) => {
    res.json(tasks);
});

app.get('/task-create', (req, res) => {
    res.sendFile(path.resolve('public/task-create.html'));
});

app.listen(PORT, () => console.log(`SERVER STARTED ON PORT ${PORT}`));

app.post('/task-create', (req, res) => {
    req.body = {
        task: {
            ...req.body,
            creationDatetime: new Date().toISOString(),
            id: tasks.length + 1,
        }
    };

    tasks.push(req.body);

    res.status(200).json(req.body);
});