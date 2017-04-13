var shipState = {

    create: function () {
        var healthText, dammageText, speedText, button;
        var TitleText = game.add.text(400, game.world.height - 900, 'Choose your ship', { font: '100px Comic sans', fill: '#FF00FF' });
        var key = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
        key.onDown.addOnce(this.launch, this);
        //button = game.add.button(game.world.centerX - 95, 400, 'button', this.actionOnClick, this, 2, 1, 0);
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

        var next = game.input.keyboard.addKey(Phaser.Keyboard.N);
        next.onDown.addOnce(this.launch, this);
    },
    launch: function () {
        game.state.start('menu');
    },

    /* actionOnClick: function () {

        game.state.start('menu');

    }*/

};