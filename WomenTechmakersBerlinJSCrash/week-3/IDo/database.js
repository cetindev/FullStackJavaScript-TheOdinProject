const fs = require('fs')

const save = function (filename, data) {
  fs.writeFileSync(filename, JSON.stringify(data))
}

const load = function (filename, callback) {
  fs.readFileSync(filename, 'utf8', (err, file) => {
    callback(err, JSON.parse(file));
  })
}

module.exports = { save, load }
