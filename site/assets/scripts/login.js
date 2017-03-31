(function ($) {
    var $login = $('#connect');


    $('#connect').on("submit", function (e) {

        var $login = $('#pseudo'),
            $password = $('#password'),
            html = '',
            login = $login.val(),
            $nameContainer = $('.name');
        var regexLogin = new RegExp('^[a-zA-Z]{1,}'),
            regexMail = /^[\w\.-]{3,20}@[\w.]{3,30}\.[a-zA-Z]{2,10}$/;
            regexPwd = new RegExp('^.{8,}');

        if (regexLogin.test(login)) {
            $('.erreur-name').remove('.erreur-name');
        } else {
            if (!$('.erreur-name')[0]) {
                $nameContainer.append('<span class="erreur-name"> nom incorrect</span>');
            }
            regexTest = true;
        }
        /*test test test git*/
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