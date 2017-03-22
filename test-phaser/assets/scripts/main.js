var game = new Phaser.Game(1024, 1259, Phaser.CANVAS);

var fireButton;
var bullets;
var bulletTime = 0;
var vaisseau;
var enemies;
var GameState = {

  preload: function () {
    this.load.image('background', 'assets/images/nebula.png');
    this.load.image('vaisseau', 'assets/images/vaisseau.png');
    this.load.image('enemy', 'assets/images/ennemi.png');
    this.load.image('bullet', 'assets/images/bullet.png');
    /*this.load.spritesheet('kaboom', 'assets/images/explode.png', 128, 128);*/
  },

  create: function () {
    this.fond = this.game.add.tileSprite(0, 0, 1024, 1259, 'background');
    vaisseau = this.game.add.sprite(100, 100, 'vaisseau');

    enemies = game.add.group();
    enemies.enableBody = true;
    enemies.physicsBodytype = Phaser.Physics.ARCADE;


    createEnnemies();



    bullets = game.add.group();
    bullets.enableBody = true;
    bullets.physicsBodytype = Phaser.Physics.ARCADE;
    bullets.createMultiple(30, 'bullet');
    bullets.setAll('angle', -90);
    bullets.setAll('anchor.x', 0.5);
    bullets.setAll('anchor.y', -0.4);
    bullets.setAll('outOfBoundsKill', true);
    bullets.setAll('checkWorldBounds', true);


    fireButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    vaisseau.anchor.setTo(0.5, -3.5);
    vaisseau.scale.setTo(0.5);


    explosions = game.add.group();
    explosions.createMultiple(30, 'kaboom');


  },

  update: function () {

    this.fond.tilePosition.y += 3;

    //this.fond.tilePosition.x +=3;
    game.physics.arcade.enable(vaisseau);
    // deplacement joueur
    cursors = game.input.keyboard.createCursorKeys();

    //  Reset the players velocity (movement)
    vaisseau.body.velocity.x = 0;
    vaisseau.body.velocity.y = 0;

    vaisseau.speed = 300;
    vaisseau.body.collideWorldBounds = true;

    if (cursors.up.isDown && !cursors.right.isDown && !cursors.left.isDown) {
      vaisseau.body.velocity.y = -300;



    } else if (cursors.down.isDown && !cursors.right.isDown && !cursors.left.isDown) {
      vaisseau.body.velocity.y = 300;

    }

    else if (cursors.right.isDown && cursors.up.isDown) {
      vaisseau.body.velocity.y = -300;
      vaisseau.body.velocity.x = 300;


    } else if (cursors.down.isDown && cursors.right.isDown) {

      vaisseau.body.velocity.y = 300;
      vaisseau.body.velocity.x = 300;

    } else if (cursors.down.isDown && cursors.left.isDown) {

      vaisseau.body.velocity.y = 300;
      vaisseau.body.velocity.x = -300;

    } else if (cursors.up.isDown && cursors.right.isDown) {

      vaisseau.body.velocity.y = -300;
      vaisseau.body.velocity.x = 300;

    } else if (cursors.up.isDown && cursors.left.isDown) {

      vaisseau.body.velocity.y = -300;
      vaisseau.body.velocity.x = -300;

    } else if (cursors.left.isDown && !cursors.up.isDown && !cursors.down.isDown) {
      vaisseau.body.velocity.x = -300;

    } else if (cursors.right.isDown && !cursors.up.isDown && !cursors.down.isDown) {
      vaisseau.body.velocity.x = 300;
    }
    else {
      //  Stand still
      vaisseau.frame = 4;
    }

    if (fireButton.isDown) {
      fireBullet();
    }

    game.physics.arcade.overlap(bullets, enemies, collisionHandler, null, this);

  }
};

function fireBullet() {

  if (game.time.now > bulletTime) {
    bullet = bullets.getFirstExists(false);

    if (bullet) {
      bullet.reset(vaisseau.body.x + 25, vaisseau.body.y);
      bullet.body.velocity.y = -300;
      bulletTime = game.time.now + 200;
    }
  }
}


/*
A modifier pour la hitbox des ennemies
*/
function createEnnemies() {
  var enemy = enemies.create(500, 500, 'enemy');
  enemy.anchor.setTo(0.1, 1);
  enemies.scale.setTo(0.1);
  enemies.x = 100;
  enemies.y = 100;
}

function collisionHandler(bullet, enemy) {

  /*var explosion = explosions.getFirstExists(false);
  explosion.reset(enemy.body.x, enemy.body.y);
  explosion.play('kaboom', 30, false, true);*/

  enemy.kill();
  bullet.kill();
}



game.state.add('GameState', GameState);
game.state.start('GameState');