process.env.NODE_ENV = 'test';

const request = require('supertest');

const app = require('./app');


describe('Get /users/username information' , function() {
    test('gets a valid user information' , async function() {
        const resp = await request(app).get("/users/elie");
        expect(resp.statusCode).toBe(200);
        expect(resp.body).toEqual(({name : 'Elie Schoppik' , bio: 'Co-founder + Lead Instructor @rithmschool '}))
    })
})
 
describe('Check for error handling' , function () {
    test('returns a 404 status code for invalid user' , async function () {
        const resp = await request(app).get('/users/akdsjhffasdkf');
        expect(resp.statusCode).toBe(404);
    })
    test('Check for error message for uncreated bio', async function () {
        const resp = await request(app).get('/users/jacob');
        expect(resp.statusCode).toBe(200);
        expect(resp.body).toEqual(({name : 'jacob robbins' , bio : 'No Bio Created for jacob robbins'}))
    })
})
