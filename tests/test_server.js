const chai = require('chai');
const chaiHttp = require('chai-http');
chai.should();
chai.use(chaiHttp);

describe('Server Test', () => {
  let app;
  let server;

  beforeEach((done) => {
    delete require.cache[require.resolve('../index')];
    app = require('../index');
    server = app.listen(8080, done);
  });

  afterEach((done) => server.close(done));

  describe('GET homepage', () => {
    it('Should return 200', (done) => {
      chai.request(server)
        .get('/')
        .end((err, res) => {
          if (!err || !res) return done(err);
          err.should.have.status(200);
        });
    });
  });
});