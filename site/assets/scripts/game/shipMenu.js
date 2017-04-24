var ship;
var shipState = {

    create: function () {
        var healthText, dammageText, speedText, button;
        var TitleText = game.add.text(400, game.world.height - 900, 'Choose your ship', { font: '100px Comic sans', fill: '#FF00FF' });
        vaisseau = this.game.add.sprite(400, game.world.height - 650, 'dps');
        vaisseau.anchor.set(0.5);
        vaisseau.scale.setTo(0.2);
        vaisseau.alpha = 0.5;
        vaisseau.inputEnabled = true;


        vaisseau.events.onInputOver.add(function () {

            vaisseau.alpha = 1;
            healthText = game.add.text(500, game.world.height - 710, 'santé', { font: '25px Comic sans', fill: '#FF00FF' });
            dammageText = game.add.text(500, game.world.height - 660, 'dégâts', { font: '25px Comic sans', fill: '#FF00FF' });
            speedText = game.add.text(500, game.world.height - 610, 'vitesse', { font: '25px Comic sans', fill: '#FF00FF' });

        }, this);

        vaisseau.events.onInputOut.add(function () {

            vaisseau.alpha = 0.5;
            healthText.destroy();
            speedText.destroy();
            dammageText.destroy();
        }, this);

        vaisseau.events.onInputUp.add(function () {
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
                maxHealth: 150,
                fireRate: 200,
                speed: 400,
                bulletX: 25
            };
            game.state.start('shipLoad');
        });

        heal = this.game.add.sprite(400, game.world.height - 425, 'heal');
        heal.anchor.setTo(0.5, 0.5);
        heal.scale.setTo(0.35);
        heal.alpha = 0.5;
        heal.inputEnabled = true;

        heal.events.onInputOver.add(function () {

            heal.alpha = 1;
            healthText = game.add.text(500, game.world.height - 490, 'santé', { font: '25px Comic sans', fill: '#FF00FF' });
            dammageText = game.add.text(500, game.world.height - 440, 'dégâts', { font: '25px Comic sans', fill: '#FF00FF' });
            speedText = game.add.text(500, game.world.height - 390, 'vitesse', { font: '25px Comic sans', fill: '#FF00FF' });

        }, this);

        heal.events.onInputOut.add(function () {

            heal.alpha = 0.5;
            healthText.destroy();
            speedText.destroy();
            dammageText.destroy();

        }, this);

        heal.events.onInputUp.add(function () {
            ship = {
                class: "heal",
                skin: 'assets/images/heal.png',
                icone: 'assets/images/iconeHeal.jpg',
                special: 'assets/images/specialHeal.png',
                bulletSkin: 'assets/images/bulletHeal.png',
                collision: '',
                scaleSkin: 0.14,
                scaleIcone: 0.08,
                damage: 4,
                maxHealth: 75,
                fireRate: 250,
                speed: 550,
                bulletX: 26
            };
            game.state.start('shipLoad');
        });


        tank = this.game.add.sprite(400, game.world.height - 200, 'tank');
        tank.anchor.setTo(0.5, 0.5);
        tank.scale.setTo(0.35);
        tank.alpha = 0.5;
        tank.inputEnabled = true;

        tank.events.onInputOver.add(function () {

            tank.alpha = 1;
            healthText = game.add.text(500, game.world.height - 260, 'santé', { font: '25px Comic sans', fill: '#FF00FF' });
            dammageText = game.add.text(500, game.world.height - 210, 'dégâts', { font: '25px Comic sans', fill: '#FF00FF' });
            speedText = game.add.text(500, game.world.height - 160, 'vitesse', { font: '25px Comic sans', fill: '#FF00FF' });

        }, this);

        tank.events.onInputOut.add(function () {

            tank.alpha = 0.5;
            healthText.destroy();
            speedText.destroy();
            dammageText.destroy();

        }, this);

        tank.events.onInputUp.add(function () {
            ship = {
                class: "tank",
                skin: 'assets/images/tank.png',
                icone: 'assets/images/iconeTank.jpg',
                special: 'assets/images/specialTank.png',
                bulletSkin: 'assets/images/bulletTank.png',
                collision: collisionHandlerShield,
                scaleSkin: 0.16,
                scaleIcone: 0.08,
                damage: 12,
                maxHealth: 225,
                fireRate: 400,
                speed: 300,
                bulletX: 27
            };
            game.state.start('shipLoad');
        });
    }
};