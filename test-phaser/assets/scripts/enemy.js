var enemyType;

function createEnemy1() {
    enemies1.createMultiple(15, 'enemy');
    enemies1.scale.setTo(0.2);
    enemies1.damageAmount = 10;
    var enemy1 = enemies1.getFirstExists(false);
    if (enemy1) {
        enemy1.reset(0 + Math.random() * 10000, -100, 'enemy');
        enemy1.body.setSize(enemy1.width * 0.16, enemy1.height * 0.1);
        enemy1.body.velocity.y = 300;
        enemy1.body.drag.x = 300;
        enemy1.health = 30;
    }
}

function createBoss1() {
    enemiesBoss1.createMultiple(1, 'enemyBoss');
    enemiesBoss1.scale.setTo(0.5);
    enemiesBoss1.damageAmount = 10;
    var enemyBoss1 = enemiesBoss1.getFirstExists(false);
    if (enemyBoss1) {
        enemyBoss1.reset(800, -100, 'enemyBoss');
        enemyBoss1.body.setSize(enemyBoss1.width * 0.5, enemyBoss1.height * 0.30);
        enemyBoss1.body.velocity.y = 0;
        enemyBoss1.body.drag.x = 0;
        enemyBoss1.health = 5000;
    }
}