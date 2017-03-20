(function($){
    "use strict";
    var openPopin = document.querySelector('[data-action=open-popin]');

    openPopin.addEventListener("click", function() {
        var popinContainer = document.querySelector('#tp-popin-container');
        popinContainer.style.display = "block";
    });

    var closePopin = document.querySelectorAll('[data-action=close-popin]');

    var close = function(){
        var popinContainer = document.querySelector('#tp-popin-container');
        popinContainer.style.display = "none";
    };

    for(var loop = 0;loop < closePopin.length;loop++){
        closePopin[loop].addEventListener("click",close);
    }
})(jQuery);
