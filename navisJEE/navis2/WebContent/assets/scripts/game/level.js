// script des levels
var level = function (levelNumber) {
    switch (levelNumber) {
        case 1:
            levelMusic.play();
            createBoss1(775, 1300);
            var popBoss = false,
                musicBoss = false,
                bossIsDead = false,
                speedPopBoss = 6000,
                popEnemies = false,
                speedPopEnemies = 8000,
                count = 0,
                time = 0,
                bossFireCount = 0,
                bossFireCountPhase2 = 0,
                bossFireBurstCount = 0,
                randomBossShoot = Math.random(),
                selectRandomShoot = 0,
                levelRefresh = 200,
                wave = [];

            var interval = setInterval(function () {

                if (!wave[0]) {
                    createEnemyMissile(true, 2);
                    wave[0] = true;
                    time = game.time.now + 1000;
                }

                if (!wave[1] && wave[0] && livingEmemiesMissile.length <= 0 && game.time.now >= time) {
                    createEnemyMissile(false, 2);
                    wave[1] = true;
                    time = game.time.now + 1000;
                }

                if (!wave[2] && wave[1] && livingEmemiesMissile.length <= 0 && game.time.now >= time) {
                    for (var x = 4; x < 6; x++) {
                        createEnemy1(x, -700);
                    }
                    wave[2] = true;
                    time = game.time.now + 1000;
                }

                if (!wave[3] && wave[2] && livingEnemies1.length <= 0 && game.time.now >= time) {
                    createEnemyKamikaze(5);
                    wave[3] = true;
                    time = game.time.now + 1000;
                }

                if (!wave[4] && wave[3] && livingEnemiesKamikaze.length <= 0 && game.time.now >= time) {
                    createEnemyMotherDrone(true);
                    createEnemyMissile(true, 3);
                    wave[4] = true;
                    time = game.time.now + 1000;
                }

                if (!wave[5] && wave[4] && livingMotherDrone.length <= 0 && livingEmemiesMissile.length <= 0 && livingDrones.length <= 0 && game.time.now >= time) {
                    createEnemyMotherDrone(true);
                    for (var x = 0; x < 8; x++) {
                        createEnemy1(x, -700);
                    }
                    wave[5] = true;
                    time = game.time.now + 1000;
                }

                if (!wave[6] && wave[5] && livingMotherDrone.length <= 0 && livingEnemies1.length <= 0 && livingDrones.length <= 0 && game.time.now >= time) {
                    createEnemyKamikaze(20);
                    wave[6] = true;
                    time = game.time.now + 1000;
                }

                if (!wave[7] && wave[6] && livingEnemiesKamikaze.length <= 0 && game.time.now >= time) {
                    createEnemyMotherDrone(true);
                    createEnemyMissile(false, 5);
                    for (var x = 3; x < 7; x++) {
                        createEnemy1(x, -700);
                    }
                    wave[7] = true;
                    time = game.time.now + 1000;
                }

                if (!wave[8] && wave[7] && livingMotherDrone.length <= 0 && livingEnemies1.length <= 0 && livingDrones.length <= 0 && livingEmemiesMissile.length <= 0 && game.time.now >= time) {
                    createEnemyMotherDrone(true);
                    createEnemyMissile(false, 4);
                    for (var x = 1; x < 10; x++) {
                        createEnemy1(x, -700);
                    }
                    createEnemyKamikaze(10);
                    wave[8] = true;
                    time = game.time.now + 1000;
                }

                if (!musicBoss) {
                    enemy1Fires();
                }

                if (wave[8] && livingMotherDrone.length <= 0 && livingEnemiesKamikaze.length <= 0 && livingEnemies1.length <= 0 && livingEmemiesMissile.length <= 0 && livingDrones.length <= 0 && !musicBoss && game.time.now >= time) {
                    vaisseau.alive = false;
                    game.add.tween(bossHealthBar.scale).to({ x: enemiesBoss1.hash[0].health / 750 }, speedPopBoss, Phaser.Easing.Linear.None, true);
                    levelMusic.stop();
                    bossMusic.play();
                    musicBoss = true;
                    time = game.time.now;
                }

                if (livingMotherDrone.length <= 0 && livingEnemiesKamikaze.length <= 0 && livingEnemies1.length <= 0 && livingEmemiesMissile.length <= 0 && livingDrones.length <= 0 && !popBoss && musicBoss && game.time.now >= time + 6000) {
                    game.camera.shake(0.01, speedPopBoss + 7000);
                    game.add.tween(enemiesBoss1).to({ y: -1450 }, speedPopBoss + 6000, Phaser.Easing.Linear.None, true);
                    popBoss = true;
                    time = game.time.now;
                }

                if (!popEnemies && game.time.now > time + speedPopBoss && popBoss) {
                    for (var x = 0; x < 10; x++) {
                        createEnemy1(x, -700);
                    }
                    popEnemies = true;
                }

                if (livingEnemies1.length <= 0 && popEnemies && game.time.now > time + speedPopBoss + speedPopEnemies + 1000) {
                    count++;
                    if (count == 50) {
                        popEnemies = false;
                        count = 0;
                    }
                }

                if (game.time.now > time + speedPopBoss + speedPopEnemies + 2000 && popBoss) {
                    vaisseau.alive = true;
                    enemy1Fires();

                    if (enemiesBoss1.hash[0].health >= enemiesBoss1.hash[0].maxHealth * 0.5 && !bossIsDead) {
                        if (selectRandomShoot >= 40) {
                            randomBossShoot = Math.random();
                            selectRandomShoot = 0;
                            bossFireCount = 0;
                        }
                        if (randomBossShoot < 0.5) {
                            if (bossFireCount == 1) {
                                enemyBoss1Fires();
                            } else if (bossFireCount == 5) {
                                bossFireCount = 0;
                            }
                            bossFireCount++;
                        } else if (randomBossShoot >= 0.5) {
                            if (bossFireCount == 1) {
                                enemyBoss1BurstFires();
                            } else if (bossFireCount == 10) {
                                bossFireCount = 0;
                            }
                            bossFireCount++;
                        }
                        selectRandomShoot++;
                    } else if (!bossIsDead) {
                        if (bossFireCountPhase2 == 1) {
                            enemyBoss1Fires();
                        } else if (bossFireCountPhase2 == 5) {
                            bossFireCountPhase2 = 0;
                        }
                        bossFireCountPhase2++;
                        if (bossFireBurstCount == 1) {
                            enemyBoss1BurstFires();
                        } else if (bossFireBurstCount == 10) {
                            bossFireBurstCount = 0;
                        }
                        bossFireBurstCount++;
                    }
                }

                if (enemiesBoss1.hash[0].health <= 0) {
                    createBoss1(775, 1300);
                    enemiesBoss1.alive = false;
                    bossIsDead = true;
                    bossHealthBar.destroy();
                    var bossTween = game.add.tween(enemiesBoss1).to({ y: -1700 }, 5000, Phaser.Easing.Linear.None, true);
                    bossTween.onComplete.add(bossDead, this);
                }

                if (bossIsDead && livingEnemies1.length <= 0) {
                    endLevel();
                    clearInterval(interval);
                }

                if (vaisseau.health <= 0) {
                    clearInterval(interval);
                }

            }, levelRefresh);

            break;
    }
};

function endLevel() {
    levelEnded = true;
    ship.speed = 0;
    vaisseau.body.velocity.y = 0;
    vaisseau.body.velocity.x = 0;
    vaisseau.alive = false;
    vaisseau.body.collideWorldBounds = false;
    var tween = game.add.tween(vaisseau).to({ x: 800, y: 800 }, 2000, Phaser.Easing.Linear.None, true);
    tween.onComplete.add(vaisseauUp, this);
}

function vaisseauUp() {
    shipTrail.start(false, 5000, 10);
    ship.speed = 0;
    vaisseau.body.velocity.y = -1000;
    levelClear.visible = true;
}

function bossDead() {

}