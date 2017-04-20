(function ($) {
	"use strict";

	var openPopinLog = document.querySelector('[data-action=open-popin-log]');
	var openPopinReg = document.querySelector('[data-action=open-popin-reg]');

	var btnConnect = document.getElementById('btn-connect');
	var btnRegister = document.getElementById('btn-register');
	var btnRecup = document.getElementById('btn-recovery');

	var formConnect = document.getElementById('form-connect');
	var formRegister = document.getElementById('form-register');
	var formRecup = document.getElementById('form-recup');

	openPopinLog.addEventListener("click", function () {
		formConnect.style.display = "block";
		formRegister.style.display = "none";
		formRecup.style.display = "none";
	});

	openPopinReg.addEventListener("click", function () {
		formConnect.style.display = "none";
		formRegister.style.display = "block";
		formRecup.style.display = "none";
	});

	$(btnConnect).click(function () {
		formConnect.style.display = "block";
		formRegister.style.display = "none";
		formRecup.style.display = "none";
	});

	$(btnRegister).click(function () {
		formConnect.style.display = "none";
		formRegister.style.display = "block";
		formRecup.style.display = "none";
	});

	$(btnRecup).click(function () {
		formRecup.style.display = "block";
		formConnect.style.display = "none";
		formRegister.style.display = "none";
	});
})(jQuery);
