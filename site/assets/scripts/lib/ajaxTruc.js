var content = document.getElementById('content'),
	$content = $(content);

var patate = function () {
	$.ajax({
		method: "get",
		url: 'views/accueil.html',
		success: function (html) {
			var $html = $(html),
				elem = $html.find(".content-ajax");
			$(content).html(html).show();
		}

	});
};

$('#btn-accueil').click(patate);



$('#btn-galerie').click(function () {
	$.ajax({
		method: "get",
		url: 'views/galerie.html',
		success: function (html) {
			var $html = $(html),
				elem = $html.find(".content-ajax");
			$(content).html(html).show();
		}
	});
});


$('#btn-communaute').click(function () {
	$.ajax({
		method: "get",
		url: 'views/communaute.html',
		success: function (html) {
			var $html = $(html),
				elem = $html.find(".content-ajax");
			$(content).html(html).show();
		}
	});
});

$('#btn-jeu').click(function () {
	$.ajax({
		method: "get",
		url: 'views/jeu.html',
		success: function (html) {
			var $html = $(html),
				elem = $html.find(".content-ajax");
			$(content).html(html).show();
		}
	});
});

$( document ).ready(function() {
  
  patate();



});