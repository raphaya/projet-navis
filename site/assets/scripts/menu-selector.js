(function($){
	"use strict";
	var btnAccueil = document.getElementById("btn-accueil");
	var btnJeu = document.getElementById("btn-jeu");
	var btnCommunaute = document.getElementById("btn-communaute");
	var btnGalerie = document.getElementById("btn-galerie");
	var videoAccueil = document.getElementById("video-accueil");

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
			videoAccueil.pause();
	});

	$(btnCommunaute).click(function(){
			$("#div-accueil").hide();
			$("#div-jeu").hide();
			$("#div-communaute").show();
			$("#div-communaute").css('max-height', (($(window).height()) - ($('#menu').height())));
			$("#div-galerie").hide();
			videoAccueil.pause();
	});

	$(btnGalerie).click(function(){
			$("#div-accueil").hide();
			$("#div-jeu").hide();
			$("#div-communaute").hide();
			$("#div-galerie").show();
			$("#div-galerie").css('max-height', (($(window).height()) - ($('#menu').height())));
			videoAccueil.pause();
	});
})(jQuery);