

BasicGame.Game = function (game) {
};

BasicGame.Game.prototype = {

  create: function () {

      this.background = this.add.sprite(0,0,'background');
      this.jumpSound = this.add.audio('jump');
      this.pipes = this.add.group();

      //game.stage.backgroundColor = '#71c5cf';
      this.timer = this.time.events.loop(Phaser.Timer.SECOND * 1.25, this.addRowOfPipes, this);
      this.score = 0;

      this.labelScore = this.add.text(20, 20, "0",
          { font: "30px Arial", fill: "#ffffff" });
      // start the phaser arcade physics engine
      this.physics.startSystem(Phaser.Physics.ARCADE);

      // Display the bird at the position x=100 and y=245
      this.bird = this.add.sprite(100, 245, 'bird');

      // Add physics to the bird
      // Needed for: movements, gravity, collisions, etc.
      this.physics.arcade.enable(this.bird);

      // Add gravity to the bird to make it fall
      this.bird.body.gravity.y = 1000;

      // Call the 'jump' function when the spacekey is hit
      var spaceKey = this.input.keyboard.addKey(
                      Phaser.Keyboard.SPACEBAR);
      spaceKey.onDown.add(this.jump, this);

      this.bird.anchor.setTo(-0.2, 0.5);

  },
  update: function() {
      // This function is called 60 times per second
      // It contains the game's logic
          // If the bird is out of the screen (too high or too low)
  // Call the 'restartGame' function
  if (this.bird.y < 0 || this.bird.y > 490)
      this.restartGame();

  if (this.bird.angle < 20)
  this.bird.angle += 1;

  //game.physics.arcade.overlap(
  //this.bird, this.pipes, this.restartGame, null, this);

  this.physics.arcade.overlap(
  this.bird, this.pipes, this.hitPipe, null, this);
  },

  // Make the bird jump
jump: function() {

  if (this.bird.alive == false)
  return;
  // Add a vertical velocity to the bird
  this.bird.body.velocity.y = -275;

  this.add.tween(this.bird).to({angle: -20}, 100).start();
  this.jumpSound.play();
},

// Restart the game
restartGame: function() {
    // Start the 'main' state, which restarts the game
    this.state.start('MainMenu');
},
addOnePipe: function(x, y) {
    // Create a pipe at the position x and y
    var pipe = this.add.sprite(x, y, 'pipe');

    // Add the pipe to our previously created group
    this.pipes.add(pipe);

    // Enable physics on the pipe
    this.physics.arcade.enable(pipe);

    // Add velocity to the pipe to make it move left
    pipe.body.velocity.x = -200;

    // Automatically kill the pipe when it's no longer visible
    pipe.checkWorldBounds = true;
    pipe.outOfBoundsKill = true;
},
addRowOfPipes: function() {
    // Randomly pick a number between 1 and 5
    // This will be the hole position
    var hole = Math.floor(Math.random() * 5) + 1;
    this.score += 1;
    this.labelScore.text = this.score;
    // Add the 6 pipes
    // With one big hole at position 'hole' and 'hole + 1'
    for (var i = 0; i < 8; i++)
        if (i != hole && i != hole + 1 && i != hole + 1.75)
            this.addOnePipe(400, i * 60 + 10);
},

hitPipe: function() {
    // If the bird has already hit a pipe, do nothing
    // It means the bird is already falling off the screen
    if (this.bird.alive == false)
        return;

    // Set the alive property of the bird to false
    this.bird.alive = false;

    // Prevent new pipes from appearing
    this.time.events.remove(this.timer);

    // Go through all the pipes, and stop their movement
    this.pipes.forEach(function(p){
        p.body.velocity.x = 0;
    }, this);
},

};
