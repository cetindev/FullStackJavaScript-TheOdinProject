const fs = require('fs');

const save = function (data, filename) {
  fs.writeFileSync(filename, JSON.stringify(data));
}
const load = function (filename) {
  fs.readFileSync(filename);
}

module.exports = { save, load }