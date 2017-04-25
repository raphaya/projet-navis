<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
	<!DOCTYPE html>
	<html>

	<head>
		<title>NAVIS,</title>
		<meta charset="UTF-8">
		<link rel="stylesheet" type="text/css" href="assets/styles/bootstrap/bootstrap.min.css">
		<link rel="stylesheet" type="text/css" href="assets/styles/global.css">
		<link rel="stylesheet" type="text/css" href="assets/styles/menu.css">
		<link rel="stylesheet" type="text/css" href="assets/styles/popin.css">
		<link rel="stylesheet" type="text/css" href="assets/styles/room.css">
		<link rel="stylesheet" type="text/css" href="assets/styles/div-accueil.css">
		<link rel="stylesheet" type="text/css" href="assets/styles/div-lejeu.css">
		<link rel="stylesheet" type="text/css" href="assets/styles/div-galerie.css">
		<link rel="stylesheet" type="text/css" href="assets/styles/div-communaute.css">
		<link href="https://fonts.googleapis.com/css?family=Exo" rel="stylesheet">
	</head>

	<body>
		<div class="col-lg-12 col-md-12 col-sm-12">
			<div class="sidebar-nav">
				<div class="navbar navbar-inverse" id="menu">
					<div class="navbar-header">
						<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".sidebar-navbar-collapse">
							<span class="sr-only">Toggle navigation</span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
						</button>
						<span class="visible-xs navbar-brand">Menu</span>
					</div>
					<div class="navbar-collapse collapse sidebar-navbar-collapse">
						<ul class="nav navbar-nav" id="menu-gauche">
							<li class="navbar-btn" id="btn-accueil"><a href="#">NAVIS,</a></li>
							<li class="navbar-btn" id="btn-jeu"><a href="#">Le jeu</a></li>
							<li class="navbar-btn" id="btn-communaute"><a href="#">Communaut�</a></li>
							<li class="navbar-btn" id="btn-galerie"><a href="#">Galerie</a></li>
						</ul>
						<div class="nav navbar-nav navbar-right">
							<li class="navbar-btn" data-action="open-popin-log" data-toggle="modal" data-target="#popin" id="menu-connect"><a href="#">Log in</a></li>
							<li class="navbar-btn" data-action="open-popin-reg" data-toggle="modal" data-target="#popin" id="menu-register"><a href="#">Register</a></li>
							<li class="navbar-btn" id="fermeChat"><a>Afficher / Cacher le chat</a></li>
						</div>
					</div>
				</div>
			</div>
		</div>

			<div class="col-lg-12 col-md-12 col-sm-12" id="corps">
				<div class="col-lg-12 col-md-12 col-sm-12 " id="content">


					<!--<div class="row content-ajax" id="div-accueil">
						<div class="col-lg-12 col-md-12 col-sm-12">
							<div class="col-lg-2 col-md-2 col-sm-2"></div>
							<div class="col-lg-8 col-md-8 col-sm-8">
								<div class="embed-responsive embed-responsive-16by9">
									<video id="video-accueil" class="embed-responsive-item" autoplay controls>
										<source src="assets/video/navis.mp4" type="video/mp4">
									</video>
								</div>

							</div>
							<div class="col-lg-2 col-md-2 col-sm-2"></div>
						</div>
					</div>-->
					
				</div>
			</div>

			<div class="col-lg-2 col-md-2 col-sm-3" id="lechat">

				<div id="room" class="affichage">
					<div class="content"> tchat :</div>
				</div>

				<div class="input">
					<form method="POST" id="input-room" name="form-room">
						<input class="input input-lg" type="text" id="message" name="message" placeholder="tapez votre texte ici">
						<input class="btn btn-default" type="submit" value="Envoyer">
					</form>
				</div>
			</div>

			<div class="modal fade" id="popin">
				<div class="modal-dialog">
					<div class="modal-content">
						<div class="modal-header">
							<button type="button" class="btn btn-success" id="btn-connect">Se connecter</button>
							<button type="button" class="btn btn-success" id="btn-register">S'inscrire</button>
							<button type="button" class="btn btn-success" id="btn-recovery">R�cup�rer son mot de passe</button>
							<button type="button" class="close" data-dismiss="modal">&times;</button>
						</div>
						<div class="modal-body">
							<form method="POST" id="form-connect" class="form-horizontal">
								<fieldset>
									<div class="form-group">
										<label class="control-label col-sm-5" for="pseudo-co">Pseudo :</label>
										<div class="col-sm-5" id="pseudolabel">
											<input class="form-control" type="text" id="pseudo-co" name="pseudo" placeholder="pseudo">
										</div>
									</div>
									<div class="form-group">
										<label class="control-label col-sm-5" for="mdp-co">Mot de passe :</label>
										<div class="col-sm-5" id="mdplabel">
											<input class="form-control" type="password" id="mdp-co" name="mdp" placeholder="mot de passe">
										</div>
									</div>
									<input id="connection" type="submit">
								</fieldset>
							</form>
							<form method="POST" id="form-register" class="form-horizontal">
								<fieldset>
									<div class="form-group">
										<label class="control-label col-sm-5" for="pseudo">Pseudo :</label>
										<div class="col-sm-5" id="namelabel">
											<input class="form-control" type="text" id="pseudo-reg" name="pseudo" placeholder="pseudo">
										</div>
									</div>
									<div class="form-group">
										<label class="control-label col-sm-5" for="mail">Mail :</label>
										<div class="col-sm-5" id="maillabel">
											<input class="form-control" type="text" id="mail" name="mail" placeholder="mail">
										</div>
									</div>
									<div class="form-group">
										<label class="control-label col-sm-5" for="mdp">Mot de passe :</label>
										<div class="col-sm-5" id="pwdlabel">
											<input class="form-control" type="password" id="mdp-reg" name="mdp" placeholder="mot de passe">
										</div>
									</div>
									<div class="form-group">
										<label class="control-label col-sm-5" for="confirm-mdplabel">Confirmation mot de passe :</label>
										<div class="col-sm-5" id="confirm-mdplabel">
											<input class="form-control" type="password" id="confirm-mdp-reg" name="confirm-mdp" placeholder="confirmation mot de passe">
										</div>
									</div>
									<input id="inscription" type="submit">
								</fieldset>
							</form>
							<form method="POST" action="assets\scripts\recupPass.php" id="form-recup" class="form-horizontal">
								<fieldset>
									<div class="form-group">
										<label class="control-label col-sm-5" for="mail-recup">Votre adresse mail :</label>
										<div class="col-sm-5" id="maillabel">
											<input class="form-control" type="text" id="mail-recup" name="mail" placeholder="exemple@mail.xxx">
										</div>
									</div>
									<input id="recuperation" type="submit">
								</fieldset>
							</form>
						</div>
						<div class="modal-footer">
							<button type="button" class="btn btn-default" data-dismiss="modal">Fermer</button>
						</div>
					</div>
				</div>
			</div>
			<script src="assets/scripts/jquery-3.2.0.min.js"></script>
			<script src="assets/scripts/bootstrap.min.js"></script>
			<script src="assets/scripts/popin.js"></script>
			<script src="assets/scripts/menu-selector.js"></script>
			<script src="assets/scripts/lib/ajax.js"></script>
			<script src="assets/scripts/room.js"></script>
			<script src="assets/scripts/login.js"></script>
			<script src="assets/scripts/register.js"></script>
			<script src="assets/scripts/lib/ajaxTruc.js"></script>


	</body>

	</html>