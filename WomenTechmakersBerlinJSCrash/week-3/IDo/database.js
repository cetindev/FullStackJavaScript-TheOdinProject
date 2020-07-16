const fs = require('fs')

const save = function (filename, data) {
  fs.writeFileSync(filename, JSON.stringify(data))
}

const load = function (filename, callback) {
  s.readFileSync(filename, 'utf8', (file) => {
    callback(JSON.parse(file));
  })
}

module.exports = { save, load }
