//this is for width and height and to use gl but use canvas if gl is not available
//we create an empty game with "Phaser.Game"
var game = new Phaser.Game(640,360,Phaser.CANVAS);
//give a game a state where all the code is going to work
//the code of the game goes inside a state
//some of the main methods of a state are: preload, create and update
var GameState = { 
	//preload method is where everything is loaded 
	//this is so an asset or image is not trying to load while you are playing the game
	preload: function(){
		//preload is to load the assets
		//the first asset to be built is an images
		//we need to give each image we load a key
		this.load.image('background', 'assets/images/background.png');
		this.load.image('monster','assets/images/monster.png');
	},
	//create method is where we create stuff from the preload
	create: function(){
		//here we already have access to the image 
		//so now we can just add it to the game
		//here we place the x and y position and then add the sprite using the key
		this.background = this.game.add.sprite(0,0,'background');
		//we create a new variable which is a sprite
		//we can grab the coordinate of the world using this.game.world.centerX
		this.monster = this.game.add.sprite(this.game.world.centerX,this.game.world.centerY,'monster');
		//now we change the anchor of the monster sprite
		//when we postion an image on the screen, we position it by it's anchor point
		//by default, an image's anchor point is the top left corner
		//we can also set the anchor point at the center with: mySprite.anchor.seTo(0.5);
		this.monster.anchor.setTo(0.5, 0.5);
		//we can change the size of a sprite by using the scale property
		//the image will grow based on the the anchor
		//enter a value larger than 1 to make it bigger and less than 1 to make it smaller
		this.monster.scale.setTo(.5,.5);
		//we can also flip an image using the scale property and using a negative in the x coordinate
		this.monster.scale.setTo(-1,1);
		//we can also rotate a sprite in any angle
		//rotating occurs around the anchor point
		//angle > 0 to rotoate clockwise, angle <0 to rotate counter clockwise
		this.monster.angle = -45;

	},
	//the update will run multiple times
	update: function(){
		this.monster.angle += 0.5;
	}
};

//we create a gamestate and name it GameState and pull it from the abouve variable called GameState
game.state.add('GameState', GameState);
game.state.start('GameState');