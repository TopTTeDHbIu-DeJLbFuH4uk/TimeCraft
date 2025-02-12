import express from 'express';
import path from 'path';
import pkg from 'pg';

const {Pool} = pkg;

const pool = new Pool({
    user: 'TopTTeDHbIu-DeJLbFuH4uk',
    host: 'localhost',
    database: 'tasks',
    password: 'qwerty321',
    port: 5432,
});
pool.connect()
    .then(client => {
        return client.query('SELECT 1 FROM tasks LIMIT 1;')
            .then(() => {
                console.log('Connected to PostgreSQL and table "tasks" is accessible');
                client.release();
            })
            .catch(err => {
                console.error('Error accessing "tasks" table:', err.stack);
                client.release();
            });
    })
    .catch(err => {
        console.error('Connection error', err.stack);
    });

const PORT = 3000;
const app = express();

app.use(express.static('public'));
app.use(express.json());

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

    const start_datetime = {
        start_datetime: `${req.body.task.startDate} ${req.body.task.startTime}`,
    };
    const end_datetime = {
        end_datetime: `${req.body.task.endDate} ${req.body.task.endTime}`,
    };

    try {
        const result = pool.query(`INSERT INTO tasks (title, description, start_datetime, end_datetime)
                                   VALUES ($1, $2, $3, $4) RETURNING id`,
            [req.body.task.title, req.body.task.description, start_datetime, end_datetime]
        );
        res.status(201).json(result);

    } catch (err) {
        console.log(err);
    }
});

app.delete('/tasks', (req, res) => {
    const {selectedTaskIds} = req.body;

    selectedTaskIds.forEach(id => {
        const index = tasks.findIndex(task => task.id === id);
        if (index !== -1) { // ?
            tasks.splice(index, 1);
        }
    });

    res.sendStatus(200);
});

app.listen(PORT, () => console.log(`SERVER STARTED ON PORT ${PORT}`));