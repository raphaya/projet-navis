var livingEnemies1 = [],
    livingEmemiesMissile = [],
    livingDrones = [],
    timeEnemies1 = 0,
    timeMissiles = 0,
    timeDrones = 0,
    boss1Fire = true;

function enemy1Fires() {
    // Grab the first bullet we can from the pool
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
    var i = 0;
    enemiesBoss1.damageAmount = 10;
    enemiesBoss1.forEachAlive(function () {
        switch (boss1Fire) {
            case true:
                while (i <= 361) {
                    var enemyBullet = boss1Bullets.getFirstExists(false);
                    if (enemyBullet) {
                        enemyBullet.reset(enemiesBoss1.hash[0].body.x + 360, enemiesBoss1.hash[0].body.y + 100);
                        switch (i) {
                            case 0:
                                enemyBullet.body.velocity.x = 200;
                                break;
                            case 45:
                                enemyBullet.body.velocity.x = 174;
                                enemyBullet.body.velocity.y = 77.4;
                                break;
                            case 90:
                                enemyBullet.body.velocity.x = 125.2;
                                enemyBullet.body.velocity.y = 131.6;
                                break;
                            case 135:
                                enemyBullet.body.velocity.x = 60.2;
                                enemyBullet.body.velocity.y = 164.7;
                                break;
                            case 180:
                                enemyBullet.body.velocity.x = -12.3;
                                enemyBullet.body.velocity.y = 172.3;
                                break;
                            case 225:
                                enemyBullet.body.velocity.x = -82.7;
                                enemyBullet.body.velocity.y = 153.4;
                                break;
                            case 270:
                                enemyBullet.body.velocity.x = -141.7;
                                enemyBullet.body.velocity.y = 110.6;
                                break;
                            case 315:
                                enemyBullet.body.velocity.x = -181.4;
                                enemyBullet.body.velocity.y = 49.5;
                                break;
                            case 360:
                                enemyBullet.body.velocity.x = -196.6;
                                enemyBullet.body.velocity.y = -21.8;
                                break;
                        }
                    }
                    i += 45;
                }
                boss1Fire = false;
                break;

            case false:
                while (i <= 361) {
                    var enemyBullet = boss1Bullets.getFirstExists(false);
                    if (enemyBullet) {
                        enemyBullet.reset(enemiesBoss1.hash[0].body.x + 360, enemiesBoss1.hash[0].body.y + 100);
                        switch (i) {
                            case 0:
                                enemyBullet.body.velocity.x = -200;
                                break;
                            case 45:
                                enemyBullet.body.velocity.x = -174;
                                enemyBullet.body.velocity.y = 77.4;
                                break;
                            case 90:
                                enemyBullet.body.velocity.x = -125.2;
                                enemyBullet.body.velocity.y = 131.6;
                                break;
                            case 135:
                                enemyBullet.body.velocity.x = -60.2;
                                enemyBullet.body.velocity.y = 164.7;
                                break;
                            case 180:
                                enemyBullet.body.velocity.x = 12.3;
                                enemyBullet.body.velocity.y = 172.3;
                                break;
                            case 225:
                                enemyBullet.body.velocity.x = 82.7;
                                enemyBullet.body.velocity.y = 153.4;
                                break;
                            case 270:
                                enemyBullet.body.velocity.x = 141.7;
                                enemyBullet.body.velocity.y = 110.6;
                                break;
                            case 315:
                                enemyBullet.body.velocity.x = 181.4;
                                enemyBullet.body.velocity.y = 49.5;
                                break;
                            case 360:
                                enemyBullet.body.velocity.x = 196.6;
                                enemyBullet.body.velocity.y = -21.8;
                                break;
                        }
                    }
                    i += 45;
                }
                boss1Fire = true;
                break;
        }
    });
}

function enemyBoss1BurstFires() {
    var countBurst = 0;
    enemiesBoss1.damageAmount = 1;
    enemiesBoss1.forEachAlive(function () {
        setInterval(function () {
            var enemyBullet = boss1Bullets.getFirstExists(false);
            if (enemyBullet) {
                if (countBurst <= 50) {
                    enemyBullet.reset(enemiesBoss1.hash[0].body.x + 360, enemiesBoss1.hash[0].body.y + 100);
                    game.physics.arcade.moveToObject(enemyBullet, vaisseau, 1800);
                    countBurst++;
                }
            }
        }, 1);
    });
}

function missileFires() {
    // Grab the first bullet we can from the pool
    bulletMissile = bulletsMissile.getFirstExists(false);

    livingEmemiesMissile.length = 0;
    enemiesMissile1.forEachAlive(function (enemy) {
        // put every living enemy in an array
        livingEmemiesMissile.push(enemy);
    });

    if (bulletMissile && livingEmemiesMissile.length > 0 && game.time.now > timeMissiles) {
        var random = game.rnd.integerInRange(0, livingEmemiesMissile.length - 1);
        // randomly select one of them
        var shooter = livingEmemiesMissile[random];
        // And fire the bullet from this enemy
        bulletMissile.reset(shooter.body.x + 30, shooter.body.y + 30);
        bulletMissile.body.velocity.y = 400;
        timeMissiles = game.time.now + 700;
    }
}

function droneFires() {
    // Grab the first bullet we can from the pool
    droneBullet = droneBullets.getFirstExists(false);
    livingDrones.length = 0;
    enemiesDrone.forEachAlive(function (enemy) {
        // put every living enemy in an array
        livingDrones.push(enemy);
    });

    if (droneBullet && livingDrones.length > 0 && game.time.now > timeDrones) {
        var random = game.rnd.integerInRange(0, livingDrones.length - 1);
        // randomly select one of them
        var shooter = livingDrones[random];
        // And fire the bullet from this enemy
        droneBullet.reset(shooter.body.x + 5, shooter.body.y + 23);
        game.physics.arcade.moveToObject(droneBullet, vaisseau, 700);
        timeDrones = game.time.now + 2000;
    }
}

function enemy1HitsPlayer(vaisseau, enemyBullet) {
    vaisseau.damage(enemies1.damageAmount);
    hitPlayer(enemyBullet);
}

function missileHitsPlayer(vaisseau, enemyBullet) {
    vaisseau.damage(enemiesMissile1.damageAmount);
    hitPlayer(enemyBullet);
}

function boss1HitsPlayer(vaisseau, enemyBullet) {
    vaisseau.damage(enemiesBoss1.damageAmount);
    hitPlayer(enemyBullet);
}

function kamikazeHitsPlayer(vaisseau, enemyKamikaze) {
    vaisseau.damage(enemiesKamikaze.damageAmount);
    explosion(vaisseau);
    hitPlayer(enemyKamikaze);
}

function droneHitsPlayer(vaisseau, enemyBullet) {
    vaisseau.damage(enemiesDrone.damageAmount);
    hitPlayer(enemyBullet);
}

function hitPlayer(enemyBullet) {
    explosion(enemyBullet);
    healthValue.setText(vaisseau.health + ' HP');
    game.add.tween(healthBar.scale).to({ x: vaisseau.health / 150 }, 100, Phaser.Easing.Linear.None, true);
    enemyBullet.kill();
}