export default class Alumnos {
  constructor(alumnos) {
    this._name = alumnos.name.toUpperCase();
    this._cuenta = alumnos.cuenta;
  }

  get name() {
    return this._name;
  }

  get cuenta() {
    return this._cuenta;
  }
}
