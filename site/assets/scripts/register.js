(function ($) {

    $('#form-register').on("submit", function (e) {
        e.stopPropagation();
        e.preventDefault();

        var $login = $('#pseudo-reg'),
            $password = $('#mdp-reg'),
            $passwordConfirm = $('#confirm-mdp-reg'),
            $mail = $('#mail'),
            html = '';
        var login = $login.val(),
            password = $password.val(),
            passwordConfirm = $passwordConfirm.val(),
            mail = $mail.val();

        var $nameContainer = $('#namelabel'),
            $pwdContainer = $('#pwdlabel'),
            $pwdConfirmContainer = $('#confirm-mdplabel'),
            $mailContainer = $('#maillabel');

        var regexLogin = new RegExp('^[a-zA-Z]{1,}'),
            regexMail = /^[\w\.-]{3,20}@[\w.]{3,30}\.[a-zA-Z]{2,10}$/;
            regexPwd = new RegExp('^.{8,}');
            console.log(login,password,passwordConfirm,mail);

    if (regexLogin.test(login)) {
            $('.erreur-name').remove('.erreur-name');
            $("#pseudo-reg").css("border-color", "#ccc");
        } else {
            if (!$('.erreur-name')[0]) {
                $nameContainer.append('<span class="erreur-name"> nom incorrect</span>');
                $("#pseudo-reg").css("border-color", "red");
            }
           //regexTest = true;
        }

        if (regexPwd.test(password)) {
            $('.erreur-password').remove('.erreur-password');
            $("#mdp-reg").css("border-color", "#ccc");
        } else {
            if (!$('.erreur-password')[0]) {
                $pwdContainer.append('<span class="erreur-password"> mdp incorrect(8 caracteres min)</span>');
                $("#mdp-reg").css("border-color", "red");

            }
            //regexTest = true;
        }

        if (regexPwd.test(passwordConfirm)) {
            $('.erreur-passwordConfirm').remove('.erreur-passwordConfirm');
            $("#confirm-mdp-reg").css("border-color", "#ccc");
        } else {
            if (!$('.erreur-password')[0]) {
                
                $pwdConfirmContainer.append('<span class="erreur-password"> mdp différent</span>');
                $("#confirm-mdp-reg").css("border-color", "red");

            }
            //regexTest = true;
        }

        if(password == passwordConfirm){
            $('.erreur-password-test').remove('.erreur-password-test');
            $("#confirm-mdp-reg").css("border-color", "#ccc");
        } else {
            if (!$('.erreur-password-test')[0]) {
                $pwdConfirmContainer.append('<span class="erreur-password-test">mdp différents</span>');
                $("#confirm-mdp-reg").css("border-color", "red");
            }
            //regexTest = true;
        }

        if (regexMail.test(mail)) {
            $('.erreur-mail').remove('.erreur-mail');
            $("#mail").css("border-color", "#ccc");
        } else {
            if (!$('.erreur-mail')[0]) {
                $mailContainer.append('<span class="erreur-mail"> mail incorrect </span>');
                $("#mail").css("border-color", "red");
            }
            //regexTest = true;
        }
        
        irc.ajax({
            data: {
                login : $login.val(),
                password : $password.val(),
                mail : $mail.val(),
            },
            url: 'register.php'
        });



    });

})(jQuery);