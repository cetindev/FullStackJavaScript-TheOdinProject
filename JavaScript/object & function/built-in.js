var arr1 = ['ada', 'yigit', 'sena', 'cınar'];

Array.prototype.remove = Array.prototype.remove || function (member) {
  var index = this.indexOf(member);
  if (index > -1) {
    this.splice(index, 1);
  }
  return this;
}

console.log(arr1.remove('sena'));