
BasicGame.Preloader = function (game) {
};

BasicGame.Preloader.prototype = {
	init: function(){
	},
	preload: function () {

		//	These are the assets we loaded in Boot.js
		//	A nice sparkly background and a loading progress bar
		//this.stage.backgroundColor = 0X222222;
		this.asset = this.add.sprite(this.world.centerX, this.world.centerY, "loading");
		this.asset.anchor.setTo(0.5,0.5);
		//loadingbar.anchor.setTo(0.5);
		this.load.onLoadComplete.addOnce(this.onLoadComplete,this)
		this.load.setPreloadSprite(this.asset);
		this.load.image('background','assets/back.png');
		this.load.image("startButton", "assets/start-button.png");



		//	This sets the preloadBar sprite as a loader sprite.
		//	What that does is automatically crop the sprite from 0 to full-width
		//	as the files below are loaded in.


		//	Here we load the rest of the assets our game needs.

		this.load.image('pipe', 'assets/Brick_Block.png');
		this.load.image('bird', 'assets/flappyMarcos.png');
		this.load.audio('jump', 'assets/jump.wav');


	},

	create: function () {
		//this.state.start('MainMenu');
	},
	update: function() {
    if(!!this.ready) {
      this.state.start('MainMenu');
    }
  },
	onLoadComplete: function() {
    this.ready = true;
  }

};
