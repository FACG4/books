const test = require('tape');
const router = require('./router');
const supertest = require('supertest');
const handleWeather = require('./handler');



test('handlePublic ',(t) => {
supertest(router)
.post('/')
.expect(200)
.end((err, res) => {
t.error(err)
t.equal(res.statusCode, 200, 'Should return 200');
t.end();

});
});
