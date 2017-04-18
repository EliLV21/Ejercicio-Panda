var restaurar = document.getElementsByTagName("div");
var botonRestaurar = document.getElementById("reiniciar")
var elimPan1 = document.getElementById("eliminarPanda1");
var elimPan2 = document.getElementById("eliminarPanda2");
var elimPan3 = document.getElementById("eliminarPanda3");
var elimPan4 = document.getElementById("eliminarPanda4");
var fotoPanda1 = document.getElementById("panda1");
var fotoPanda2 = document.getElementById("panda2");
var fotoPanda3 = document.getElementById("panda3");
var fotoPanda4 = document.getElementById("panda4");
var text1 = document.getElementById("texto1");
var text2 = document.getElementById("texto2");
var ocultarIzq = document.getElementById("izquierda");
var ocultarDer = document.getElementById("derecha");


elimPan1.addEventListener("click",eliminar1);
elimPan2.addEventListener("click",eliminar2);
elimPan3.addEventListener("click",eliminar3);
elimPan4.addEventListener("click",eliminar4);
reiniciar.addEventListener("click",reiniciarTodo);
ocultarIzq.addEventListener("click",esconderIzq,"ondblclick",mostrarIzq);
ocultarDer.addEventListener("click",esconderDer,"ondblclick",mostrarDer);

function reiniciarTodo (){
  for(var i=0;i<restaurar.length;i++){
    restaurar[i].style.display = "block";
    }
};


function eliminar1(){
  fotoPanda1.style.display = "none";
};
function eliminar2(){
  fotoPanda2.style.display = "none";
};
function eliminar3(){
  fotoPanda3.style.display = "none";
};
function eliminar4(){
  fotoPanda4.style.display = "none";
};
function esconderIzq(){
  text1.style.visibility = "hidden";
};
function esconderDer(){
  text2.style.visibility = "hidden";
};
function mostrarIzq(){
  text1.style.display = "block";
};
function mostrarDer(){
  text2.style.display = "block";
};
