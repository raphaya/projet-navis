var game = new Phaser.Game(1600, 920, Phaser.CANVAS);

var fireButton;
var specialButton;
var specialTime = 0;
var bullets;
var bulletTime = 0;
var vaisseau;
var healthBar;
var expBar;
var icone;
var warning;
var enemies;
var enemyBullets;
var gameOver;
var score = 0;
var scoreText;
var warningTimer = 0;
var firingTimer = 1000;
var livingEnemies = [];
var GameState = {

  preload: function () {
    this.load.image('background', 'assets/images/background.png');
    this.load.image('vaisseau', 'assets/images/vaisseau.png');
    this.load.image('enemy', 'assets/images/ennemi.png');
    this.load.image('bullet', 'assets/images/bullet.png');
    this.load.image('icone', 'assets/images/icone.jpg');
    this.load.image('healthBar', 'assets/images/healthbar.png');
    this.load.image('expBar', 'assets/images/xpbar.png');
    this.load.image('warning', 'assets/images/warning.png');
    this.load.image('special', 'assets/images/special.png');
    this.load.image('special2', 'assets/images/special2.png');
    this.load.image('enemyBullet', 'assets/images/enemy_bullet.png');
    this.load.spritesheet('kaboom', 'assets/images/explode.png', 128, 128);
  },

  create: function () {
    this.fond = this.game.add.tileSprite(0, 0, 1600, 920, 'background');

    vaisseau = this.game.add.sprite(800, 800, 'vaisseau');
    vaisseau.anchor.setTo(0.5, 0.5);
    vaisseau.scale.setTo(0.08);
    vaisseau.damageAmount = 1;
    vaisseau.health = 100;

    healthBar = this.game.add.sprite(25, 840, 'healthBar');
    healthBar.scale.setTo(0.1);
    healthBar.scale.x = vaisseau.health / 150;
    healthBar.alpha = 0.7;

    expBar = this.game.add.sprite(25, 870, 'expBar');
    expBar.scale.setTo(0.1);
    expBar.scale.x = 0;
    expBar.alpha = 0.7;

    icone = this.game.add.sprite(800, 880, 'icone');
    icone.anchor.setTo(0.5, 0.5);
    icone.scale.setTo(0.06);
    icone.alpha = 0.5;

    warning = this.add.sprite(800, 820, 'warning');
    warning.anchor.setTo(0.5, 0.5);
    warning.angle = 365;
    warning.scale.setTo(0.2);
    warning.alpha = 0.7;

    enemies = game.add.group();
    enemies.enableBody = true;
    enemies.physicsBodytype = Phaser.Physics.ARCADE;
    enemies.createMultiple(15, 'enemy');
    enemies.scale.setTo(0.2);
    enemies.damageAmount = 10;
    createEnnemies();

    bullets = game.add.group();
    bullets.enableBody = true;
    bullets.physicsBodytype = Phaser.Physics.ARCADE;
    bullets.createMultiple(30, 'bullet');
    bullets.setAll('angle', -90);
    bullets.setAll('outOfBoundsKill', true);
    bullets.setAll('checkWorldBounds', true);

    specials = game.add.group();
    specials.enableBody = true;
    specials.physicsBodytype = Phaser.Physics.ARCADE;
    specials.createMultiple(1, 'special');
    specials.setAll('outOfBoundsKill', true);
    specials.setAll('checkWorldBounds', true);

    specials2 = game.add.group();
    specials2.enableBody = true;
    specials2.physicsBodytype = Phaser.Physics.ARCADE;
    specials2.createMultiple(8, 'special2');
    specials2.setAll('outOfBoundsKill', true);
    specials2.setAll('checkWorldBounds', true);

    enemyBullets = game.add.group();
    enemyBullets.enableBody = true;
    enemyBullets.physicsBodytype = Phaser.Physics.ARCADE;
    enemyBullets.createMultiple(30, 'enemyBullet');
    enemyBullets.setAll('angle', -90);
    enemyBullets.setAll('outOfBoundsKill', true);
    enemyBullets.setAll('checkWorldBounds', true);


    fireButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    specialButton = game.input.keyboard.addKey(Phaser.Keyboard.V);

    explosions = game.add.group();
    explosions.enableBody = true;
    explosions.physicsBodyType = Phaser.Physics.ARCADE;
    explosions.createMultiple(30, 'kaboom');
    explosions.setAll('anchor.x', 0.5);
    explosions.setAll('anchor.y', 0.5);
    explosions.forEach(function (explosion) {
      explosion.animations.add('kaboom');
    });

    //  Score
    scoreText = game.add.text(10, 10, '', { font: '20px Comic Sans', fill: '#fff' });
    scoreText.render = function () {
      scoreText.text = 'Score: ' + score;
    };
    scoreText.render();


    gameOver = game.add.text(game.world.centerX, game.world.centerY, 'YOU DIED !', { font: '160px Comic sans', fill: '#FF00FF' });
    gameOver.anchor.setTo(0.5, 0.5);
    gameOver.visible = false;
  },

  update: function () {

    this.fond.tilePosition.y += 3;

    game.physics.arcade.enable(vaisseau);
    // deplacement joueur
    cursors = game.input.keyboard.createCursorKeys();

    //  Reset the players velocity (movement)
    vaisseau.body.velocity.x = 0;
    vaisseau.body.velocity.y = 0;

    vaisseau.speed = 400;
    vaisseau.body.collideWorldBounds = true;

    if (cursors.up.isDown && !cursors.right.isDown && !cursors.left.isDown) {
      vaisseau.body.velocity.y = -400;



    } else if (cursors.down.isDown && !cursors.right.isDown && !cursors.left.isDown) {
      vaisseau.body.velocity.y = 400;

    }

    else if (cursors.right.isDown && cursors.up.isDown) {
      vaisseau.body.velocity.y = -250;
      vaisseau.body.velocity.x = 250;


    } else if (cursors.down.isDown && cursors.right.isDown) {

      vaisseau.body.velocity.y = 250;
      vaisseau.body.velocity.x = 250;

    } else if (cursors.down.isDown && cursors.left.isDown) {

      vaisseau.body.velocity.y = 250;
      vaisseau.body.velocity.x = -250;

    } else if (cursors.up.isDown && cursors.right.isDown) {

      vaisseau.body.velocity.y = -250;
      vaisseau.body.velocity.x = 250;

    } else if (cursors.up.isDown && cursors.left.isDown) {

      vaisseau.body.velocity.y = -250;
      vaisseau.body.velocity.x = -250;

    } else if (cursors.left.isDown && !cursors.up.isDown && !cursors.down.isDown) {
      vaisseau.body.velocity.x = -400;

    } else if (cursors.right.isDown && !cursors.up.isDown && !cursors.down.isDown) {
      vaisseau.body.velocity.x = 400;
    }
    else {
      //  Stand still
      vaisseau.frame = 4;
    }

    if (vaisseau.alive && fireButton.isDown) {
      fireBullet();
    }

    if (vaisseau.alive && specialButton.isDown) {
      if (specialTime > game.time.now) {
        return;
      }
      fireSpecial();
      specialTime = game.time.now + 10000;
    }

    if (specialTime > game.time.now) {
      icone.visible = false;
    } else {
      icone.visible = true;
    }

    if (game.time.now > firingTimer) {
      enemyFires();
    }

    if (!vaisseau.alive) {

      gameOver.visible = true;
      bouton = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
      if (bouton.isDown) {
        restart();
      }
    }

    if (vaisseau.health <= 20 && warningTimer < game.time.now) {
      warning.visible = true;
      warningTimer = game.time.now + 1400;
    } 
    if (vaisseau.health > 20 || (warningTimer - 700) < game.time.now) {
      warning.visible = false;
    }

    game.physics.arcade.overlap(bullets, enemies, collisionHandler, null, this);
    game.physics.arcade.overlap(specials, enemies, collisionHandlerSpecial, null, this);
    game.physics.arcade.overlap(specials2, enemies, collisionHandlerSpecial2, null, this);
    game.physics.arcade.overlap(enemyBullets, vaisseau, enemyHitsPlayer, null, this);

  },
};

