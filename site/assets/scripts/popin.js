(function ($) {
    "use strict";
    var openPopinLog = document.querySelector('[data-action=open-popin-log]');
    var openPopinReg = document.querySelector('[data-action=open-popin-reg]');

    var btnConnect = document.getElementById('btn-connect');
    var btnRegister = document.getElementById('btn-register');
    var formConnect = document.getElementById('form-connect');
    var formRegister = document.getElementById('form-register');

    openPopinLog.addEventListener("click", function () {
        var popinContainer = document.querySelector('#tp-popin-container');
        popinContainer.style.display = "block";
        formConnect.style.display = "block";
        formRegister.style.display = "none";
    });

    openPopinReg.addEventListener("click", function () {
        var popinContainer = document.querySelector('#tp-popin-container');
        popinContainer.style.display = "block";
        formConnect.style.display = "none";
        formRegister.style.display = "block";
    });

    $('#btn-connect').click(function () {
        formConnect.style.display = "block";
        formRegister.style.display = "none";
    });

    $('#btn-register').click(function () {
        formConnect.style.display = "none";
        formRegister.style.display = "block";
    });

    var closePopin = document.querySelectorAll('[data-action=close-popin]');

    var close = function () {
        var popinContainer = document.querySelector('#tp-popin-container');
        popinContainer.style.display = "none";
    };
    
    for (var loop = 0; loop < closePopin.length; loop++) {
        closePopin[loop].addEventListener("click", close);
    }
})(jQuery);
