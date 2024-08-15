const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
const server = require('../server.js');

chai.use(chaiHttp);

suite('Functional Tests', () => {

  test('Translation with text and locale fields: POST request to /api/translate', (done) => {
    chai
      .request(server)
      .keepOpen()
      .post('/api/translate')
      .send({
        locale: 'american-to-british',
        text: 'Mangoes are my favorite fruit.'
      })
      .end((err, res) => {
        assert.equal(res.status, 200);
        assert.hasAllDeepKeys(res.body, ['text', 'translation']);
        assert.deepEqual(res.body, {
          text: 'Mangoes are my favorite fruit.',
          translation: 'Mangoes are my <span class="highlight">favourite</span> fruit.'
        });
        done();
      })
  })
  test('Translation with text and invalid locale field: POST request to /api/translate', (done) => {
    chai
      .request(server)
      .keepOpen()
      .post('/api/translate')
      .send({
        locale: 'invalid',
        text: 'The parking lot was full.'
      })
      .end((err, res) => {
        assert.equal(res.status, 200);
        assert.hasAllDeepKeys(res.body, ['error']);
        assert.deepEqual(res.body, { error: 'Invalid value for locale field' });
        done();
      })
  })
  test('Translation with missing text field: POST request to /api/translate', (done) => {
    chai
      .request(server)
      .keepOpen()
      .post('/api/translate')
      .send({
        locale: 'american-to-british'
      })
      .end((err, res) => {
        assert.equal(res.status, 200);
        assert.hasAllDeepKeys(res.body, ['error']);
        assert.deepEqual(res.body, { error: 'Required field(s) missing' });
        done();
      })
  })
  test('Translation with missing locale field: POST request to /api/translate', (done) => {
    chai
      .request(server)
      .keepOpen()
      .post('/api/translate')
      .send({
        text: 'Missing the locale field.'
      })
      .end((err, res) => {
        assert.equal(res.status, 200);
        assert.hasAllDeepKeys(res.body, ['error']);
        assert.deepEqual(res.body, { error: 'Required field(s) missing' });
        done();
      })
  })
  test('Translation with empty text: POST request to /api/translate', (done) => {
    chai
      .request(server)
      .keepOpen()
      .post('/api/translate')
      .send({
        locale: 'american-to-british',
        text: ''
      })
      .end((err, res) => {
        assert.equal(res.status, 200);
        assert.hasAllDeepKeys(res.body, ['error']);
        assert.deepEqual(res.body, { error: 'No text to translate' });
        done();
      })
  })
  test('Translation with text that needs no translation: POST request to /api/translate', (done) => {
    chai
      .request(server)
      .keepOpen()
      .post('/api/translate')
      .send({
        locale: 'american-to-british',
        text: 'Looking good.'
      })
      .end((err, res) => {
        assert.equal(res.status, 200);
        assert.hasAllDeepKeys(res.body, ['text', 'translation']);
        assert.deepEqual(res.body, { text: 'Looking good.', translation: 'Everything looks good to me!' });
        done();
      })
  })
});
