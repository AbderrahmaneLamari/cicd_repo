const app = require('./app'); // Import the app
const request = require('supertest');

const TEST_PORT = 3001;

let server;

beforeAll(() => {
    server = app.listen(TEST_PORT, () => {
    });
});

afterAll(() => {
    server.close(() => {
    });
});

module.exports = { server };
