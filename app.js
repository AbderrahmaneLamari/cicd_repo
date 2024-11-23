const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello, CI/CD!');
});

app.get('/greet', (req, res) => {
    const name = req.query.name;
    if (!name) {
        return res.status(400).send('Bad Request');
    }
    res.send(`Hello, ${name}!`);
});

module.exports = app;