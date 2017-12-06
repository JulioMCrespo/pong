var Game = {};

Game.Boot = function(game){
	
};

Game.Boot.prototype = {
	init:function(){
			// this is the cursor, we only have 1 because we are using a mouse
			this.input.maxPointers = 1;
			
			// keep the game running while the window is open
			this.stage.disableVisibilityChange = true;
			
	},
	
	preload:function(){
			this.load.image('preloaderBar','assets/preloader.png');
			
	},
	
	create:function(){
		this.state.start('Preloader');
	}
};