Game.Preloader = function(){
	this.preloadBar = null;
};

Game.Preloader.prototype = {
	preload:function(){
		this.preloadBar = this.add.sprite(this.world.centerX,
											this.world.centerY,
											'preloaderBar');
		
		//set up the anchor for the preloader bar
		this.preloadBar.anchor.setTo(0.5,0.5);
		
		this.time.advanceTiming = true;
		
		//make the sprite into a loading bar
		this.load.setPreloadSprite(this.preloadBar);
		
		//LOAD ALL ASSETS
		
		this.load.tilemap('map','assets/level1.csv');
		this.load.image('tileset','assets/tileset.png');
		
		//insert the game character
		this.load.spritesheet('player','assets/player.png',24,26);
		
		
		//insert buttons
		this.load.spritesheet('buttons','assets/buttons.png');
	},
	
	create:function(){
		this.state.start('Level1');
	}
};