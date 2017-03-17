var game = new Phaser.Game(678, 381, Phaser.CANVAS);

var firebutton;
var GameState = {

  preload: function () {
    this.load.image('background', 'assets/images/background.png');
    this.load.image('vaisseau', 'assets/images/vaisseau.png');
    this.load.image('ennemi', 'assets/images/ennemi.png');
    this.load.image('bullet', 'assets/images/bullet.png');
  },

  create: function () {
    this.fond = this.game.add.tileSprite(0, 0, 678,381, 'background');
    this.vaisseau = this.game.add.sprite(100, 100, 'vaisseau');
    this.ennemi = this.game.add.sprite(this.game.world.centerX, 50, 'ennemi');

    this.bullet = this.game.add.weapon(1, 'bullet');
    this.bullet.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;

    //  Because our bullet is drawn facing up, we need to offset its rotation:
    this.bullet.bulletAngleOffset = 90;

    //  The speed at which the bullet is fired
    this.bullet.bulletSpeed = 300;
    this.bullet.trackSprite(this.vaisseau, 5, 0);
    fireButton = this.input.keyboard.addKey(Phaser.KeyCode.SPACEBAR);
    this.vaisseau.anchor.setTo(0.5, -3.5);
    
    
  
    this.ennemi.anchor.setTo(0.5, 0.5);
    this.vaisseau.scale.setTo(0.5);
    this.ennemi.scale.setTo(0.2);
    
    

  },

  update: function () {

    this.fond.tilePosition.y +=3;
    
    //this.fond.tilePosition.x +=3;
    game.physics.arcade.enable(this.vaisseau);
    // deplacement joueur
    cursors = game.input.keyboard.createCursorKeys();
   
    //  Reset the players velocity (movement)
    this.vaisseau.body.velocity.x = 0;
    this.vaisseau.body.velocity.y = 0;

    this.vaisseau.speed =300;
    this.vaisseau.body.collideWorldBounds = true;
    
    if (cursors.up.isDown && !cursors.right.isDown && !cursors.left.isDown) {
      this.vaisseau.body.velocity.y = -300;
      
      
    
    } else if (cursors.down.isDown && !cursors.right.isDown && !cursors.left.isDown) {
      this.vaisseau.body.velocity.y = 300;
      
    }
   
    else if (cursors.right.isDown && cursors.up.isDown) {
      this.vaisseau.body.velocity.y = -300;
      this.vaisseau.body.velocity.x = 300;

    
    } else if(cursors.down.isDown && cursors.right.isDown) {
      console.log("down et rigth");
      this.vaisseau.body.velocity.y = 300;
      this.vaisseau.body.velocity.x = 300;

    } else if(cursors.down.isDown && cursors.left.isDown) {
      
      this.vaisseau.body.velocity.y = 300;
      this.vaisseau.body.velocity.x = -300;

    } else if(cursors.up.isDown && cursors.right.isDown) {
      
      this.vaisseau.body.velocity.y = -300;
      this.vaisseau.body.velocity.x = 300;
    
    } else if(cursors.up.isDown && cursors.left.isDown) {
  
      this.vaisseau.body.velocity.y = -300;
      this.vaisseau.body.velocity.x = -300;
    
    } else if (cursors.left.isDown && !cursors.up.isDown && !cursors.down.isDown) {
      this.vaisseau.body.velocity.x = -300;

    } else if (cursors.right.isDown && !cursors.up.isDown && !cursors.down.isDown) {
      this.vaisseau.body.velocity.x = 300;
    }
    else {
    //  Stand still
      this.vaisseau.frame = 4;
    }

        if (fireButton.isDown)
    {
        this.bullet.fire();
    }
    //this.background = this.add.tileSprite(0, 0, this.game.width, this.game.height, 'background');
    //this.fond.autoScroll(-40, 0);
  }
};

game.state.add('GameState', GameState);
game.state.start('GameState');