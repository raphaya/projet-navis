// script des levels
var level = function (levelNumber) {
    switch (levelNumber) {
        case 1:
            for (i = 0; i <= 3; i++) {
                createEnemy1();
            }
            createBoss1();
            break;
    }
}