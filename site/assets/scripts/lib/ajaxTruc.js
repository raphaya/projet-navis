(function ($) {
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

		$.ajax({
			method: 'get',
			dataType: "json",
			url: 'assets/content/galerie.json',
			success: function () { console.log("youpi json"); },
			error: function (xhr, status) { console.log(status); }
		});

		$.getJSON('assets/content/galerie.json', function (data) {
			$.each(data, function (index, d) {
				$('#contenu-galerie').append('<tr><td class="ship">' + d.img + '</td>' + '<td class="description"><div class="titre">' + d.titre + '</div>' + d.texte + '</td></tr>');
			});
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

		$.ajax({
			method: 'get',
			dataType: "json",
			url: 'assets/content/communaute.json',
			success: function () { console.log("youpi json"); },
			error: function (xhr, status) { console.log(status); }
		});

		$.getJSON('assets/content/communaute.json', function (data) {
			var i = 1;
			$.each(data, function (index, d) {
				$('#contenu-commu').append('<tr><td class="col-xs-2">' + i + '</td><td class="col-xs-8">' + d.name + '</td><td class="col-xs-2">' + d.score + '</td></tr>');
				i++;
			});
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

	$(document).ready(function () {
		patate();
	});

})(jQuery);