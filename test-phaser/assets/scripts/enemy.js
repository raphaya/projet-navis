function createEnemy1(positionX, positionY) {
    enemies1.createMultiple(15, 'enemy');
    enemies1.scale.setTo(0.2);
    enemies1.damageAmount = 10;
    var enemy1 = enemies1.getFirstExists(false);

    if (enemy1) {
        enemy1.reset(positionX * 800, positionY, 'enemy');
        enemy1.body.setSize(enemy1.width * 0.16, enemy1.height * 0.1);
        enemy1.health = 30;
        game.add.tween(enemy1).to({ y: 800 }, 8000, Phaser.Easing.Linear.None, true);
    }
    game.add.tween(enemies1).to({ x: 30 }, 1000, Phaser.Easing.Linear.None, true, 0, 1000, true).loop();
}

function createBoss1(positionX, positionY) {
    enemiesBoss1.createMultiple(1, 'enemyBoss');
    enemiesBoss1.scale.setTo(1);
    var enemyBoss1 = enemiesBoss1.getFirstExists(false);

    if (enemyBoss1) {
        enemyBoss1.anchor.setTo(0.5, 0.5);
        enemyBoss1.reset(positionX, positionY, 'enemyBoss');
        enemyBoss1.body.setSize(680, 50, enemyBoss1.width * 0.31, enemyBoss1.height * 0.75);
        enemyBoss1.body.velocity.y = 0;
        enemyBoss1.body.drag.x = 0;
        enemyBoss1.health = 5000;
        enemyBoss1.maxHealth = enemyBoss1.health;
    }
    game.add.tween(enemiesBoss1).to({ x: 50 }, 3000, Phaser.Easing.Linear.None, true, 0, 1000, true).loop();
}

var countMissile = 0;
function createEnemyMissile1(sidePop, maxMissile) {
    var intervalKamikaze = setInterval(function () {
        var positionX = 0,
            velocity = 300,
            angle = -90;
        if (livingEmemiesMissile.length < 1) {
            enemiesMissile1.createMultiple(1, 'enemyMissile');
            enemiesMissile1.damageAmount = 30;
            var enemyMissile1 = enemiesMissile1.getFirstExists(false);

            if (enemyMissile1) {
                if (sidePop) {
                    positionX = 1600;
                    velocity = -300;
                    angle = 90;
                }
                var y = Math.random() * 500;
                enemyMissile1.reset(positionX, y, 'enemyMissile');
                enemyMissile1.checkWorldBounds = true;
                enemyMissile1.anchor.setTo(0.5, 0.5);
                enemyMissile1.body.setSize(enemyMissile1.width, enemyMissile1.height);
                enemyMissile1.angle = angle;
                enemyMissile1.health = 10;
                enemyMissile1.body.velocity.x = velocity;
                countMissile++;

                /*var enemyTrail = game.add.emitter(positionX-9596, positionY-9568, 400);
                enemyTrail.gravity.y = 0;
                enemyTrail.width = 10;
                enemyTrail.makeParticles('enemyTrail');
                enemyTrail.setXSpeed(200, 180);
                enemyTrail.setYSpeed(30, -30);
                enemyTrail.setRotation(50, -50);
                enemyTrail.setAlpha(1, 0, 1000);
                enemyTrail.setScale(0.1, 0.7, 0.1, 0.7, 2000, Phaser.Easing.Quintic.Out);
                enemyTrail.start(false, 5000, 10);*/
            }
            if (countMissile >= maxMissile) {
                countMissile = 0;
                clearInterval(intervalKamikaze);
            }
            enemyMissile1.events.onOutOfBounds.add(function () {
                enemyMissile1.kill();
            }, this);
        }
    }, 500);
}

var countKamikaze = 0;
function createEnemyKamikaze(maxKamikaze) {
    var intervalKamikaze = setInterval(function () {
        enemiesKamikaze.createMultiple(15, 'enemyKamikaze');
        enemiesKamikaze.damageAmount = 50;
        var enemyKamikaze = enemiesKamikaze.getFirstExists(false);

        if (enemyKamikaze) {
            var x = Math.random() * 1600;
            enemyKamikaze.reset(x, -100, 'enemyKamikaze');
            enemyKamikaze.body.setSize(enemyKamikaze.width, enemyKamikaze.height);
            enemyKamikaze.anchor.setTo(0.5, 0.5);
            enemyKamikaze.health = 4;
            var tweenKami = game.add.tween(enemyKamikaze).to({ y: 100 }, 2000, Phaser.Easing.Linear.None, true);
            tweenKami.onComplete.add(function () {
                var angle = game.physics.arcade.angleBetween(enemyKamikaze, vaisseau);
                var angleKami = game.add.tween(enemyKamikaze).to({ rotation: angle - 1.55 }, 1000, Phaser.Easing.Linear.None, true);
                angleKami.onComplete.add(function () {
                    game.physics.arcade.moveToObject(enemyKamikaze, vaisseau, 1000);
                }, this);
            }, this);
            countKamikaze++;
        }
        if (countKamikaze >= maxKamikaze) {
            countKamikaze = 0;
            clearInterval(intervalKamikaze);
        }
    }, 500);
}

function createEnemyMotherDrone(sidePop) {
    enemiesMotherDrone.createMultiple(1, 'enemyMotherDrone');
    var tweenMotherDrone,
        positionX = -210,
        rotation = -0.5,
        tweenX = 140,
        droneX = 220;
    var enemyMotherDrone = enemiesMotherDrone.getFirstExists(false);

    if (enemyMotherDrone) {
        if (sidePop) {
            positionX = 1850;
            rotation = 0.5;
            tweenX = 1460;
            droneX = 1380;
        }
        enemyMotherDrone.reset(positionX, 180, 'enemyMotherDrone');
        enemyMotherDrone.rotation = rotation;
        tweenMotherDrone = game.add.tween(enemyMotherDrone).to({ x: tweenX }, 3000, Phaser.Easing.Linear.None, true);
        tweenMotherDrone.onComplete.add(function () {
            setInterval(function () {
                if (enemyMotherDrone.alive) {
                    createEnemyDrone(droneX, 325);
                } else {
                    clearInterval();
                }
            }, 2000);
        }, this);
        enemyMotherDrone.anchor.setTo(0.5, 0.5);
        enemyMotherDrone.body.setSize(enemyMotherDrone.width, enemyMotherDrone.height * 0.9);
        enemyMotherDrone.health = 400;
    }
}

function createEnemyDrone(positionX, positionY) {
    if (livingDrones.length < 1) {
        enemiesDrone.createMultiple(1, 'enemyDrone');
        enemiesDrone.damageAmount = 10;
        var enemyDrone = enemiesDrone.getFirstExists(false);

        if (enemyDrone) {
            enemyDrone.reset(positionX, positionY, 'enemyDrone');
            enemyDrone.body.setSize(enemyDrone.width * 0.5, enemyDrone.height * 0.9, 10, 0);
            enemyDrone.anchor.setTo(0.5, 0.5);
            enemyDrone.health = 10;
            setInterval(function () {
                if (game.physics.arcade.distanceBetween(enemyDrone, vaisseau) > 100) {
                    enemyDrone.rotation = game.physics.arcade.moveToObject(enemyDrone, vaisseau, 200) - 1.5;
                } else {
                    enemyDrone.body.velocity.setTo(0, 0);
                }
                droneFires();
            }, 10);
        }
    }
}