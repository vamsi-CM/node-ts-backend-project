import request from 'supertest';

const url = 'http://localhost:6060';

describe('POST /users', () => {
  it('responds user logged in succesfully', done => {
    request(url)
      .post('/login')
      .send({ email: 'bulusu.vk08@gmail.com', pass: 'citymall' })
      .set('Accept', 'application/json')
      .expect(200)
      .then(response => {
        expect(response.body.msg).toBe('Logged in Succesfully');
        done();
      })
      .catch(err => done(err));
  });
});

describe('POST /login', () => {
  it('responds user credentials invalid', done => {
    request(url)
      .post('/login')
      .send({ email: 'xyz@gmail.com', pass: 'citymall' })
      .set('Accept', 'application/json')
      .expect(400)
      .then(response => {
        expect(response.body.msg).toBe('Invalid User Credentials/UnRegistered');
        done();
      })
      .catch(err => done(err));
  });
});

describe('POST /register', () => {
  it('responds user registration succesful', done => {
    request(url)
      .post('/register')
      .send({ email: 'xyz@gmail.com', pass: 'citymall' })
      .set('Accept', 'application/json')
      .expect(200)
      .then(response => {
        expect(response.body.msg).toBe('Registration Succesful');
        done();
      })
      .catch(err => done(err));
  });
});

describe('POST /login', () => {
  it('responds user logged in', done => {
    request(url)
      .post('/login')
      .send({ email: 'xyz@gmail.com', pass: 'citymall' })
      .set('Accept', 'application/json')
      .expect(200)
      .then(response => {
        expect(response.body.msg).toBe('Logged in Succesfully');
        done();
      })
      .catch(err => done(err));
  });
});
