//console.log("Hola Mundo desde Archivo Externo Javascript..");

//let vinculo = document.querySelector('a');

/*Las variables y constantes no pueden contener el caracter [-] como lista-enlaces*/
/*const lista_enlaces = document.querySelectorAll('a');
  for (var i=0; i<lista_enlaces.length; i++){
   let elemento=lista_enlaces[i];
   console.log(elemento);
}*/

/*Otra forma como recorrer los NODOS
lista_enlaces.forEach(function(elemento){
  console.log("Elemento: " + elemento);
});*/

/*Ejemplo como agregar un manejador de evendo a los NODOS
const celdas = document.querySelectorAll('td');
celdas.forEach(function(td){
  td.addEventListener('click',function (){
    console.log(this);
  })
});*/

/*Ejemplo como bloquear acciondes predeterminada de los NODOS*/

const cerrar = document.querySelectorAll('.cerrar');
cerrar.forEach(function(items){
  items.addEventListener('click',function (evento){
    //estamos bloquenado la acción default del enlaces o tambien podemos ubicar => return false en vez de evento.preventDefault();
     evento.preventDefault();
    //Agregamos nuevas Acciones..
    let content = document.querySelector('.contenido');
    //Quitarle las clases de animación que ya tiene animated fadeInDown.
    content.classList.remove("fadeInDown");
    content.classList.remove("animated");
    //Agregar clases para animar su salida animated fadeOutUp
    content.classList.add("fadeOutUp");
    content.classList.add("animated");

    //Ejecuta el redireccionamiento despues que transacurra 1 minuto
    setTimeout(function(){
      location.href="/";
    },600);
  })
});
