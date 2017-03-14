var game = new Phaser.Game(678, 381, Phaser.CANVAS);

var GameState = {

  preload: function () {
    this.load.image('background', 'assets/images/background.png');
    this.load.image('vaisseau', 'assets/images/vaisseau.png');
    this.load.image('ennemi', 'assets/images/ennemi.png');
  },

  create: function () {
    this.fond = this.game.add.sprite(0, 0, 'background');
    this.vaisseau = this.game.add.sprite(100, 100, 'vaisseau');
    this.ennemi = this.game.add.sprite(this.game.world.centerX, 50, 'ennemi');
    this.vaisseau.anchor.setTo(0.5, -3.5);
    

    this.ennemi.anchor.setTo(0.5, 0.5);
    this.vaisseau.scale.setTo(0.5);
    this.ennemi.scale.setTo(0.2);

  },

  update: function () {

    game.physics.arcade.enable(this.vaisseau);
    // deplacement joueur
    cursors = game.input.keyboard.createCursorKeys();
   
    //  Reset the players velocity (movement)
    this.vaisseau.body.velocity.x = 0;
    this.vaisseau.body.velocity.y = 0;

    
    this.vaisseau.body.collideWorldBounds = true;
    
    if (cursors.up.isDown && !cursors.right.isDown && !cursors.left.isDown) {
      this.vaisseau.body.velocity.y = -350;
      
      
    
    } else if (cursors.down.isDown && !cursors.right.isDown && !cursors.left.isDown) {
      this.vaisseau.body.velocity.y = 350;
      
    }
   
    else if (cursors.right.isDown && cursors.up.isDown) {
      this.vaisseau.body.velocity.y = -350;
      this.vaisseau.body.velocity.x = 350;

    
    } else if(cursors.down.isDown && cursors.right.isDown) {
      console.log("down et rigth");
      this.vaisseau.body.velocity.y = 350;
      this.vaisseau.body.velocity.x = 350;

    } else if(cursors.down.isDown && cursors.left.isDown) {
      
      this.vaisseau.body.velocity.y = 350;
      this.vaisseau.body.velocity.x = -350;

    } else if(cursors.up.isDown && cursors.right.isDown) {
      
      this.vaisseau.body.velocity.y = -350;
      this.vaisseau.body.velocity.x = 350;
    
    } else if(cursors.up.isDown && cursors.left.isDown) {
  
      this.vaisseau.body.velocity.y = -350;
      this.vaisseau.body.velocity.x = -350;
    
    } else if (cursors.left.isDown && !cursors.up.isDown && !cursors.down.isDown) {
      this.vaisseau.body.velocity.x = -350;

    } else if (cursors.right.isDown && !cursors.up.isDown && !cursors.down.isDown) {
      this.vaisseau.body.velocity.x = 350;
    }
    else {
    //  Stand still
      this.vaisseau.frame = 4;
    }

  }
};

game.state.add('GameState', GameState);
game.state.start('GameState');