// script des levels
var level = function (levelNumber) {
    switch (levelNumber) {
        case 1:
            vaisseau.alive = true;
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
                level1Refresh = 200,
                wave1 = [];

            var interval1 = setInterval(function () {

                if (!wave1[0]) {
                    createEnemyMissile(true, 2);
                    wave1[0] = true;
                    time = game.time.now + 1000;
                }

                if (!wave1[1] && wave1[0] && livingEmemiesMissile.length <= 0 && game.time.now >= time) {
                    createEnemyMissile(false, 2);
                    wave1[1] = true;
                    time = game.time.now + 1000;
                }

                if (!wave1[2] && wave1[1] && livingEmemiesMissile.length <= 0 && game.time.now >= time) {
                    for (var x = 4; x < 6; x++) {
                        createEnemy1(x, -700);
                    }
                    wave1[2] = true;
                    time = game.time.now + 1000;
                }

                if (!wave1[3] && wave1[2] && livingEnemies1.length <= 0 && game.time.now >= time) {
                    createEnemyKamikaze(5);
                    wave1[3] = true;
                    time = game.time.now + 1000;
                }

                if (!wave1[4] && wave1[3] && livingEnemiesKamikaze.length <= 0 && game.time.now >= time) {
                    createEnemyMotherDrone(true);
                    createEnemyMissile(true, 3);
                    wave1[4] = true;
                    time = game.time.now + 1000;
                }

                if (!wave1[5] && wave1[4] && livingMotherDrone.length <= 0 && livingEmemiesMissile.length <= 0 && livingDrones.length <= 0 && game.time.now >= time) {
                    createEnemyMotherDrone(true);
                    for (var x = 0; x < 8; x++) {
                        createEnemy1(x, -700);
                    }
                    wave1[5] = true;
                    time = game.time.now + 1000;
                }

                if (!wave1[6] && wave1[5] && livingMotherDrone.length <= 0 && livingEnemies1.length <= 0 && livingDrones.length <= 0 && game.time.now >= time) {
                    createEnemyKamikaze(20);
                    wave1[6] = true;
                    time = game.time.now + 1000;
                }

                if (!wave1[7] && wave1[6] && livingEnemiesKamikaze.length <= 0 && game.time.now >= time) {
                    createEnemyMotherDrone(true);
                    createEnemyMissile(false, 5);
                    for (var x = 3; x < 7; x++) {
                        createEnemy1(x, -700);
                    }
                    wave1[7] = true;
                    time = game.time.now + 1000;
                }

                if (!wave1[8] && wave1[7] && livingMotherDrone.length <= 0 && livingEnemies1.length <= 0 && livingDrones.length <= 0 && livingEmemiesMissile.length <= 0 && game.time.now >= time) {
                    createEnemyMotherDrone(true);
                    createEnemyMissile(false, 4);
                    for (var x = 1; x < 10; x++) {
                        createEnemy1(x, -700);
                    }
                    createEnemyKamikaze(10);
                    wave1[8] = true;
                    time = game.time.now + 1000;
                }

                if (!musicBoss) {
                    enemy1Fires();
                }

                if (wave1[8] && livingMotherDrone.length <= 0 && livingEnemiesKamikaze.length <= 0 && livingEnemies1.length <= 0 && livingEmemiesMissile.length <= 0 && livingDrones.length <= 0 && !musicBoss && game.time.now >= time) {
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

                if (bossIsDead && livingEnemies1.length <= 0 && game.time.now > 1000) {
                    endLevel();
                    clearInterval(interval1);
                }

                if (vaisseau.health <= 0) {
                    clearInterval(interval1);
                }

            }, level1Refresh);
            break;

        case 2:
            vaisseau.alive = true;
            var level2Refresh = 200,
                time2 = 0,
                wave2 = [];

            var interval2 = setInterval(function () {
                enemy1Fires();
                if (!wave2[0]) {
                    for (var x = 4; x < 6; x++) {
                        createEnemy1(x, -700);
                    }
                    wave2[0] = true;
                    time2 = game.time.now;
                }

                if (wave2[0] && livingEnemies1.length <= 0 && game.time.now > time2 + 1000) {
                    endLevel();
                    clearInterval(interval2);
                }

                if (vaisseau.health <= 0) {
                    clearInterval(interval2);
                }

            }, level2Refresh);
            break;

        case 3:
            vaisseau.alive = true;
            var level3Refresh = 200,
                time3 = 0,
                wave3 = [];

            var interval3 = setInterval(function () {

                if (!wave3[0]) {
                    createEnemyKamikaze(15);
                    wave3[0] = true;
                    time3 = game.time.now;
                }

                if (wave3[0] && livingEnemiesKamikaze.length <= 0 && game.time.now > time3 + 1000) {
                    endLevel();
                    clearInterval(interval3);
                }

                if (vaisseau.health <= 0) {
                    clearInterval(interval3);
                }

            }, level3Refresh);
            break;

        case 4:
            vaisseau.alive = true;
            createBoss1(775, 1300);
            var level4Refresh = 200,
                popBoss4 = false,
                musicBoss4 = false,
                popEnemies4 = false,
                time4 = 0,
                bossIsDead4 = false,
                bossFireCount4 = 0,
                bossFireCountPhase24 = 0,
                bossFireBurstCount4 = 0,
                randomBossShoot4 = Math.random(),
                selectRandomShoot4 = 0,
                wave4 = [];

            var interval4 = setInterval(function () {

                if (!musicBoss4 && game.time.now >= time4) {
                    vaisseau.alive = false;
                    game.add.tween(bossHealthBar.scale).to({ x: enemiesBoss1.hash[0].health / 750 }, 6000, Phaser.Easing.Linear.None, true);
                    bossMusic.play();
                    musicBoss4 = true;
                    time4 = game.time.now;
                }

                if (!popBoss4 && musicBoss4 && game.time.now >= time4 + 6000) {
                    game.camera.shake(0.01, 6000 + 7000);
                    game.add.tween(enemiesBoss1).to({ y: -1450 }, 6000 + 6000, Phaser.Easing.Linear.None, true);
                    popBoss4 = true;
                    time4 = game.time.now;
                }

                if (!popEnemies4 && game.time.now > time4 + 6000 && popBoss4) {
                    for (var x = 0; x < 10; x++) {
                        createEnemy1(x, -700);
                    }
                    popEnemies4 = true;
                }

                if (game.time.now > time4 + 16000 && popBoss4) {
                    vaisseau.alive = true;
                    enemy1Fires();

                    if (enemiesBoss1.hash[0].health >= enemiesBoss1.hash[0].maxHealth * 0.5 && !bossIsDead4) {
                        if (selectRandomShoot4 >= 40) {
                            randomBossShoot4 = Math.random();
                            selectRandomShoot4 = 0;
                            bossFireCount4 = 0;
                        }
                        if (randomBossShoot4 < 0.5) {
                            if (bossFireCount4 == 1) {
                                enemyBoss1Fires();
                            } else if (bossFireCount4 == 5) {
                                bossFireCount4 = 0;
                            }
                            bossFireCount4++;
                        } else if (randomBossShoot4 >= 0.5) {
                            if (bossFireCount4 == 1) {
                                enemyBoss1BurstFires();
                            } else if (bossFireCount4 == 10) {
                                bossFireCount4 = 0;
                            }
                            bossFireCount4++;
                        }
                        selectRandomShoot4++;
                    } else if (!bossIsDead4) {
                        if (bossFireCountPhase24 == 1) {
                            enemyBoss1Fires();
                        } else if (bossFireCountPhase24 == 5) {
                            bossFireCountPhase24 = 0;
                        }
                        bossFireCountPhase24++;
                        if (bossFireBurstCount4 == 1) {
                            enemyBoss1BurstFires();
                        } else if (bossFireBurstCount4 == 10) {
                            bossFireBurstCount4 = 0;
                        }
                        bossFireBurstCount4++;
                    }
                }

                if (enemiesBoss1.hash[0].health <= 0) {
                    createBoss1(775, 1300);
                    enemiesBoss1.alive = false;
                    bossIsDead4 = true;
                    bossHealthBar.destroy();
                    var bossTween = game.add.tween(enemiesBoss1).to({ y: -1700 }, 5000, Phaser.Easing.Linear.None, true);
                    bossTween.onComplete.add(bossDead, this);
                }

                if (bossIsDead4 && livingEnemies1.length <= 0) {
                    endLevel();
                    clearInterval(interval4);
                }

                if (vaisseau.health <= 0) {
                    clearInterval(interval4);
                }

            }, level4Refresh);
            break;
    }
};

function endLevel() {
    levelEnded = true;
    vaisseau.body.velocity.y = 0;
    vaisseau.body.velocity.x = 0;
    vaisseau.alive = false;
    vaisseau.body.collideWorldBounds = false;
    var tween = game.add.tween(vaisseau).to({ x: 800, y: 800 }, 2000, Phaser.Easing.Linear.None, true);
    tween.onComplete.add(function () {
        shipTrail.start(false, 5000, 10);
        vaisseau.body.velocity.y = -1000;
        levelClear.visible = true;
    }, this);
}

function bossDead() {

}