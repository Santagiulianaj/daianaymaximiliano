window.onload = function(){
    var contenedor = document.getElementById('contenedor_carga');

    contenedor.style.visibility = 'hidden';
    contenedor.style.opacity= '0';

    var contenerUno = document.getElementById('contenedor-1');
    contenerUno.style.display = 'block';

}

var audio = new Audio('cancion.mp3');

function continuar() {
    var contenerUno = document.getElementById('contenedor-1');

    contenerUno.style.display = 'none';

    
    var contenerDos = document.getElementById('contenedor-2');
    contenerDos.style.display = 'block';

    audio.play();

    var videoLoad = document.getElementById('video');
    videoLoad.setAttribute('preload', '');

}

function playPause() {
    if (audio.paused)
        audio.play();
    else
        audio.pause();
        audio.currentTime = 0;
}
function pauseMusic() {
    audio.pause();
    audio.currentTime = 0;
}
