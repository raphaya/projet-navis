var content = document.getElementById('content'),
	$content = $(content);

var patate = function () {
	$.ajax({
		method: "get",
		url: 'http://localhost:8080/navis2/accueil.jsp',
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
		url: 'http://localhost:8080/navis2/galerie.jsp',
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
		url: 'http://localhost:8080/navis2/communaute.jsp',
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
		url: 'http://localhost:8080/navis2/jeu.jsp',
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