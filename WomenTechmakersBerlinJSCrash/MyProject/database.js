const fs = require('fs')

//Siparişlerin databaseleri
const save = function (filename, data) {
  fs.writeFileSync(filename, JSON.stringify(data));
}
const load = function (filename) {
  return JSON.parse(fs.readFileSync(filename, 'utf-8'))
}
//Siparişlerin databaseleri
const saveFood = function (filename, data) {
  fs.writeFileSync(filename, JSON.stringify(data));
}
const loadFood = function (filename) {
  return JSON.parse(fs.readFileSync(filename, 'utf-8'))
}



module.exports = { save, load, saveFood, loadFood }
