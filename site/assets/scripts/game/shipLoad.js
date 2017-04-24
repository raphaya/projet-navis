var shipLoadState = {

    preload: function () {
        var loadingBar = this.add.sprite(160, 240, 'loading');
        loadingBar.anchor.setTo(3, 3);
        this.load.setPreloadSprite(loadingBar);

            this.load.image('vaisseau', ship.skin);

            this.load.image('icone', ship.icone);
            
            this.load.image('bullet', ship.bulletSkin);
            if (ship.class == "heal") {
                this.load.spritesheet('special', ship.special, 193, 193);
            } else {
                this.load.image('special', ship.special);
            }
    },

    create: function () {
        game.state.start('menu');
    }
};