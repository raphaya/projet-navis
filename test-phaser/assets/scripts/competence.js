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
            fireBulletAudio.play();
        }
    }
}

function collisionHandler(bullet, enemy) {
    var explosion = explosions.getFirstExists(false);
    explosion.reset(bullet.body.x, bullet.body.y);
    explosion.alpha = 0.7;
    explosion.play('kaboom', 30, false, true);
    enemy.damage(vaisseau.damageAmount);

    if (enemy.key == "enemyBoss") {
        game.add.tween(bossHealthBar.scale).to({ x: enemiesBoss1.hash[0].health / 1500 }, 100, Phaser.Easing.Linear.None, true);
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
    var explosion = explosions.getFirstExists(false);
    explosion.reset(special2.body.x, special2.body.y);
    explosion.alpha = 0.7;
    explosion.play('kaboom', 30, false, true);
    enemy.damage(vaisseau.damageAmount * 0.5);

    if (enemy.key == "enemyBoss") {
        game.add.tween(bossHealthBar.scale).to({ x: enemiesBoss1.hash[0].health / 1500 }, 100, Phaser.Easing.Linear.None, true);
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

    if (special) {
        special.anchor.setTo(0.5, 0.5);
        special.scale.setTo(0.2);
        special.angle = 67;
        special.reset(vaisseau.body.x + 28, vaisseau.body.y + 28);
        special.body.velocity.y = 0;
    }
}

function collisionHandlerShield(special, enemy) {

}

// spécial vaisseau heal
function specialHeal() {
    var special = specials.getFirstExists(false);

    if (special) {
        special.reset(vaisseau.body.x + 20, vaisseau.body.y - 20);
        special.body.velocity.y = -300;
    }
}

function collisionHandlerHeal(special, enemy) {

}