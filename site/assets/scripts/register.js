(function ($) {
    var $register = $('#register');

    $('#register').on("submit", function (e) {
        var $login = $('#pseudo'),
            $password = $('#password'),
            $mail = $('#mail'),
            html = '';
                 alert('match');
            var regexlogin = new RegExp('/^[a-z0-9_-]{3,16}$/'),
                regexpass = new RegExp('/^[a-z0-9_-]{6,18}$/'),
                regexemail = new RegExp('/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/');
/* test test git*/
            var reslogin = regexlogin.test($login.val()),
                respassword = regexpass.test($password.val()),
                resmail = regexemail.test($mail.val());
                
            console.log($mail.val());

            if(reslogin.test){
                alert('match');
            }else{
                alert('dismatch');
            }
            if(respassword.test){
                alert('match');
            }else{
                alert('dismatch');
            }
            if(resmail.test){
                alert('match');
            }else{
                alert('dismatch');
            }

       irc.ajax({
            data: {
                login : $pseudo.val(),
                password : $password.val(),
                mail : $mail.val(),
            },
            url: 'register.php'
        });

    });
        e.stopPropagation();
        e.preventDefault(); 0
        return false;
})(jQuery);