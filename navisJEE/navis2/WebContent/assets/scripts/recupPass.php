<!doctype html>
<html lang="fr">
<head>
  <meta charset="utf-8">
  <title>Titre de la page</title>
  <link rel="stylesheet" href="style.css">
  <script src="script.js"></script>
</head>
<body>
  <h1> Succes !</h1>

    <?php
    $name = $_POST['raph'];
    $email = $_POST['raphaya@laposte.net'];
    $message = $_POST['Hello world'];
    $from = 'From: NAVIS,'; 
    $to = 'raphaya@laposte.net'; 
    $subject = 'Mail automatique';
    $body = "From: $name\n E-Mail: $email\n Message:\n $message";

  
        if (mail ($to, $subject, $body, $from)) { 
            echo "<p>Your message has been sent!</p>";
        } else { 
            echo "<p>Something went wrong, go back and try again!</p>"; 
        }

    $headers = array("From: raphaya@laposte.net",
    "Reply-To: raphaya@laposte.ne",
    "X-Mailer: "PHP"/" . PHP_VERSION );
    $headers = implode("\r\n", $headers);
    mail($to, $subject, $message, $headers);
    
    $to = 'raphaya@laposte.net';
    mail('raphaya@laposte.net', $subject, $message, $headers); ?>
</body>
</html>