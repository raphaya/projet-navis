// script des levels
var level = function (levelNumber) {
    switch (levelNumber) {
        case 1:
            createBoss1();
            var popBoss = false,
                speedPopBoss = 8000,
                popEnemies = false,
                speedPopEnemies = 3000,
                count = 0,
                popWave1 = false,
                time = 0,
                bossFire1Time = 0,
                bossFire2Time = 0,
                bossFireCount = 0,
                bossFireCountPhase2 = 0,
                bossFireBurstCount = 0,
                randomBossShoot = Math.random(),
                selectRandomShoot = 0,
                levelRefresh = 200;

            var interval = setInterval(function () {
                if (!popWave1) {
                    for (var y = 0; y < 3; y++) {
                        for (var x = 0; x < 10; x++) {
                            createEnemy1(x, y*800);
                        }
                    }
                    popWave1 = true;
                } else if (!popBoss) {
                    enemy1Fires();
                }

                if (livingEnemies1.length <= 0 && !popBoss && game.time.now > 2000) {
                    //bossMusic.play();
                    vaisseau.alive = false;
                    game.camera.shake(0.01, speedPopBoss + 1000);
                    game.add.tween(enemiesBoss1).to({ y: -1450 }, speedPopBoss, Phaser.Easing.Linear.None, true);
                    popBoss = true;
                    time = game.time.now;
                }

                if (!popEnemies && game.time.now > time + speedPopBoss + levelRefresh && enemiesBoss1.hash[0].health > 0 && popBoss) {
                    game.add.tween(bossHealthBar.scale).to({ x: enemiesBoss1.hash[0].health / 1500 }, 3000, Phaser.Easing.Linear.None, true);
                    for (var x = 0; x < 10; x++) {
                        createEnemy1(x, -700);
                        game.add.tween(enemies1).to({ y: 300 }, speedPopEnemies, Phaser.Easing.Linear.None, true);
                    }
                    popEnemies = true;
                }

                if (livingEnemies1.length <= 0) {
                    count++;
                    if (count == 50) {
                        popEnemies = false;
                        count = 0;
                    }
                }

                if (game.time.now > time + speedPopBoss + speedPopEnemies + levelRefresh && popBoss) {
                    vaisseau.alive = true;
                    enemy1Fires();

                    if (enemiesBoss1.hash[0].health >= enemiesBoss1.hash[0].maxHealth * 0.5) {
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
                    } else {
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

                if (enemiesBoss1.hash[0].health <= 0 && livingEnemies1.length <= 0) {
                    clearInterval(interval);
                }

            }, levelRefresh);

            break;
    }
}