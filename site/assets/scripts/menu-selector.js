(function($){
	"use strict";
	var btnAccueil = document.getElementById("btn-accueil");
	var btnJeu = document.getElementById("btn-jeu");
	var btnCommunaute = document.getElementById("btn-communaute");
	var btnGalerie = document.getElementById("btn-galerie");

	$(btnAccueil).click(function(){
			$("#div-accueil").show();
			$("#div-jeu").hide();
			$("#div-communaute").hide();
			$("#div-galerie").hide();
	});

	$(btnJeu).click(function(){
			$("#div-accueil").hide();
			$("#div-jeu").show();
			$("#div-communaute").hide();
			$("#div-galerie").hide();
	});

	$(btnCommunaute).click(function(){
			$("#div-accueil").hide();
			$("#div-jeu").hide();
			$("#div-communaute").show();
			$("#div-communaute").css('max-height', (($(window).height()) - ($("#bandeau").height())));
			$("#div-galerie").hide();
	});

	$(btnGalerie).click(function(){
			$("#div-accueil").hide();
			$("#div-jeu").hide();
			$("#div-communaute").hide();
			$("#div-galerie").show();
			$("#div-galerie").css('max-height', ($(window).height() - $("#bandeau").height()));
	});
})(jQuery);