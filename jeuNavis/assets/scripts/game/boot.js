var bootState = {

    preload: function () {
        this.load.image('loading', 'assets/images/loading.png');
        this.load.image('dps', 'assets/images/dps.png');
        this.load.image('heal', 'assets/images/heal.png');
        this.load.image('tank', 'assets/images/tank.png');
    },

    create: function () {
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
        game.state.start('load');
    }

};