function fireBullet() {

  if (game.time.now > bulletTime) {
    bullet = bullets.getFirstExists(false);

    if (bullet) {
      bullet.reset(vaisseau.body.x + 25, vaisseau.body.y);
      bullet.body.velocity.y = -550;
      bulletTime = game.time.now + 200;
    }
  }
}

function fireSpecial() {

  if (game.time.now > bulletTime) {
    special = specials.getFirstExists(false);

    if (special) {
      special.reset(vaisseau.body.x + 20, vaisseau.body.y - 20);
      special.body.velocity.y = -300;
      bulletTime = game.time.now + 200;
    }
  }
}

function createEnnemies() {
  var MIN_ENEMY_SPACING = 2000;
  var MAX_ENEMY_SPACING = 3000;
  var ENEMY_SPEED = 300;

  var enemy = enemies.getFirstExists(false);

  if (enemy) {

    enemy.reset(0 + Math.random() * 10000, -100, 'enemy');
    enemy.body.setSize(enemy.width * 0.16, enemy.height * 0.1);
    enemy.body.velocity.y = ENEMY_SPEED;
    enemy.body.drag.x = 100;
    enemy.health = 3;

  }

  //  Send another enemy soon
  game.time.events.add(game.rnd.integerInRange(MIN_ENEMY_SPACING, MAX_ENEMY_SPACING), createEnnemies);
}

