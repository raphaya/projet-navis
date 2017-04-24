var galerie = document.getElementById('content');
$('#btn-galerie').click(function() {
	$.ajax({
		method : "get",
		url : 'http://localhost:8080/navis/galerie.jsp',
		success : function(html) {
			$(galerie).load("../../../galerie.jsp");
			console.log(html);
			$(galerie).html(html);
		}
	})
});
