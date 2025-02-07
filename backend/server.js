import express from 'express';
import path from 'path';

const PORT = 5000;
const app = express();

app.use(express.static('public'));

app.get('/task-create', (req, res) => {
    res.sendFile(path.resolve('public/task-create.html'), (err) => {
        if (err) {
            console.log(path.resolve('public/task-create.html'));
            res.status(404).send('Файл не найден');
        }
    });
});

app.listen(PORT, () => console.log(`SERVER STARTED ON PORT ${PORT}`));
