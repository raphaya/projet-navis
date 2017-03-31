var bootState = {

    preload: function () {
        this.load.image('loading','assets/images/loading.png' );
           },

    create: function () {
        game.state.start('load');
    }


};