var game = new Phaser.Game(1600, 920, Phaser.CANVAS);

var fireButton;
var levelNumber = 1;
var specialButton;
var specialTime = 0;
var bullets;
var vaisseau;
var healthBar;
var expBar;
var icone;
var warning;
var enemies;
var enemy1Bullets;
var boss1Bullets;
var gameOver;
var score = 0;
var scoreText;
var warningTimer = 0;
var firingTimer = 1000;
var GameState = {

    preload: function () {
        this.load.image('background', 'assets/images/background.png');
        this.load.image('vaisseau', ship.skin);
        this.load.image('bullet', ship.bulletSkin);
        this.load.image('icone', ship.icone);
        this.load.image('special', ship.special);
        this.load.image('special2', ship.special2);
        this.load.image('enemy', 'assets/images/ennemi.png');
        this.load.image('enemyBoss', 'assets/images/enemyBoss.png');
        this.load.image('healthBar', 'assets/images/healthbar.png');
        this.load.image('expBar', 'assets/images/xpbar.png');
        this.load.image('warning', 'assets/images/warning.png');
        this.load.image('enemyBullet', 'assets/images/enemy_bullet.png');
        this.load.spritesheet('kaboom', 'assets/images/explode.png', 128, 128);
    },

    create: function () {
        this.fond = this.game.add.tileSprite(0, 0, 1600, 920, 'background');

        vaisseau = this.game.add.sprite(800, 800, 'vaisseau');
        vaisseau.anchor.setTo(0.5, 0.5);
        vaisseau.scale.setTo(ship.scaleSkin);
        vaisseau.damageAmount = ship.damage;
        vaisseau.health = ship.maxHealth;

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
        icone.scale.setTo(ship.scaleIcone);
        icone.alpha = 0.5;

        warning = this.add.sprite(800, 820, 'warning');
        warning.anchor.setTo(0.5, 0.5);
        warning.angle = 365;
        warning.scale.setTo(0.2);
        warning.alpha = 0.7;

        enemies1 = game.add.group();
        enemies1.enableBody = true;
        enemies1.physicsBodytype = Phaser.Physics.ARCADE;
        enemiesBoss1 = game.add.group();
        enemiesBoss1.enableBody = true;
        enemiesBoss1.physicsBodytype = Phaser.Physics.ARCADE;
        level(levelNumber);

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

        enemy1Bullets = game.add.group();
        enemy1Bullets.enableBody = true;
        enemy1Bullets.physicsBodytype = Phaser.Physics.ARCADE;
        enemy1Bullets.createMultiple(30, 'enemyBullet');
        enemy1Bullets.setAll('angle', -90);
        enemy1Bullets.setAll('outOfBoundsKill', true);
        enemy1Bullets.setAll('checkWorldBounds', true);
        boss1Bullets = game.add.group();
        boss1Bullets.enableBody = true;
        boss1Bullets.physicsBodytype = Phaser.Physics.ARCADE;
        boss1Bullets.createMultiple(30, 'enemyBullet');
        boss1Bullets.setAll('angle', -90);
        boss1Bullets.setAll('outOfBoundsKill', true);
        boss1Bullets.setAll('checkWorldBounds', true);


        fireButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        specialButton = game.input.keyboard.addKey(Phaser.Keyboard.V);

        explosions = game.add.group();
        explosions.enableBody = true;
        explosions.physicsBodyType = Phaser.Physics.ARCADE;
        explosions.createMultiple(200, 'kaboom');
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


        gameOver = game.add.text(game.world.centerX, game.world.centerY, 'GAME OVER', { font: '160px Comic sans', fill: '#FFFFFF' });
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

        vaisseau.speed = ship.speed;
        vaisseau.body.collideWorldBounds = true;

        if (cursors.up.isDown && !cursors.right.isDown && !cursors.left.isDown) {
            vaisseau.body.velocity.y = -(ship.speed);



        } else if (cursors.down.isDown && !cursors.right.isDown && !cursors.left.isDown) {
            vaisseau.body.velocity.y = ship.speed;

        }

        else if (cursors.right.isDown && cursors.up.isDown) {
            vaisseau.body.velocity.y = -(ship.speed / 1.6);
            vaisseau.body.velocity.x = ship.speed / 1.6;


        } else if (cursors.down.isDown && cursors.right.isDown) {

            vaisseau.body.velocity.y = ship.speed / 1.6;
            vaisseau.body.velocity.x = ship.speed / 1.6;

        } else if (cursors.down.isDown && cursors.left.isDown) {

            vaisseau.body.velocity.y = ship.speed / 1.6;
            vaisseau.body.velocity.x = -(ship.speed / 1.6);

        } else if (cursors.up.isDown && cursors.right.isDown) {

            vaisseau.body.velocity.y = -(ship.speed / 1.6);
            vaisseau.body.velocity.x = ship.speed / 1.6;

        } else if (cursors.up.isDown && cursors.left.isDown) {

            vaisseau.body.velocity.y = -(ship.speed / 1.6);
            vaisseau.body.velocity.x = -(ship.speed / 1.6);

        } else if (cursors.left.isDown && !cursors.up.isDown && !cursors.down.isDown) {
            vaisseau.body.velocity.x = -(ship.speed);

        } else if (cursors.right.isDown && !cursors.up.isDown && !cursors.down.isDown) {
            vaisseau.body.velocity.x = ship.speed;
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
            switch (ship.class) {
                case "dps":
                    specialDps();
                    break;
                case "tank":
                    specialTank();
                    break;
                case "heal":
                    specialHeal();
                    break;
            }

            specialTime = game.time.now + 10000;
        }

        if (specialTime > game.time.now) {
            icone.visible = false;
        } else {
            icone.visible = true;
        }

        if (game.time.now > firingTimer) {
            enemy1Fires();
            enemyBoss1Fires();
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
        } else if (vaisseau.health > 20 || (warningTimer - 700) < game.time.now) {
            warning.visible = false;
        }

        switch (ship.class) {
            case "dps":
                game.physics.arcade.overlap(specials, enemies1, ship.collision, null, this);
                game.physics.arcade.overlap(specials2, enemies1, collisionHandlerSpecial2, null, this);
                game.physics.arcade.overlap(specials, enemiesBoss1, ship.collision, null, this);
                game.physics.arcade.overlap(specials2, enemiesBoss1, collisionHandlerSpecial2, null, this);
                break;
            case "tank":
                //game.physics.arcade.overlap(specials, enemies, ship.collision, null, this);
                break;
            case "heal":
                //game.physics.arcade.overlap(specials, enemies, ship.collision, null, this);
                break;
        }
        game.physics.arcade.overlap(bullets, enemies1, collisionHandler, null, this);
        game.physics.arcade.overlap(bullets, enemiesBoss1, collisionHandler, null, this);
        game.physics.arcade.overlap(enemy1Bullets, vaisseau, enemy1HitsPlayer, null, this);
        game.physics.arcade.overlap(boss1Bullets, vaisseau, boss1HitsPlayer, null, this);
    },
};

function restart() {
    /*//  Reset the enemies
    enemies1.callAll('kill');
    enemiesBoss1.callAll('kill');
    bullets.callAll('kill');
    enemy1Bullets.callAll('kill');
    boss1Bullets.callAll('kill');
    game.time.events.add(10, level(levelNumber));

    //  Revive the player
    vaisseau.revive();
    vaisseau.health = ship.maxHealth;
    healthBar.scale.x = vaisseau.health / 150;
    expBar.scale.x = 0;
    score = 0;
    scoreText.render();
    //  Hide the text
    gameOver.visible = false;*/
}

game.state.add('GameState', GameState);
game.state.start('GameState');