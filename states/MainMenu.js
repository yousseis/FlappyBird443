
BasicGame.MainMenu = function (game) {

	this.bg;


};

BasicGame.MainMenu.prototype = {
	create: function () {

			this.background = this.add.image(0, 0, "background");
			this.background.height = this.game.height;
			this.background.width = this.game.width;
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
