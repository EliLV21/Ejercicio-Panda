var elimPan1 = document.getElementById("eliminarPanda1");
var elimPan2 = document.getElementById("eliminarPanda2");
var elimPan3 = document.getElementById("eliminarPanda3");
var elimPan4 = document.getElementById("eliminarPanda4");
var fotoPanda1 = document.getElementById("panda1")
var fotoPanda2 = document.getElementById("panda2")
var fotoPanda3 = document.getElementById("panda3")
var fotoPanda4 = document.getElementById("panda4")

elimPan1.addEventListener("click",eliminar1);
elimPan2.addEventListener("click",eliminar2);
elimPan3.addEventListener("click",eliminar3);
elimPan4.addEventListener("click",eliminar4);


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
