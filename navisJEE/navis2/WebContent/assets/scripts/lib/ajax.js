var irc = {};

(function ($) {
    "use strict";
    // ajout d'une fonction Ajax préparée à jQuery
    // myAjax attend un objet JavaScript en argument
    irc.ajax = function(p){


        if(typeof p != 'object'){
            return false;
        }
        p.url = (typeof p.url === 'string' ) ? p.url : '';
        var URL = "http://10.3.104.54/irc/" + p.url;

        var objAjax = {
            url: URL,
            data : p.data || {},
            type: p.method || 'post',
            dataType: p.dataType || 'json',
            xhrFields: {
                withCredentials: true
            },

            complete: function(xhr,status,msg){
                console.log("Requête bien envoyé");
            },
            success : function(donnees, textStatus){
                console.log("Réponse du serveur: tout est OK");
                if(typeof p.success === 'function') {
                    p.success(donnees);
                }
               
            },
            error: function(xhr, status, msgErreur){
                console.log("Une erreur de type 4xx ou 5xx ou timeout", status,  msgErreur);
               if(p.error){
                   p.error(donnees);
               }

            }
        };

        $.ajax(objAjax);
    };
}(jQuery));