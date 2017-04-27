"use strict";

var bulletTime = 0;

// tir
function fireBullet() {
    if (game.time.now > bulletTime) {
        var bullet = bullets.getFirstExists(false);
        if (bullet) {
            bullet.reset(vaisseau.body.x + ship.bulletX, vaisseau.body.y);
            bullet.body.velocity.y = -550;
            bulletTime = game.time.now + ship.fireRate;
            //fireBulletAudio.play();
        }
    }
}

function collisionHandler(bullet, enemy) {
    explosion(bullet);
    enemy.damage(vaisseau.damageAmount);

    if (enemy.key == "enemyBoss") {
        game.add.tween(bossHealthBar.scale).to({ x: enemiesBoss1.hash[0].health / 750 }, 100, Phaser.Easing.Linear.None, true);
    }

    if (!enemy.alive) {
        score = score + 10;
        scoreText.render();
        game.add.tween(expBar.scale).to({ x: score / 1000 }, 100, Phaser.Easing.Linear.None, true);
    }
    bullet.kill();
}

// spécial vaisseau dps
function specialDps() {
    var special = specials.getFirstExists(false);
    if (special) {
        special.reset(vaisseau.body.x + 20, vaisseau.body.y - 20);
        special.body.velocity.y = -300;
        fireSpecialDpsAudio.play();
    }
}

function collisionHandlerSpecial(special, enemy) {
    var i = 0;
    special.body.velocity.y = 0;
    while (i <= 360) {
        var special2 = specials2.getFirstExists(false);
        if (special2) {
            special2.reset(special.body.x, special.body.y);
            switch (i) {
                case 0:
                    special2.body.velocity.x = 700;
                    break;
                case 45:
                    special2.body.velocity.x = 500;
                    special2.body.velocity.y = -500;
                    break;
                case 90:
                    special2.body.velocity.y = -700;
                    break;
                case 135:
                    special2.body.velocity.x = -500;
                    special2.body.velocity.y = -500;
                    break;
                case 180:
                    special2.body.velocity.x = -700;
                    break;
                case 225:
                    special2.body.velocity.x = -500;
                    special2.body.velocity.y = 500;
                    break;
                case 270:
                    special2.body.velocity.y = 700;
                    break;
                case 315:
                    special2.body.velocity.x = 500;
                    special2.body.velocity.y = 500;
                    break;
            }
        }
        i += 45;
    }
    special.kill();
    fireSpecial2DpsAudio.play();
}

function collisionHandlerSpecial2(special2, enemy) {
    explosion(special2);
    enemy.damage(vaisseau.damageAmount * 0.3);

    if (enemy.key == "enemyBoss") {
        game.add.tween(bossHealthBar.scale).to({ x: enemiesBoss1.hash[0].health / 750 }, 100, Phaser.Easing.Linear.None, true);
    }

    if (!enemy.alive) {
        score = score + 10;
        scoreText.render();
        game.add.tween(expBar.scale).to({ x: score / 1000 }, 100, Phaser.Easing.Linear.None, true);
    }
}

// spécial vaisseau tank
function specialTank() {
    var special = specials.getFirstExists(false);
    var timeShield = game.time.now;

    if (special) {
        special.anchor.setTo(0.5, 0.5);
        special.angle = 67;
        special.reset(vaisseau.body.x + 28, vaisseau.body.y + 28);
        var intervalShield = setInterval(function () {
            game.physics.arcade.moveToObject(special, vaisseau, ship.speed);
            if (game.time.now >= timeShield + 3000) {
                special.kill();
                clearInterval(intervalShield);
            }
        }, 1);
    }
}

function collisionHandlerShield(enemy, special) {
    if (enemy.key == "enemyKamikaze") {
        explosion(enemy);
    }
    enemy.kill();
}

// spécial vaisseau heal
function specialHeal() {
    specials.setAll('anchor.x', 0.5);
    specials.setAll('anchor.y', 0.5);
    specials.forEach(function (heal) {
        heal.animations.add('special');
    });
    var special = specials.getFirstExists(false);
    special.play('special', 25, false, true);
    var timeHeal = game.time.now;
    if (vaisseau.health + 50 >= ship.maxHealth) {
        vaisseau.health = ship.maxHealth;
    } else {
        vaisseau.health += 50;
    }
    healthValue.setText(vaisseau.health + ' HP');
    game.add.tween(healthBar.scale).to({ x: vaisseau.health / 150 }, 100, Phaser.Easing.Linear.None, true);

    if (special) {
        special.anchor.setTo(0.5, 0.5);
        special.reset(vaisseau.body.x + 28, vaisseau.body.y + 28);
        var intervalHeal = setInterval(function () {
            game.physics.arcade.moveToObject(special, vaisseau, ship.speed);
            if (game.time.now >= timeHeal + 3000) {
                special.kill();
                clearInterval(intervalHeal);
            }
        }, 1);
    }
}

/*function collisionHandlerHeal(special, enemy) {

}*/