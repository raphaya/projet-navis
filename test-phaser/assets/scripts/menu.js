var menuState = {
    create: function () {
        var TitleText = game.add.text(560, game.world.height - 600, 'NAVIS,', { font: '160px Comic sans', fill: '#FF00FF' });
        var labelText = game.add.text(30, game.world.height - 80, 'press enter to launch the game', { font: '25px Comic sans', fill: '#FF00FF' });
        var key = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
        key.onDown.addOnce(this.launch, this);
    },

    launch: function () {
        game.state.start('play');
    }
};
