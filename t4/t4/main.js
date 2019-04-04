import Agenda from "./Agenda.js";
import Alumnos from "./Alumnos.js";

class Main {
  constructor() {
    let agenda = new Agenda(
      document.querySelector("#agenda")
    );

    document.querySelector("#btn2").addEventListener("click", () => {
      let numCuenta = document.querySelector("#cuenta").value;

      this.alumno.forEach( (e, index) => {
          if (e.cuenta == numCuenta) {
              alumnos.asistencias++;
      
              localStorage.setItem("alumnos", JSON.stringify(this.alumno));
              this._tabla.rows[index+1].cells[0].innerHTML = alumnos.cuenta;
              this._tabla.rows[index+1].cells[1].innerHTML = alumnos.nombre;
              this._tabla.rows[index+1].cells[2].innerHTML = alumnos.asistencias;
          }else{
              alert("El numero de cuenta no esta registrado");
          }
      });
  });
 

    document.querySelector("#btnAdd").addEventListener("click", () => {
      let form = document.querySelector("#form");

      if (form.checkValidity() === true) {
        let name = document.querySelector("#name").value;
        let cuenta = document.querySelector("#cuenta").value;

        let objAlumnos = {
          name: name,
          cuenta: cuenta
        };

        let alumnos = new Alumnos(objAlumnos);

        agenda.addAlumnos(alumnos);
      }

      form.classList.add("was-validated");
    });
  }
}

let m = new Main();
