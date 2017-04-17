var preloadState = {

    preload: function () {
        
        var loadingBar = this.add.sprite(160, 240, 'loading');
        loadingBar.anchor.setTo(3, 3);
        this.load.setPreloadSprite(loadingBar);
      
            this.load.audio('bossMusic', 'assets/audio/bossmusic.mp3');
            this.load.audio('levelMusic', 'assets/audio/BR.mp3');
            this.load.audio('fireBulletAudio', 'assets/audio/pistol.wav');
            this.load.audio('fireSpecialDpsAudio', 'assets/audio/blaster.mp3');
            this.load.audio('fireSpecial2DpsAudio', 'assets/audio/shotgun.wav');

            this.load.image('background', 'assets/images/background.png');

            this.load.image('vaisseau', ship.skin);

            this.load.image('icone', ship.icone);
            this.load.image('healthBar', 'assets/images/healthbar.png');
            this.load.image('expBar', 'assets/images/xpbar.png');
            this.load.image('warning', 'assets/images/warning.png');
            this.load.image('shipTrail', 'assets/images/shipTrail.png');
            
            this.load.image('bullet', ship.bulletSkin);
            this.load.image('special', ship.special);
            this.load.image('special2', 'assets/images/special2Dps.png');
            
            this.load.image('enemy', 'assets/images/ennemi.png');
            this.load.image('enemyMissile', 'assets/images/ennemiMissile.png');
            this.load.image('enemyKamikaze', 'assets/images/ennemiKamikaze.png');
            this.load.image('enemyMotherDrone', 'assets/images/enemyMotherDrone.png');
            this.load.image('enemyDrone', 'assets/images/enemyDrone.png');
            this.load.image('enemyBoss', 'assets/images/enemyBoss.png');
            
            this.load.image('enemyBullet', 'assets/images/enemy_bullet.png');
            this.load.image('bulletMissile', 'assets/images/bulletMissile.png');
            this.load.image('bulletBoss', 'assets/images/bulletBoss.png');

            this.load.spritesheet('kaboom', 'assets/images/explode.png', 128, 128);
    },

    create: function () {
        game.state.start('menu');
    }


};