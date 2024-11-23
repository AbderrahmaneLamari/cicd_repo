const request = require('supertest');
const app = require('../app'); // Import the app (server runs from testSetup)

describe('GET /', () => {
    test('should return "Hello, CI/CD!"', async () => {
        const response = await request(app).get('/');
        expect(200).toBe(200);
    });
});
