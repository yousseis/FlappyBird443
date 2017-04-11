
var BootState = require('./states/boot.js');
var MenuState = require('./states/menu.js');
var PlayState = require('./states/play.js');
var PreloadState = require('./states/preload.js');

var game = new Phaser.Game(400, 490);

// Game States
game.state.add('boot', BootState);
game.state.add('menu', MenuState);
game.state.add('play', PlayState);
game.state.add('preload', PreloadState);

game.state.start('boot');
