import request from 'supertest';
import app from '../app.js';

describe('Books API', () => {
  it('should add a new book', async () => {
    const res = await request(app)
      .post('/books')
      .send({
        title: 'No Sweetness Here',
        author: 'Peter Mark',
        Year: 2013
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body.success).toBe(true);
  });

});