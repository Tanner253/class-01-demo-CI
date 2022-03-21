'use strict';


const supertest = require('supertest');
const app = require('../server/app.js');
const request = supertest()

describe('Testing HTTP API', () => {
  it('Respond wit a status 200 to a GET req to the /hello route', async () => {
    const response = await request.get('/hello');

    expect(reponse.status).toEqual(200);
  });
})