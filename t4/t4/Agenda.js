import Alumnos from "./Alumnos.js";

export default class Agenda {
  constructor(tableAgenda) {
    this._tableAgenda = tableAgenda;
    this.alumno = [];

    this._initTables();
  }

  _initTables() {
    let lsAlumnos = JSON.parse(localStorage.getItem("alumnos"));

    if (lsAlumnos === null) {
      return;
    }
    lsAlumnos.forEach( (e, index) => {
      this._addToTable(new Alumnos(e));
    });
  }

  _addToTable(alumnos) {
    let row = this._tableAgenda.insertRow(-1);

    let cellName = row.insertCell(0);
    let cellCuenta = row.insertCell(1);
    let cellAsistencia = row.insertCell(2);

    cellName.innerHTML = alumnos.name;
    cellCuenta.innerHTML = alumnos.cuenta;
    cellAsistencia.innerHTML = alumnos.asistencia;
    

    let objAlumnos = {
      name: alumnos.name,
      cuenta: alumnos.cuenta,
      
    };

    this.alumno.push(objAlumnos);
  }

  _findAlumnos(cuenta) {
    let foundAt = -1;

    this.alumno.forEach((e, index) => {
      if(e.cuenta === cuenta){
      foundAt = index;
      return;
      }
    });
    return foundAt;
  }

  addAlumnos(alumnos) {
    let found = this._findAlumnos(alumnos.cuenta);

    if (found >= 0) {
      Swal.fire({
        type: "error",
        title: "Error",
        text: "el usario ya esta registrado"
      });
      return;
    }

    this._addToTable(alumnos);
    localStorage.setItem("alumnos", JSON.stringify(this.alumno));
  }
}