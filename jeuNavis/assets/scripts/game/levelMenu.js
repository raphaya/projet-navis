var levelNumber;
var levelState = {
    create: function () {
        var TitleText = game.add.text(480, game.world.height - 900, 'Select your level', { font: '100px Comic sans', fill: '#FFFFFF' });
        var level1 = this.game.add.sprite(100, game.world.height - 750, "level1");
        var level1Text = game.add.text(275, game.world.height - 480, 'Star Wars', { font: '30px Comic sans', fill: '#FFFFFF' });
        level1.scale.setTo(0.4);
        level1.alpha = 0.5;
        level1Text.alpha = 0.5;
        level1.inputEnabled = true;

        level1.events.onInputOver.add(function () {
            level1.alpha = 1;
            level1Text.alpha = 1;
        }, this);

        level1.events.onInputOut.add(function () {
            level1.alpha = 0.5;
            level1Text.alpha = 0.5;
        }, this);

        level1.events.onInputUp.add(function () {
            levelNumber = 1;
            game.state.start('play');
        }, this);



        var tuto1 = this.game.add.sprite(900, game.world.height - 750, "tuto1");
        var tuto1Text = game.add.text(1075, game.world.height - 480, 'FreeSpace', { font: '30px Comic sans', fill: '#FFFFFF' });
        tuto1.scale.setTo(0.4);
        tuto1.alpha = 0.5;
        tuto1Text.alpha = 0.5;
        tuto1.inputEnabled = true;

        tuto1.events.onInputOver.add(function () {
            tuto1.alpha = 1;
            tuto1Text.alpha = 1;
        }, this);

        tuto1.events.onInputOut.add(function () {
            tuto1.alpha = 0.5;
            tuto1Text.alpha = 0.5;
        }, this);

        tuto1.events.onInputUp.add(function () {
            levelNumber = 2;
            game.state.start('play');
        }, this);


        var tuto2 = this.game.add.sprite(100, game.world.height - 350, "tuto2");
        var tuto2Text = game.add.text(230, game.world.height - 80, 'Alone in the dark', { font: '30px comic sans', fill: '#FFFFFF' });
        tuto2.scale.setTo(0.4);
        tuto2.alpha = 0.5;
        tuto2Text.alpha = 0.5;
        tuto2.inputEnabled = true;

        tuto2.events.onInputOver.add(function () {
            tuto2.alpha = 1;
            tuto2Text.alpha = 1;
        }, this);

        tuto2.events.onInputOut.add(function () {
            tuto2.alpha = 0.5;
            tuto2Text.alpha = 0.5;
        }, this);

        tuto2.events.onInputUp.add(function () {
            levelNumber = 3;
            game.state.start('play');
        }, this);



        var tuto3 = this.game.add.sprite(900, game.world.height - 350, "tuto3");
        var tuto3Text = game.add.text(1075, game.world.height - 80, 'Mass effect', { font: '30px comic sans', fill: '#FFFFFF' });
        tuto3.scale.setTo(0.4);
        tuto3.alpha = 0.5;
        tuto3Text.alpha = 0.5;
        tuto3.inputEnabled = true;

        tuto3.events.onInputOver.add(function () {
            tuto3.alpha = 1;
            tuto3Text.alpha = 1;
        }, this);

        tuto3.events.onInputOut.add(function () {
            tuto3.alpha = 0.5;
            tuto3Text.alpha = 0.5;
        }, this);

        tuto3.events.onInputUp.add(function () {
            levelNumber = 4;
            game.state.start('play');
        }, this);
    }
};
