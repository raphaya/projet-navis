var ship;
var shipState = {

    create: function () {
        var healthText, dammageText, speedText, button;
        var TitleText = game.add.text(400, game.world.height - 900, 'Choose your ship', { font: '100px Comic sans', fill: '#FFFFFF' });
        vaisseau = this.game.add.sprite(400, game.world.height - 650, 'dps');
        vaisseau.anchor.set(0.5);
        vaisseau.scale.setTo(0.2);
        vaisseau.alpha = 0.5;
        vaisseau.inputEnabled = true;


        vaisseau.events.onInputOver.add(function () {
            ship = {
                class: "dps",
                skin: 'assets/images/dps.png',
                icone: 'assets/images/iconeDps.jpg',
                special: 'assets/images/specialDps.png',
                bulletSkin: 'assets/images/bulletDps.png',
                collision: collisionHandlerSpecial,
                scaleSkin: 0.08,
                scaleIcone: 0.06,
                damage: 12,
                maxHealth: 150,
                fireRate: 200,
                speed: 400,
                bulletX: 25
            };
            vaisseau.alpha = 1;

            healthText = game.add.text(500, game.world.height - 710, 'health', { font: '25px Comic sans', fill: '#FFFFFF' });
            healthBar = this.game.add.sprite(590, game.world.height - 710, 'healthBar');
            healthBar.scale.setTo(0.1);
            healthBar.scale.x = ship.maxHealth / 150;

            dammageText = game.add.text(500, game.world.height - 660, 'damage ', { font: '25px Comic sans', fill: '#FFFFFF' });
            dammageBar = this.game.add.sprite(590, game.world.height - 660, 'expBar');
            dammageBar.scale.setTo(0.1);
            dammageBar.scale.x = (ship.damage /  ship.fireRate) * 10;



            speedText = game.add.text(500, game.world.height - 610, 'speed', { font: '25px Comic sans', fill: '#FFFFFF' });
            speedBar = this.game.add.sprite(590, game.world.height - 610, 'speedBar');
            speedBar.scale.setTo(0.1);
            speedBar.scale.x = ship.speed / 500;

        }, this);

        vaisseau.events.onInputOut.add(function () {

            vaisseau.alpha = 0.5;
            healthText.destroy();
            healthBar.destroy();
            speedText.destroy();
            speedBar.destroy();
            dammageText.destroy();
            dammageBar.destroy();
        }, this);

        vaisseau.events.onInputUp.add(function () {

            game.state.start('shipLoad');
        });

        heal = this.game.add.sprite(400, game.world.height - 425, 'heal');
        heal.anchor.setTo(0.5, 0.5);
        heal.scale.setTo(0.35);
        heal.alpha = 0.5;
        heal.inputEnabled = true;

        heal.events.onInputOver.add(function () {
            ship = {
                class: "heal",
                skin: 'assets/images/heal.png',
                icone: 'assets/images/iconeHeal.jpg',
                special: 'assets/images/specialHeal.png',
                bulletSkin: 'assets/images/bulletHeal.png',
                collision: '',
                scaleSkin: 0.14,
                scaleIcone: 0.08,
                damage: 7,
                maxHealth: 75,
                fireRate: 250,
                speed: 550,
                bulletX: 26
            };

            heal.alpha = 1;

            healthText = game.add.text(500, game.world.height - 490, 'health', { font: '25px Comic sans', fill: '#FFFFFF' });
            healthBar = this.game.add.sprite(590, game.world.height - 490, 'healthBar');
            healthBar.scale.setTo(0.1);
            healthBar.scale.x = ship.maxHealth / 150;

            dammageText = game.add.text(500, game.world.height - 440, 'damage ', { font: '25px Comic sans', fill: '#FFFFFF' });
            dammageBar = this.game.add.sprite(590, game.world.height - 440, 'expBar');
            dammageBar.scale.setTo(0.1);
            dammageBar.scale.x = (ship.damage /  ship.fireRate) * 10 ;


            speedText = game.add.text(500, game.world.height - 390, 'speed', { font: '25px Comic sans', fill: '#FFFFFF' });
            speedBar = this.game.add.sprite(590, game.world.height - 390, 'speedBar');
            speedBar.scale.setTo(0.1);
            speedBar.scale.x = ship.speed / 500;

        }, this);

        heal.events.onInputOut.add(function () {

            heal.alpha = 0.5;
            healthText.destroy();
            healthBar.destroy();
            speedText.destroy();
            speedBar.destroy();
            dammageText.destroy();
            dammageBar.destroy();

        }, this);

        heal.events.onInputUp.add(function () {

            game.state.start('shipLoad');
        });


        tank = this.game.add.sprite(400, game.world.height - 200, 'tank');
        tank.anchor.setTo(0.5, 0.5);
        tank.scale.setTo(0.35);
        tank.alpha = 0.5;
        tank.inputEnabled = true;

        tank.events.onInputOver.add(function () {
            ship = {
                class: "tank",
                skin: 'assets/images/tank.png',
                icone: 'assets/images/iconeTank.jpg',
                special: 'assets/images/specialTank.png',
                bulletSkin: 'assets/images/bulletTank.png',
                collision: collisionHandlerShield,
                scaleSkin: 0.16,
                scaleIcone: 0.08,
                damage: 15,
                maxHealth: 225,
                fireRate: 400,
                speed: 300,
                bulletX: 27
            };

            tank.alpha = 1;

            healthText = game.add.text(500, game.world.height - 260, 'health', { font: '25px Comic sans', fill: '#FFFFFF' });
            healthBar = this.game.add.sprite(590, game.world.height - 260, 'healthBar');
            healthBar.scale.setTo(0.1);
            healthBar.scale.x = ship.maxHealth / 150;

            dammageText = game.add.text(500, game.world.height - 210, 'damage ', { font: '25px Comic sans', fill: '#FFFFFF' });
            dammageBar = this.game.add.sprite(590, game.world.height - 210, 'expBar');
            dammageBar.scale.setTo(0.1);
            dammageBar.scale.x = (ship.damage /  ship.fireRate) * 10;

            speedText = game.add.text(500, game.world.height - 160, 'speed', { font: '25px Comic sans', fill: '#FFFFFF' });
            speedBar = this.game.add.sprite(590, game.world.height - 160, 'speedBar');
            speedBar.scale.setTo(0.1);
            speedBar.scale.x = ship.speed / 500;

        }, this);

        tank.events.onInputOut.add(function () {

            tank.alpha = 0.5;
            healthText.destroy();
            healthBar.destroy();
            speedText.destroy();
            speedBar.destroy();
            dammageText.destroy();
            dammageBar.destroy();

        }, this);

        tank.events.onInputUp.add(function () {

            game.state.start('shipLoad');
        });
    }
};