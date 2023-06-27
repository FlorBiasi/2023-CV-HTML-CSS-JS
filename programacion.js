// NAV-BAR
var menu_visible = false;
let menu = document.getElementById("nav");
function mostrarOcultarMenu(){
    if(menu_visible==false) {    //si está oculto
        menu.style.display = "block";
        menu_visible = true;
    }
    else{
        menu.style.display = "none";
        menu_visible = false;
    }
}

//ocultar el menu una vez que se selecciona una opción

let links = document.querySelectorAll("nav a");
for(var x = 0; x <links.length;x++){
    links[x].onclick = function(){
        menu.style.display = "none";
        menu_visible = false;
    }
}

//barritas de una barra particular identificada por su id

function crearBarra(id_barra){
    for(i=0;i<=16;i++){
        let div = document.createElement("div");
        div.className = "e";
        id_barra.appendChild(div);
    }
}
//selecciono todas las barras generales para luego manipularlas
let html = document.getElementById("html");
crearBarra(html);
let javascript = document.getElementById("javascript");
crearBarra(javascript);
let figma = document.getElementById("figma");
crearBarra(figma);
let adobe = document.getElementById("adobe");
crearBarra(adobe);
let inkscape = document.getElementById("inkscape");
crearBarra(inkscape);
let photoshop = document.getElementById("photoshop");
crearBarra(photoshop);

/*voy a guardar la cantidad de barritas que se van a ir coloreando por cada barra de habilidad
para eso utilizo un arreglo, cada posiciòn pertenece a un elemento.
Comienzan en -1 porque no tiene ningun color al iniciarse*/
let contadores = [-1,-1,-1,-1,-1,-1];

//variable para saber si ya ejecutó la animación
let entro = false;

//función que aplica las animaciones de la habilidades

function efectoHabilidades(){
    var habilidades = document.getElementById("habilidades");
    var distancia_skills = window.innerHeight - habilidades.getBoundingClientRect().top;
    if(distancia_skills>=300 && entro==false){
        entro = true;
        const intervalHtml = setInterval(function(){
            pintarBarra(html, 16, 0, intervalHtml);
        },100);
        const intervalJavascript = setInterval(function(){
            pintarBarra(javascript, 11, 1, intervalJavascript);
        },100);
        const intervalFigma = setInterval(function(){
            pintarBarra(figma, 11, 2, intervalFigma);
        },100);
        const intervalAdobe = setInterval(function(){
            pintarBarra(adobe, 15, 3, intervalAdobe);
        },100);
        const intervalInkscape = setInterval(function(){
            pintarBarra(inkscape, 16, 4, intervalInkscape);
        },100);
        const intervalPhotoshop = setInterval(function(){
            pintarBarra(photoshop, 11, 5, intervalPhotoshop);
        },100);
    }
}

//coloreo una barra particular con la cantidad indicada
function pintarBarra(id_barra, cantidad, indice, interval){
    contadores[indice]++;
    x = contadores[indice];
    if(x < cantidad){
        let elementos = id_barra.getElementsByClassName("e");
        elementos[x].style.backgroundColor = "#AA0050";
    } else {
        clearInterval(interval)
    }
}

//detecto el scrolling del mouse para aplicar la animación de la barra
window.onscroll = function(){
    efectoHabilidades();
}