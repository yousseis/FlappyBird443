
BasicGame.Preloader = function (game) {

	this.background = null;
	this.preloadBar = null;

	this.ready = false;

};

BasicGame.Preloader.prototype = {

	preload: function () {

		//	These are the assets we loaded in Boot.js
		//	A nice sparkly background and a loading progress bar

		this.background = this.add.sprite(0, 0, 'background');
		this.preloadBar = this.add.sprite(300, 400, 'preloaderBar');

		//	This sets the preloadBar sprite as a loader sprite.
		//	What that does is automatically crop the sprite from 0 to full-width
		//	as the files below are loaded in.

		this.load.setPreloadSprite(this.preloadBar);

		//	Here we load the rest of the assets our game needs.

    this.load.image('pipe', 'assets/Brick_Block.png');
    this.load.image('bird', 'assets/flappyMarcos.png');
    this.load.image('background','assets/back.png');
    this.load.image('startButton','assets/startButton.png');
    this.load.audio('jump', 'assets/jump.wav');


	},

	create: function () {

		this.state.start('MainMenu');

	}

};
