var preloadState = {

    preload: function () {
        
        var loadingBar = this.add.sprite(160, 240, 'loading');
        loadingBar.anchor.setTo(3, 3);
        this.load.setPreloadSprite(loadingBar);
      
            //this.load.audio('bossMusic', 'assets/audio/bossmusic.mp3');
            this.load.image('background', 'assets/images/background.png');
            this.load.image('vaisseau', ship.skin);
            this.load.image('dps', 'assets/images/dps.png');
            this.load.image('heal', 'assets/images/heal.png');
            this.load.image('tank', 'assets/images/tank.png');
            this.load.image('bullet', ship.bulletSkin);
            this.load.image('icone', ship.icone);
            this.load.image('special', ship.special);
            this.load.image('special2', 'assets/images/special2Dps.png');
            this.load.image('enemy', 'assets/images/ennemi.png');
            this.load.image('enemyBoss', 'assets/images/enemyBoss.png');
            this.load.image('healthBar', 'assets/images/healthbar.png');
            this.load.image('expBar', 'assets/images/xpbar.png');
            this.load.image('warning', 'assets/images/warning.png');
            this.load.image('enemyBullet', 'assets/images/enemy_bullet.png');
            this.load.image('bulletBoss', 'assets/images/bulletBoss.png');
            this.load.image('shipTrail', 'assets/images/shipTrail.png');
            this.load.spritesheet('kaboom', 'assets/images/explode.png', 128, 128);
    },

    create: function () {
        game.state.start('ship');
    }


};