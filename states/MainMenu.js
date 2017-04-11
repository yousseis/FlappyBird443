
BasicGame.MainMenu = function (game) {

	this.bg;
	this.startButton;

};

BasicGame.MainMenu.prototype = {
	create: function () {

	    this.bg = this.add.tileSprite(0, 0, this.game.width, this.game.height, 'background');

      // add our start button with a callback
        this.startButton = this.add.button(this.game.width/2, 300, 'startButton', this.startClick, this);
        this.startButton.anchor.setTo(0.5,0.5);

	},

	update: function () {

		//	Do some nice funky main menu effect here

	},

	resize: function (width, height) {

		//	If the game container is resized this function will be called automatically.
		//	You can use it to align sprites that should be fixed in place and other responsive display things.

	    this.bg.width = width;
	    this.bg.height = height;

	    this.spriteMiddle.x = this.game.world.centerX;
	    this.spriteMiddle.y = this.game.world.centerY;

	    this.spriteTopRight.x = this.game.width;
	    this.spriteBottomLeft.y = this.game.height;

	    this.spriteBottomRight.x = this.game.width;
	    this.spriteBottomRight.y = this.game.height;

	}

};
