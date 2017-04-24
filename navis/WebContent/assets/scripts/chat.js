(function ($) {
    $('#text').focus();

    function htmlChat(user, message) {
        var $discution = $('.discution'),
            html = '';

        html += '<div>';
        html += '<span class="pseudo">' + user.charAt(0).toUpperCase() + user.substring(1).toLowerCase() + ' : </span>';
        html += '<span class="message"> ' + message + '</span>';
        html += '</div>';

        $discution.append(html);
    }

    $('form#chat').on("submit", function (e) {
        var $texte = $('#text');

        htmlChat("moi", $texte.val());

        irc.ajax({
            url: "messages.php",
            data: {
                message: $texte.val()
            }
        });
        $texte.val('');
        
        e.preventDefault();
    });

    setInterval(function() {
        irc.ajax({
            url: "messages.php",
            method: 'get',
            success: function (donnees) {

                if (donnees.data.length > 0) {
                    htmlChat(donnees.data[0].user, donnees.data[0].text);
                }
            }
        }); 
    }, 3000);

    $('form#connect').on("submit", function (e) {
        e.preventDefault();

        var $login = $('#name'),
            $mail = $('#email'),
            $pwd = $('#password'),
            regexTest = false,
            $nameContainer = $('.name'),
            $mailContainer = $('.email'),
            $pwdContainer = $('.password');

        var login = $login.val(),
            mail = $mail.val(),
            pwd = $pwd.val();

        var regexLogin = new RegExp('^[a-zA-Z]{1,}'),
            regexMail = /^[\w\.-]{3,20}@[\w.]{3,30}\.[a-zA-Z]{2,10}$/;
            regexPwd = new RegExp('^.{8,}');

        if (regexLogin.test(login)) {
            $('.erreur-name').remove('.erreur-name');
        } else {
            if (!$('.erreur-name')[0]) {
                $nameContainer.append('<span class="erreur-name">nom incorrect</span>');
            }
            regexTest = true;
        }

        /*if (mail.match(regexMail)) {
            $('.erreur-mail').remove('.erreur-mail');
        } else {
            if (!$('.erreur-mail')[0]) {
                $mailContainer.append('<span class="erreur-mail">email incorrect</span>');
            }
            regexTest = true;
        }*/

        if (regexPwd.test(pwd)) {
            $('.erreur-pwd').remove('.erreur-pwd');
        } else {
            if (!$('.erreur-pwd')[0]) {
                $pwdContainer.append('<span class="erreur-pwd">mot de passe incorrect</span>');
            }
            regexTest = true;
        }

        if (regexTest === true) {
            return;
        }

        irc.ajax({
            url: "connect.php",
            data: {
                login: login,
                password: pwd
            }
        });
    });

})(jQuery);