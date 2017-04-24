(function ($) {
	$('#fermeChat').click(function () {
		let chat = document.getElementById("lechat");
		let corps = document.getElementById("corps");
		if (chat.style.display == 'none') {
			chat.style.display = 'block';
			corps.className = 'col-lg-10 col-md-10 col-sm-10';

		}
		else {
			chat.style.display = 'none';
			corps.className = 'col-lg-12 col-md-12 col-sm-12';
		}
	})

	var $room = $('#room');

	$('#input-room').on("submit", function (e) {
		var $msg = $('#message'),
			html = '';

		//	irc.ajax({
		//			data: {
		//				message : $msg.val()
		//			},
		//			url : 'messages.php'
		//		});
		console.log($msg.val(), $msg);
		html += "<div>";
		html += "<span class='name'>moi : </span>";
		html += "<span class='message'>" + $msg.val() + "</span>";
		html += "</div";
		$room.find('.content').append(html);

		$('#message').val("");
		e.stopPropagation();
		e.preventDefault();
	});

	function discution(user, message, date) {
		$content = $('.content'),

			html = "<div>";
		html += "<span class='name'>" + user + " a </span>";
		html += "<span class='name'>" + date + " --> </span>";
		html += "<span class='message'>" + message + "</span>";
		html += "</div";

		$content.append(html);

	}

	// setInterval(function () {
	// 	var html = '';
	// 	irc.ajax({
	// 		method: 'get',
	// 		url: 'messages.php',

	// 		success: function (donnees) {
	// 			console.log(donnees);

	// 			if (donnees.data.length > 0) {
	// 				discution(donnees.data[0].user,
	// 					donnees.data[0].text,
	// 					donnees.data[0].date);
	// 			}
	// 		}
	// 	});


	// }, 5000);

})(jQuery);

