// Seleccionando elementos por su clase
var cards = document.getElementsByClassName("card");
console.log(cards);

// Seleccionando elementos por su id
var tituloPrincipal = document.getElementById("titulo");
console.log(tituloPrincipal);

// Seleccionando el primer elemento que coincida con el selector
var card = document.querySelector(".card");
// Agregar clases a un elemento
card.classList.add("bg-success", "text-white");
// Eliminar clases a un elemento
card.classList.remove("text-white");
console.log(card.classList);
console.log(card);

var titulo = document.querySelector("#titulo");
// Modificando el texto del titulo
titulo.innerText = "<span>Hola JavaScript</span>";
// Modificando el HTML del titulo
titulo.innerHTML = "<span>Hola JavaScript</span>";

// Cambiando el CSS de un elemento
titulo.style.backgroundColor = "blue";
titulo.style.color = "white";
titulo.style.textTransform = "uppercase";
console.log(titulo);
console.log(titulo.innerText);

var elementoNoExiste = document.querySelector('.no-existe');
console.log(elementoNoExiste);

// Seleccionando todos los elementos que coincidan con el selector
var tarjetas = document.querySelectorAll(".card");
console.log(tarjetas);

var elementosNoExisten = document.querySelectorAll(".no-existe");
console.log(elementosNoExisten);

var subtitulo = document.querySelector("#subtitulo");
console.log(subtitulo);
// Elimina el elemento del DOM
subtitulo.remove();

// Eliminando un elemento desde el padre
var tarjetas = document.querySelector("#tarjetas");
console.log(tarjetas);
console.log(tarjetas.children);
tarjetas.removeChild(tarjetas.children[0]);

var contenedorLista = document.querySelector("nav ul");
var elementoLista = document.createElement("li");
elementoLista.innerText = "About";
contenedorLista.append(elementoLista);
