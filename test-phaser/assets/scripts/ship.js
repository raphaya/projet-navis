// définition des vaisseaux
var ship;
var type = "TANK";

switch (type) {
    case "DPS":
        ship = {
            class: "dps",
            skin: 'assets/images/dps.png',
            icone: 'assets/images/iconeDps.jpg',
            special: 'assets/images/specialDps.png',
            bulletSkin: 'assets/images/bulletDps.png',
            collision: collisionHandlerSpecial,
            scaleSkin: 0.08,
            scaleIcone: 0.06,
            damage: 10,
            maxHealth: 100,
            fireRate: 200,
            speed: 400,
            bulletX: 25
        };
        break;

    case "TANK":
        ship = {
            class: "tank",
            skin: 'assets/images/tank.png',
            icone: 'assets/images/iconeTank.jpg',
            special: 'assets/images/specialTank.png',
            bulletSkin: 'assets/images/bulletTank.png',
            collision: collisionHandlerShield,
            scaleSkin: 0.16,
            scaleIcone: 0.08,
            damage: 7,
            maxHealth: 200,
            fireRate: 400,
            speed: 300,
            bulletX: 27
        };
        break;

    case "HEAL":
        ship = {
            class: "heal",
            skin: 'assets/images/heal.png',
            icone: 'assets/images/iconeHeal.jpg',
            special: 'assets/images/specialDps.png',
            bulletSkin: 'assets/images/bulletHeal.png',
            collision: collisionHandlerHeal,
            scaleSkin: 0.14,
            scaleIcone: 0.08,
            damage: 4,
            maxHealth: 50,
            fireRate: 250,
            speed: 550,
            bulletX: 26
        };
        break;
}