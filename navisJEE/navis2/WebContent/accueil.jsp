<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
	<!--<link rel="stylesheet" type="text/css" href="assets/styles/div-accueil.css">-->
	<div class="row content-ajax" id="div-accueil">
		<div id="titre-content" class="container">
			<span>TAKE CONTROL OF YOUR OWN STARSHIP IN A CUTTHROAT GALAXY</span>
		</div>
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

		<div class="col-lg-12 col-md-12 col-sm-12" id="div-pilotes">
			<div class="col-lg-2 col-md-2 col-sm-2"></div>
			<div class="col-lg-8 col-md-8 col-sm-8">
				<div class="col-lg-8 col-md-8 col-sm-8" id="img-accueil">
				<img src='<c:url value="assets/images/galerie/groot.png"/>' alt="">
			</div>
			<div class="text-accueil">
				<div class="titre">Groot</div>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
				Donec tincidunt quam et ultrices consequat. 
				Cras nulla ex, sollicitudin et sagittis at, scelerisque 
			</div>
			</div>
			<div class="col-lg-2 col-md-2 col-sm-2"></div>
		</div>
		<div class="col-lg-12 col-md-12 col-sm-12" id="div-pilotes">
			<div class="col-lg-2 col-md-2 col-sm-2"></div>
			<div class="col-lg-8 col-md-8 col-sm-8">
				<div class="col-lg-8 col-md-8 col-sm-8" id="img-accueil">
				<img src='<c:url value="assets/images/galerie/groot.png"/>' alt="">
			</div>
			<div class="text-accueil">
				<div class="titre">Predator</div>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
				Donec tincidunt quam et ultrices consequat. 
				Cras nulla ex, sollicitudin et sagittis at, scelerisque 
			</div>
			</div>
			<div class="col-lg-2 col-md-2 col-sm-2"></div>
		</div>
	</div>

	<script src="assets/scripts/menu-selector.js"></script>