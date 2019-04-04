document.querySelector("#btnAdd").addEventListener("click", ()=>{
    let uCuenta = document.querySelector("#cuenta").value;
    let uNombre = document.querySelector("#nombre").value;

    //localStorage.removeItem("credenciales-2");
   let user = {
       cuenta : uCuenta,
       nombre : uNombre
   };

   let todos = [];
   let local = JSON.parse(localStorage.getItem("credenciales-2"));

   if(local != null) {
       todos = local;
   }

   console.log(todos);
   todos.push(user);
   localStorage.setItem("credenciales-2", JSON.stringify(todos));

})