function collisionHandler(bullet, enemy) {

  var explosion = explosions.getFirstExists(false);
  explosion.reset(bullet.body.x, bullet.body.y);
  explosion.alpha = 0.7;
  explosion.play('kaboom', 30, false, true);
  enemy.damage(vaisseau.damageAmount);
  if (!enemy.alive) {
    score = score + 10;
    scoreText.render();
    game.add.tween(expBar.scale).to({ x : score / 1000}, 100, Phaser.Easing.Linear.None, true);
  }
  bullet.kill();
}

function collisionHandlerSpecial(special, enemy) {
  var i = 0;
  special.body.velocity.y = 0;
  while (i <= 360) {
    special2 = specials2.getFirstExists(false);
    if (special2) {
      special2.reset(special.body.x, special.body.y);
      switch (i) {
        case 0:
          special2.body.velocity.x = 700;
          break;
        case 45:
          special2.body.velocity.x = 500;
          special2.body.velocity.y = -500;
          break;
        case 90:
          special2.body.velocity.y = -700;
          break;
        case 135:
          special2.body.velocity.x = -500;
          special2.body.velocity.y = -500;
          break;
        case 180:
          special2.body.velocity.x = -700;
          break;
        case 225:
          special2.body.velocity.x = -500;
          special2.body.velocity.y = 500;
          break;
        case 270:
          special2.body.velocity.y = 700;
          break;
        case 315:
          special2.body.velocity.x = 500;
          special2.body.velocity.y = 500;
          break;
      }
    }
    i += 45;
  }
  special.kill();
}

function collisionHandlerSpecial2(special2, enemy) {

  var explosion = explosions.getFirstExists(false);
  explosion.reset(special2.body.x, special2.body.y);
  explosion.alpha = 0.7;
  explosion.play('kaboom', 30, false, true);
  enemy.damage(vaisseau.damageAmount * 3);
  if (!enemy.alive) {
    score = score + 10;
    scoreText.render();
    game.add.tween(expBar.scale).to({ x : score / 1000}, 100, Phaser.Easing.Linear.None, true);
  }
}

function enemyHitsPlayer(vaisseau, enemyBullet) {

  this.kaboom = game.add.sprite(vaisseau.x - 80, vaisseau.y - 80, 'kaboom');
  this.kaboom.animations.add('explosion', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 25, true);
  this.kaboom.animations.play('explosion', 30, false, true);
  vaisseau.damage(enemies.damageAmount);
  game.add.tween(healthBar.scale).to({ x : vaisseau.health / 150}, 100, Phaser.Easing.Linear.None, true);
  enemyBullet.kill();
}

function enemyFires() {

  //  Grab the first bullet we can from the pool
  enemyBullet = enemyBullets.getFirstExists(false);

  livingEnemies.length = 0;

  enemies.forEachAlive(function (enemy) {

    // put every living enemy in an array
    livingEnemies.push(enemy);
  });


  if (enemyBullet && livingEnemies.length > 0) {

    var random = game.rnd.integerInRange(0, livingEnemies.length - 1);

    // randomly select one of them
    var shooter = livingEnemies[random];
    // And fire the bullet from this enemy
    enemyBullet.reset(shooter.body.x + 30, shooter.body.y + 58);

    game.physics.arcade.moveToObject(enemyBullet, vaisseau, 300);
    firingTimer = game.time.now + 200;
  }

}

function restart() {
  //  Reset the enemies
  enemies.callAll('kill');
  bullets.callAll('kill');
  enemyBullets.callAll('kill');
  game.time.events.add(10, createEnnemies);

  //  Revive the player
  vaisseau.revive();
  vaisseau.health = 100;
  healthBar.scale.x = vaisseau.health / 150;
  score = 0;
  scoreText.render();
  //  Hide the text
  gameOver.visible = false;
}

game.state.add('GameState', GameState);
game.state.start('GameState');