import countdown from "../Menú de Hamburguesa/cuenta_regresiva.js";
import hamburgerMenu from "./menu_hamburguesa.js";
import responsiveMedia from "./responsive.js";
import {moveBall, shortcuts} from "./teclado.js";
import {digitalClock, alarm} from "./reloj.js";
import darkTheme from "./tema_oscuro.js";
import responsiveTester from "./prueba_responsive.js";
import userDeviceinfo from "./deteccion_dispositivos.js";
import networkStatus from "./deteccion_red.js";
import webCam from "./deteccion_webcam.js";
import getGeolocation from "./geolocalizacion.js";
import searchFilters from "./filtro_busquedas.js";
import draw from "./sorteo.js";
import slider from "./carrusel.js";
import scrollSpy from "./scroll_spy.js";
import smartVideo from "./video_inteligente.js";
import contactValidations from "./valadacion_formulario.js";
import speechReader from "./narrador.js";


const d = document;

d.addEventListener("DOMContentLoaded", (e)=>{
    hamburgerMenu(".panel-btn", ".panel", ".menu a");
    digitalClock("#reloj", "#activar", "#desactivar");
    alarm("assets/Samsung-Alarms.mp3","#activar-alarma", "#desactivar-alarma");
    countdown("countdown", "Sep 18, 2023 03:23:19", "feliz cumpleaños");
    responsiveMedia("youtube", 
    "(min-width: 1024px)", 
    `<a href="https://www.youtube.com/watch?v=6IwUl-4pAzc&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&index=91" target="blank">Ver video</a>`, 
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/6IwUl-4pAzc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
    );
    responsiveMedia("gmaps", 
    "(min-width: 1024px)", 
    `<a href="https://goo.gl/maps/Y5vgwPUEi2cdKien8" target="blank">Ver mapa</a>`, 
    `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21242.832648819138!2d-74.81276230142332!3d4.309901703491091!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f28ec56b93ad9%3A0x54c4e8779bd02184!2sParque%20Bolivar%2C%20Girardot!5e0!3m2!1ses!2sco!4v1674231281222!5m2!1ses!2sco" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
    );

    responsiveTester("responsive-tester");
    userDeviceinfo("user-device");
    webCam("webcam")
    getGeolocation("geolocation");
    searchFilters(".card-filter", ".card");
    draw("#winner-btn", ".player")
    slider();
    scrollSpy();
    smartVideo();
    contactValidations();
});

d.addEventListener("keydown",(e)=>{
    shortcuts(e);
    moveBall(e,".ball", ".stage");
});
darkTheme(".darkbtn", "dark-mode");
networkStatus();
speechReader();



