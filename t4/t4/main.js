import Agenda from "./Agenda.js";
import Alumnos from "./Alumnos.js";

class Main {
  constructor() {
    let agenda = new Agenda(
      document.querySelector("#agenda")
    );

    document.querySelector("#btnAdd2").addEventListener("click", () => {
        if (form.checkValidity() === true) {
        agenda.addAlumnos(alumnos);
        }
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
