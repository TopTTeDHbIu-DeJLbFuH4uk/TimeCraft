import express from 'express';
import path from 'path';
import pkg from 'pg';

const { Pool } = pkg;

const pool = new Pool({
    user: 'TopTTeDHbIu-DeJLbFuH4uk',
    host: 'localhost',
    database: 'tasks',
    password: 'qwerty321',
    port: 5432,
});
pool.connect().then(() => {
    console.log('Connected to PostgreSQL and table "tasks" is accessible');
});

const PORT = 3000;
const app = express();

app.use(express.static('public'));
app.use(express.json());

app.get('/', (req, response) => {
    response.sendFile(path.resolve('public/tasks-tasks.html'));
});
app.get('/task-create', (req, response) => {
    response.sendFile(path.resolve('public/tasks-task-create.html'));
});
app.get('/task-edit', (req, response) => {
    response.sendFile(path.resolve('public/tasks-task-create.html'));
});
app.get('/task-details', (req, response) => {
    response.sendFile(path.resolve('public/tasks-task.html'));
});

app.get('/tasks', async (req, response) => {
    const { searchTerm: searchString } = req.query;
    if (searchString) {
        const searchTerm = `
            SELECT title,
                   description,
                   start_datetime,
                   end_datetime
            FROM tasks
            WHERE title ILIKE $1 OR description ILIKE $1
        ;`;

        const sortedResults = await pool.query(searchTerm, [`%${searchString}%`]);
        const tasks = sortedResults.rows;

        const res = tasks.map(task => convertToCamelCase(task));
        return response.status(200).json(res);
    }

    const { sortBy: value } = req.query;
    if (value) {
        const sortBy = `
            SELECT title,
                   description,
                   start_datetime,
                   end_datetime
            FROM tasks
            ORDER BY ${ value };
            ;`;

        const sortedValues = await pool.query(sortBy);
        const tasks = sortedValues.rows;

        const res = tasks.map(task => convertToCamelCase(task));
        return response.status(200).json(res);
    }

    if (req.query.id) {
        const taskId = req.query.id;
        const getTask = `
            SELECT id,
                   creation_datetime,
                   title,
                   description,
                   start_datetime,
                   end_datetime
            FROM tasks
            WHERE id = ($1)
        ;`;

        const getTaskRes = await pool.query(getTask, [ taskId ]);
        const task = getTaskRes.rows[0];

        const res = convertToCamelCase(task);
        return response.status(200).json(res);
    }

    const getTasks = `
        SELECT id,
               creation_datetime,
               title,
               description,
               start_datetime,
               end_datetime
        FROM tasks
    ;`;

    const getTasksRes = await pool.query(getTasks);
    const tasks = getTasksRes.rows;

    const res = tasks.map(task => convertToCamelCase(task))
    return response.status(200).json(res);
});

app.patch('/tasks', async (req, response) => {
    const taskId = req.query.id;

    const {
        title,
        description,
        startDatetime,
        endDatetime,
    } = req.body.task;

    const updateTask = `
        UPDATE tasks
        SET title          = $1,
            description    = $2,
            start_datetime = $3,
            end_datetime   = $4
        WHERE id = $5;
        ;`;

    await pool.query(updateTask, [
        title,
        description,
        startDatetime,
        endDatetime,
        taskId
    ]);
    response.sendStatus(200);
});

app.post('/tasks', async (req, response) => {
    const {
        title,
        description,
        startDatetime,
        endDatetime
    } = req.body.task;

    const creationDatetime = new Date().toISOString();

    const createTask = `
        INSERT INTO tasks (creation_datetime,
                           title,
                           description,
                           start_datetime,
                           end_datetime)
        VALUES ($1,
                $2,
                $3,
                $4,
                $5) RETURNING id, 
        creation_datetime
        ;`;

    const createTaskRes = await pool.query(createTask, [
        creationDatetime,
        title,
        description,
        startDatetime,
        endDatetime
    ]);

    const res = {
        id: createTaskRes.rows[0].id,
        creationDatetime: createTaskRes.rows[0].creation_datetime,
    };

    response.status(201).json(res);
});

app.delete('/tasks', async (req, response) => {
    const { selectedTaskIds } = req.body;
    const numericIds = selectedTaskIds.map(selectedTaskId => parseInt(selectedTaskId));

    const query = `
        DELETE
        FROM tasks
        WHERE id = ANY ($1)
        ;`;

    await pool.query(query, [ numericIds ]);
    response.sendStatus(200);
});

const convertToCamelCase = dataObject => {
    const transformedObject = {};

    for (let originalKey in dataObject) {
        const camelCaseKey = originalKey.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
        transformedObject[camelCaseKey] = dataObject[originalKey];
    }
    return transformedObject;
};

app.listen(PORT, () => console.log(`SERVER STARTED ON PORT ${ PORT }`));