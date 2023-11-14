
var audio;

//FUNCIÓN QUE OBLIGA A CARGAR EL JS DESPUÉS DE HABER CARGADO EL HTML
document.addEventListener("DOMContentLoaded", function () {

 // Capturo los eventos 
  audio = document.getElementById('miAudio');
 var botonIniciar = document.getElementById('iniciarAudio');
 var botonDetener = document.getElementById('DetenerAudio');
 var botonVolumen = document.getElementById('subirVolumen');

 // Función para iniciar audio
 botonIniciar.addEventListener('click',iniciarAudio);
   
  


 // Función para detener el audio
 botonDetener.addEventListener('click', pausarAudio); 

 // Función para subir volumen
 botonVolumen.addEventListener('click', subirAudio);
});//final función DOMContentLoaded



/**funciones  */
function iniciarAudio(){
    console.log('Iniciar audio');
    audio.play();
}

/**funciones  */
function pausarAudio(){
    console.log('Pausar audio');
    audio.pause();
   
}

/**funciones  */
function subirAudio(){
    console.log('Subir volumen');
    audio.volume = Math.min(1.0, audio.volume + 0.5);
  
}