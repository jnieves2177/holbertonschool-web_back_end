// Implement a class named HolbertonCourse
export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  // Name getter/setter method
  set name(newName) {
    if (typeof newName !== 'string') {
      throw new TypeError('Name must be a string');
    } else {
      this._name = newName;
    }
  }

  get name() { return this._name; }

  // Length getter/setter method
  set length(newLength) {
    if (typeof newLength !== 'number') {
      throw new TypeError('Length must be a number');
    } else {
      this._length = newLength;
    }
  }

  get length() { return this._length; }

  // Students getter/setter method
  set students(arrOfStudents) {
    if (typeof arrOfStudents !== 'object') { throw new TypeError('Student array must be an array'); }
    for (const student of arrOfStudents) {
      if (typeof student !== 'string') { throw new TypeError('Students must only contain arrays'); }
    }
    this._students = arrOfStudents;
  }

  get student() { return this._students; }
}
