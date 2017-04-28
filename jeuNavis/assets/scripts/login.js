(function ($) {

    $('#form-connect').on("submit", function (e) {

        var $login = $('#pseudo-co'),
            $password = $('#mdp-co'),
            html = '',
            login = $login.val(),
            password = $password.val();

        var $nameContainer = $('#pseudolabel'),
            $pwdContainer = $('#mdplabel');

        var regexLogin = new RegExp('^[a-zA-Z]{1,}'),
            regexMail = /^[\w\.-]{3,20}@[\w.]{3,30}\.[a-zA-Z]{2,10}$/;
            regexPwd = new RegExp('^.{8,}');

        if (regexLogin.test(login)) {
            $('.erreur-name').remove('.erreur-name');
            $("#pseudo-co").css("border-color", "#ccc");
        } else {
            if (!$('.erreur-name')[0]) {
                $nameContainer.append('<span class="erreur-name"> nom incorrect </span>');
                $("#pseudo-co").css("border-color", "red");
            }
           // regexTest = true;
        }

        if (regexPwd.test(password)) {
            $('.erreur-password').remove('.erreur-password');
            $("#mdp-co").css("border-color", "#ccc");
        } else {
            if (!$('.erreur-password')[0]) {
                $pwdContainer.append('<span class="erreur-password"> mdp incorrect </span>');
                $("#mdp-co").css("border-color", "red");
            }
           // regexTest = true;
        }

       irc.ajax({
            data: {
                login : $login.val(),
                password : $password.val(),
            },
            url: 'connect.php'
        });

        e.stopPropagation();
        e.preventDefault();

    });

})(jQuery);