// iniciar AOS 


  AOS.init();


// ocultar y mostrar menual scrolear 

let ubicacionPrincipal = window.pageYOffset;

window.addEventListener('scroll', function(){
    let desplazamientoActual = window.pageYOffset;

    if(ubicacionPrincipal >= desplazamientoActual){
        document.getElementsByTagName("nav")[0].style.top = '0px';
    }else{
        document.getElementsByTagName("nav")[0].style.top = '-100px';
    }
    ubicacionPrincipal = desplazamientoActual;

})

// menu hamburguesa 

let enlacesHeader = document.querySelectorAll('.enlaces-header')[0];
let semaforo = true;

document.querySelector('.hamburguer').addEventListener('click', function(){
    if(semaforo){
        document.querySelector('.hamburguer').style.color = '#fff';
        semaforo = false;
    }else{
        document.querySelector('.hamburguer').style.color = '#000';
        semaforo = true;
    }

    enlacesHeader.classList.toggle('menuDos');
})

