BasicGame.gameover = function (game) {
};

BasicGame.gameover.prototype = {
  preload: function(){
    
  },
	create: function () {

			this.background = this.add.sprite(0,0,'background');

		//	this.background = this.add.image(0, 0, "background");
			this.background.height = this.game.height;
			this.background.width = this.game.width;

			this.playButton = this.game.add.button(this.world.centerX, this.world.centerY, "startButton", this.playTheGame, this);
      this.playButton.anchor.setTo(0.5);
      this.playButton.frame = 0;
      this.playButton.clicked = false;
      this.scaleSprite(this.playButton, this.game.width, this.game.height / 3, 50, 1);
	},

	update: function () {

		//	Do some nice funky main menu effect here

	},
	scaleSprite: function (sprite, availableSpaceWidth, availableSpaceHeight, padding, scaleMultiplier) {
		var scale = this.getSpriteScale(sprite._frame.width, sprite._frame.height, availableSpaceWidth, availableSpaceHeight, padding);
		sprite.scale.x = scale * scaleMultiplier;
		sprite.scale.y = scale * scaleMultiplier;
	},
	getSpriteScale: function (spriteWidth, spriteHeight, availableSpaceWidth, availableSpaceHeight, minPadding) {
		var ratio = 1;
		var currentDevicePixelRatio = window.devicePixelRatio;
		// Sprite needs to fit in either width or height
		var widthRatio = (spriteWidth * currentDevicePixelRatio + 2 * minPadding) / availableSpaceWidth;
		var heightRatio = (spriteHeight * currentDevicePixelRatio + 2 * minPadding) / availableSpaceHeight;
		if(widthRatio > 1 || heightRatio > 1){
			ratio = 1 / Math.max(widthRatio, heightRatio);
		}
		return ratio * currentDevicePixelRatio;
	},

	resize: function (width, height) {
		this.background.height = height;
		this.background.width = width;

		this.scaleSprite(this.playButton, width, height / 3, 50, 1);
		this.playButton.x = this.world.centerX;
		this.playButton.y = this.world.centerY ;
	},

	playTheGame: function (button) {
			this.state.start('Game')
	 }

};
