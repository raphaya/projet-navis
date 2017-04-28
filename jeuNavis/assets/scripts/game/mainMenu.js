var mainState = {
    create: function () {
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
        var TitleText = game.add.text(560, game.world.height - 800, 'NAVIS,', { font: '180px Comic sans', fill: '#FFFFFF' });
        var start = game.add.text(550, game.world.height - 500, 'Start', { font: '45px Comic sans', fill: '#FFFFFF' });
        var credit = game.add.text(550, game.world.height - 400, 'Crédit', { font: '45px Comic sans', fill: '#FFFFFF' });
        var options = game.add.text(550, game.world.height - 300, 'Options', { font: '45px Comic sans', fill: '#FFFFFF' });

        start.alpha = 0.5;
        options.alpha = 0.5;
        credit.alpha = 0.5;

        start.inputEnabled = true;
        options.inputEnabled = true;
        credit.inputEnabled = true;



        start.events.onInputOver.add(function () {
            start.alpha = 1;
        }, this);

        start.events.onInputUp.add(function () {
            game.state.start('ship');
        }, this);

        start.events.onInputOut.add(function () {
            start.alpha = 0.5;
        }, this);




        options.events.onInputOver.add(function () {
            options.alpha = 1;
        }, this);

        options.events.onInputOut.add(function () {
            options.alpha = 0.5;
        }, this);

        options.events.onInputUp.add(function () {
            game.state.start('ship');
        }, this);



        credit.events.onInputOver.add(function () {
            credit.alpha = 1;
        }, this);


        credit.events.onInputOut.add(function () {
            credit.alpha = 0.5;
        }, this);

        credit.events.onInputUp.add(function () {
            game.state.start('ship');
        }, this);





        var key = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
        key.onDown.addOnce(this.launch, this);
    },

    launch: function () {

        game.state.start('ship');
    }
};