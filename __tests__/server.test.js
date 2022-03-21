'use strict';


const supertest = require('supertest');
const app = require('../server/app.js');
const request = supertest(app)

describe('Testing HTTP API', () => {
  it('Respond wit a status 200 to a GET req to the /hello route', async () => {
    const response = await request.get('/hello');

    expect(response.status).toEqual(200);
  });
})