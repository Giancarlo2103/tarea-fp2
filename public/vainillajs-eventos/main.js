document.addEventListener("DOMContentLoaded" , function(){
  console.log("Estoy listo!!");

  var forms = document.querySelectorAll("form"); // Busqueda por etiquetas
  var form = forms[0]; //primera coincidencia //todos los arrays comienza desde cero.
  //ultimo elemetno de un array -1 .

  form.addEventListener('submit' , function(){
    event.preventDefault();

    var first_name = document.querySelectorAll("#first_name")[0].value;
    var last_name = document.querySelectorAll("#last_name")[0].value;

    var message = document.querySelectorAll("#message")[0];
    message.innerHTML =



  });
  console.log(form);
})


/*var elements = document.querySelectorAll("li");


for(var i = 0; i < elements.length; i = i +  1) {
  var element = elements[i];

  element.addEventListener("click", function(event)  {
    var el = event.target;
    console.log(el.innerHTML);


  });
}

})*/


/*var lista = document.querySelectorAll("ul")[0];

lista.addEventListener("click" ,function(event){
    var el = event.target;

      if (el.tagName.toLowerCase() === "li") {
        console.log("click en:" , el.innerHTML);
      }
    });
})*/
 //classlist me devuelve la lista de las clases classList.contains("nombre de class")
 // no se lo pongo directamente al elemento si no a su elemento padre (delegacion de eventos)
