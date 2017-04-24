var content = document.getElementById('content'),
	$content = $(content);

$('#btn-galerie').click(function() {
	$.ajax({
		method : "get",
		url : 'http://localhost:8080/navis2/WEB-INF/galerie.jsp',
		success : function(html) {
			var $html =  $(html),
			elem = $html.find(".content-ajax");
		$(content).html(html).show();
	}
	})
});


$('#btn-accueil').click(function() {
	$.ajax({
		method : "get",
		url : 'http://localhost:8080/navis2/WEB-INF/accueil.jsp',
		success : function(html) {
			var $html =  $(html),
			elem = $html.find(".content-ajax");
		$(content).html(html).show();
	}
	})
});


$('#btn-communaute').click(function() {
	$.ajax({
		method : "get",
		url : 'http://localhost:8080/navis2/WEB-INF/communaute.jsp',
		success : function(html) {
			var $html =  $(html),
				elem = $html.find(".content-ajax");
			$(content).html(html).show();
		}
	})
});

$('#btn-jeu').click(function() {
	$.ajax({
		method : "get",
		url : 'http://localhost:8080/navis2/WEB-INF/jeu.jsp',
		success : function(html) {
			var $html =  $(html),
			elem = $html.find(".content-ajax");
		$(content).html(html).show();
		}
	})
});
