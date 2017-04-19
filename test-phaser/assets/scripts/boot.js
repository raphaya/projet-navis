var bootState = {

    preload: function () {
        this.load.image('loading', 'assets/images/loading.png');
        this.load.image('dps', 'assets/images/dps.png');
        this.load.image('heal', 'assets/images/heal.png');
        this.load.image('tank', 'assets/images/tank.png');
    },

    create: function () {
        game.state.start('load');
    }

};