var game = new Phaser.Game(1600, 920, Phaser.CANVAS);

var fireButton;
var bullets;
var bulletTime = 0;
var vaisseau;
var enemies;
var enemyBullets;
var firingTimer = 1000;
var livingEnemies = [];
var GameState = {

  preload: function () {
    this.load.image('background', 'assets/images/background.png');
    this.load.image('vaisseau', 'assets/images/vaisseau.png');
    this.load.image('enemy', 'assets/images/ennemi.png');
    this.load.image('bullet', 'assets/images/bullet.png');
    this.load.image('enemyBullet', 'assets/images/enemy_bullet.png');
    /*this.load.spritesheet('kaboom', 'assets/images/explode.png', 128, 128);*/
  },

  create: function () {
    this.fond = this.game.add.tileSprite(0, 0, 1600, 920, 'background');
    vaisseau = this.game.add.sprite(700, 920, 'vaisseau');

    enemies = game.add.group();
    enemies.enableBody = true;
    enemies.physicsBodytype = Phaser.Physics.ARCADE;


    createEnnemies();



    bullets = game.add.group();
    bullets.enableBody = true;
    bullets.physicsBodytype = Phaser.Physics.ARCADE;
    bullets.createMultiple(30, 'bullet');
    bullets.setAll('angle', -90);
    bullets.setAll('outOfBoundsKill', true);
    bullets.setAll('checkWorldBounds', true);

    enemyBullets = game.add.group();
    enemyBullets.enableBody = true;
    enemyBullets.physicsBodytype = Phaser.Physics.ARCADE;
    enemyBullets.createMultiple(30, 'enemyBullet');
    enemyBullets.setAll('angle', -90);
    enemyBullets.setAll('outOfBoundsKill', true);
    enemyBullets.setAll('checkWorldBounds', true);


    fireButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    vaisseau.anchor.setTo(0.5, 0.5);
    vaisseau.scale.setTo(0.08);


    //explosions = game.add.group();
    //explosions.createMultiple(30, 'kaboom');


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

    if (vaisseau.alive && fireButton.isDown) {
      fireBullet();
    }

    if (game.time.now > firingTimer) {
        enemyFires();
    }

    game.physics.arcade.overlap(bullets, enemies, collisionHandler, null, this);
    game.physics.arcade.overlap(enemyBullets, vaisseau, enemyHitsPlayer, null, this);

  },

  render: function () {
    //text = game.add.text("ALLO !!!" + vaisseau.health);
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
  var enemy = enemies.create(6000, 0, 'enemy');
  enemy.body.setSize(enemy.width * 0.08, enemy.height * 0.1);
  enemy.damageAmount = 20;
  enemies.scale.setTo(0.1);
  enemies.x = 100;
  enemies.y = 100;
}

function collisionHandler(bullet, enemy) {

  /*var explosion = explosions.getFirstExists(false);
  explosion.reset(enemy.body.x, enemy.body.y);
  explosion.play('kaboom', 30, false, true);*/

  //enemy.kill();
  bullet.kill();
}

function enemyHitsPlayer(vaisseau, enemyBullet) {
  vaisseau.kill();
  enemyBullet.kill();
}

function enemyFires () {

    //  Grab the first bullet we can from the pool
    enemyBullet = enemyBullets.getFirstExists(false);

    livingEnemies.length=0;

    enemies.forEachAlive(function(enemy){

        // put every living enemy in an array
        livingEnemies.push(enemy);
    });


    if (enemyBullet && livingEnemies.length > 0)
    {
        
        var random=game.rnd.integerInRange(0,livingEnemies.length-1);

        // randomly select one of them
        var shooter=livingEnemies[random];
        // And fire the bullet from this enemy
        enemyBullet.reset(shooter.body.x, shooter.body.y);

        game.physics.arcade.moveToObject(enemyBullet, vaisseau, 300);
        firingTimer = game.time.now + 200;
    }

}

game.state.add('GameState', GameState);
game.state.start('GameState');