var livingEnemies1 = [];
var livingEnemiesBoss1 = [];
var timeEnemies1 = 0;
var timeEnemiesBoss1 = 0;

function enemy1Fires() {
    //  Grab the first bullet we can from the pool
    enemyBullet = enemy1Bullets.getFirstExists(false);
    livingEnemies1.length = 0;
    enemies1.forEachAlive(function (enemy) {
        // put every living enemy in an array
        livingEnemies1.push(enemy);
    });

    if (enemyBullet && livingEnemies1.length > 0 && game.time.now > timeEnemies1) {
        var random = game.rnd.integerInRange(0, livingEnemies1.length - 1);
        // randomly select one of them
        var shooter = livingEnemies1[random];
        // And fire the bullet from this enemy
        enemyBullet.reset(shooter.body.x + 63, shooter.body.y + 120);
        game.physics.arcade.moveToObject(enemyBullet, vaisseau, 300);
        timeEnemies1 = game.time.now + 200;
    }
}

function enemyBoss1Fires() {
    //  Grab the first bullet we can from the pool
    enemyBullet = boss1Bullets.getFirstExists(false);
    livingEnemiesBoss1.length = 0;
    enemiesBoss1.forEachAlive(function (enemy) {
        // put every living enemy in an array
        livingEnemiesBoss1.push(enemy);
    });

    if (enemyBullet && livingEnemiesBoss1.length > 0 && game.time.now > timeEnemiesBoss1) {
        var random = game.rnd.integerInRange(0, livingEnemiesBoss1.length - 1);
        // randomly select one of them
        var shooter = livingEnemiesBoss1[random];
        // And fire the bullet from this enemy
        enemyBullet.reset(shooter.body.x + 450, shooter.body.y + 380);
        game.physics.arcade.moveToObject(enemyBullet, vaisseau, 300);
        timeEnemiesBoss1 = game.time.now + 200;
    }
}

function enemy1HitsPlayer(vaisseau, enemyBullet) {
    this.kaboom = game.add.sprite(vaisseau.x - 80, vaisseau.y - 80, 'kaboom');
    this.kaboom.animations.add('explosion', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 25, true);
    this.kaboom.animations.play('explosion', 30, false, true);
    vaisseau.damage(enemies1.damageAmount);
    game.add.tween(healthBar.scale).to({ x: vaisseau.health / 150 }, 100, Phaser.Easing.Linear.None, true);
    enemyBullet.kill();
}

function boss1HitsPlayer(vaisseau, enemyBullet) {
    this.kaboom = game.add.sprite(vaisseau.x - 80, vaisseau.y - 80, 'kaboom');
    this.kaboom.animations.add('explosion', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 25, true);
    this.kaboom.animations.play('explosion', 30, false, true);
    vaisseau.damage(enemiesBoss1.damageAmount);
    game.add.tween(healthBar.scale).to({ x: vaisseau.health / 150 }, 100, Phaser.Easing.Linear.None, true);
    enemyBullet.kill();
}