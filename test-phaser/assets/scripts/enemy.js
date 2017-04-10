function createEnemy1(positionX, positionY) {
    enemies1.createMultiple(15, 'enemy');
    enemies1.scale.setTo(0.2);
    enemies1.damageAmount = 10;
    var enemy1 = enemies1.getFirstExists(false);

    if (enemy1) {
        enemy1.reset(positionX * 800, positionY, 'enemy');
        enemy1.body.setSize(enemy1.width * 0.16, enemy1.height * 0.1);
        enemy1.health = 30;
    }
    game.add.tween(enemies1).to({ y: 300 }, 3000, Phaser.Easing.Linear.None, true);
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

function createEnemyMissile1(positionX, positionY) {
    enemiesMissile1.createMultiple(15, 'enemyMissile');
    enemiesMissile1.scale.setTo(0.04);
    enemiesMissile1.setAll('angle', 90);
    enemiesMissile1.damageAmount = 30;
    var enemyMissile1 = enemiesMissile1.getFirstExists(false);

    if (enemyMissile1) {
        enemyMissile1.reset(positionX, positionY, 'enemyMissile');
        enemyMissile1.body.setSize(enemyMissile1.width * 0.03, enemyMissile1.height * 0.03, 20, 0);
        enemyMissile1.health = 10;
        enemyMissile1.body.velocity.x = -5000;

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
}