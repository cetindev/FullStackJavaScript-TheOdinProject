const Nightmare = require('nightmare')
const assert = require('assert')

describe('Load a Page', function () {
  // Recommended: 5s locally, 10s to remote server, 30s from airplane ¯\_(ツ)_/¯
  this.timeout('30s')

  let nightmare = null
  beforeEach(() => {
    nightmare = new Nightmare({ show: true })
  })

  describe('/ (Home Page)', () => {
    it('should load without error', done => {
      nightmare.goto('http://localhost:8080')
        .end()
        .then(function (result) { done() })
        .catch(done)
    })
  })
})