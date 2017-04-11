var BasicGame = {};

BasicGame.Boot = function (game) {

};

BasicGame.Boot.prototype = {

    init: function () {
        this.input.maxPointers = 1;
        //pause if the browser tab the game is in loses focus.
        this.stage.disableVisibilityChange = true;

        //  If you have any desktop specific settings
        if (this.game.device.desktop)
        {
            this.scale.pageAlignHorizontally = true;
        }
        else
        {
            // mobile settings.
            //"scale the game, no lower than 480x260 and no higher than 1024x768"
            this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            this.scale.setMinMax(480, 260, 1024, 768);
            this.scale.forceLandscape = true;
            this.scale.pageAlignHorizontally = true;
        }

    },

    preload: function () {

        //load the assets required for our preloader (in this case a background and a loading bar)
        this.load.image('background','assets/back.png');
        this.load.image('preloaderBar', 'assets/preloader.gif');

    },

    create: function () {

        //  By this point the preloader assets have loaded to the cache, we've set the game settings
        //  So now let's start the real preloader going
        this.state.start('Preloader');

    }

};
