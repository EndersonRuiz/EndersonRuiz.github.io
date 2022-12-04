//funcion que me aplica el estilo a la opcion seleccionada en el muy quita la la previamente seleccionada
function seleccionar(link){
    var opciones = document.querySelectorAll("#links a");
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    opciones[4].className = "";
    link.className = "seleccionado";
    //acemos desaparecer el menu una vez que se a seleccionado una opcion en el modo responsive
    var x = document.getElementById("nav");
    x.className = "";
}
//funcion que muestra el munu responsivo
function responsiveMenu(){
    var x = document.getElementById("nav");
    if(x.className ===""){
        x.className = "responsive";
    }else{
        x.className = "";
    }
}

//detector del scrolling para aplicar la animacion de las barras de habilidades
window.onscroll = function(){
    efectoHabilidades()
}

//funcion que aplica la animacion de la barrade habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distacia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distacia_skills >=300){
        document.getElementById("html").classList.add("barra-progreso1");
        document.getElementById("js").classList.add("barra-progreso2");
        document.getElementById("bd").classList.add("barra-progreso3");
        document.getElementById("php1").classList.add("barra-progreso4");
    }
}