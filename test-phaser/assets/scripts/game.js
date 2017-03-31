var game = new Phaser.Game(1600, 920, Phaser.CANVAS);

var fireButton,
    levelNumber = 1,
    specialButton,
    specialTime = 0,
    bullets,
    vaisseau,
    healthBar,
    expBar,
    icone,
    warning,
    enemies,
    enemy1Bullets,
    boss1Bullets,
    gameOver,
    score = 0,
    scoreText,
    warningTimer = 0,
    bossMusic,
    levelEnded = false,
    shipTrail,
    GameState = {

        preload: function () {
            //this.load.audio('bossMusic', 'assets/audio/bossmusic.mp3');
            this.load.image('background', 'assets/images/background.png');
            this.load.image('vaisseau', ship.skin);
            this.load.image('bullet', ship.bulletSkin);
            this.load.image('icone', ship.icone);
            this.load.image('special', ship.special);
            this.load.image('special2', 'assets/images/special2Dps.png');
            this.load.image('enemy', 'assets/images/ennemi.png');
            this.load.image('enemyBoss', 'assets/images/enemyBoss.png');
            this.load.image('healthBar', 'assets/images/healthbar.png');
            this.load.image('expBar', 'assets/images/xpbar.png');
            this.load.image('warning', 'assets/images/warning.png');
            this.load.image('enemyBullet', 'assets/images/enemy_bullet.png');
            this.load.image('bulletBoss', 'assets/images/bulletBoss.png');
            this.load.image('shipTrail', 'assets/images/shipTrail.png');
            this.load.spritesheet('kaboom', 'assets/images/explode.png', 128, 128);
        },

        create: function () {
            this.fond = this.game.add.tileSprite(0, 0, 1600, 920, 'background');
            //bossMusic = game.add.audio('bossMusic');

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

            bossHealthBar = this.game.add.sprite(275, 30, 'healthBar');
            bossHealthBar.scale.setTo(0.1);
            bossHealthBar.scale.x = 0;
            bossHealthBar.alpha = 0.7;

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
            boss1Bullets.createMultiple(1000, 'bulletBoss');
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

            shipTrail = game.add.emitter(vaisseau.x, vaisseau.y + 29, 400);
            shipTrail.width = 10;
            shipTrail.makeParticles('shipTrail');
            shipTrail.setXSpeed(30, -30);
            shipTrail.setYSpeed(200, 180);
            shipTrail.setRotation(50, -50);
            shipTrail.setAlpha(1, 0.05, 800);
            shipTrail.setScale(0.07, 0.4, 0.07, 0.4, 2000, Phaser.Easing.Quintic.Out);

            // Score
            scoreText = game.add.text(10, 10, '', { font: '20px Comic Sans', fill: '#fff' });
            scoreText.render = function () {
                scoreText.text = 'Score: ' + score;
            };
            scoreText.render();

            gameOver = game.add.text(game.world.centerX, game.world.centerY, 'GAME OVER', { font: '160px Comic sans', fill: '#FFFFFF' });
            gameOver.anchor.setTo(0.5, 0.5);
            gameOver.visible = false;

            levelClear = game.add.text(game.world.centerX, game.world.centerY, 'LEVEL CLEAR', { font: '160px Comic sans', fill: '#FFFFFF' });
            levelClear.anchor.setTo(0.5, 0.5);
            levelClear.visible = false;
        },

        update: function () {
            this.fond.tilePosition.y += 3;
            shipTrail.y = vaisseau.y;

            if (levelEnded) {
                return;
            }

            game.physics.arcade.enable(vaisseau);
            // deplacement joueur
            cursors = game.input.keyboard.createCursorKeys();

            // Reset the players velocity (movement)
            vaisseau.body.velocity.x = 0;
            vaisseau.body.velocity.y = 0;

            vaisseau.speed = ship.speed;
            vaisseau.body.collideWorldBounds = true;

            if (cursors.up.isDown && !cursors.right.isDown && !cursors.left.isDown) {
                vaisseau.body.velocity.y = -(ship.speed);
            } else if (cursors.down.isDown && !cursors.right.isDown && !cursors.left.isDown) {
                vaisseau.body.velocity.y = ship.speed;
            } else if (cursors.right.isDown && cursors.up.isDown) {
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
            } else {
                // Stand still
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

            if (vaisseau.health <= 0) {
                gameOver.visible = true;
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

game.state.add('GameState', GameState);
game.state.start('GameState');