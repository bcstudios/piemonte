// Si quiere una introducción sobre la plantilla En blanco, vea la siguiente documentación:
// http://go.microsoft.com/fwlink/?LinkID=397704
// Para depurar código al cargar la página en cordova-simulate o en dispositivos o emuladores Android: inicie la aplicación, establezca puntos de interrupción 
// y ejecute "window.location.reload()" en la Consola de JavaScript.
(function () {
    "use strict";

    document.addEventListener( 'deviceready', onDeviceReady.bind( this ), false );

    function onDeviceReady() {
        // Controlar la pausa de Cordova y reanudar eventos
        document.addEventListener( 'pause', onPause.bind( this ), false );
        document.addEventListener( 'resume', onResume.bind( this ), false );
        
        // TODO: Cordova se ha cargado. Haga aquí las inicializaciones que necesiten Cordova.
        var parentElement = document.getElementById('deviceready');
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');
        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');
    };

    function onPause() {
        // TODO: esta aplicación se ha suspendido. Guarde els etado de la aplicación aquí.
    };

    function onResume() {
        // TODO: esta aplicación se ha reactivado. Restaure el estado de la aplicación aquí.
    };
})();

function slidetoggle() {
    var slider = document.getElementById("nav-slide");
    slider.style.height = window.innerHeight - 60 + "px";

    if (slider.style.left == "0%") {
        slider.style.left = "-100%";
    }
    else {
        slider.style.left = "0%";
    }

    var btn = document.getElementById("btn-menu");
    if (slider.style.left == "0%") {
        btn.style.background = "url(images/X.png) center center no-repeat";
        btn.style.backgroundSize = "70% 70%";
    }
    else {
        btn.style.background = "url(images/menu.png) center center no-repeat";
        btn.style.backgroundSize = "90% 90%";
    }

}

function slidetoggle1() {
    var slider = document.getElementById("nav-slide");
    slider.style.height = window.innerHeight - 60 + "px";

    if (slider.style.left == "0%") {
        slider.style.left = "-100%";
    }
    else {
        slider.style.left = "0%";
    }

    var btn = document.getElementById("btn-menu");
    if (slider.style.left == "0%") {
        btn.style.background = "url(images/X.png) center center no-repeat";
        btn.style.backgroundSize = "70% 70%";
    }
    else {
        btn.style.background = "url(images/menu.png) center center no-repeat";
        btn.style.backgroundSize = "90% 90%";
    }

}
